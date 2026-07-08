// MAISON LUMIÈRE — cinematic scroll-driven entrance (Step 1)
// Pins the hero for ENTRANCE_LENGTH_VH of scroll and maps that progress
// directly onto the approach-and-enter video's currentTime (true scrub,
// reversible). Near the end, a golden bloom crossfades into the interior —
// no hard cut — then the page unpins and flows into the story sections.
// Self-contained: remove this hook + <EntranceVeil/> to revert to a plain
// fixed-video hero.
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ---- tuning ---------------------------------------------------------
export const ENTRANCE_LENGTH_VH = 260 // scroll distance of the pinned entrance (200–300 feels cinematic)
export const ENTRANCE_SCRUB = 0.5     // scrub smoothing in seconds (higher = floatier)
const COPY_FADE_END = 0.22            // hero copy is gone by this progress
const BLOOM_START = 0.78              // golden bloom begins
const INTERIOR_START = 0.85           // interior crossfade begins
// ---------------------------------------------------------------------

export default function useEntrance(videoRef) {
  useEffect(() => {
    const video = videoRef.current
    let metaReady = false
    let target = 0
    let current = 0

    const onMeta = () => {
      metaReady = true
    }
    if (video) {
      video.pause() // motion comes exclusively from scroll
      if (video.readyState >= 1) metaReady = true
      else video.addEventListener('loadedmetadata', onMeta)
    }

    // Smoothed frame-accurate scrub (the mp4 is all-keyframe encoded).
    const scrubTick = () => {
      if (!video || !metaReady || !video.duration) return
      const t = target * video.duration
      current += (t - current) * 0.14
      if (Math.abs(t - current) < 0.004) current = t
      if (Math.abs(video.currentTime - current) > 0.001) video.currentTime = current
    }
    gsap.ticker.add(scrubTick)

    const ctx = gsap.context(() => {
      // One pinned timeline: total duration 1 == full entrance distance.
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'entrance',
          trigger: '#hero',
          start: 'top top',
          end: () => `+=${(window.innerHeight * ENTRANCE_LENGTH_VH) / 100}`,
          pin: true,
          scrub: ENTRANCE_SCRUB,
          anticipatePin: 1,
          onUpdate: (self) => {
            target = self.progress
            if (import.meta.env.DEV) window.__entranceProgress = self.progress
          },
        },
      })

      // hero copy steps aside as the walk begins
      tl.to('.hero__inner', { autoAlpha: 0, y: -70, scale: 0.97, ease: 'power1.in', duration: COPY_FADE_END }, 0)
      tl.to('.scroll-hint', { autoAlpha: 0, duration: 0.06 }, 0)

      // golden bloom rises at the doorway…
      tl.fromTo('#entrance-bloom', { autoAlpha: 0 }, { autoAlpha: 1, ease: 'power1.in', duration: 0.14 }, BLOOM_START)
      // …the interior emerges through the light…
      tl.fromTo(
        '#entrance-interior',
        { autoAlpha: 0, scale: 1.14 },
        { autoAlpha: 1, scale: 1, ease: 'power1.inOut', duration: 1 - INTERIOR_START },
        INTERIOR_START,
      )
      // …and the bloom settles to a warm residue as we arrive inside.
      tl.to('#entrance-bloom', { autoAlpha: 0.15, ease: 'power1.out', duration: 0.08 }, 0.92)

      // After the entrance: the interior dissolves while the story begins.
      // Fades the CONTAINER so it never fights the pinned timeline (which
      // owns the children's opacity). Anchored to the entrance trigger's
      // own end — element-based positions would be shifted by the
      // L'Expérience pin spacer.
      gsap.to('.entrance-veil', {
        autoAlpha: 0,
        immediateRender: false,
        ease: 'none',
        scrollTrigger: {
          id: 'entrance-out',
          start: () => ScrollTrigger.getById('entrance')?.end ?? 0,
          end: () => (ScrollTrigger.getById('entrance')?.end ?? 0) + window.innerHeight * 0.9,
          scrub: true,
        },
      })
    })

    return () => {
      gsap.ticker.remove(scrubTick)
      if (video) video.removeEventListener('loadedmetadata', onMeta)
      ctx.revert()
    }
  }, [videoRef])
}
