// MAISON LUMIÈRE — premium dish card with 3D pop-out composition (Section 4)
// Layers: glass card frame → warm backplate → gold rim glow → dish visual
// (transparent cutout if present, else circular-masked dish photo) floating
// OVER the card's top edge → soft elliptical shadow selling the depth.
// Desktop: mouse tilt + lift + deeper shadow + backplate parallax (GSAP).
// Mobile: no tilt, idle float loop keeps the dish alive.
// Scroll: the dish drifts slightly against the card for extra depth.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '../asset'

gsap.registerPlugin(ScrollTrigger)

export default function DishCard({ index, dish, cta }) {
  const cardRef = useRef(null)
  const popRef = useRef(null)
  const mediaRef = useRef(null)
  const shadowRef = useRef(null)
  const plateRef = useRef(null)
  const [cutoutOk, setCutoutOk] = useState(true)
  const [imgOk, setImgOk] = useState(true)

  const finePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  // Scroll parallax: the dish moves a touch slower than the card.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        popRef.current,
        { y: 18 },
        {
          y: -22,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1,
          },
        },
      )
    }, cardRef)
    return () => ctx.revert()
  }, [])

  const onEnter = () => {
    if (!finePointer) return
    gsap.to(mediaRef.current, { y: -12, scale: 1.05, duration: 0.7, ease: 'power3.out' })
    gsap.to(shadowRef.current, { scaleX: 1.18, opacity: 0.7, duration: 0.7, ease: 'power3.out' })
    gsap.to(plateRef.current, { y: 10, scale: 1.06, opacity: 1, duration: 0.9, ease: 'power3.out' })
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
    // backplate counter-drift for parallax depth
    gsap.to(plateRef.current, { x: px * -14, duration: 0.9, ease: 'power2.out' })
  }

  const onLeave = () => {
    if (!finePointer) return
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 1.0, ease: 'elastic.out(1, 0.55)' })
    gsap.to(mediaRef.current, { y: 0, scale: 1, duration: 0.9, ease: 'power3.out' })
    gsap.to(shadowRef.current, { scaleX: 1, opacity: 0.5, duration: 0.9, ease: 'power3.out' })
    gsap.to(plateRef.current, { x: 0, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' })
  }

  return (
    <article
      ref={cardRef}
      className="dish-card glass"
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="dish-card__backplate" ref={plateRef} aria-hidden="true" />

      <div className="dish-pop" ref={popRef}>
        <span className="dish-pop__glow" aria-hidden="true" />
        <div className="dish-pop__media" ref={mediaRef}>
          {cutoutOk ? (
            <img
              className="dish-pop__img dish-pop__img--cutout"
              src={asset(`/cutouts/dish-${index}-cutout.png`)}
              alt={dish.name}
              loading="lazy"
              onError={() => setCutoutOk(false)}
            />
          ) : imgOk ? (
            <img
              className="dish-pop__img dish-pop__img--round"
              src={asset(`/images/dish-${index}.webp`)}
              alt={dish.name}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="dish-pop__img dish-pop__img--missing" aria-hidden="true">
              plat {index}
            </div>
          )}
        </div>
        <span className="dish-pop__shadow" ref={shadowRef} aria-hidden="true" />
      </div>

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
