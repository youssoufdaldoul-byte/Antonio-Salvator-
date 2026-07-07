// MAISON LUMIÈRE — Section 6 · Réservation (final CTA) + footer
// One large elegant visual (terrace at night) is allowed here.
import { useState } from 'react'
import { LANGS } from '../i18n'
import { asset } from '../asset'

export default function Reservation({ tr, lang, setLang }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section id="reservation" className="section reservation">
      <div className="reservation__stage" data-reveal>
        {imgOk ? (
          <img
            className="reservation__img"
            src={asset('/images/terrace-night.png')}
            alt="La terrasse de MAISON LUMIÈRE, la nuit"
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="reservation__img reservation__img--missing">asset à venir</div>
        )}
        <div className="reservation__veil" />
        <div className="reservation__content">
          <span className="label label--gold">{tr.reservation.label}</span>
          <h2 className="reservation__title">{tr.reservation.title}</h2>
          <p className="reservation__address">{tr.reservation.address}</p>
          <div>
            <button className="btn">{tr.reservation.cta}</button>
          </div>
          <div className="reservation__meta">
            <div>
              <h4>{tr.reservation.hoursTitle}</h4>
              {tr.reservation.hours.map((h) => (
                <p key={h}>{h}</p>
              ))}
            </div>
            <div>
              <h4>{tr.reservation.contactTitle}</h4>
              {tr.reservation.contact.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>{tr.reservation.footer}</span>
        <div className="lang-switch glass" role="group" aria-label="Langue">
          {LANGS.map((l) => (
            <button
              key={l}
              className={lang === l ? 'is-active' : ''}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </footer>
    </section>
  )
}
