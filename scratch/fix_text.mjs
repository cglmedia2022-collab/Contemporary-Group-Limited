import mongoose from 'mongoose';
import * as cheerio from 'cheerio';

const Project = mongoose.models.Project || mongoose.model("Project", new mongoose.Schema({ title: String, slug: String, client: String, category: String, content: String }, { strict: false }));

function guessCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('hospital') || t.includes('medical') || t.includes('diagnostics')) return 'Healthcare';
  if (t.includes('airport') || t.includes('aviation')) return 'Aviation';
  if (t.includes('school') || t.includes('university') || t.includes('education')) return 'Education';
  if (t.includes('secretariat') || t.includes('council') || t.includes('association') || t.includes('centre')) return 'Public Spaces';
  if (t.includes('hotel') || t.includes('park') || t.includes('leisure') || t.includes('film village')) return 'Hospitality & Leisure';
  if (t.includes('bank') || t.includes('commercial')) return 'Commercial';
  if (t.includes('residential') || t.includes('flat') || t.includes('estate') || t.includes('garden')) return 'Residential';
  if (t.includes('industrial') || t.includes('warehouse') || t.includes('station')) return 'Industrial';
  return 'Public Buildings';
}

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const projects = await Project.find({});
  for (const p of projects) {
    const res = await fetch('https://www.contemporarygroupng.com/' + p.slug);
    if (!res.ok) continue;
    const html = await res.text();
    const $ = cheerio.load(html);
    
    let fullText = '';
    $('.elementor-widget-text-editor').each((i, el) => {
      fullText += $(el).text() + ' ';
    });
    
    // Parse client
    const clientMatch = fullText.match(/client:\s*(.*?)(year of|role:|contact|contemporary)/i);
    let client = "Various";
    if (clientMatch && clientMatch[1]) {
      client = clientMatch[1].trim();
    }
    
    // Parse description
    let content = fullText;
    const locMatch = fullText.match(/location:/i);
    if (locMatch) {
      content = fullText.substring(0, locMatch.index);
    }
    
    // Clean up content
    content = content.replace(/Contemporary Group Limited \(CGL\) is a leading group.*/gi, '').trim();
    if (content.length < 10) content = ""; // Ignore tiny garbage text
    
    // Category
    const category = guessCategory(p.title);
    
    console.log(`Updating ${p.title} | Client: ${client} | Cat: ${category}`);
    
    p.client = client;
    p.category = category;
    if (content.length > 0) {
      p.content = `<p>${content}</p>`;
    }
    await p.save();
  }
  console.log("Done text fixing");
  process.exit(0);
}

run();
