from __future__ import annotations

import math
import random
import subprocess
import wave
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "tanohama" / "assets"
TMP = ROOT / ".finale-render"
FFMPEG = Path(r"C:\ffmpeg\bin\ffmpeg.exe")

WIDTH = 1280
HEIGHT = 720
FPS = 24
DURATION = 20.5
FRAME_COUNT = round(DURATION * FPS)
SAMPLE_RATE = 48_000


def cover(image: Image.Image) -> Image.Image:
    image = image.convert("RGB")
    scale = max(WIDTH / image.width, HEIGHT / image.height)
    size = (round(image.width * scale), round(image.height * scale))
    image = image.resize(size, Image.Resampling.LANCZOS)
    left = (image.width - WIDTH) // 2
    top = (image.height - HEIGHT) // 2
    return image.crop((left, top, left + WIDTH, top + HEIGHT))


def camera(image: Image.Image, scale: float = 1.0, pan_x: float = 0.0, pan_y: float = 0.0) -> Image.Image:
    scaled = image.resize(
        (max(WIDTH, round(WIDTH * scale)), max(HEIGHT, round(HEIGHT * scale))),
        Image.Resampling.LANCZOS,
    )
    max_x = scaled.width - WIDTH
    max_y = scaled.height - HEIGHT
    left = max(0, min(max_x, round(max_x / 2 + pan_x)))
    top = max(0, min(max_y, round(max_y / 2 + pan_y)))
    return scaled.crop((left, top, left + WIDTH, top + HEIGHT))


def smooth(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3.0 - 2.0 * value)


def span(time: float, start: float, end: float) -> float:
    return smooth((time - start) / (end - start))


def mix(a: Image.Image, b: Image.Image, amount: float) -> Image.Image:
    return Image.blend(a, b, max(0.0, min(1.0, amount)))


def alpha_layer(base: Image.Image, layer: Image.Image) -> Image.Image:
    result = base.convert("RGBA")
    result.alpha_composite(layer)
    return result.convert("RGB")


def font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    filename = "meiryob.ttc" if bold else "meiryo.ttc"
    return ImageFont.truetype(str(Path(r"C:\Windows\Fonts") / filename), size)


def caption(frame: Image.Image, text: str, amount: float, y: int = 634) -> Image.Image:
    if amount <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    face = font(31)
    box = draw.textbbox((0, 0), text, font=face, stroke_width=1)
    width = box[2] - box[0]
    x = (WIDTH - width) // 2
    alpha = round(255 * min(1.0, amount))
    draw.rounded_rectangle(
        (x - 34, y - 13, x + width + 34, y + 47),
        radius=9,
        fill=(3, 7, 11, round(alpha * 0.64)),
        outline=(222, 183, 80, round(alpha * 0.62)),
        width=1,
    )
    draw.text(
        (x, y),
        text,
        font=face,
        fill=(255, 245, 215, alpha),
        stroke_width=2,
        stroke_fill=(0, 0, 0, alpha),
    )
    return alpha_layer(frame, layer)


def title_card(frame: Image.Image, amount: float) -> Image.Image:
    if amount <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    alpha = round(255 * min(1.0, amount))
    title = "異空間からの脱出"
    subtitle = "ESCAPE COMPLETE"
    title_font = font(48)
    sub_font = font(20)
    title_box = draw.textbbox((0, 0), title, font=title_font)
    sub_box = draw.textbbox((0, 0), subtitle, font=sub_font)
    title_x = (WIDTH - (title_box[2] - title_box[0])) // 2
    sub_x = (WIDTH - (sub_box[2] - sub_box[0])) // 2
    draw.rounded_rectangle((316, 525, 964, 680), radius=10, fill=(6, 8, 8, round(alpha * 0.62)))
    draw.text((title_x, 548), title, font=title_font, fill=(255, 246, 220, alpha), stroke_width=2, stroke_fill=(0, 0, 0, alpha))
    draw.text((sub_x, 617), subtitle, font=sub_font, fill=(236, 194, 88, alpha))
    return alpha_layer(frame, layer)


def build_noise_mask(seed: int = 20260721) -> np.ndarray:
    rng = np.random.default_rng(seed)
    small = (rng.random((90, 160)) * 255).astype(np.uint8)
    noise = Image.fromarray(small, mode="L").resize((WIDTH, HEIGHT), Image.Resampling.BICUBIC).filter(ImageFilter.GaussianBlur(5))
    return np.asarray(noise, dtype=np.float32) / 255.0


def dissolve(a: Image.Image, b: Image.Image, amount: float, noise: np.ndarray, direction: float = 1.0) -> Image.Image:
    amount = max(0.0, min(1.0, amount))
    x = np.linspace(0.0, 1.0, WIDTH, dtype=np.float32)
    gradient = np.tile(x if direction > 0 else x[::-1], (HEIGHT, 1))
    field = noise * 0.66 + gradient * 0.34
    threshold = amount * 1.34 - 0.17
    mask = np.clip((threshold - field) * 6.5 + 0.5, 0.0, 1.0)
    mask_img = Image.fromarray((mask * 255).astype(np.uint8), mode="L")
    return Image.composite(b, a, mask_img)


def create_particles(count: int, seed: int, bounds: tuple[int, int, int, int]) -> list[dict[str, float]]:
    rng = random.Random(seed)
    left, top, right, bottom = bounds
    particles = []
    for _ in range(count):
        particles.append(
            {
                "x": rng.uniform(left, right),
                "y": rng.uniform(top, bottom),
                "vx": rng.uniform(-64, 82),
                "vy": rng.uniform(-105, 35),
                "size": rng.uniform(1.1, 5.4),
                "delay": rng.uniform(0.0, 2.1),
                "life": rng.uniform(1.2, 3.5),
                "gold": rng.random(),
            }
        )
    return particles


def boss_particles(frame: Image.Image, time: float, particles: list[dict[str, float]]) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    local_time = time - 1.25
    for particle in particles:
        age = local_time - particle["delay"]
        if age < 0 or age > particle["life"]:
            continue
        fade = 1.0 - age / particle["life"]
        x = particle["x"] + particle["vx"] * age + 18 * math.sin(age * 2.8 + particle["x"])
        y = particle["y"] + particle["vy"] * age - 17 * age * age
        size = particle["size"] * (0.45 + fade)
        color = (255, 210, 98, round(220 * fade)) if particle["gold"] > 0.35 else (104, 35, 27, round(190 * fade))
        draw.polygon([(x, y - size), (x + size, y), (x, y + size), (x - size, y)], fill=color)
    glow = layer.filter(ImageFilter.GaussianBlur(6))
    combined = Image.alpha_composite(glow, layer)
    return alpha_layer(frame, combined)


def boss_cracks(frame: Image.Image, amount: float) -> Image.Image:
    if amount <= 0:
        return frame
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    rng = random.Random(514)
    center = (638, 345)
    for ray in range(18):
        angle = rng.uniform(-math.pi, math.pi)
        length = rng.uniform(55, 250) * amount
        points = [center]
        for step in range(1, 7):
            radius = length * step / 6
            jitter = rng.uniform(-14, 14)
            points.append((center[0] + math.cos(angle) * radius + jitter, center[1] + math.sin(angle) * radius + jitter))
        draw.line(points, fill=(255, 220, 117, round(230 * amount)), width=max(1, round(3 * amount)))
    glow = layer.filter(ImageFilter.GaussianBlur(11))
    return alpha_layer(alpha_layer(frame, glow), layer)


def portal_effect(frame: Image.Image, time: float, intensity: float, travel: bool = False) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    cx, cy = (640, 352) if not travel else (638, 358)
    pulse = 0.88 + 0.12 * math.sin(time * 5.0)
    for ring in range(5):
        phase = (time * (0.38 + ring * 0.035) + ring * 0.18) % 1.0
        radius_x = 72 + phase * (370 if travel else 270)
        radius_y = 55 + phase * (225 if travel else 180)
        alpha = round(105 * (1.0 - phase) * intensity)
        draw.ellipse((cx - radius_x, cy - radius_y, cx + radius_x, cy + radius_y), outline=(255, 225, 148, alpha), width=max(1, round(4 * (1.0 - phase))))
    rng = random.Random(940)
    for index in range(90):
        angle = rng.uniform(0, math.tau)
        speed = rng.uniform(60, 390) * (1.65 if travel else 1.0)
        offset = (time * speed + rng.uniform(0, 600)) % 620
        x = cx + math.cos(angle) * offset
        y = cy + math.sin(angle) * offset * 0.62
        length = rng.uniform(8, 45) * (1.7 if travel else 1.0)
        alpha = round(rng.uniform(45, 150) * intensity)
        draw.line((x, y, x + math.cos(angle) * length, y + math.sin(angle) * length * 0.62), fill=(255, 236, 178, alpha), width=rng.choice((1, 1, 2)))
    halo = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    halo_draw = ImageDraw.Draw(halo)
    halo_draw.ellipse((cx - 150 * pulse, cy - 122 * pulse, cx + 150 * pulse, cy + 122 * pulse), fill=(255, 225, 142, round(52 * intensity)))
    halo = halo.filter(ImageFilter.GaussianBlur(55))
    return alpha_layer(alpha_layer(frame, halo), layer)


def barbecue_effect(frame: Image.Image, time: float, intensity: float) -> Image.Image:
    layer = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    rng = random.Random(2001)
    for index in range(20):
        x = 145 + index * 54 + 22 * math.sin(time * 1.7 + index)
        base_y = 642 + rng.uniform(-22, 22)
        height = (24 + rng.uniform(20, 88)) * (0.75 + 0.25 * math.sin(time * 4.2 + index))
        width = rng.uniform(12, 31)
        alpha = round(185 * intensity)
        draw.polygon([(x - width, base_y), (x, base_y - height), (x + width, base_y)], fill=(255, 119, 22, alpha))
        draw.polygon([(x - width * 0.45, base_y), (x, base_y - height * 0.67), (x + width * 0.45, base_y)], fill=(255, 225, 91, alpha))
    smoke = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    smoke_draw = ImageDraw.Draw(smoke)
    for index in range(22):
        phase = (time * (0.12 + index * 0.002) + index * 0.071) % 1.0
        x = 180 + (index % 11) * 95 + 52 * math.sin(phase * math.tau + index)
        y = 690 - phase * 620
        radius = 18 + phase * 78
        smoke_draw.ellipse((x - radius, y - radius * 0.62, x + radius, y + radius * 0.62), fill=(244, 233, 211, round(66 * (1.0 - phase) * intensity)))
    smoke = smoke.filter(ImageFilter.GaussianBlur(23))
    return alpha_layer(alpha_layer(frame, smoke), layer)


def render_frame(
    time: float,
    images: dict[str, Image.Image],
    noise: np.ndarray,
    particles: list[dict[str, float]],
) -> Image.Image:
    if time < 1.2:
        frame = camera(images["boss"], 1.0 + 0.018 * span(time, 0.0, 1.2))
    elif time < 3.65:
        progress = span(time, 1.2, 3.65)
        a = camera(images["boss"], 1.018 + 0.035 * progress)
        b = camera(images["boss_break"], 1.018 + 0.045 * progress)
        frame = dissolve(a, b, progress, noise, 1.0)
        frame = boss_cracks(frame, math.sin(progress * math.pi) ** 0.8)
        frame = boss_particles(frame, time, particles)
        frame = caption(frame, "バタフライエフェクトが闇を貫いた", min(span(time, 1.35, 1.85), 1.0 - span(time, 3.15, 3.6)))
    elif time < 6.25:
        progress = span(time, 3.65, 6.25)
        a = camera(images["boss_break"], 1.063 + 0.035 * progress)
        b = camera(images["portal"], 1.0 + 0.022 * progress)
        frame = dissolve(a, b, progress, noise, -1.0)
        frame = boss_particles(frame, time, particles)
        frame = portal_effect(frame, time, max(0.0, (progress - 0.35) / 0.65))
    elif time < 9.2:
        progress = span(time, 6.25, 9.2)
        frame = camera(images["portal"], 1.02 + 0.24 * progress, pan_y=-12 * progress)
        frame = portal_effect(frame, time, 0.65 + 0.35 * progress)
        frame = caption(frame, "帰還の扉が開く", min(span(time, 6.45, 6.95), 1.0 - span(time, 8.55, 9.05)))
    elif time < 11.75:
        progress = span(time, 9.2, 11.75)
        frame = camera(images["flight"], 1.0 + 0.34 * progress, pan_y=-8 * progress)
        frame = portal_effect(frame, time, 1.0, travel=True)
    elif time < 12.55:
        progress = span(time, 11.75, 12.55)
        flight = camera(images["flight"], 1.34 + 0.24 * progress)
        white = Image.new("RGB", (WIDTH, HEIGHT), (255, 249, 224))
        frame = mix(flight, white, progress)
    elif time < 14.05:
        progress = span(time, 12.55, 14.05)
        white = Image.new("RGB", (WIDTH, HEIGHT), (255, 249, 224))
        barbecue = camera(images["barbecue"], 1.03 - 0.03 * progress)
        frame = mix(white, barbecue, progress)
        frame = barbecue_effect(frame, time, 0.55 * progress)
    elif time < 16.35:
        progress = span(time, 14.05, 16.35)
        a = camera(images["barbecue"], 1.0 + 0.025 * progress)
        b = camera(images["lift"], 1.02 + 0.025 * progress, pan_y=-10 * progress)
        frame = dissolve(a, b, progress, noise, 1.0)
        frame = barbecue_effect(frame, time, 0.72)
        frame = caption(frame, "焼ける音と、仲間たちの声が戻ってきた", min(span(time, 14.2, 14.7), 1.0 - span(time, 15.85, 16.3)))
    elif time < 18.15:
        progress = span(time, 16.35, 18.15)
        a = camera(images["lift"], 1.045 + 0.02 * progress, pan_y=-10)
        b = camera(images["finish"], 1.025 + 0.025 * progress, pan_x=-18 * progress, pan_y=-14 * progress)
        frame = mix(a, b, progress)
        frame = barbecue_effect(frame, time, 0.82)
    else:
        progress = span(time, 18.15, 20.5)
        frame = camera(images["finish"], 1.05 + 0.025 * progress, pan_x=-18, pan_y=-15)
        frame = barbecue_effect(frame, time, 0.55)
        amount = min(span(time, 18.25, 18.85), 1.0 - span(time, 20.15, 20.5) * 0.15)
        frame = title_card(frame, amount)
    return frame


def create_audio(path: Path) -> None:
    rng = np.random.default_rng(1968)
    sample_count = round(DURATION * SAMPLE_RATE)
    t = np.arange(sample_count, dtype=np.float64) / SAMPLE_RATE
    audio = np.zeros(sample_count, dtype=np.float64)

    # Low cinematic bed and a slowly rising portal tone.
    audio += 0.035 * np.sin(math.tau * 48 * t) * np.clip(1.0 - t / 13.0, 0.0, 1.0)
    audio += 0.018 * np.sin(math.tau * 72 * t + 0.4 * np.sin(t * 0.8)) * np.clip(1.0 - t / 12.0, 0.0, 1.0)

    def impact(at: float, strength: float = 1.0) -> None:
        start = round(at * SAMPLE_RATE)
        length = round(1.15 * SAMPLE_RATE)
        local = np.arange(length) / SAMPLE_RATE
        wave_data = (
            np.sin(math.tau * (72 - 26 * local) * local)
            + 0.42 * np.sin(math.tau * 113 * local)
            + 0.16 * rng.standard_normal(length)
        ) * np.exp(-4.2 * local)
        end = min(sample_count, start + length)
        audio[start:end] += 0.22 * strength * wave_data[: end - start]

    impact(1.25, 1.0)
    impact(3.65, 0.72)
    impact(6.1, 0.46)

    # Portal whoosh, chime, and high-speed travel.
    portal = np.clip((t - 5.6) / 5.8, 0.0, 1.0) * np.clip((12.25 - t) / 1.2, 0.0, 1.0)
    noise = rng.standard_normal(sample_count)
    smoothed = np.convolve(noise, np.ones(90) / 90, mode="same")
    audio += 0.105 * portal * smoothed
    audio += 0.038 * portal * np.sin(math.tau * (175 + 41 * t) * t)
    for at, note in ((6.2, 523.25), (6.34, 659.25), (6.53, 783.99), (11.78, 1046.5)):
        local = np.maximum(0.0, t - at)
        tone = np.sin(math.tau * note * local) * np.exp(-2.7 * local)
        tone[t < at] = 0
        audio += 0.035 * tone

    # Grill sizzle and small crackles begin only after returning home.
    home_env = np.clip((t - 12.55) / 1.25, 0.0, 1.0)
    high_noise = noise - np.convolve(noise, np.ones(260) / 260, mode="same")
    audio += 0.016 * home_env * high_noise
    for _ in range(82):
        at = rng.uniform(13.0, DURATION - 0.1)
        start = round(at * SAMPLE_RATE)
        length = round(rng.uniform(0.018, 0.075) * SAMPLE_RATE)
        local = np.arange(length) / SAMPLE_RATE
        crackle = rng.standard_normal(length) * np.exp(-local * rng.uniform(35, 90)) * rng.uniform(0.025, 0.085)
        end = min(sample_count, start + length)
        audio[start:end] += crackle[: end - start]

    # Warm resolving chord.
    ending = np.clip((t - 14.0) / 1.5, 0.0, 1.0) * np.clip((DURATION - t) / 1.3, 0.0, 1.0)
    for note, volume in ((130.81, 0.022), (164.81, 0.018), (196.0, 0.017), (261.63, 0.012)):
        audio += volume * ending * np.sin(math.tau * note * t)

    peak = max(0.001, float(np.max(np.abs(audio))))
    audio = np.tanh(audio / peak * 1.25) * 0.78
    pcm = (audio * 32767).astype("<i2")
    with wave.open(str(path), "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(SAMPLE_RATE)
        wav.writeframes(pcm.tobytes())


def main() -> None:
    if not FFMPEG.exists():
        raise FileNotFoundError(f"ffmpeg not found: {FFMPEG}")
    TMP.mkdir(exist_ok=True)
    images = {
        "boss": cover(Image.open(ASSETS / "stage05-bg-premium.webp")),
        "boss_break": cover(Image.open(ASSETS / "finale-boss-disintegrating-v1.png")),
        "portal": cover(Image.open(ASSETS / "finale-portal-open-v1.png")),
        "flight": cover(Image.open(ASSETS / "finale-portal-flight-v1.png")),
        "barbecue": cover(Image.open(ASSETS / "final-yakiniku-home.jpg")),
        "lift": cover(Image.open(ASSETS / "finale-yakiniku-lift-v1.png")),
        "finish": cover(Image.open(ASSETS / "finale-yakiniku-finish-v1.png")),
    }
    noise = build_noise_mask()
    particles = create_particles(420, 222, (390, 145, 880, 615))
    silent_video = TMP / "finale-silent.mp4"
    audio_file = TMP / "finale-audio.wav"
    output = ASSETS / "finale-ending-v1.mp4"
    poster = ASSETS / "finale-ending-poster-v1.jpg"

    encoder = subprocess.Popen(
        [
            str(FFMPEG), "-y", "-loglevel", "error",
            "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{WIDTH}x{HEIGHT}",
            "-r", str(FPS), "-i", "-", "-an", "-c:v", "libx264",
            "-preset", "medium", "-crf", "25", "-pix_fmt", "yuv420p",
            "-movflags", "+faststart", str(silent_video),
        ],
        stdin=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    assert encoder.stdin is not None
    last_frame = None
    for index in range(FRAME_COUNT):
        frame = render_frame(index / FPS, images, noise, particles)
        last_frame = frame
        encoder.stdin.write(np.asarray(frame, dtype=np.uint8).tobytes())
        if index % FPS == 0:
            print(f"render {index // FPS:02d}s / {DURATION:.1f}s", flush=True)
    encoder.stdin.close()
    error = encoder.stderr.read().decode("utf-8", errors="replace") if encoder.stderr else ""
    result = encoder.wait()
    if result:
        raise RuntimeError(f"video encoding failed ({result}): {error}")
    if last_frame is not None:
        last_frame.save(poster, quality=90, optimize=True, progressive=True)

    create_audio(audio_file)
    subprocess.run(
        [
            str(FFMPEG), "-y", "-loglevel", "error", "-i", str(silent_video), "-i", str(audio_file),
            "-c:v", "copy", "-c:a", "aac", "-b:a", "160k", "-shortest",
            "-movflags", "+faststart", str(output),
        ],
        check=True,
    )
    print(f"created: {output} ({output.stat().st_size / 1024 / 1024:.2f} MiB)")
    print(f"poster:  {poster} ({poster.stat().st_size / 1024:.1f} KiB)")


if __name__ == "__main__":
    main()
