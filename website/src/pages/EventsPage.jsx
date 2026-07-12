// LA TABLE D'ANTONIO SALVATORE — Page · Événements (yearly Monaco calendar)
// A scroll-driven timeline: each event alternates side, its atmospheric
// image and offer revealed on scroll, joined by a thin gold spine.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageShell from '../components/PageShell'
import CineImage from '../components/CineImage'

gsap.registerPlugin(ScrollTrigger)

// event img key → generated file + existing fallback
const EVENT_IMG = {
  race: { src: '/images/event-race.webp', fallback: '/images/terrace-night.webp' },
  harbour: { src: '/images/event-harbour.webp', fallback: '/images/terrace-night.webp' },
  festive: { src: '/images/event-festive.webp', fallback: '/images/detail-bar.webp' },
}

export default function EventsPage({ tr, lang, setLang, onReserve }) {
  const c = tr.events
  const rootRef = useRef(null)

  // the gold spine draws itself as the timeline scrolls
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tl-spine__fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: { trigger: '.tl-track', start: 'top 70%', end: 'bottom 80%', scrub: 0.8 },
        },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [lang])

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="events-page" ref={rootRef}>
        <header className="section events-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        <div className="tl-track">
          <div className="tl-spine" aria-hidden="true"><span className="tl-spine__fill" /></div>
          {c.items.map((ev, i) => {
            const img = EVENT_IMG[ev.img]
            return (
              <article className={`tl-item ${i % 2 ? 'tl-item--right' : ''}`} key={ev.key} data-reveal>
                <div className="tl-item__visual">
                  <CineImage src={img.src} fallback={img.fallback} alt={ev.name} className="tl-item__img" />
                  <span className="tl-item__veil" aria-hidden="true" />
                  <span className="tl-item__month label label--gold">{ev.month}</span>
                </div>
                <div className="tl-item__body">
                  <span className="tl-node" aria-hidden="true" />
                  <h2 className="tl-item__name">{ev.name}</h2>
                  <p className="tl-item__desc">{ev.desc}</p>
                  <div className="tl-item__offer glass">
                    <span className="label label--gold">{c.offerLabel}</span>
                    <p>{ev.offer}</p>
                  </div>
                  <button className="btn btn--ghost tl-item__cta" onClick={onReserve}>{tr.nav.reserve}</button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
