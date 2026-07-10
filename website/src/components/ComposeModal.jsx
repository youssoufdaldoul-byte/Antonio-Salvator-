// MAISON LUMIÈRE — "Composez votre plat" interactive module (isolated)
// Opens from a dish's "Découvrir" CTA. The guest toggles gastronomic
// supplements; the total recomputes live (base + selected supplements).
// Self-contained: remove this file + the ComposeModal usage in
// MenuSection.jsx to revert. Options/prices live in config/composeOptions.js.
import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'
import { COMPOSE_OPTIONS, basePriceNumber } from '../config/composeOptions'

export default function ComposeModal({ dish, index, lang, tr, onClose }) {
  const c = tr.compose
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const totalRef = useRef(null)
  const [selected, setSelected] = useState(() => new Set())

  // Supplements available for this dish (or for all dishes).
  const options = useMemo(
    () => COMPOSE_OPTIONS.filter((o) => !o.dish || o.dish === index),
    [index],
  )
  const base = useMemo(() => basePriceNumber(dish.price), [dish.price])
  const total = useMemo(
    () => base + options.filter((o) => selected.has(o.id)).reduce((s, o) => s + o.price, 0),
    [base, options, selected],
  )
  const labelOf = (o) => o.label[lang] || o.label.fr

  // open animation + lock body scroll + focus trap origin
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    if (window.__lenis) window.__lenis.stop()
    const tl = gsap.timeline()
    tl.set(overlayRef.current, { autoAlpha: 0 })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
      .fromTo(
        panelRef.current,
        { autoAlpha: 0, y: 40, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out' },
        '-=0.15',
      )
      .fromTo(
        panelRef.current.querySelectorAll('.compose-opt'),
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' },
        '-=0.25',
      )
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      if (window.__lenis) window.__lenis.start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // pulse the total whenever it changes
  useEffect(() => {
    if (!totalRef.current) return
    gsap.fromTo(
      totalRef.current,
      { scale: 1.14, color: '#e0a458' },
      { scale: 1, color: '#f2ead9', duration: 0.5, ease: 'power2.out' },
    )
  }, [total])

  const close = () => {
    gsap.to(panelRef.current, { autoAlpha: 0, y: 30, scale: 0.98, duration: 0.3, ease: 'power2.in' })
    gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.35, delay: 0.05, ease: 'power2.in', onComplete: onClose })
  }

  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <div
      className="compose-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${c.title} — ${dish.name}`}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="compose-panel glass" ref={panelRef}>
        <button className="compose-close" onClick={close} aria-label={c.close}>
          <span />
          <span />
        </button>

        <div className="compose-head">
          <div className="compose-visual" aria-hidden="true">
            <span className="compose-visual__glow" />
            <img src={asset(`/images/dish-${index}.webp`)} alt="" loading="lazy" />
          </div>
          <div className="compose-head__text">
            <span className="label label--gold">{c.title}</span>
            <h3 className="compose-title">{dish.name}</h3>
            <p className="compose-desc">{dish.desc}</p>
            <p className="compose-base">
              {c.base} · <span>{dish.price}</span>
            </p>
          </div>
        </div>

        <div className="compose-body">
          <span className="label compose-body__label">{c.supplements}</span>
          <ul className="compose-list">
            {options.map((o) => {
              const on = selected.has(o.id)
              return (
                <li key={o.id}>
                  <button
                    className={`compose-opt ${on ? 'is-on' : ''}`}
                    onClick={() => toggle(o.id)}
                    aria-pressed={on}
                  >
                    <span className="compose-opt__check" aria-hidden="true">{on ? '✓' : '+'}</span>
                    <span className="compose-opt__name">{labelOf(o)}</span>
                    <span className="compose-opt__price">+{o.price} €</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="compose-foot">
          <div className="compose-total">
            <span className="compose-total__label">{c.total}</span>
            <span className="compose-total__value" ref={totalRef}>{total} €</span>
          </div>
          <button className="btn compose-order" onClick={close}>
            {c.order} · {total} €
          </button>
        </div>
      </div>
    </div>
  )
}
