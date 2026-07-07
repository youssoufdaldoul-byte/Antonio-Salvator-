// MAISON LUMIÈRE — premium dish card with 3D pop-out cutout (Section 4)
// Desktop: perspective tilt + dish lift on hover. Mobile: pop-out
// composition kept, tilt disabled.
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'

export default function DishCard({ index, dish, cta }) {
  const cardRef = useRef(null)
  const [cutoutOk, setCutoutOk] = useState(true)

  const finePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  const onMove = (e) => {
    if (!finePointer) return
    const el = cardRef.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, {
      rotateY: px * 9,
      rotateX: -py * 8,
      duration: 0.7,
      ease: 'power2.out',
      transformPerspective: 900,
    })
  }

  const onLeave = () => {
    if (!finePointer) return
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 1.0, ease: 'elastic.out(1, 0.55)' })
  }

  return (
    <article
      ref={cardRef}
      className="dish-card glass"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="dish-card__backplate" aria-hidden="true" />
      {cutoutOk ? (
        <img
          className="dish-card__cutout"
          src={asset(`/cutouts/dish-${index}-cutout.png`)}
          alt={dish.name}
          loading="lazy"
          onError={() => setCutoutOk(false)}
        />
      ) : (
        // Real cutout asset not present yet — show an honest elegant
        // placeholder instead of faking the pop-out effect.
        <div className="dish-card__cutout dish-card__cutout--missing" aria-hidden="true">
          plat {index}
        </div>
      )}
      <div className="dish-card__body">
        <h3 className="dish-card__name">{dish.name}</h3>
        <p className="dish-card__desc">{dish.desc}</p>
        <div className="dish-card__row">
          <span className="dish-card__price">{dish.price}</span>
          <button className="dish-card__cta">{cta}</button>
        </div>
      </div>
    </article>
  )
}
