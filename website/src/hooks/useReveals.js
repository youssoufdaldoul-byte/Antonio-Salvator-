// MAISON LUMIÈRE — scroll reveals (Step 2)
// Three declarative attributes, all transform/opacity only (no layout shift):
//   [data-reveal]        single element: fade in + rise + soften-brighten
//   [data-reveal-group]  children stagger together when the group enters
//   [data-reveal-batch]  children reveal individually as EACH enters the
//                        viewport (batched stagger — right for tall grids)
//   [data-line]          thin gold lines draw themselves in
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FROM = { autoAlpha: 0, y: 38, filter: 'blur(5px) brightness(0.7)' }
const TO = {
  autoAlpha: 1,
  y: 0,
  filter: 'blur(0px) brightness(1)',
  duration: 1.2,
  ease: 'power3.out',
  clearProps: 'filter', // keep glass blur/backdrop rendering clean afterwards
}

export default function useReveals(deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, FROM, {
          ...TO,
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      })

      gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
        gsap.fromTo(group.children, FROM, {
          ...TO,
          duration: 1.05,
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: 'top 84%', once: true },
        })
      })

      // Tall grids: each child reveals as it enters, entries arriving in the
      // same frame are staggered as a small batch.
      gsap.utils.toArray('[data-reveal-batch]').forEach((container) => {
        gsap.set(container.children, FROM)
        ScrollTrigger.batch(container.children, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { ...TO, duration: 1.05, stagger: 0.13 }),
        })
      })

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
