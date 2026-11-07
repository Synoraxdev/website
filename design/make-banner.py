"""Generates public/og-banner.png (1200x630) — the link-preview banner for Discord, X, Google, etc.
Run: python3 design/make-banner.py   (needs Pillow and the Inter font)."""
from PIL import Image, ImageDraw, ImageFont

W, H, S = 1200, 630, 2  # supersample for smooth edges
F = "/usr/share/fonts/opentype/inter/Inter-%s.otf"
font = lambda weight, size: ImageFont.truetype(F % weight, size * S)

img = Image.new("RGB", (W * S, H * S), "#000000")
d = ImageDraw.Draw(img)
s = lambda v: int(v * S)

# faint grid
for x in range(0, W, 40):
    d.line([(s(x), 0), (s(x), s(H))], fill="#0b0b0b", width=S)
for y in range(0, H, 40):
    d.line([(0, s(y)), (s(W), s(y))], fill="#0b0b0b", width=S)

# soft glow behind the right-hand illustration
glow = Image.new("RGB", (W * S, H * S), "#000000")
gd = ImageDraw.Draw(glow)
gd.ellipse([s(830), s(90), s(1190), s(490)], fill="#1a1a1a")
from PIL import ImageFilter
glow = glow.filter(ImageFilter.GaussianBlur(s(70)))
img = Image.blend(img, Image.composite(glow, img, glow.convert("L")), 0.9)
d = ImageDraw.Draw(img)

# frame
d.rounded_rectangle([s(1), s(1), s(W - 2), s(H - 2)], radius=s(24), outline="#2b2b2b", width=s(2))

# logo lockup (matches the website header): mark + "Hozvik" + "Cloud" chip + tiny "india"
x0, y0 = 80, 70
mark = Image.open("public/logo-mark.png").convert("RGBA").resize((s(68), s(68)), Image.LANCZOS)
img.paste(mark, (s(x0), s(y0)), mark)
d = ImageDraw.Draw(img)
wf = font("ExtraBold", 46)
cy = y0 + 34
d.text((s(x0 + 86), s(cy)), "Hozvik", font=wf, fill="#ffffff", anchor="lm")
w1 = d.textlength("Hozvik", font=wf) / S
d.text((s(x0 + 88), s(cy + 36)), "india", font=font("Bold", 15), fill="#b8b8b8", anchor="lm")
cw = d.textlength("Cloud", font=wf) / S
cx = x0 + 86 + w1 + 10
d.rounded_rectangle([s(cx), s(cy - 29), s(cx + cw + 22), s(cy + 29)], radius=s(5), fill="#ffffff")
d.text((s(cx + 11), s(cy)), "Cloud", font=wf, fill="#000000", anchor="lm")

# headline
hl = font("ExtraBold", 62)
d.text((s(80), s(204)), "Affordable hosting", font=hl, fill="#c7c7c7")
d.text((s(80), s(284)), "built for ", font=hl, fill="#c7c7c7")
wb = d.textlength("built for ", font=hl) / S
d.text((s(80 + wb), s(284)), "performance.", font=hl, fill="#ffffff")

# subline
d.text((s(80), s(392)), "Game Server  ·  VPS  ·  Bot  ·  Cloud Hosting", font=font("Medium", 29), fill="#b8b8b8")

# pills
px = 80
pf = font("SemiBold", 20)
for label in ["NVMe Storage", "Up to 4.9 GHz CPUs", "Multi-layer DDoS Filtering"]:
    tw = d.textlength(label, font=pf) / S
    d.rounded_rectangle([s(px), s(474), s(px + tw + 44), s(522)], radius=s(24), fill="#0d0d0d", outline="#454545", width=s(2))
    d.text((s(px + 22), s(498)), label, font=pf, fill="#e6e6e6", anchor="lm")
    px += tw + 44 + 14

# right-hand illustration: stacked server units
sx, sy, sw, sh, gap = 890, 150, 230, 96, 22
for i in range(3):
    y = sy + i * (sh + gap)
    d.rounded_rectangle([s(sx), s(y), s(sx + sw), s(y + sh)], radius=s(20), fill="#0f0f0f", outline="#3a3a3a", width=s(2))
    d.rounded_rectangle([s(sx + 26), s(y + 38), s(sx + 26 + 110), s(y + 58)], radius=s(10), fill="#1c1c1c")
    d.rounded_rectangle([s(sx + 26), s(y + 38), s(sx + 26 + [88, 64, 100][i]), s(y + 58)], radius=s(10), fill="#ffffff")
    cx, cy = sx + sw - 38, y + sh // 2
    d.ellipse([s(cx - 8), s(cy - 8), s(cx + 8), s(cy + 8)], fill="#ffffff")
    d.ellipse([s(cx - 16), s(cy - 16), s(cx + 16), s(cy + 16)], outline="#555555", width=s(2))

img = img.resize((W, H), Image.LANCZOS)
img.save("public/og-banner.png", optimize=True)
print("saved public/og-banner.png")
