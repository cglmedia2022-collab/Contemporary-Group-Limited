import * as cheerio from 'cheerio';

async function testParse() {
  const res = await fetch('https://www.contemporarygroupng.com/delta-state-secretariat-asaba/');
  const html = await res.text();
  const $ = cheerio.load(html);

  console.log("--- PARSING TEST ---");
  
  // Find all text inside elementor text editors to see where client/category are
  $('.elementor-widget-text-editor').each((i, el) => {
    console.log(`Text Block ${i}:`, $(el).text().trim().replace(/\n/g, ' '));
  });

  console.log("-------------------");
  // Try to find image tags again
  const images = [];
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.toLowerCase().includes('logo') && !src.toLowerCase().includes('favicon') && src.startsWith('http')) {
      images.push(src);
    }
  });
  console.log("Valid Images:", images);
}

testParse();
