// MAISON LUMIÈRE — Section 3 · La Maison (philosophy)
// Typography + glass only, no imagery. Giant stroked background type,
// four minimal cards with gold border sweep and light bloom.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Maison({ tr }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // slow drift of the giant background type against scroll
      gsap.fromTo(
        '.maison__bigtype',
        { xPercent: -56 },
        {
          xPercent: -44,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.4,
          },
        },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="maison" className="section maison" ref={rootRef}>
      <div className="maison__bigtype" aria-hidden="true">
        {tr.maison.bigtype}
      </div>
      <div className="section__head" data-reveal>
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.maison.label}</span>
      </div>
      <p className="maison__intro" data-reveal>
        {tr.maison.intro}
      </p>
      <div className="maison__grid" data-reveal-group>
        {tr.maison.cards.map((c) => (
          <article className="m-card glass" key={c.num}>
            <span className="m-card__num">{c.num}</span>
            <h3 className="m-card__title">{c.title}</h3>
            <p className="m-card__text">{c.text}</p>
            <span className="m-card__glow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
