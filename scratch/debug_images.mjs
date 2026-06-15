import * as cheerio from 'cheerio';

async function check() {
  const res = await fetch('https://www.contemporarygroupng.com/delta-state-secretariat-asaba/');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  console.log("ALL IMAGES:");
  $('img').each((i, el) => {
    console.log($(el).attr('src'));
  });

  console.log("\nALL BACKGROUND IMAGES in CSS inline styles:");
  $('[style*="background-image"]').each((i, el) => {
    console.log($(el).attr('style'));
  });
}

check();
