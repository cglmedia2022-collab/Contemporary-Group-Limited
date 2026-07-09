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

async function updateDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');

    // Update 1: 24 Storey Mixed Development 16, Alexander Ikoyi, Lagos. (Ongoing)
    // from Commercial to Residential
    const update1 = await Project.updateOne(
      { title: /24 Storey Mixed Development 16, Alexander Ikoyi, Lagos/i },
      { $set: { category: "Residential" } }
    );
    console.log('Update 1 (24 Storey):', update1.modifiedCount ? 'Success' : 'No changes/Not found');

    // Update 2: Administrative Building, Dennis Osadebay University, Anwai, Asaba
    // from Public Buildings to Education
    const update2 = await Project.updateOne(
      { title: /Administrative Building, Dennis Osadebay University/i },
      { $set: { category: "Education" } }
    );
    console.log('Update 2 (Admin Building):', update2.modifiedCount ? 'Success' : 'No changes/Not found');

    // Update 3: Add Secretariat
    const secretariatTitle = "Delta State Central Secretariat";
    const slug = generateSlug(secretariatTitle);

    const existing = await Project.findOne({ slug });
    if (existing) {
      console.log('Secretariat already exists in DB. Skipping creation.');
    } else {
      const filePath = path.join(__dirname, 'public', 'State-secretariat-4.png');
      if (fs.existsSync(filePath)) {
        console.log('Uploading Secretariat image to Cloudinary...');
        const uploadRes = await cloudinary.uploader.upload(filePath, {
          folder: 'contemporary_group/projects',
          use_filename: true,
          unique_filename: false
        });

        console.log(`Uploaded! URL: ${uploadRes.secure_url}`);

        const newProject = new Project({
          title: secretariatTitle,
          slug: slug,
          client: "Private",
          category: "Public Buildings",
          content: "Project Management and quality control services - Contemporary Design Associates.",
          image: uploadRes.secure_url
        });

        await newProject.save();
        console.log('Saved Secretariat to database!');
      } else {
        console.error(`ERROR: File not found - ${filePath}`);
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('Error during DB update:', err);
    process.exit(1);
  }
}

updateDb();
