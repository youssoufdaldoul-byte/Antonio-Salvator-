// MAISON LUMIÈRE — Section 1 · Hero / Arrivée
// The scroll-scrubbed video is the only visual; no static imagery here.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero({ tr, onReserve }) {
  const rootRef = useRef(null)

  // Intro animation on load — the arrival begins before the first scroll.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero__kicker', { autoAlpha: 0, y: 24, duration: 1.0, delay: 0.35 })
        .from('.hero__title', { autoAlpha: 0, y: 60, duration: 1.5, letterSpacing: '0.2em' }, '-=0.6')
        .from('.hero__tagline', { autoAlpha: 0, y: 26, duration: 1.0 }, '-=0.9')
        .from('.hero__sub', { autoAlpha: 0, y: 18, duration: 0.9 }, '-=0.7')
        .from('.hero__chips .chip', { autoAlpha: 0, y: 16, stagger: 0.12, duration: 0.7 }, '-=0.6')
        .from('.hero__cta-row', { autoAlpha: 0, y: 18, duration: 0.8 }, '-=0.5')
        .from('.scroll-hint', { autoAlpha: 0, duration: 1.0 }, '-=0.3')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="section hero" ref={rootRef}>
      <div className="hero__inner">
        <div className="hero__kicker">
          <span className="gold-line" />
          <span className="label label--gold">{tr.hero.kicker}</span>
          <span className="gold-line" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <h1 className="hero__title">
          MAISON <em>LUMIÈRE</em>
        </h1>
        <p className="hero__tagline">{tr.hero.tagline}</p>
        <p className="hero__sub">{tr.hero.sub}</p>
        <div className="hero__chips">
          {tr.hero.chips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <div className="hero__cta-row">
          <button className="btn" onClick={onReserve}>
            {tr.hero.cta}
          </button>
        </div>
      </div>
      <div className="scroll-hint">
        <span>{tr.hero.scroll}</span>
        <span className="scroll-hint__track">
          <span className="scroll-hint__dot" />
        </span>
      </div>
    </section>
  )
}
