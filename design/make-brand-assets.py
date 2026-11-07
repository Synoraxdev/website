"""Builds favicons + the header logo mark from design/source-h-icon.png.
Run: python3 design/make-brand-assets.py   (needs Pillow)."""
from PIL import Image, ImageDraw, ImageFilter

src = Image.open("design/source-h-icon.png").convert("L")

# H shape as a clean alpha mask (white H on black in the source)
alpha = src.point(lambda v: 0 if v < 40 else 255 if v > 215 else int((v - 40) * 255 / 175))
bbox = alpha.getbbox()
h_mask = alpha.crop(bbox)            # tight crop of the H
HW, HH = h_mask.size

def place(canvas_size, h_height_ratio, fg, bg, radius_ratio=0.0, transparent_corners=False, ss=4):
    """Draws the H (colour fg) centred on a square of colour bg."""
    n = canvas_size * ss
    layer_bg = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer_bg)
    if radius_ratio > 0:
        d.rounded_rectangle([0, 0, n - 1, n - 1], radius=int(n * radius_ratio), fill=bg)
    else:
        d.rectangle([0, 0, n - 1, n - 1], fill=bg)
    th = int(n * h_height_ratio)
    tw = int(th * HW / HH)
    m = h_mask.resize((tw, th), Image.LANCZOS)
    solid = Image.new("RGBA", (tw, th), fg)
    layer_bg.paste(solid, ((n - tw) // 2, (n - th) // 2), m)
    return layer_bg.resize((canvas_size, canvas_size), Image.LANCZOS)

BLACK, WHITE = (0, 0, 0, 255), (255, 255, 255, 255)

# Favicons / app icons: white H on black, full-bleed square
icons = {
    "icon-512.png": 512, "icon-192.png": 192, "apple-touch-icon.png": 180, "favicon-32.png": 32,
}
for name, size in icons.items():
    place(size, 0.62, WHITE, BLACK).convert("RGB").save(f"public/{name}", optimize=True)
ico = place(256, 0.62, WHITE, BLACK).convert("RGB")
ico.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

# Header logo mark (dark theme): white rounded square with a black H, transparent corners
place(160, 0.62, BLACK, WHITE, radius_ratio=0.22).save("public/logo-mark.png", optimize=True)
print("brand assets written")
