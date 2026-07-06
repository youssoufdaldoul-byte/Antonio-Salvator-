// MAISON LUMIÈRE — Section 5 · Ambiance / Éditorial
// Huge kinetic serif typography over the scrubbing video; no imagery.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Ambiance({ tr }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // opposing horizontal drift on the giant words as the user scrolls
      gsap.utils.toArray('.ambiance__word').forEach((word, i) => {
        gsap.fromTo(
          word,
          { xPercent: i % 2 === 0 ? -7 : 7 },
          {
            xPercent: i % 2 === 0 ? 4 : -4,
            ease: 'none',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="ambiance" className="section ambiance" ref={rootRef}>
      <div className="section__head">
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.ambiance.label}</span>
      </div>
      <div className="ambiance__words" data-reveal-group>
        {tr.ambiance.words.map((w, i) => (
          <div className="ambiance__word" key={w}>
            {i % 2 === 0 ? <em>{w}</em> : w}
          </div>
        ))}
      </div>
      <p className="ambiance__lines" data-reveal>
        {tr.ambiance.line1}
        <br />
        {tr.ambiance.line2}
      </p>
      <div className="ambiance__tags" data-reveal-group>
        {tr.ambiance.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p className="ambiance__note glass" data-reveal>
        {tr.ambiance.note}
      </p>
    </section>
  )
}
