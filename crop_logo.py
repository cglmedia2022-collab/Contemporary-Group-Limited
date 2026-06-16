import cv2
import numpy as np

img_path = r"C:\Users\USER\.gemini\antigravity-ide\brain\530e6ca4-868e-4b23-8c61-63aee2547c73\media__1781612061827.png"
image = cv2.imread(img_path)

if image is None:
    print("Could not read image 1")
    img_path = r"C:\Users\USER\.gemini\antigravity-ide\brain\530e6ca4-868e-4b23-8c61-63aee2547c73\media__1781611473108.png"
    image = cv2.imread(img_path)

if image is None:
    print("Could not read image 2")
    exit(1)

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 50, 255, cv2.THRESH_BINARY_INV)

contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

height, width = image.shape[:2]
best_rect = None
max_area = 0

for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    area = w * h
    if area > 1000 and x > width / 3:
        if area > max_area:
            max_area = area
            best_rect = (x, y, w, h)

if best_rect is not None:
    x, y, w, h = best_rect
    # Crop exactly to the circle
    # Find the center and radius
    cx = x + w // 2
    cy = y + h // 2
    r = max(w, h) // 2
    
    pad = 5
    x1 = max(0, cx - r - pad)
    y1 = max(0, cy - r - pad)
    x2 = min(width, cx + r + pad)
    y2 = min(height, cy + r + pad)
    
    cropped = image[y1:y2, x1:x2]
    
    # Make white background transparent
    # Convert to BGRA
    cropped_bgra = cv2.cvtColor(cropped, cv2.COLOR_BGR2BGRA)
    
    # Threshold for white
    lower_white = np.array([200, 200, 200, 255])
    upper_white = np.array([255, 255, 255, 255])
    mask = cv2.inRange(cropped_bgra, lower_white, upper_white)
    
    # Make white pixels transparent
    cropped_bgra[mask > 0] = [255, 255, 255, 0]
    
    out_path = r"c:\Users\USER\Desktop\Wed development\contemporary-group-limited\public\WildCardPictures\CAP_logo.png"
    cv2.imwrite(out_path, cropped_bgra)
    print("Cropped successfully to", out_path)
else:
    print("Could not find the CAP logo contour.")
