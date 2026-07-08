// MAISON LUMIÈRE — scroll system
// Lenis smooth scroll drives ScrollTrigger; GSAP ticker drives Lenis RAF.
// The hero entrance scrub itself lives in hooks/useEntrance.js.
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

    // iOS/Safari renders no video frames until a play() unlock; pause at once.
    const video = videoRef.current
    const unlock = () => {
      if (!video) return
      const p = video.play()
      if (p && p.then) p.then(() => video.pause()).catch(() => {})
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('pointerdown', unlock)
    }
    window.addEventListener('touchstart', unlock, { once: true })
    window.addEventListener('pointerdown', unlock, { once: true })

    // Dev hooks
    if (import.meta.env.DEV) {
      window.__bgv = video
      window.__lenis = lenis
      window.__ST = ScrollTrigger
    }

    return () => {
      gsap.ticker.remove(raf)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('pointerdown', unlock)
      lenis.destroy()
    }
  }, [videoRef])
}
