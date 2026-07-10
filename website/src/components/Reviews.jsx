// LA TABLE D'ANTONIO SALVATORE — reviews carousel (real testimonials in
// i18n.js → REVIEWS) with the aggregate rating badge from config.
import { useEffect, useRef, useState } from 'react'
import { RESTAURANT } from '../config/restaurant'

// e.g. 4.6 → 4 full + 1 half star out of 5
function RatingStars({ value }) {
  return (
    <span className="rating-badge__stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <span key={i} className="rating-star">
            <span className="rating-star__dim">★</span>
            <span className="rating-star__fill" style={{ width: `${fill * 100}%` }}>★</span>
          </span>
        )
      })}
    </span>
  )
}

export default function Reviews({ tr }) {
  const items = tr.reviews.items
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000)
    return () => clearInterval(timer.current)
  }, [paused, items.length])

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length)

  return (
    <section id="reviews" className="section reviews" aria-label={tr.reviews.label}>
      <div className="section__head" data-reveal>
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.reviews.label}</span>
      </div>
      <div className="reviews__top" data-reveal>
        <h2 className="reviews__title">{tr.reviews.title}</h2>
        <div className="rating-badge" aria-label={`${RESTAURANT.rating} / 5`}>
          <span className="rating-badge__value">{RESTAURANT.rating.toFixed(1)}</span>
          <span className="rating-badge__scale">/ 5</span>
          <RatingStars value={RESTAURANT.rating} />
        </div>
      </div>

      <div
        className="reviews__carousel glass"
        data-reveal
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="reviews__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((r, i) => (
            <figure className="review" key={i} aria-hidden={i !== index}>
              <div className="review__stars" aria-label={`${r.stars}/5`}>
                {'★'.repeat(r.stars)}
                <span className="review__stars-dim">{'★'.repeat(5 - r.stars)}</span>
              </div>
              <blockquote className="review__text">« {r.text} »</blockquote>
              <figcaption className="review__name">— {r.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="reviews__nav">
          <button onClick={() => go(-1)} aria-label="Previous review">←</button>
          <div className="reviews__dots" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Review ${i + 1}`}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next review">→</button>
        </div>
      </div>
    </section>
  )
}
