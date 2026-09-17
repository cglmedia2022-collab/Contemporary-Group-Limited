/**
 * dbUpdates.js
 * Run with: node -r dotenv/config dbUpdates.js
 * 
 * This script:
 * 1. Moves "Hilton Garden Inn" from Residential -> Hospitality & Leisure
 * 2. Adds "Pearl Suites" project (Hospitality & Leisure, client: Private)
 */

const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Load env from .env.local
require('dotenv').config({ path: path.join(__dirname, '.env.local') });

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

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

const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');

    // 1. Move Hilton Garden Inn to Hospitality & Leisure
    const hiltonUpdate = await Project.updateOne(
      { title: /Hilton Garden Inn/i },
      { $set: { category: "Hospitality & Leisure" } }
    );
    if (hiltonUpdate.matchedCount === 0) {
      console.log('WARN: Hilton Garden Inn: NOT FOUND in DB.');
    } else if (hiltonUpdate.modifiedCount > 0) {
      console.log('OK: Hilton Garden Inn category updated to Hospitality & Leisure');
    } else {
      console.log('INFO: Hilton Garden Inn already in Hospitality & Leisure, no change');
    }

    // 2. Add Pearl Suites project
    const pearlTitle = "Pearl Suites";
    const pearlSlug = generateSlug(pearlTitle);

    const existingPearl = await Project.findOne({ slug: pearlSlug });
    if (existingPearl) {
      console.log('INFO: Pearl Suites already exists in DB. Skipping.');
    } else {
      const pearlImagePath = path.join(__dirname, 'public', 'WildCardPictures', 'Pearle Suites.jpg');
      if (!fs.existsSync(pearlImagePath)) {
        console.error('ERROR: Pearl Suites image not found at:', pearlImagePath);
      } else {
        console.log('Uploading Pearl Suites image to Cloudinary...');
        const uploadRes = await cloudinary.uploader.upload(pearlImagePath, {
          folder: 'contemporary_group/projects',
          use_filename: true,
          unique_filename: false
        });
        console.log('Uploaded! URL:', uploadRes.secure_url);

        const pearlProject = new Project({
          title: pearlTitle,
          slug: pearlSlug,
          client: "Private",
          category: "Hospitality & Leisure",
          content: "Pearl Suites - a premier hospitality project by Contemporary Properties Limited.",
          image: uploadRes.secure_url,
          gallery: []
        });

        await pearlProject.save();
        console.log('OK: Pearl Suites saved to database!');
      }
    }

    // 3. Verify portfolio 404 projects
    const portfolioChecks = [
      { title: "Asaba Airport", slug: "asaba-airport" },
      { title: "International Conference Centre", slug: "international-conference-centre" },
      { title: "Delta State Central Secretariat", slug: "delta-state-central-secretariat" },
    ];

    for (const proj of portfolioChecks) {
      const bySlug = await Project.findOne({ slug: proj.slug });
      if (bySlug) {
        console.log('OK:', proj.title, 'found with slug:', proj.slug);
      } else {
        const byTitle = await Project.findOne({ title: { $regex: proj.title, $options: 'i' } });
        if (byTitle) {
          console.log('SLUG MISMATCH:', proj.title, '- Found in DB with slug:', byTitle.slug);
        } else {
          console.log('MISSING:', proj.title, '- Not in DB. Add via admin dashboard.');
        }
      }
    }

    await mongoose.disconnect();
    console.log('Done! Disconnected from MongoDB.');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

run();
