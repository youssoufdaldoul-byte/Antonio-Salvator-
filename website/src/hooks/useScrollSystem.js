// MAISON LUMIÈRE — scroll system
// Lenis smooth scroll drives ScrollTrigger; GSAP ticker drives Lenis RAF;
// full-page scroll progress scrubs the background video's currentTime.
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollSystem(videoRef) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Lenis → ScrollTrigger, GSAP ticker → Lenis, no lag smoothing.
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // --- Scroll-scrubbed background video -------------------------------
    // The video never autoplays: scroll progress is mapped to currentTime,
    // smoothed with a lerp so scrubbing feels cinematic in both directions.
    const video = videoRef.current
    let targetProgress = 0
    let currentTime = 0
    let metaReady = false

    const onMeta = () => {
      metaReady = true
    }
    if (video) {
      video.pause() // paused by default — motion comes from scroll only
      if (video.readyState >= 1) metaReady = true
      else video.addEventListener('loadedmetadata', onMeta)
    }

    // iOS/Safari renders no frames until a play() unlock; pause immediately.
    const unlock = () => {
      if (!video) return
      const p = video.play()
      if (p && p.then) p.then(() => video.pause()).catch(() => {})
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('pointerdown', unlock)
    }
    window.addEventListener('touchstart', unlock, { once: true })
    window.addEventListener('pointerdown', unlock, { once: true })

    const pageTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        targetProgress = self.progress
      },
    })

    const scrub = () => {
      if (!video || !metaReady || !video.duration) return
      const target = targetProgress * video.duration
      // Lerp toward the scroll-mapped time; snap when close to avoid jitter.
      currentTime += (target - currentTime) * 0.12
      if (Math.abs(target - currentTime) < 0.004) currentTime = target
      if (Math.abs(video.currentTime - currentTime) > 0.001) {
        video.currentTime = currentTime
      }
    }
    gsap.ticker.add(scrub)

    // Dev hooks
    if (import.meta.env.DEV) {
      window.__bgv = video
      window.__lenis = lenis
      window.__ST = ScrollTrigger
    }

    return () => {
      gsap.ticker.remove(scrub)
      gsap.ticker.remove(raf)
      pageTrigger.kill()
      if (video) video.removeEventListener('loadedmetadata', onMeta)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('pointerdown', unlock)
      lenis.destroy()
    }
  }, [videoRef])
}
