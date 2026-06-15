import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB Schema definition inline so we don't need to fight TS imports
const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: false },
    gallery: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

async function uploadToCloudinary(url) {
  try {
    const result = await cloudinary.uploader.upload(url, { folder: "cgl_uploads" });
    return result.secure_url;
  } catch (e) {
    console.error(`Failed to upload image ${url} to Cloudinary:`, e.message);
    return null;
  }
}

async function scrapeProjects() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected.");

  console.log("Fetching project list...");
  const res = await fetch("https://www.contemporarygroupng.com/projects/");
  const html = await res.text();
  const $ = cheerio.load(html);

  // Extract all project links from the grid
  const projectLinks = [];
  $('a.card').each((i, el) => {
    const href = $(el).attr('href');
    if (href) projectLinks.push(href);
  });

  console.log(`Found ${projectLinks.length} projects to scrape.`);

  for (const url of projectLinks) {
    try {
      console.log(`\nScraping: ${url}`);
      const pageRes = await fetch(url);
      const pageHtml = await pageRes.text();
      const $page = cheerio.load(pageHtml);

      const slug = url.split('/').filter(Boolean).pop();
      const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

      // Look for Client and Category in the text or default
      let client = "Various";
      let category = "General";
      let contentHtml = "";

      // In WordPress elementor, text is usually in elementor-widget-text-editor
      $page('.elementor-widget-text-editor').each((i, el) => {
        const text = $page(el).text();
        if (text.includes('Client:')) {
          client = text.split('Client:')[1].split('\n')[0].trim();
        } else if (text.includes('Category:')) {
          category = text.split('Category:')[1].split('\n')[0].trim();
        } else {
          // Accumulate as content
          contentHtml += $page(el).html() + "\n";
        }
      });

      // Extract images
      const images = [];
      $page('img').each((i, el) => {
        const src = $page(el).attr('src');
        // Only keep large/content images, ignore logos and icons
        if (src && !src.toLowerCase().includes('logo') && !src.toLowerCase().includes('favicon') && src.startsWith('http')) {
          if (!images.includes(src)) images.push(src);
        }
      });

      const mainImageOld = images[0] || "https://via.placeholder.com/800";
      const galleryOld = images.slice(1);

      console.log(`Title: ${title}`);
      console.log(`Client: ${client}`);
      console.log(`Found ${images.length} images.`);

      // Upload images
      console.log("Uploading main image...");
      const mainImage = await uploadToCloudinary(mainImageOld) || mainImageOld;

      const gallery = [];
      for (const gUrl of galleryOld) {
        const uploaded = await uploadToCloudinary(gUrl);
        if (uploaded) gallery.push(uploaded);
      }

      // Save images to MongoDB without overwriting text
      await Project.updateOne(
        { slug },
        {
          $set: {
            image: mainImage,
            gallery: gallery
          }
        }
      );

      console.log(`✅ Saved ${title} to database.`);

    } catch (e) {
      console.error(`❌ Error processing ${url}:`, e);
    }
  }

  console.log("\nMigration completed.");
  process.exit(0);
}

scrapeProjects();
