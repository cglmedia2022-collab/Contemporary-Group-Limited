const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Mongoose Schema
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

const projectsToSeed = [
  {
    title: "Luxury flats at Queen’s Drive, Ikoyi, Lagos",
    client: "Private",
    category: "Residential",
    content: "Project Management and quality control services - Contemporary Design Associates.",
    filename: "Luxury flats at Queen’s Drive, Ikoyi, Lagos..jpg"
  },
  {
    title: "4 Points By Sheraton, Asaba, Delta State (Ongoing)",
    client: "Private",
    category: "Hospitality & Leisure",
    content: "Project Management and quality control services - Contemporary Design Associates.",
    filename: "4 Points By Sheraton, Asaba, Delta State (Ongoing)..jpg"
  },
  {
    title: "24 Storey Mixed Development 16, Alexander Ikoyi, Lagos. (Ongoing)",
    client: "Private",
    category: "Commercial",
    content: "Project Management and quality control services - Contemporary Design Associates.",
    filename: "24 Storey Mixed Development 16, Alexander Ikoyi, Lagos. (Ongoing)..png"
  },
  {
    title: "Allied Towers, 11 storey, apartment building, Macgregor Rd, Ikoyi, Lagos (Ongoing)",
    client: "Private",
    category: "Residential",
    content: "Project Management and quality control services - Contemporary Design Associates.",
    filename: "Allied Towers.png"
  },
  {
    title: "Faculty building, Southern Delta University, Oreropke campus, Ozoro",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "Faculty building, Southern Delta University, Oreropke campus, Ozoro.jpg"
  },
  {
    title: "College of Management Science, University of Delta, Owa Oyibu campus, Agbor",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "College of Management Science, University of Delta, Owa Oyibu campus, Agbor.jpg"
  },
  {
    title: "College of Medical sciences, Southern Delta University, Ozoro",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "College of Medical sciences, Southern Delta University, Ozoro.jpg"
  },
  {
    title: "Aerial view of Southern Delta University Orerokpe Campus",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "Aerial view of Southern Delta University Orerokpe Campus.jpg"
  },
  {
    title: "Faculty of Environmental Sciences, Owa Alero campus, Agbor",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "Faculty of Environmental Sciences.jpg"
  },
  {
    title: "Administrative Building, Dennis Osadebay University, Anwai, Asaba",
    client: "Private",
    category: "Public Buildings",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "Administrative Building.jpg"
  },
  {
    title: "Twin 250 seater Auditorium, Facility of Agriculture, Dennis Osadebay University, Anwai, Asaba",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "Twin 250 seater Auditorium.jpg"
  },
  {
    title: "500 seater auditorium, Faculty of Agriculture, Dennis Osadebay University, Anwai, Asaba",
    client: "Private",
    category: "Education",
    content: "Design & Project Management - Contemporary Design Associates.",
    filename: "500 seater auditorium, Faculty of Agriculture, Dennis Osadebay University, Anwai, Asaba.jpg"
  }
];

const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');

    for (const project of projectsToSeed) {
      const slug = generateSlug(project.title);

      // Check if project already exists
      const existing = await Project.findOne({ slug });
      if (existing) {
        console.log(`Skipping: ${project.title} (Already exists)`);
        continue;
      }

      const filePath = path.join(__dirname, 'public', 'WildCardPictures', project.filename);
      if (!fs.existsSync(filePath)) {
        console.error(`ERROR: File not found - ${filePath}`);
        continue;
      }

      console.log(`Uploading ${project.filename} to Cloudinary...`);
      const uploadRes = await cloudinary.uploader.upload(filePath, {
        folder: 'contemporary_group/projects',
        use_filename: true,
        unique_filename: false
      });

      console.log(`Uploaded! URL: ${uploadRes.secure_url}`);

      const newProject = new Project({
        title: project.title,
        slug: slug,
        client: project.client,
        category: project.category,
        content: project.content,
        image: uploadRes.secure_url
      });

      await newProject.save();
      console.log(`Saved to database: ${project.title}`);
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  }
}

seed();
