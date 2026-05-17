const Vibrant = require('node-vibrant/node');
const path = require('path');

const imagePath = path.join(__dirname, 'public', 'Contemporary-Group-Coloured-Logo.png');

Vibrant.from(imagePath).getPalette((err, palette) => {
    if (err) {
        console.error("Error extracting colors:", err);
        return;
    }
    console.log("Extracted Colors:");
    for (const name in palette) {
        if (palette[name]) {
            console.log(`${name}: ${palette[name].hex}`);
        }
    }
});
