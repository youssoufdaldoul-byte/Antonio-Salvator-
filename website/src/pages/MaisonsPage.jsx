// LA TABLE D'ANTONIO SALVATORE — Page · Nos Maisons (two addresses)
// Monte-Carlo & New York, one family. Two tall cinematic panels with the
// same dark-warm grade; address, hours, click-to-call and reserve on each.
import PageShell from '../components/PageShell'
import CineImage from '../components/CineImage'
import { RESTAURANT } from '../config/restaurant'

const HOUSE_IMG = {
  mc: { src: '/images/house-monaco.webp', fallback: '/images/terrace-night.webp' },
  ny: { src: '/images/house-newyork.webp', fallback: '/images/interior-hall.webp' },
}

export default function MaisonsPage({ tr, lang, setLang, onReserve }) {
  const c = tr.maisons

  return (
    <PageShell tr={tr} lang={lang} setLang={setLang}>
      <div className="maisons-page">
        <header className="section maisons-hero">
          <div className="section__head" data-reveal>
            <span className="gold-line" data-line />
            <span className="label label--gold">{c.label}</span>
          </div>
          <h1 className="chef-hero__title" data-reveal>{c.title}</h1>
          <p className="chef-hero__intro" data-reveal>{c.intro}</p>
        </header>

        <div className="maisons-grid">
          {c.houses.map((h, i) => {
            const img = HOUSE_IMG[h.id]
            const tel = h.phone.replace(/[^0-9+]/g, '')
            const canCall = tel.length >= 6
            return (
              <article className="maison-card" key={h.id} data-reveal>
                <div className="maison-card__visual">
                  <CineImage src={img.src} fallback={img.fallback} alt={`${h.name} — ${h.city}`} className="maison-card__img" />
                  <span className="maison-card__veil" aria-hidden="true" />
                  <span className="maison-card__index" aria-hidden="true">0{i + 1}</span>
                  <div className="maison-card__cityblock">
                    <span className="label label--gold">{h.city}</span>
                    <h2 className="maison-card__name">{h.name}</h2>
                  </div>
                </div>
                <div className="maison-card__body glass">
                  <p className="maison-card__desc">{h.desc}</p>
                  <dl className="maison-card__meta">
                    <div>
                      <dt className="label">{c.addressLabel}</dt>
                      <dd>{h.address}</dd>
                    </div>
                    <div>
                      <dt className="label">{c.hoursLabel}</dt>
                      <dd>{h.hours}</dd>
                    </div>
                  </dl>
                  <div className="maison-card__actions">
                    {canCall ? (
                      <a className="maison-card__phone" href={`tel:${tel}`}>{h.phone}</a>
                    ) : (
                      <span className="maison-card__phone maison-card__phone--muted">{h.phone}</span>
                    )}
                    <button className="btn" onClick={onReserve}>{c.reserveCta}</button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
