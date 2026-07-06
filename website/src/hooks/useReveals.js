// MAISON LUMIÈRE — scroll reveals (Phase 12)
// Elements tagged [data-reveal] fade in, rise slightly and brighten softly.
// Children of [data-reveal-group] are staggered.
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useReveals(deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 42, filter: 'brightness(0.72)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'brightness(1)',
            duration: 1.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          },
        )
      })

      gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
        gsap.fromTo(
          group.children,
          { autoAlpha: 0, y: 36, filter: 'brightness(0.72)' },
          {
            autoAlpha: 1,
            y: 0,
            filter: 'brightness(1)',
            duration: 1.0,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: { trigger: group, start: 'top 84%', once: true },
          },
        )
      })

      // Thin gold lines that draw themselves in.
      gsap.utils.toArray('[data-line]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: 'power2.inOut',
            transformOrigin: 'left center',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        )
      })
    })
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
