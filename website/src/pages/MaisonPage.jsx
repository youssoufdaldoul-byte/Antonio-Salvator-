// LA TABLE D'ANTONIO SALVATORE — Page · La Maison (the chef & the team)
// Narrative cinematic page: journey, philosophy, brigade. Generated kitchen
// imagery with graceful fallbacks to existing ambiance photography.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import PageShell from '../components/PageShell'
import CineImage from '../components/CineImage'

gsap.registerPlugin(ScrollTrigger)

export default function MaisonPage({ tr, lang, setLang, onReserve }) {
  const c = tr.chef
  const rootRef = useRef(null)

  // slow parallax drift on the full-bleed figures
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chef-figure img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [lang])

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="chef-page" ref={rootRef}>
        <header className="section chef-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        <figure className="chef-figure chef-figure--wide" data-reveal>
          <CineImage
            src="/images/kitchen-scene.webp"
            fallback="/images/detail-bar.webp"
            alt={c.captions[0]}
          />
          <figcaption className="label">{c.captions[0]}</figcaption>
        </figure>

        <blockquote className="chef-quote" data-reveal>
          <span>«&nbsp;{c.q1}&nbsp;»</span>
          <cite>— Antonio Salvatore</cite>
        </blockquote>

        <section className="section chef-duo">
          <figure className="chef-figure chef-figure--portrait" data-reveal>
            <CineImage
              src="/images/plating-hands.webp"
              fallback="/images/detail-table.webp"
              alt={c.captions[1]}
            />
            <figcaption className="label">{c.captions[1]}</figcaption>
          </figure>
          <div className="chef-blocks" data-reveal-group>
            {c.blocks.map((b) => (
              <article className="chef-block glass" key={b.num}>
                <span className="m-card__num">{b.num}</span>
                <h3 className="chef-block__title">{b.title}</h3>
                <p className="chef-block__text">{b.text}</p>
              </article>
            ))}
          </div>
        </section>

        <figure className="chef-figure chef-figure--wide" data-reveal>
          <CineImage
            src="/images/kitchen-pass.webp"
            fallback="/images/interior-hall.webp"
            alt={c.captions[2]}
          />
          <figcaption className="label">{c.captions[2]}</figcaption>
        </figure>

        <blockquote className="chef-quote" data-reveal>
          <span>«&nbsp;{c.q2}&nbsp;»</span>
          <cite>— Antonio Salvatore</cite>
        </blockquote>

        <div className="chef-cta" data-reveal>
          <button className="btn" onClick={onReserve}>{tr.nav.reserve}</button>
        </div>
      </div>
    </PageShell>
  )
}
