from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "tanohama" / "assets"
FONT_PATH = Path(r"C:\Windows\Fonts\YuGothB.ttc")

SIZE = 1200
INK = (25, 22, 22, 255)
PART = (145, 39, 35, 255)
PART_GLOW = (228, 86, 63, 185)
PAPER_TOP = (222, 181, 174, 255)
PAPER_BOTTOM = (191, 133, 141, 255)
BLUE = (34, 79, 158, 255)
GOLD = (240, 207, 123, 150)


def paper_background() -> Image.Image:
    image = Image.new("RGBA", (SIZE, SIZE))
    pixels = image.load()
    for y in range(SIZE):
        t = y / (SIZE - 1)
        for x in range(SIZE):
            vignette = ((x - SIZE / 2) ** 2 + (y - SIZE / 2) ** 2) / (SIZE * SIZE)
            noise = ((x * 17 + y * 31) % 23 - 11) * 0.18
            pixels[x, y] = tuple(
                int(max(0, min(255, PAPER_TOP[i] * (1 - t) + PAPER_BOTTOM[i] * t - vignette * 15 + noise)))
                for i in range(3)
            ) + (255,)

    draw = ImageDraw.Draw(image, "RGBA")
    random.seed(2402)
    for y in range(70, SIZE - 60, 34):
        points = []
        phase = random.random() * math.tau
        for x in range(50, SIZE - 50, 18):
            points.append((x, y + math.sin(x / 46 + phase) * 3))
        draw.line(points, fill=(255, 246, 230, 20), width=2)
    for _ in range(260):
        x = random.randrange(45, SIZE - 45)
        y = random.randrange(45, SIZE - 45)
        r = random.choice((1, 1, 2))
        draw.ellipse((x - r, y - r, x + r, y + r), fill=(111, 60, 72, 18))

    draw.rounded_rectangle((24, 24, SIZE - 24, SIZE - 24), radius=18, outline=BLUE, width=22)
    draw.rounded_rectangle((51, 51, SIZE - 51, SIZE - 51), radius=11, outline=GOLD, width=3)
    return image


def glyph_mask(character: str, center_x: int) -> Image.Image:
    mask = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(mask)
    font = ImageFont.truetype(str(FONT_PATH), 540)
    draw.text((center_x, 558), character, font=font, fill=255, anchor="mm", stroke_width=0)
    return mask


def selector_mask(polygons: list[list[tuple[int, int]]]) -> Image.Image:
    mask = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(mask)
    for polygon in polygons:
        draw.polygon(polygon, fill=255)
    return mask


def kana_mask(character: str, center: tuple[int, int], size: int) -> Image.Image:
    mask = Image.new("L", (SIZE, SIZE), 0)
    draw = ImageDraw.Draw(mask)
    font = ImageFont.truetype(str(FONT_PATH), size)
    draw.text(center, character, font=font, fill=255, anchor="mm")
    return mask


def build_kanji_and_parts() -> tuple[Image.Image, dict[str, Image.Image], list[Image.Image]]:
    """Select the four pieces from an otherwise untouched 色紙 glyph."""
    color_mask = glyph_mask("色", 330)
    paper_mask = glyph_mask("紙", 875)
    source = ImageChops.lighter(color_mask, paper_mask)

    ku_area = selector_mask([
        [(60, 250), (470, 250), (470, 410), (350, 410), (300, 445), (60, 485)],
    ])
    ro_area = selector_mask([
        [(138, 414), (316, 414), (316, 594), (138, 594)],
    ])
    mi_areas = [
        selector_mask([[(606, 566), (695, 566), (695, 752), (606, 752)]]),
        selector_mask([[(692, 520), (784, 520), (784, 798), (692, 798)]]),
        selector_mask([[(778, 558), (866, 558), (866, 724), (778, 724)]]),
    ]
    re_area = selector_mask([
        [(992, 526), (1142, 526), (1142, 806), (992, 806)],
    ])

    mi_components = [ImageChops.multiply(paper_mask, area) for area in mi_areas]
    mi = Image.new("L", (SIZE, SIZE), 0)
    for component in mi_components:
        mi = ImageChops.lighter(mi, component)

    return source, {
        "ク": ImageChops.multiply(color_mask, ku_area),
        "ロ": ImageChops.multiply(color_mask, ro_area),
        "ミ": mi,
        "レ": ImageChops.multiply(paper_mask, re_area),
    }, mi_components


def rgba_from_mask(mask: Image.Image, color: tuple[int, int, int, int]) -> Image.Image:
    layer = Image.new("RGBA", (SIZE, SIZE), color)
    layer.putalpha(mask.point(lambda p: p * color[3] // 255))
    return layer


def render_source(mode: str) -> Image.Image:
    background = paper_background()
    source_mask, parts, _ = build_kanji_and_parts()
    part_union = Image.new("L", (SIZE, SIZE), 0)
    for part in parts.values():
        part_union = ImageChops.lighter(part_union, part)

    # The same four source masks are used for both the holes and the extracted
    # pieces. This makes every edge correspond exactly in all three images.
    clipped_parts = part_union
    remaining = ImageChops.subtract(source_mask, clipped_parts)

    shadow = remaining.filter(ImageFilter.GaussianBlur(7))
    shadow_layer = Image.new("RGBA", (SIZE, SIZE), (47, 18, 27, 85))
    shadow_layer.putalpha(shadow.point(lambda p: p * 85 // 255))
    background.alpha_composite(shadow_layer, (0, 8))
    background.alpha_composite(rgba_from_mask(remaining, INK))

    if mode == "combined":
        glow = clipped_parts.filter(ImageFilter.GaussianBlur(10))
        background.alpha_composite(rgba_from_mask(glow, PART_GLOW))
        background.alpha_composite(rgba_from_mask(clipped_parts, PART))

    return background


def crop_part(mask: Image.Image) -> Image.Image:
    bbox = mask.getbbox()
    if not bbox:
        return Image.new("L", (1, 1), 0)
    return mask.crop(bbox)


def paste_mask(
    target: Image.Image,
    mask: Image.Image,
    box: tuple[int, int, int, int],
    color: tuple[int, int, int, int],
) -> None:
    x1, y1, x2, y2 = box
    piece = crop_part(mask)
    scale = min((x2 - x1) / max(piece.width, 1), (y2 - y1) / max(piece.height, 1))
    resized = piece.resize(
        (max(1, round(piece.width * scale)), max(1, round(piece.height * scale))),
        Image.Resampling.LANCZOS,
    )
    layer = Image.new("RGBA", resized.size, color)
    layer.putalpha(resized)
    px = round((x1 + x2 - resized.width) / 2)
    py = round((y1 + y2 - resized.height) / 2)
    target.alpha_composite(layer, (px, py))


def render_parts() -> Image.Image:
    background = paper_background()
    draw = ImageDraw.Draw(background, "RGBA")
    font = ImageFont.truetype(str(FONT_PATH), 62)
    draw.text((SIZE // 2, 205), "色紙から抜け落ちた四つの形", font=font, fill=INK, anchor="mm")

    shown_parts = {
        label: kana_mask(label, (SIZE // 2, SIZE // 2), 360)
        for label in ("ク", "ロ", "ミ", "レ")
    }
    cards = [(72, 350, 310, 795), (346, 350, 584, 795), (620, 350, 858, 795), (894, 350, 1132, 795)]
    for index, (label, mask) in enumerate(shown_parts.items()):
        x1, y1, x2, y2 = cards[index]
        draw.rounded_rectangle((x1, y1, x2, y2), radius=24, fill=(249, 224, 194, 154), outline=(138, 86, 24, 230), width=6)
        paste_mask(background, mask, (x1 + 34, y1 + 72, x2 - 34, y2 - 72), PART)
        if index < 3:
            draw.line(((x2 + 8, 568), (cards[index + 1][0] - 8, 568)), fill=BLUE, width=8)
            draw.polygon(((cards[index + 1][0] - 8, 568), (cards[index + 1][0] - 30, 554), (cards[index + 1][0] - 30, 582)), fill=BLUE)
    return background


def render_derivation() -> Image.Image:
    background = paper_background()
    draw = ImageDraw.Draw(background, "RGBA")
    title_font = ImageFont.truetype(str(FONT_PATH), 48)
    note_font = ImageFont.truetype(str(FONT_PATH), 27)
    number_font = ImageFont.truetype(str(FONT_PATH), 28)
    draw.text((SIZE // 2, 108), "「色紙」から抜け落ちた形を読む", font=title_font, fill=INK, anchor="mm")

    source, parts, _ = build_kanji_and_parts()
    source_crop = (48, 238, 1150, 818)
    target_box = (90, 158, 1110, 608)
    cropped_source = source.crop(source_crop).resize(
        (target_box[2] - target_box[0], target_box[3] - target_box[1]),
        Image.Resampling.LANCZOS,
    )
    source_layer = Image.new("RGBA", cropped_source.size, INK)
    source_layer.putalpha(cropped_source)
    background.alpha_composite(source_layer, target_box[:2])

    for part in parts.values():
        cropped_part = part.crop(source_crop).resize(cropped_source.size, Image.Resampling.LANCZOS)
        part_layer = Image.new("RGBA", cropped_part.size, PART)
        part_layer.putalpha(cropped_part)
        background.alpha_composite(part_layer, target_box[:2])

    card_boxes = [
        (66, 742, 302, 1078),
        (344, 742, 580, 1078),
        (622, 742, 858, 1078),
        (900, 742, 1136, 1078),
    ]
    for index, (label, box) in enumerate(zip(("ク", "ロ", "ミ", "レ"), card_boxes), start=1):
        x1, y1, x2, y2 = box
        draw.rounded_rectangle(box, radius=22, fill=(249, 224, 194, 190), outline=(138, 86, 24, 230), width=5)
        clean_piece = kana_mask(label, (SIZE // 2, SIZE // 2), 360)
        paste_mask(background, clean_piece, (x1 + 34, y1 + 44, x2 - 34, y2 - 38), PART)
        draw.ellipse((x1 + 10, y1 + 10, x1 + 52, y1 + 52), fill=BLUE)
        draw.text((x1 + 31, y1 + 31), str(index), font=number_font, fill=(255, 255, 255, 255), anchor="mm")

    source_x = (245, 404, 700, 1028)
    for index, end_x in enumerate(source_x):
        start_x = (184, 462, 740, 1018)[index]
        draw.line((start_x, 612, end_x, 716), fill=BLUE, width=7)
        draw.polygon(((end_x, 731), (end_x - 13, 706), (end_x + 13, 706)), fill=BLUE)
    draw.rounded_rectangle((604, 363, 850, 604), radius=16, outline=BLUE, width=4)
    draw.rounded_rectangle((615, 338, 835, 382), radius=18, fill=(249, 224, 194, 236), outline=BLUE, width=3)
    draw.text((725, 360), "③ 糸へん", font=note_font, fill=BLUE, anchor="mm")
    draw.text((740, 682), "糸へんの下3画を並べ替えて「ミ」", font=note_font, fill=PART, anchor="mm")
    return background


def save_outputs() -> None:
    ASSETS.mkdir(parents=True, exist_ok=True)
    combined = render_source("combined")
    missing = render_source("missing")
    parts = render_parts()
    derivation = render_derivation()
    combined.save(ASSETS / "stage02-kanji-combined.png", optimize=True)
    missing.save(ASSETS / "stage02-kanji-missing.png", optimize=True)
    derivation.save(ASSETS / "stage02-kanji-derivation.png", optimize=True)
    clue = derivation.resize((768, 768), Image.Resampling.LANCZOS)
    clue.save(ASSETS / "stage02-right-clue.png", optimize=True)
    clue.convert("RGB").save(ASSETS / "stage02-right-clue.webp", "WEBP", quality=86, method=6)
    parts.save(ASSETS / "stage02-kanji-parts.png", optimize=True)
    missing.resize((768, 768), Image.Resampling.LANCZOS).convert("RGB").save(
        ASSETS / "stage02-kanji-missing.webp", "WEBP", quality=88, method=6
    )
if __name__ == "__main__":
    save_outputs()
