import math
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE = "/home/claude/malba-next/public/images"
OUT = "/home/claude/malba-next/public/og-image.jpg"

W, H = 1200, 630

BRAND_YELLOW = (255, 214, 0)
BRAND_YELLOW_2 = (255, 196, 0)
BRAND_GREEN = (14, 107, 63)
BRAND_GREEN_DEEP = (10, 82, 48)
BRAND_RED = (198, 40, 40)
INK = (31, 41, 55)

FONT_BOLD = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"
FONT_MED = "/usr/share/fonts/truetype/google-fonts/Poppins-Medium.ttf"
FONT_REG = "/usr/share/fonts/truetype/google-fonts/Poppins-Regular.ttf"

canvas = Image.new("RGB", (W, H), BRAND_YELLOW)
draw = ImageDraw.Draw(canvas, "RGBA")

# --- soft gradient wash bottom-right (yellow2) ---
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grad)
gd.ellipse([W * 0.35, -H * 0.5, W * 1.5, H * 1.3], fill=(*BRAND_YELLOW_2, 120))
grad = grad.filter(ImageFilter.GaussianBlur(80))
canvas.paste(Image.alpha_composite(canvas.convert("RGBA"), grad).convert("RGB"), (0, 0))
draw = ImageDraw.Draw(canvas, "RGBA")

# --- decorative brand blobs (matching site's .blob elements) ---
blob_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
bd = ImageDraw.Draw(blob_layer)
bd.ellipse([-140, -140, 260, 260], fill=(*BRAND_GREEN, 60))
bd.ellipse([W - 260, H - 260, W + 140, H + 140], fill=(*BRAND_RED, 55))
blob_layer = blob_layer.filter(ImageFilter.GaussianBlur(50))
canvas = Image.alpha_composite(canvas.convert("RGBA"), blob_layer).convert("RGB")
draw = ImageDraw.Draw(canvas, "RGBA")

# --- sunburst rays behind the product cluster (right side) ---
sun_cx, sun_cy = 900, 340
ray_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
rd = ImageDraw.Draw(ray_layer)
n_rays = 28
for i in range(n_rays):
    a0 = (360 / n_rays) * i
    a1 = a0 + (360 / n_rays) / 2
    r = 430
    p0 = (sun_cx, sun_cy)
    p1 = (
        sun_cx + r * math.cos(math.radians(a0)),
        sun_cy + r * math.sin(math.radians(a0)),
    )
    p2 = (
        sun_cx + r * math.cos(math.radians(a1)),
        sun_cy + r * math.sin(math.radians(a1)),
    )
    rd.polygon([p0, p1, p2], fill=(255, 255, 255, 60))
canvas = Image.alpha_composite(canvas.convert("RGBA"), ray_layer).convert("RGB")

canvas_rgba = canvas.convert("RGBA")

# --- logo top-left ---
logo = Image.open(os.path.join(BASE, "logo2.png")).convert("RGBA")
logo = logo.crop(logo.getbbox())
logo_w = 300
logo_ratio = logo_w / logo.width
logo_resized = logo.resize((logo_w, int(logo.height * logo_ratio)), Image.LANCZOS)
canvas_rgba.alpha_composite(logo_resized, (64, 56))

draw = ImageDraw.Draw(canvas_rgba)

# --- headline text ---
f_head = ImageFont.truetype(FONT_BOLD, 58)
f_sub = ImageFont.truetype(FONT_MED, 27)

headline_y = 56 + logo_resized.height + 34
draw.text((66, headline_y), "Hyderabad's Most Loved", font=f_head, fill=BRAND_GREEN_DEEP)
draw.text((66, headline_y + 70), "Kerala-Style Malba", font=f_head, fill=BRAND_RED)

sub_y = headline_y + 70 + 90
draw.text((68, sub_y), "Rich, creamy & loaded with", font=f_sub, fill=INK)
draw.text((68, sub_y + 38), "authentic Kerala flavours.", font=f_sub, fill=INK)

# --- pill badge ---
pill_text = "\u2728  New in Hyderabad"
f_pill = ImageFont.truetype(FONT_MED, 22)
pill_bbox = draw.textbbox((0, 0), pill_text, font=f_pill)
pw, ph = pill_bbox[2] - pill_bbox[0], pill_bbox[3] - pill_bbox[1]
pad_x, pad_y = 22, 12
pill_y = sub_y + 38 + 56
draw.rounded_rectangle(
    [66, pill_y, 66 + pw + pad_x * 2, pill_y + ph + pad_y * 2],
    radius=(ph + pad_y * 2) // 2,
    fill=(255, 255, 255, 235),
)
draw.text((66 + pad_x, pill_y + pad_y - pill_bbox[1]), pill_text, font=f_pill, fill=BRAND_GREEN_DEEP)

# --- product cluster (right side) ---
def paste_product(name, cx, cy, target_w, rotate=0, shadow=True):
    im = Image.open(os.path.join(BASE, name)).convert("RGBA")
    im = im.crop(im.getbbox())
    ratio = target_w / im.width
    im = im.resize((target_w, int(im.height * ratio)), Image.LANCZOS)
    if rotate:
        im = im.rotate(rotate, expand=True, resample=Image.BICUBIC)
    if shadow:
        alpha = im.split()[3]
        shadow_im = Image.new("RGBA", im.size, (0, 0, 0, 0))
        shadow_solid = Image.new("RGBA", im.size, (0, 0, 0, 90))
        shadow_im.paste(shadow_solid, (0, 0), alpha)
        shadow_im = shadow_im.filter(ImageFilter.GaussianBlur(18))
        canvas_rgba.alpha_composite(shadow_im, (int(cx - im.width / 2) + 10, int(cy - im.height / 2) + 22))
    canvas_rgba.alpha_composite(im, (int(cx - im.width / 2), int(cy - im.height / 2)))


paste_product("mangob.png", 760, 430, 300, rotate=8)
paste_product("coconutb.png", 1030, 440, 300, rotate=-9)
paste_product("dryb.png", 900, 330, 340, rotate=0)

canvas = canvas_rgba.convert("RGB")
canvas.save(OUT, quality=92, optimize=True)
print("Saved", OUT, canvas.size, os.path.getsize(OUT) / 1024, "KB")
