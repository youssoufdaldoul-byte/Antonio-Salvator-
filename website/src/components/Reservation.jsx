// MAISON LUMIÈRE — Section 6 · Réservation (final CTA + functional form)
// One large elegant visual (terrace at night) is allowed here.
import { useState } from 'react'
import { asset } from '../asset'
import { RESTAURANT } from '../config/restaurant'
import ReservationForm from './ReservationForm'

export default function Reservation({ tr, tableRequest = '' }) {
  const [imgOk, setImgOk] = useState(true)

  const scrollToForm = () => {
    document.getElementById('resa-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section id="reservation" className="section reservation">
      <div className="reservation__stage" data-reveal>
        {imgOk ? (
          <img
            className="reservation__img"
            src={asset('/images/terrace-night.webp')}
            alt={`La terrasse de ${RESTAURANT.name}, la nuit`}
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
          <p className="reservation__address">
            {RESTAURANT.name} —{' '}
            <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer" className="reservation__maplink">
              {RESTAURANT.address}, {RESTAURANT.city}
            </a>
          </p>
          <p className="reservation__phone">
            <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}>{RESTAURANT.phone}</a>
          </p>
          <div>
            {RESTAURANT.bookingUrl ? (
              <a className="btn" href={RESTAURANT.bookingUrl} target="_blank" rel="noreferrer">
                {tr.reservation.cta}
              </a>
            ) : (
              <button className="btn" onClick={scrollToForm}>{tr.reservation.cta}</button>
            )}
          </div>
          <div className="reservation__meta">
            <div>
              <h4>{tr.reservation.hoursTitle}</h4>
              <p>{RESTAURANT.hoursDays}</p>
              <p>{RESTAURANT.hoursService}</p>
            </div>
            <div>
              <h4>{tr.reservation.contactTitle}</h4>
              <p>
                <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer" className="reservation__maplink">
                  {RESTAURANT.address}
                </a>
              </p>
              <p>{RESTAURANT.city}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="resa-form" data-reveal>
        <ReservationForm
          key={tableRequest || 'default'}
          tr={tr}
          initialMessage={tableRequest ? `${tr.tables.reserveCta} — ${tableRequest}` : ''}
        />
      </div>
    </section>
  )
}
