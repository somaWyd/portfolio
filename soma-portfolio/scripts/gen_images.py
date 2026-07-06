"""
Generate portfolio images with a nature-inspired, minimal Japanese café aesthetic.
Color palette: warm whites, charcoal grays, dark espresso browns.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import math, random, os

OUT = "/Users/soma/Product/soma-portfolio/public/images"
os.makedirs(f"{OUT}/projects", exist_ok=True)

random.seed(42)

# ── Palette ─────────────────────────────────────────────────────────────────
WHITE      = (252, 249, 244)
CREAM      = (245, 238, 226)
LIGHT_GRAY = (220, 213, 205)
MID_GRAY   = (160, 150, 138)
DARK_BROWN = (45, 28, 14)       # espresso
MID_BROWN  = (90, 58, 32)       # cappuccino
WARM_BROWN = (140, 100, 65)     # latte
GOLD       = (196, 148, 72)     # amber accent
SAGE       = (130, 148, 120)    # sage green
SMOKE      = (200, 195, 188)


def noise_overlay(img, alpha=18):
    """Add very subtle grain texture."""
    r = random.Random(7)
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    pix = overlay.load()
    for y in range(0, img.size[1], 2):
        for x in range(0, img.size[0], 2):
            v = r.randint(0, 30)
            pix[x, y] = (v, v, v, alpha)
    base = img.convert("RGBA")
    merged = Image.alpha_composite(base, overlay)
    return merged.convert("RGB")


def radial_gradient(size, center, r_max, c_inner, c_outer):
    """Draw a radial gradient circle."""
    img = Image.new("RGB", size, c_outer)
    d = ImageDraw.Draw(img)
    cx, cy = center
    steps = 80
    for i in range(steps, 0, -1):
        t = i / steps
        r_cur = int(r_max * t)
        blend = lambda a, b: int(a + (b - a) * (1 - t))
        col = (blend(c_outer[0], c_inner[0]),
               blend(c_outer[1], c_inner[1]),
               blend(c_outer[2], c_inner[2]))
        d.ellipse([cx - r_cur, cy - r_cur, cx + r_cur, cy + r_cur], fill=col)
    return img


# ── 1. HERO background ───────────────────────────────────────────────────────
def gen_hero():
    W, H = 1440, 900
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # Warm base gradient (top-left light → bottom-right slightly warmer)
    for y in range(H):
        t = y / H
        c = tuple(int(WHITE[i] + (CREAM[i] - WHITE[i]) * t) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)

    # Large organic circles – like sunlight through leaves
    for (cx, cy, r, col, a) in [
        (1100, 150, 420, GOLD,      22),
        (200,  700, 300, SAGE,      18),
        (900,  780, 200, WARM_BROWN,14),
        (100,  200, 180, CREAM,     40),
    ]:
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*col, a))
        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Subtle horizontal lines (like table wood grain)
    for y in range(0, H, 22):
        alpha = random.randint(3, 8)
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        ld.line([(0, y), (W, y + random.randint(-2, 2))],
                fill=(*MID_GRAY, alpha), width=1)
        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    img = noise_overlay(img, 12)
    img.save(f"{OUT}/hero-bg.jpg", quality=92)
    print("✓ hero-bg.jpg")


# ── 2. VISION – nature + society ────────────────────────────────────────────
def gen_vision():
    W, H = 1200, 700
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # Soft gradient
    for y in range(H):
        t = y / H
        c = tuple(int(WHITE[i] + (CREAM[i] - WHITE[i]) * t * 0.6) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)

    # Tree-like organic lines rising from bottom (society & nature motif)
    def draw_branch(d, x, y, angle, length, depth, base_w):
        if depth == 0 or length < 6:
            return
        ex = x + int(length * math.cos(math.radians(angle)))
        ey = y - int(length * math.sin(math.radians(angle)))
        t = 1 - depth / 8
        col = tuple(int(MID_BROWN[i] + (SAGE[i] - MID_BROWN[i]) * t) for i in range(3))
        w = max(1, int(base_w * (depth / 8)))
        d.line([(x, y), (ex, ey)], fill=(*col, 180), width=w)
        spread = random.uniform(15, 35)
        draw_branch(d, ex, ey, angle + spread, length * 0.72, depth - 1, base_w)
        draw_branch(d, ex, ey, angle - spread * 0.8, length * 0.68, depth - 1, base_w)

    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    for (bx, ba, bl) in [(300, 82, 160), (700, 88, 140), (1000, 85, 120)]:
        draw_branch(ld, bx, H, ba, bl, 8, 4)
    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Large soft circle representing society/connection
    for cx, cy, r, col, a in [
        (850, 250, 260, GOLD,  15),
        (200, 400, 180, SAGE,  20),
    ]:
        layer2 = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld2 = ImageDraw.Draw(layer2)
        ld2.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(*col, a))
        img = Image.alpha_composite(img.convert("RGBA"), layer2).convert("RGB")

    img = noise_overlay(img, 10)
    img.save(f"{OUT}/vision-bg.jpg", quality=92)
    print("✓ vision-bg.jpg")


# ── 3. CAREER – path / journey ───────────────────────────────────────────────
def gen_career():
    W, H = 1200, 700
    img = Image.new("RGB", (W, H), CREAM)
    d = ImageDraw.Draw(img)

    # Background warm tone
    for y in range(H):
        t = y / H
        c = tuple(int(CREAM[i] + (WHITE[i] - CREAM[i]) * t) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)

    # Winding path line
    points = [(60, H - 60), (220, H - 200), (420, H - 280), (620, H - 180),
              (780, H - 380), (950, H - 300), (1140, H - 480)]
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    for i in range(len(points) - 1):
        p1, p2 = points[i], points[i+1]
        ld.line([p1, p2], fill=(*WARM_BROWN, 60), width=3)

    # Milestone dots
    for i, (px, py) in enumerate(points):
        r = 10 + i * 2
        ld.ellipse([px-r, py-r, px+r, py+r], fill=(*GOLD, 120))
        ld.ellipse([px-5, py-5, px+5, py+5], fill=(*DARK_BROWN, 200))

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Coffee cup rings (café motif)
    for cx, cy, r in [(1050, 580, 55), (150, 120, 40), (650, 80, 65)]:
        ring = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        rd = ImageDraw.Draw(ring)
        rd.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(*WARM_BROWN, 35), width=2)
        rd.ellipse([cx-r*0.7, cy-r*0.7, cx+r*0.7, cy+r*0.7],
                   outline=(*WARM_BROWN, 20), width=1)
        img = Image.alpha_composite(img.convert("RGBA"), ring).convert("RGB")

    img = noise_overlay(img, 12)
    img.save(f"{OUT}/career-bg.jpg", quality=92)
    print("✓ career-bg.jpg")


# ── 4. SKILLS – tech grid ────────────────────────────────────────────────────
def gen_skills():
    W, H = 1200, 700
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # Dot grid (like graph paper / Tokyo city grid)
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    spacing = 28
    for y in range(0, H, spacing):
        for x in range(0, W, spacing):
            dist_center = math.hypot(x - W//2, y - H//2)
            a = max(8, int(45 - dist_center * 0.04))
            ld.ellipse([x-2, y-2, x+2, y+2], fill=(*LIGHT_GRAY, a))

    # Highlight cluster near center
    for _ in range(25):
        cx = W//2 + random.randint(-200, 200)
        cy = H//2 + random.randint(-150, 150)
        r = random.randint(3, 8)
        a = random.randint(60, 120)
        ld.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(*GOLD, a))

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Concentric arcs (like signal/skill waves)
    arc_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ad = ImageDraw.Draw(arc_layer)
    for r in range(80, 400, 60):
        ad.arc([W//2-r, H//2-r, W//2+r, H//2+r], 200, 340,
               fill=(*WARM_BROWN, 18), width=2)
    img = Image.alpha_composite(img.convert("RGBA"), arc_layer).convert("RGB")

    img = noise_overlay(img, 8)
    img.save(f"{OUT}/skills-bg.jpg", quality=92)
    print("✓ skills-bg.jpg")


# ── 5. PROJECT: Okoshi AI ─────────────────────────────────────────────────────
def gen_project_okoshi():
    W, H = 900, 520
    img = Image.new("RGB", (W, H), DARK_BROWN)
    d = ImageDraw.Draw(img)

    # Dark gradient
    for y in range(H):
        t = y / H
        c = tuple(int(DARK_BROWN[i] + (MID_BROWN[i] - DARK_BROWN[i]) * t * 0.4) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)

    # Glowing orb – AI brain motif
    for r in range(180, 20, -20):
        t = (180 - r) / 160
        col = (
            int(DARK_BROWN[0] + (GOLD[0] - DARK_BROWN[0]) * t),
            int(DARK_BROWN[1] + (GOLD[1] - DARK_BROWN[1]) * t),
            int(DARK_BROWN[2] + (GOLD[2] - DARK_BROWN[2]) * t),
        )
        a = int(30 + t * 120)
        layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        ld = ImageDraw.Draw(layer)
        cx, cy = W//2, H//2
        ld.ellipse([cx-r, cy-r, cx+r, cy+r], fill=(*col, a))
        img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Network nodes
    node_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    nd = ImageDraw.Draw(node_layer)
    nodes = [(W//2, H//2)]
    for _ in range(14):
        nx = random.randint(100, W-100)
        ny = random.randint(60, H-60)
        nodes.append((nx, ny))
    for i, (nx, ny) in enumerate(nodes[1:], 1):
        nd.line([(W//2, H//2), (nx, ny)], fill=(*GOLD, 40), width=1)
        nd.ellipse([nx-5, ny-5, nx+5, ny+5], fill=(*GOLD, 100))
    nd.ellipse([W//2-12, H//2-12, W//2+12, H//2+12], fill=(*WHITE, 220))
    img = Image.alpha_composite(img.convert("RGBA"), node_layer).convert("RGB")

    # Label area at bottom
    d = ImageDraw.Draw(img)
    d.rectangle([0, H-70, W, H], fill=(30, 18, 8))
    img.save(f"{OUT}/projects/okoshi-ai.jpg", quality=92)
    print("✓ projects/okoshi-ai.jpg")


# ── 6. PROJECT: Portfolio ─────────────────────────────────────────────────────
def gen_project_portfolio():
    W, H = 900, 520
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # Simulated browser/site screenshot
    # Top bar (browser chrome)
    d.rectangle([0, 0, W, 40], fill=LIGHT_GRAY)
    d.ellipse([12, 13, 25, 26], fill=(230, 90, 80))
    d.ellipse([32, 13, 45, 26], fill=(230, 190, 60))
    d.ellipse([52, 13, 65, 26], fill=(80, 190, 80))
    d.rectangle([80, 10, W-20, 30], fill=WHITE, outline=SMOKE, width=1)

    # Site mockup
    # Nav
    d.rectangle([0, 40, W, 80], fill=CREAM)
    d.rectangle([20, 52, 90, 68], fill=DARK_BROWN)  # logo
    for i, x in enumerate([140, 200, 260, 320, 380]):
        d.rectangle([x, 54, x+50, 66], fill=LIGHT_GRAY)

    # Hero section
    for y in range(80, 280):
        t = (y - 80) / 200
        c = tuple(int(CREAM[i] + (WHITE[i] - CREAM[i]) * t) for i in range(3))
        d.line([(0, y), (W, y)], fill=c)
    # Name text block
    d.rectangle([80, 130, 420, 158], fill=DARK_BROWN)
    d.rectangle([80, 170, 300, 186], fill=WARM_BROWN)
    d.rectangle([80, 200, 340, 212], fill=LIGHT_GRAY)

    # Cards grid
    card_y = 290
    for i in range(3):
        cx = 40 + i * 290
        d.rounded_rectangle([cx, card_y, cx+260, card_y+150], radius=8,
                              fill=CREAM, outline=SMOKE, width=1)
        d.rectangle([cx+20, card_y+20, cx+240, card_y+60], fill=LIGHT_GRAY)
        d.rectangle([cx+20, card_y+75, cx+180, card_y+88], fill=SMOKE)
        d.rectangle([cx+20, card_y+98, cx+200, card_y+108], fill=SMOKE)

    img = noise_overlay(img, 8)
    img.save(f"{OUT}/projects/portfolio.jpg", quality=92)
    print("✓ projects/portfolio.jpg")


# ── 7. ACHIEVEMENTS ──────────────────────────────────────────────────────────
def gen_achievements():
    W, H = 1200, 700
    img = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(img)

    # Radial burst from center – celebration / milestone motif
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    cx, cy = W // 2, H // 2 + 60
    num_rays = 36
    for i in range(num_rays):
        angle = i * (360 / num_rays)
        r_start = 80
        r_end = random.randint(200, 500)
        a = random.randint(8, 22)
        x1 = cx + int(r_start * math.cos(math.radians(angle)))
        y1 = cy + int(r_start * math.sin(math.radians(angle)))
        x2 = cx + int(r_end * math.cos(math.radians(angle)))
        y2 = cy + int(r_end * math.sin(math.radians(angle)))
        ld.line([(x1, y1), (x2, y2)], fill=(*GOLD, a), width=2)

    # Concentric circles
    for r in [80, 140, 220, 320, 440]:
        ld.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(*WARM_BROWN, 20), width=1)

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")

    # Floating dots
    d = ImageDraw.Draw(img)
    for _ in range(30):
        x = random.randint(0, W)
        y = random.randint(0, H)
        r = random.randint(2, 8)
        a_v = random.randint(30, 80)
        dot_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        dd = ImageDraw.Draw(dot_layer)
        dd.ellipse([x-r, y-r, x+r, y+r], fill=(*GOLD, a_v))
        img = Image.alpha_composite(img.convert("RGBA"), dot_layer).convert("RGB")

    img = noise_overlay(img, 10)
    img.save(f"{OUT}/achievements-bg.jpg", quality=92)
    print("✓ achievements-bg.jpg")


# ── 8. CONTACT ───────────────────────────────────────────────────────────────
def gen_contact():
    W, H = 1200, 700
    img = Image.new("RGB", (W, H), WHITE)

    # Very subtle geometry – café stationery
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)

    # Envelope-like folded lines
    mid = W // 2
    for offset in range(0, 200, 25):
        alpha = max(5, 30 - offset // 5)
        ld.line([(mid - offset, 0), (mid, H * offset // 600)],
                fill=(*LIGHT_GRAY, alpha), width=1)
        ld.line([(mid + offset, 0), (mid, H * offset // 600)],
                fill=(*LIGHT_GRAY, alpha), width=1)

    # Postmark circle
    for r in [120, 110, 102]:
        ld.ellipse([W-200-r, H-200-r, W-200+r, H-200+r],
                   outline=(*WARM_BROWN, 25), width=2)

    # Connecting dots line
    for x in range(0, W, 18):
        a = 15 + int(20 * abs(math.sin(x * 0.015)))
        ld.ellipse([x-2, H//2-2, x+2, H//2+2], fill=(*SMOKE, a))

    img = Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")
    img = noise_overlay(img, 10)
    img.save(f"{OUT}/contact-bg.jpg", quality=92)
    print("✓ contact-bg.jpg")


# ── Run all ──────────────────────────────────────────────────────────────────
gen_hero()
gen_vision()
gen_career()
gen_skills()
gen_project_okoshi()
gen_project_portfolio()
gen_achievements()
gen_contact()
print("\nAll images generated ✓")
