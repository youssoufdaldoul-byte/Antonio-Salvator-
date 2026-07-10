// MAISON LUMIÈRE — customer reviews carousel (placeholder testimonials,
// easy to replace in i18n.js → reviews.items)
import { useEffect, useRef, useState } from 'react'

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
      <h2 className="reviews__title" data-reveal>{tr.reviews.title}</h2>

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
