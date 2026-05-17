from PIL import Image
from collections import Counter

img = Image.open('public/Contemporary-Group-Coloured-Logo.png').convert('RGBA')
pixels = list(img.getdata())

# Filter out transparent or very close to white/black/gray if we want to find the dominant branding colors
# Actually, just get opaque pixels
opaque_pixels = [p[:3] for p in pixels if p[3] > 200]

# To avoid too many variations of the same color, let's round the RGB values
rounded_pixels = [((r//10)*10, (g//10)*10, (b//10)*10) for r, g, b in opaque_pixels]

counts = Counter(opaque_pixels)
print("Top exact colors:")
for color, count in counts.most_common(5):
    hex_color = "#{:02x}{:02x}{:02x}".format(*color)
    print(f"{hex_color}: {count} pixels")
