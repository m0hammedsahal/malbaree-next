import os
from PIL import Image, ImageDraw, ImageFont

SRC_DIR = "/home/claude/malba-next/public/images"
OUT_DIR = "/home/claude/malba-next/public"

BRAND_YELLOW = (255, 214, 0, 255)
BRAND_GREEN = (14, 107, 63, 255)
BRAND_GREEN_DEEP = (10, 82, 48, 255)
WHITE = (255, 255, 255, 255)

FONT_PATH = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"

logo = Image.open(os.path.join(SRC_DIR, "logo2.png")).convert("RGBA")
logo = logo.crop(logo.getbbox())


def rounded_mask(size, radius):
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return mask


def monogram_icon(size, bg=BRAND_YELLOW, fg=BRAND_GREEN_DEEP, rounded=True, pad_ratio=0.0):
    """Simplified 'M' monogram - legible at very small sizes (16/32px favicons)."""
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    if rounded:
        radius = int(size * 0.22)
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=bg)
    else:
        draw.rectangle([0, 0, size - 1, size - 1], fill=bg)

    font_size = int(size * 0.62)
    font = ImageFont.truetype(FONT_PATH, font_size)
    text = "M"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1]
    draw.text((x, y), text, font=font, fill=fg)
    return canvas


def logo_on_bg(size, bg=BRAND_YELLOW, rounded=True, logo_scale=0.72):
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    if rounded:
        radius = int(size * 0.22)
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=bg)
    else:
        draw.rectangle([0, 0, size - 1, size - 1], fill=bg)

    max_dim = int(size * logo_scale)
    ratio = min(max_dim / logo.width, max_dim / logo.height)
    lw, lh = int(logo.width * ratio), int(logo.height * ratio)
    resized = logo.resize((lw, lh), Image.LANCZOS)
    canvas.alpha_composite(resized, ((size - lw) // 2, (size - lh) // 2))
    return canvas


# --- Small favicons: monogram (legible at tiny sizes) ---
monogram_icon(16).save(os.path.join(OUT_DIR, "favicon-16x16.png"))
monogram_icon(32).save(os.path.join(OUT_DIR, "favicon-32x32.png"))
monogram_icon(48).save(os.path.join(OUT_DIR, "favicon-48x48.png"))

# multi-size .ico
ico_sizes = [16, 32, 48]
monogram_icon(48).save(
    os.path.join(OUT_DIR, "favicon.ico"),
    sizes=[(s, s) for s in ico_sizes],
)

# --- Apple touch icon (no transparency, solid bg, Apple rounds it itself) ---
logo_on_bg(180, rounded=False, logo_scale=0.68).convert("RGB").save(
    os.path.join(OUT_DIR, "apple-touch-icon.png"), quality=95
)

# --- Larger PWA / manifest icons (full wordmark, recognizable at size) ---
logo_on_bg(192, rounded=True, logo_scale=0.72).save(os.path.join(OUT_DIR, "icon-192.png"))
logo_on_bg(512, rounded=True, logo_scale=0.72).save(os.path.join(OUT_DIR, "icon-512.png"))

# --- Maskable icon (extra safe-zone padding so Android doesn't crop the wordmark) ---
logo_on_bg(512, rounded=False, logo_scale=0.55).save(os.path.join(OUT_DIR, "icon-maskable-512.png"))

# --- Modern SVG-less "icon.png" for Next.js app router auto favicon (32x32 fallback) ---
monogram_icon(32).save(os.path.join(SRC_DIR, "..", "..", "app", "icon.png"))

print("Icons generated.")
for f in sorted(os.listdir(OUT_DIR)):
    if f.endswith((".png", ".ico")):
        print(" -", f)
