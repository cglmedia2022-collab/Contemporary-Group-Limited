import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    client: String,
  },
  { strict: false }
);

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

function formatTitleFromSlug(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

async function fixTitles() {
  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected.");

  const projects = await Project.find({ title: "PROJECTS" });
  console.log(`Found ${projects.length} projects to fix.`);

  for (const project of projects) {
    const newTitle = formatTitleFromSlug(project.slug);
    console.log(`Updating ${project.slug} -> ${newTitle}`);
    
    project.title = newTitle;
    if (project.client === "Unknown Client") {
        project.client = "Various"; // or clear it
    }
    await project.save();
  }

  console.log("Finished updating titles!");
  process.exit(0);
}

fixTitles();
