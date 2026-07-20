from __future__ import annotations

import math
import random
import subprocess
import wave
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "tanohama" / "assets"
TMP = ROOT / ".boss-clear-render"
FFMPEG = Path(r"C:\ffmpeg\bin\ffmpeg.exe")

WIDTH = 1280
HEIGHT = 720
FPS = 24
DURATION = 5.6
FRAME_COUNT = round(DURATION * FPS)
SAMPLE_RATE = 48_000

CLIPS = [
    ("boss-clear-01-bari-v1", "バリ", "鋭い爪を光壁で弾いた"),
    ("boss-clear-02-fuyuu-v1", "フユウ", "地を砕く衝撃波を飛び越えた"),
    ("boss-clear-03-hengao-v1", "ヘンガオ", "白目をむき、石化の視線を外した"),
    ("boss-clear-04-tsukemono-v1", "ツケモノ", "言葉を置く石の足場を作った"),
    ("boss-clear-05-gokurosama-v1", "ゴクロウサマ", "百黙絶静から四つの色を消した"),
    ("boss-clear-06-katame-v1", "カタメ", "石の装甲で鋭い爪を受け止めた"),
    ("boss-clear-07-timemachine-v1", "タイムマシン", "未来へ移動し、零式空間をかわした"),
    ("boss-clear-08-butterfly-v1", "バタフライエフェクト", "仲間の想いが最後の一撃になった"),
]


def font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    name = "meiryob.ttc" if bold else "meiryo.ttc"
    return ImageFont.truetype(str(Path(r"C:\Windows\Fonts") / name), size)


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return max(low, min(high, value))


def smooth(value: float) -> float:
    value = clamp(value)
    return value * value * (3.0 - 2.0 * value)


def span(time: float, start: float, end: float) -> float:
    if end <= start:
        return 1.0 if time >= end else 0.0
    return smooth((time - start) / (end - start))


def pulse(time: float, center: float, width: float) -> float:
    distance = abs(time - center) / max(width, 0.001)
    return clamp(1.0 - distance)


def alpha_layer(base: Image.Image, layer: Image.Image) -> Image.Image:
    result = base.convert("RGBA")
    result.alpha_composite(layer)
    return result.convert("RGB")


def cover(image: Image.Image, width: int = WIDTH, height: int = HEIGHT) -> Image.Image:
    image = image.convert("RGB")
    scale = max(width / image.width, height / image.height)
    resized = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - width) // 2
    top = (resized.height - height) // 2
    return resized.crop((left, top, left + width, top + height))


def camera(image: Image.Image, scale: float, pan_x: float = 0.0, pan_y: float = 0.0) -> Image.Image:
    target = image.resize(
        (max(WIDTH, round(WIDTH * scale)), max(HEIGHT, round(HEIGHT * scale))),
        Image.Resampling.LANCZOS,
    )
    left = clamp((target.width - WIDTH) / 2 + pan_x, 0, max(0, target.width - WIDTH))
    top = clamp((target.height - HEIGHT) / 2 + pan_y, 0, max(0, target.height - HEIGHT))
    return target.crop((round(left), round(top), round(left) + WIDTH, round(top) + HEIGHT))


def prepare_panel(sheet: Image.Image, index: int) -> Image.Image:
    cell_w = sheet.width // 4
    cell_h = sheet.height // 2
    column = index % 4
    row = index // 4
    panel = sheet.crop((column * cell_w, row * cell_h, (column + 1) * cell_w, (row + 1) * cell_h)).convert("RGB")

    blurred = cover(panel).filter(ImageFilter.GaussianBlur(18))
    blurred = ImageEnhance.Brightness(blurred).enhance(0.52)
    blurred = ImageEnhance.Color(blurred).enhance(0.75)

    sharp = panel.resize((720, 720), Image.Resampling.LANCZOS)
    sharp = ImageEnhance.Contrast(sharp).enhance(1.04)
    mask = Image.new("L", (720, 720), 255)
    mask_draw = ImageDraw.Draw(mask)
    for inset in range(70):
        alpha = round(255 * (inset / 70) ** 1.7)
        mask_draw.rectangle((inset, 0, 719 - inset, 719), outline=alpha)
    mask = mask.filter(ImageFilter.GaussianBlur(10))
    composed = blurred.copy()
    composed.paste(sharp, (280, 0), mask)
    return composed


def vignette(frame: Image.Image, amount: float = 0.55) -> Image.Image:
    yy, xx = np.mgrid[0:HEIGHT, 0:WIDTH]
    nx = (xx - WIDTH / 2) / (WIDTH / 2)
    ny = (yy - HEIGHT / 2) / (HEIGHT / 2)
    radius = np.sqrt(nx * nx + ny * ny)
    shade = np.clip((radius - 0.38) / 0.75, 0, 1) * amount
    arr = np.asarray(frame, dtype=np.float32)
    arr *= (1.0 - shade[..., None])
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")


def add_grain(frame: Image.Image, time: float, amount: float = 3.2) -> Image.Image:
    rng = np.random.default_rng(51_000 + round(time * FPS))
    noise = rng.normal(0, amount, (HEIGHT, WIDTH, 1))
    arr = np.asarray(frame, dtype=np.float32) + noise
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")


def draw_header(frame: Image.Image, index: int, spell: str, time: float) -> Image.Image:
    appear = span(time, 0.18, 0.62)
    if appear <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    alpha = round(255 * appear)
    draw.rectangle((0, 0, WIDTH, 75), fill=(2, 5, 9, round(alpha * 0.74)))
    draw.line((0, 74, WIDTH, 74), fill=(231, 191, 72, round(alpha * 0.74)), width=2)
    draw.text((38, 19), f"FINAL BATTLE  {index + 1} / 8", font=font(20), fill=(238, 201, 85, alpha))
    spell_box = draw.textbbox((0, 0), spell, font=font(31))
    spell_width = spell_box[2] - spell_box[0]
    draw.text((WIDTH - spell_width - 38, 13), spell, font=font(31), fill=(255, 246, 213, alpha), stroke_width=2, stroke_fill=(0, 0, 0, alpha))
    return alpha_layer(frame, layer)


def draw_result(frame: Image.Image, result: str, time: float) -> Image.Image:
    amount = span(time, 4.12, 4.52) * (1.0 - span(time, 5.28, 5.58))
    if amount <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    face = font(31)
    bbox = draw.textbbox((0, 0), result, font=face)
    width = bbox[2] - bbox[0]
    x = (WIDTH - width) // 2
    alpha = round(255 * amount)
    draw.rounded_rectangle(
        (x - 34, 612, x + width + 34, 680),
        radius=7,
        fill=(2, 8, 11, round(alpha * 0.82)),
        outline=(238, 199, 79, round(alpha * 0.82)),
        width=2,
    )
    draw.text((x, 627), result, font=face, fill=(244, 255, 249, alpha), stroke_width=2, stroke_fill=(0, 0, 0, alpha))
    return alpha_layer(frame, layer)


def draw_spell_seal(frame: Image.Image, time: float, color: tuple[int, int, int]) -> Image.Image:
    amount = span(time, 0.65, 1.05) * (1.0 - span(time, 2.75, 3.55))
    if amount <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    cx, cy = 640, 360
    for ring in range(4):
        radius = 68 + ring * 28 + 9 * math.sin(time * (2.3 + ring * 0.17))
        alpha = round((130 - ring * 17) * amount)
        draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), outline=(*color, alpha), width=max(1, 4 - ring))
    for ray in range(12):
        angle = time * 0.55 + ray * math.tau / 12
        r1, r2 = 46, 158
        draw.line(
            (cx + math.cos(angle) * r1, cy + math.sin(angle) * r1, cx + math.cos(angle) * r2, cy + math.sin(angle) * r2),
            fill=(*color, round(75 * amount)),
            width=2,
        )
    glow = layer.filter(ImageFilter.GaussianBlur(14))
    return alpha_layer(alpha_layer(frame, glow), layer)


def draw_sparks(layer: Image.Image, time: float, center: tuple[int, int], seed: int, color: tuple[int, int, int], amount: float) -> None:
    if amount <= 0:
        return
    draw = ImageDraw.Draw(layer)
    rng = random.Random(seed)
    cx, cy = center
    for _ in range(52):
        angle = rng.uniform(0, math.tau)
        speed = rng.uniform(55, 390)
        delay = rng.uniform(0, 0.55)
        age = max(0.0, time - delay)
        distance = speed * age * amount
        x = cx + math.cos(angle) * distance
        y = cy + math.sin(angle) * distance + 80 * age * age
        length = rng.uniform(5, 22) * amount
        alpha = round(rng.uniform(90, 240) * amount * clamp(1.25 - age))
        draw.line((x, y, x - math.cos(angle) * length, y - math.sin(angle) * length), fill=(*color, alpha), width=rng.choice((1, 2, 2, 3)))


def effect_bari(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    amount = span(time, 1.0, 1.65)
    for ring in range(5):
        radius = 70 + amount * (150 + ring * 31)
        alpha = round((175 - ring * 25) * amount)
        draw.ellipse((640 - radius, 360 - radius * 0.74, 640 + radius, 360 + radius * 0.74), outline=(111, 242, 255, alpha), width=max(1, 6 - ring))
    slash = span(time, 1.4, 2.15) * (1 - span(time, 2.65, 3.25))
    for offset in (-95, -36, 28, 93):
        draw.line((1170, 120 + offset, 675, 335 + offset * 0.25), fill=(255, 90, 85, round(235 * slash)), width=8)
    impact = pulse(time, 2.1, 0.48)
    draw_sparks(layer, time - 1.72, (675, 355), 101, (255, 224, 116), impact)
    glow = layer.filter(ImageFilter.GaussianBlur(18))
    return alpha_layer(alpha_layer(frame, glow), layer)


def effect_fuyuu(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    lift = span(time, 0.95, 2.1)
    for index in range(28):
        x = 250 + (index * 67) % 830
        y = 615 - ((time * (90 + index * 2) + index * 33) % 310)
        alpha = round(150 * lift * (1.0 - abs(x - 640) / 780))
        draw.ellipse((x - 2, y - 9, x + 2, y + 9), fill=(161, 241, 255, alpha))
    wave = span(time, 1.55, 2.65) * (1 - span(time, 3.0, 3.8))
    for ring in range(5):
        width = 160 + wave * (330 + ring * 110)
        draw.arc((640 - width, 465 - ring * 8, 640 + width, 785 + ring * 24), 195, 345, fill=(255, 211, 112, round((190 - ring * 25) * wave)), width=max(2, 7 - ring))
    for rock in range(24):
        rng = random.Random(200 + rock)
        age = max(0.0, time - rng.uniform(1.45, 2.2))
        if age <= 0 or age > 1.8:
            continue
        x = rng.uniform(150, 1130) + rng.uniform(-55, 55) * age
        y = 640 - rng.uniform(130, 330) * age + 170 * age * age
        size = rng.uniform(3, 13)
        draw.polygon([(x, y - size), (x + size, y + size), (x - size, y + size)], fill=(194, 165, 113, round(210 * (1 - age / 1.8))))
    return alpha_layer(frame, layer)


def effect_hengao(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    darkness = span(time, 0.95, 1.4) * (1 - span(time, 3.65, 4.25))
    draw.rectangle((0, 75, WIDTH, HEIGHT), fill=(0, 0, 0, round(90 * darkness)))
    eyes = span(time, 1.0, 1.65) * (1 - span(time, 3.05, 3.75))
    for ex in (535, 745):
        draw.ellipse((ex - 82, 512 - 30, ex + 82, 512 + 30), fill=(235, 246, 255, round(220 * eyes)), outline=(123, 220, 255, round(255 * eyes)), width=5)
        draw.ellipse((ex - 17, 512 - 13, ex + 17, 512 + 13), fill=(250, 255, 255, round(255 * eyes)))
    beam = span(time, 1.55, 2.05) * (1 - span(time, 2.85, 3.5))
    for y in (280, 326, 375):
        draw.line((632, 275, 1180, y), fill=(255, 50, 62, round(230 * beam)), width=7)
        draw.line((648, 275, 100, y + 25), fill=(255, 50, 62, round(180 * beam)), width=5)
    glow = layer.filter(ImageFilter.GaussianBlur(22))
    return alpha_layer(alpha_layer(frame, glow), layer)


def stone_block(layer: Image.Image, x: int, y: int, scale: float, alpha: int) -> None:
    draw = ImageDraw.Draw(layer)
    w, h, d = 170 * scale, 110 * scale, 34 * scale
    front = [(x - w / 2, y - h / 2), (x + w / 2, y - h / 2), (x + w / 2, y + h / 2), (x - w / 2, y + h / 2)]
    top = [(x - w / 2, y - h / 2), (x - w / 2 + d, y - h / 2 - d), (x + w / 2 + d, y - h / 2 - d), (x + w / 2, y - h / 2)]
    side = [(x + w / 2, y - h / 2), (x + w / 2 + d, y - h / 2 - d), (x + w / 2 + d, y + h / 2 - d), (x + w / 2, y + h / 2)]
    draw.polygon(front, fill=(101, 101, 93, alpha), outline=(216, 198, 139, alpha))
    draw.polygon(top, fill=(151, 147, 126, alpha), outline=(232, 214, 158, alpha))
    draw.polygon(side, fill=(65, 69, 68, alpha), outline=(180, 170, 128, alpha))
    rng = random.Random(410)
    for _ in range(18):
        px = rng.uniform(x - w / 2 + 8, x + w / 2 - 8)
        py = rng.uniform(y - h / 2 + 8, y + h / 2 - 8)
        radius = rng.uniform(1, 4) * scale
        draw.ellipse((px - radius, py - radius, px + radius, py + radius), fill=(48, 51, 50, round(alpha * 0.75)))


def effect_tsukemono(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    amount = span(time, 1.0, 2.75)
    y = round(735 - amount * 262)
    stone_block(layer, 640, y, 0.75 + 0.25 * amount, round(255 * amount))
    draw = ImageDraw.Draw(layer)
    for ring in range(4):
        radius = 55 + amount * (65 + ring * 35)
        draw.ellipse((640 - radius, y - radius * 0.45, 640 + radius, y + radius * 0.45), outline=(255, 216, 110, round((135 - ring * 20) * amount)), width=3)
    draw_sparks(layer, time - 1.2, (640, y), 410, (255, 222, 141), pulse(time, 2.55, 0.8))
    glow = layer.filter(ImageFilter.GaussianBlur(17))
    return alpha_layer(alpha_layer(frame, glow), layer)


def effect_gokurosama(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    kanji = list("百黙絶静")
    removed = list("白黒色青")
    result = list("一犬糸争")
    x0 = 640 - 4 * 92 // 2
    appear = span(time, 0.75, 1.25)
    for i, (source, color_word, survivor) in enumerate(zip(kanji, removed, result)):
        x = x0 + i * 92
        local = span(time, 1.55 + i * 0.34, 2.15 + i * 0.34)
        source_alpha = round(255 * appear * (1 - local))
        result_alpha = round(255 * local)
        draw.text((x, 274), source, font=font(68), fill=(255, 244, 215, source_alpha), anchor="mm", stroke_width=2, stroke_fill=(0, 0, 0, source_alpha))
        rise = round(44 * local)
        draw.text((x, 245 - rise), color_word, font=font(42), fill=(255, 58, 62, round(255 * local * (1 - span(time, 3.5, 4.1)))), anchor="mm", stroke_width=2, stroke_fill=(40, 0, 0, result_alpha))
        draw.text((x, 340), survivor, font=font(75), fill=(146, 255, 221, result_alpha), anchor="mm", stroke_width=2, stroke_fill=(0, 18, 15, result_alpha))
        if local > 0:
            for spark in range(8):
                angle = spark * math.tau / 8 + i
                radius = 22 + 58 * local
                sx = x + math.cos(angle) * radius
                sy = 275 + math.sin(angle) * radius
                draw.ellipse((sx - 3, sy - 3, sx + 3, sy + 3), fill=(255, 208, 85, round(210 * local)))
    if time > 3.0:
        amount = span(time, 3.0, 3.65)
        phrase = "『一犬糸争』"
        bbox = draw.textbbox((0, 0), phrase, font=font(52))
        width = bbox[2] - bbox[0]
        draw.rounded_rectangle((640 - width / 2 - 28, 408, 640 + width / 2 + 28, 485), radius=8, fill=(0, 20, 18, round(205 * amount)), outline=(131, 255, 218, round(220 * amount)), width=2)
        draw.text((640, 446), phrase, font=font(52), fill=(222, 255, 245, round(255 * amount)), anchor="mm")
    glow = layer.filter(ImageFilter.GaussianBlur(20))
    return alpha_layer(alpha_layer(frame, glow), layer)


def effect_katame(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    amount = span(time, 0.95, 1.75)
    shield_x, shield_y = 640, 390
    points = []
    for i in range(12):
        angle = -math.pi / 2 + i * math.tau / 12
        radius = (162 if i % 2 == 0 else 136) * amount
        points.append((shield_x + math.cos(angle) * radius, shield_y + math.sin(angle) * radius))
    if amount > 0:
        draw.polygon(points, fill=(78, 87, 86, round(220 * amount)), outline=(222, 206, 145, round(255 * amount)))
        for ring in range(3):
            radius = 96 + ring * 27
            draw.ellipse((shield_x - radius, shield_y - radius, shield_x + radius, shield_y + radius), outline=(200, 217, 202, round((95 - ring * 20) * amount)), width=3)
    slash = span(time, 1.55, 2.15) * (1 - span(time, 2.6, 3.2))
    for offset in (-70, -16, 38, 92):
        draw.line((1130, 100 + offset, 710, 340 + offset * 0.3), fill=(255, 72, 72, round(235 * slash)), width=8)
    impact = pulse(time, 2.14, 0.55)
    draw_sparks(layer, time - 1.72, (710, 365), 600, (255, 226, 139), impact)
    for crack in range(11):
        rng = random.Random(650 + crack)
        angle = rng.uniform(0, math.tau)
        length = rng.uniform(35, 125) * impact
        draw.line((710, 365, 710 + math.cos(angle) * length, 365 + math.sin(angle) * length), fill=(25, 30, 31, round(230 * impact)), width=3)
    glow = layer.filter(ImageFilter.GaussianBlur(13))
    return alpha_layer(alpha_layer(frame, glow), layer)


def effect_timemachine(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    open_amount = span(time, 0.85, 1.55)
    travel = span(time, 1.8, 3.55)
    cx, cy = 640, 360
    for ring in range(11):
        phase = (time * (0.22 + ring * 0.008) + ring * 0.085) % 1
        radius_x = 40 + phase * 520 * open_amount
        radius_y = 30 + phase * 270 * open_amount
        alpha = round((175 - phase * 145) * open_amount)
        draw.ellipse((cx - radius_x, cy - radius_y, cx + radius_x, cy + radius_y), outline=(131, 236, 255, alpha), width=max(1, round(6 - phase * 4)))
    rng = random.Random(710)
    for _ in range(120):
        angle = rng.uniform(0, math.tau)
        speed = rng.uniform(90, 520)
        distance = ((time - 0.75) * speed + rng.uniform(0, 700)) % 700
        x = cx + math.cos(angle) * distance
        y = cy + math.sin(angle) * distance * 0.54
        length = (14 + 78 * travel) * open_amount
        draw.line((x, y, x + math.cos(angle) * length, y + math.sin(angle) * length * 0.54), fill=(214, 248, 255, round(rng.uniform(45, 145) * open_amount)), width=rng.choice((1, 1, 2)))
    whiteout = pulse(time, 3.35, 0.65)
    draw.ellipse((cx - 175, cy - 120, cx + 175, cy + 120), fill=(235, 253, 255, round(195 * whiteout)))
    glow = layer.filter(ImageFilter.GaussianBlur(28))
    return alpha_layer(alpha_layer(frame, glow), layer)


def butterfly_points(count: int = 78) -> list[tuple[float, float, float, float]]:
    rng = random.Random(808)
    return [(rng.uniform(50, 1230), rng.uniform(100, 660), rng.uniform(0.6, 1.45), rng.uniform(0, math.tau)) for _ in range(count)]


BUTTERFLIES = butterfly_points()


def draw_butterfly(draw: ImageDraw.ImageDraw, x: float, y: float, size: float, alpha: int, phase: float) -> None:
    wing = size * (0.8 + 0.25 * math.sin(phase))
    color = (255, 211, 115, alpha)
    draw.ellipse((x - wing * 1.7, y - wing, x - wing * 0.15, y + wing), fill=color)
    draw.ellipse((x + wing * 0.15, y - wing, x + wing * 1.7, y + wing), fill=color)
    draw.line((x, y - wing * 0.8, x, y + wing * 1.15), fill=(255, 250, 211, alpha), width=max(1, round(size * 0.28)))


def effect_butterfly(frame: Image.Image, time: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    gather = span(time, 0.8, 3.2)
    target_x, target_y = 640, 340
    for index, (sx, sy, speed, phase) in enumerate(BUTTERFLIES):
        curve = smooth(gather ** speed)
        x = sx * (1 - curve) + target_x * curve + math.sin(time * 4 + phase) * 38 * (1 - curve)
        y = sy * (1 - curve) + target_y * curve + math.cos(time * 3 + phase) * 22 * (1 - curve)
        alpha = round(210 * span(time, 0.45, 1.1) * (1 - span(time, 3.45, 4.0)))
        draw_butterfly(draw, x, y, 4.2 + (index % 5), alpha, time * 8 + phase)
    charge = pulse(time, 3.4, 0.85)
    for ring in range(6):
        radius = 25 + ring * 24 + 30 * charge
        draw.ellipse((target_x - radius, target_y - radius, target_x + radius, target_y + radius), outline=(255, 223, 133, round((190 - ring * 22) * charge)), width=3)
    beam = span(time, 3.25, 3.62) * (1 - span(time, 4.12, 4.55))
    draw.polygon([(640, 323), (1270, 170), (1270, 510), (640, 357)], fill=(255, 234, 153, round(195 * beam)))
    draw.polygon([(640, 334), (1270, 270), (1270, 410), (640, 346)], fill=(255, 255, 244, round(235 * beam)))
    glow = layer.filter(ImageFilter.GaussianBlur(26))
    return alpha_layer(alpha_layer(frame, glow), layer)


EFFECTS = [
    effect_bari,
    effect_fuyuu,
    effect_hengao,
    effect_tsukemono,
    effect_gokurosama,
    effect_katame,
    effect_timemachine,
    effect_butterfly,
]


def render_frame(index: int, time: float, panel: Image.Image) -> Image.Image:
    impact_times = [2.08, 2.35, 2.15, 2.55, 2.8, 2.15, 3.35, 3.65]
    shake = pulse(time, impact_times[index], 0.32)
    shake_x = math.sin(time * 117.0) * 11 * shake
    shake_y = math.cos(time * 93.0) * 7 * shake
    zoom = 1.0 + 0.018 * span(time, 0, 4.6) + 0.025 * shake
    frame = camera(panel, zoom, shake_x, shake_y)
    frame = draw_spell_seal(frame, time, (112, 231, 222) if index not in (3, 4, 7) else (255, 202, 92))
    frame = EFFECTS[index](frame, time)
    frame = draw_header(frame, index, CLIPS[index][1], time)
    frame = draw_result(frame, CLIPS[index][2], time)
    frame = vignette(frame, 0.55)
    frame = add_grain(frame, time)
    fade_in = span(time, 0.0, 0.36)
    fade_out = span(time, 5.28, 5.6)
    if fade_in < 1 or fade_out > 0:
        black = Image.new("RGB", frame.size, "black")
        frame = Image.blend(black, frame, fade_in)
        frame = Image.blend(frame, black, fade_out)
    return frame


def tone_wave(frequency: float, time: np.ndarray, start: float, duration: float, gain: float, decay: float = 4.0) -> np.ndarray:
    local = time - start
    active = (local >= 0) & (local <= duration)
    envelope = np.where(active, np.exp(-np.maximum(local, 0) * decay) * np.minimum(np.maximum(local, 0) / 0.018, 1), 0.0)
    return gain * envelope * np.sin(math.tau * frequency * np.maximum(local, 0))


def noise_burst(rng: np.random.Generator, time: np.ndarray, start: float, duration: float, gain: float) -> np.ndarray:
    local = time - start
    active = (local >= 0) & (local <= duration)
    envelope = np.where(active, np.sin(np.pi * np.clip(local / duration, 0, 1)) ** 1.4, 0.0)
    noise = rng.normal(0, 1, len(time))
    filtered = np.convolve(noise, np.ones(17) / 17, mode="same")
    return gain * envelope * filtered


def build_audio(index: int, path: Path) -> None:
    sample_count = round(DURATION * SAMPLE_RATE)
    time = np.arange(sample_count, dtype=np.float64) / SAMPLE_RATE
    rng = np.random.default_rng(8_000 + index)
    audio = 0.012 * np.sin(math.tau * (51 + index * 2) * time)
    audio += tone_wave(420 + index * 21, time, 0.66, 1.2, 0.10, 2.5)
    audio += tone_wave(630 + index * 17, time, 0.75, 1.0, 0.06, 3.2)
    impact_time = [2.08, 2.35, 2.15, 2.55, 2.8, 2.15, 3.35, 3.65][index]
    audio += tone_wave(74, time, impact_time, 1.2, 0.38, 4.2)
    audio += tone_wave(148, time, impact_time + 0.015, 0.8, 0.18, 6.0)
    audio += noise_burst(rng, time, impact_time - 0.06, 0.52, 0.28)
    if index in (4, 6, 7):
        for offset, frequency in enumerate((530, 670, 820, 1010)):
            audio += tone_wave(frequency, time, 1.7 + offset * 0.37, 0.7, 0.055, 5.0)
    audio += tone_wave(523.25, time, 4.12, 1.1, 0.055, 2.2)
    audio += tone_wave(659.25, time, 4.22, 1.0, 0.045, 2.4)
    audio += tone_wave(783.99, time, 4.32, 0.9, 0.04, 2.6)
    audio = np.tanh(audio * 1.35)
    audio /= max(1.0, np.max(np.abs(audio)) / 0.92)
    stereo = np.stack((audio, audio), axis=1)
    pcm = np.int16(np.clip(stereo, -1, 1) * 32767)
    with wave.open(str(path), "wb") as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(SAMPLE_RATE)
        wav.writeframes(pcm.tobytes())


def encode_clip(index: int, panel: Image.Image) -> None:
    stem, _, _ = CLIPS[index]
    raw_video = TMP / f"{stem}-silent.mp4"
    audio_path = TMP / f"{stem}.wav"
    output = ASSETS / f"{stem}.mp4"
    poster = ASSETS / f"{stem}-poster.jpg"

    command = [
        str(FFMPEG), "-y", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24",
        "-s", f"{WIDTH}x{HEIGHT}", "-r", str(FPS), "-i", "-",
        "-an", "-c:v", "libx264", "-preset", "medium", "-crf", "25",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(raw_video),
    ]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    assert process.stdin is not None
    poster_frame = None
    for frame_index in range(FRAME_COUNT):
        time = frame_index / FPS
        frame = render_frame(index, time, panel)
        if frame_index == round(3.65 * FPS):
            poster_frame = frame.copy()
        process.stdin.write(np.asarray(frame, dtype=np.uint8).tobytes())
    process.stdin.close()
    return_code = process.wait()
    if return_code:
        raise RuntimeError(f"ffmpeg video encoding failed for clip {index + 1}: {return_code}")

    build_audio(index, audio_path)
    subprocess.run(
        [
            str(FFMPEG), "-y", "-loglevel", "error",
            "-i", str(raw_video), "-i", str(audio_path),
            "-c:v", "copy", "-c:a", "aac", "-b:a", "128k",
            "-shortest", "-movflags", "+faststart", str(output),
        ],
        check=True,
    )
    assert poster_frame is not None
    poster_frame.save(poster, quality=88, optimize=True, progressive=True)
    print(f"created {output.name} ({output.stat().st_size / 1024 / 1024:.2f} MiB)", flush=True)


def build_contact_sheet() -> None:
    sheet = Image.new("RGB", (960, 1080), "#05080b")
    for index, (stem, spell, _) in enumerate(CLIPS):
        poster = Image.open(ASSETS / f"{stem}-poster.jpg").convert("RGB").resize((480, 270), Image.Resampling.LANCZOS)
        draw = ImageDraw.Draw(poster)
        draw.rectangle((0, 228, 480, 270), fill=(0, 0, 0, 190))
        draw.text((16, 236), f"{index + 1}. {spell}", font=font(19), fill=(255, 239, 184))
        sheet.paste(poster, ((index % 2) * 480, (index // 2) * 270))
    sheet.save(TMP / "boss-clear-contact-sheet.jpg", quality=90)


def main() -> None:
    if not FFMPEG.exists():
        raise FileNotFoundError(FFMPEG)
    TMP.mkdir(exist_ok=True)
    source = Image.open(ASSETS / "stage05-boss-actions-v1.webp").convert("RGB")
    for index, (stem, _, _) in enumerate(CLIPS):
        output = ASSETS / f"{stem}.mp4"
        poster = ASSETS / f"{stem}-poster.jpg"
        if output.exists() and output.stat().st_size > 100_000 and poster.exists():
            print(f"kept {output.name}", flush=True)
            continue
        encode_clip(index, prepare_panel(source, index))
    build_contact_sheet()


if __name__ == "__main__":
    main()
