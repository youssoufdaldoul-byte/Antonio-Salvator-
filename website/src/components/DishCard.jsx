// MAISON LUMIÈRE — premium dish card (Section 4)
// Visual priority: 360° rotation video (dishes-360/dish-N-360.mp4) →
// transparent cutout PNG → honest placeholder. Desktop plays the rotation
// on hover; touch devices soft-loop it. The dish floats above the card.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'

export default function DishCard({ index, dish, cta }) {
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const [videoOk, setVideoOk] = useState(true)
  const [cutoutOk, setCutoutOk] = useState(true)

  const finePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  // Touch devices: soft auto-loop once the video is ready.
  useEffect(() => {
    const v = videoRef.current
    if (v && !finePointer && videoOk) {
      v.play().catch(() => {})
    }
  }, [finePointer, videoOk])

  const onEnter = () => {
    if (finePointer && videoOk) videoRef.current?.play().catch(() => {})
  }

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
    videoRef.current?.pause()
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 1.0, ease: 'elastic.out(1, 0.55)' })
  }

  return (
    <article
      ref={cardRef}
      className="dish-card glass"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="dish-card__backplate" aria-hidden="true" />

      {videoOk ? (
        <video
          ref={videoRef}
          className="dish-card__cutout dish-card__video"
          src={asset(`/dishes-360/dish-${index}-360.mp4`)}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${dish.name} — rotation 360°`}
          onError={() => setVideoOk(false)}
        />
      ) : cutoutOk ? (
        <img
          className="dish-card__cutout"
          src={asset(`/cutouts/dish-${index}-cutout.png`)}
          alt={dish.name}
          loading="lazy"
          onError={() => setCutoutOk(false)}
        />
      ) : (
        // Neither the 360° video nor the cutout asset is present yet —
        // show an honest elegant placeholder instead of faking the effect.
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
