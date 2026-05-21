import cv2
import numpy as np
import os

input_path = r"C:\Users\USER\.gemini\antigravity\brain\018f45b0-0c34-4f1c-ae3a-375a02ec8e5f\media__1779345851639.png"
output_dir = r"public\clients"

os.makedirs(output_dir, exist_ok=True)

image = cv2.imread(input_path)
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Edge detection
edges = cv2.Canny(gray, 50, 150)

# Dilate edges to connect broken parts of the same logo
kernel = np.ones((10,10), np.uint8)
dilated = cv2.dilate(edges, kernel, iterations=1)

contours, _ = cv2.findContours(dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print(f"Found {len(contours)} contours using Canny.")

min_area = 1000
img_area = image.shape[0] * image.shape[1]
padding = 10

client_id = 1
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    area = w * h
    
    if area < min_area or area > img_area * 0.5:
        continue
        
    print(f"Extracting logo {client_id} at ({x},{y},{w},{h})")
    
    x1 = max(0, x - padding)
    y1 = max(0, y - padding)
    x2 = min(image.shape[1], x + w + padding)
    y2 = min(image.shape[0], y + h + padding)
    
    cropped = image[y1:y2, x1:x2]
    
    b, g, r = cv2.split(cropped)
    alpha = np.ones(b.shape, dtype=b.dtype) * 255
    
    # Simple transparency mask for background
    white_mask = (r > 230) & (g > 230) & (b > 230)
    alpha[white_mask] = 0
    
    cropped_bgra = cv2.merge((b, g, r, alpha))
    out_path = os.path.join(output_dir, f"client-{client_id}.png")
    cv2.imwrite(out_path, cropped_bgra)
    client_id += 1

print(f"Extraction complete! Saved {client_id - 1} logos.")
