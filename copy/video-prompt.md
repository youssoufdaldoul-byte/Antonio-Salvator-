# MAISON LUMIÈRE — Hero Video Prompt (Seedance 2.0)

Target file (committed manually after approval):
`assets/videos/hero-restaurant-approach.mp4` → re-encoded to `website/public/bg.mp4`.

## Technical requirements

- Model: **Seedance 2.0** (Higgsfield MCP)
- Resolution: 1080p (fallback 720p)
- Aspect ratio: 16:9
- Duration: 10–12 s
- No audio
- One continuous uninterrupted shot, no cuts
- Reference image: `references/restaurant.png` (strict identity lock)

## Prompt

> Dark warm cinematic reveal of an ultra-luxury Monaco restaurant at night.
> The camera performs one single slow elegant push-in toward the warm glowing
> entrance, at walking pace, as if a guest is slowly approaching the restaurant
> on foot. One continuous uninterrupted shot, no cuts. The building remains
> completely identical and stable — same facade, same materials, same windows,
> same terrace as the reference image; only the camera moves. The ambient
> atmosphere is alive: soft fog drifting slowly, gentle reflections shimmering
> on the wet street, warm candlelight flickering through the tall windows, tiny
> warm bokeh particles floating in the air. In the final seconds the camera
> keeps approaching the entrance and the frame very slowly blurs and blooms
> into a soft warm golden glow. Dark cinematic environment, warm amber and gold
> lighting, realistic materials, premium hospitality advertising quality,
> smooth stabilized cinematic motion. No text, no logos, no people, no hands.

## Scroll-scrub usage

The approved video is scrubbed by scroll across the entire page (Phase 7):
paused by default, `currentTime` driven by Lenis + ScrollTrigger progress,
fixed fullscreen at z-index 0. Requires all-keyframe H.264 re-encode
(`scripts/encode-scroll-video.sh`) for frame-accurate seeking.

## Approval checkpoint

After generation: report **job_id + preview link**, then STOP. No further
asset generation, no website build, until explicit approval.
