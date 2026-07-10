// LA TABLE D'ANTONIO SALVATORE — "Composez votre plat" builder (isolated)
// Premium two-column configurator opened from a dish's "Découvrir" CTA:
//   LEFT  — Step 1 formule cards (choose one) + Step 2 supplement cards (toggle)
//   RIGHT — large live preview of the dish, a running breakdown, and an
//           animated total that recomputes as options change.
// Real state + real arithmetic. Options/prices: config/composeOptions.js.
// Remove this file + its use in MenuSection.jsx to revert.
import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'
import { COMPOSE_BASES, COMPOSE_OPTIONS, basePriceNumber } from '../config/composeOptions'

// Thumbnail with graceful fallback → gold monogram of the first letter.
function Thumb({ src, label }) {
  const [ok, setOk] = useState(Boolean(src))
  if (ok && src) {
    return <img className="build-card__img" src={asset(src)} alt="" loading="lazy" onError={() => setOk(false)} />
  }
  return (
    <span className="build-card__mono" aria-hidden="true">
      {(label || '?').trim().charAt(0)}
    </span>
  )
}

export default function ComposeModal({ dish, index, lang, tr, onClose }) {
  const c = tr.compose
  const overlayRef = useRef(null)
  const panelRef = useRef(null)
  const totalRef = useRef(null)

  const [baseId, setBaseId] = useState(COMPOSE_BASES[0].id)
  const [selected, setSelected] = useState(() => new Set())

  const labelOf = (o) => o.label[lang] || o.label.fr
  const dishPrice = useMemo(() => basePriceNumber(dish.price), [dish.price])
  const base = COMPOSE_BASES.find((b) => b.id === baseId) || COMPOSE_BASES[0]
  const addons = useMemo(
    () => COMPOSE_OPTIONS.filter((o) => !o.dish || o.dish === index),
    [index],
  )
  const chosenAddons = addons.filter((o) => selected.has(o.id))
  const total = dishPrice + base.delta + chosenAddons.reduce((s, o) => s + o.price, 0)

  const baseThumb = (b) => (b.thumbDish ? `/images/dish-${index}.webp` : b.thumb)

  // open animation + body-scroll lock
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    if (window.__lenis) window.__lenis.stop()
    const tl = gsap.timeline()
    tl.set(overlayRef.current, { autoAlpha: 0 })
      .to(overlayRef.current, { autoAlpha: 1, duration: 0.35, ease: 'power2.out' })
      .fromTo(panelRef.current, { autoAlpha: 0, y: 40, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out' }, '-=0.15')
      .fromTo(panelRef.current.querySelectorAll('.build-card'),
        { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.035, ease: 'power2.out' }, '-=0.3')
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      if (window.__lenis) window.__lenis.start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // animated count on the total (tween a proxy, write into the node)
  const prevTotal = useRef(total)
  useEffect(() => {
    const node = totalRef.current
    if (!node) return
    const proxy = { v: prevTotal.current }
    gsap.to(proxy, {
      v: total, duration: 0.5, ease: 'power2.out',
      onUpdate: () => { node.textContent = `${Math.round(proxy.v)} €` },
    })
    gsap.fromTo(node, { scale: 1.12, color: '#e0a458' }, { scale: 1, color: '#f2ead9', duration: 0.5, ease: 'power2.out' })
    prevTotal.current = total
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
      <div className="compose-panel compose-panel--builder glass" ref={panelRef}>
        <button className="compose-close" onClick={close} aria-label={c.close}>
          <span /><span />
        </button>

        <div className="compose-builder">
          {/* LEFT — options */}
          <div className="compose-left">
            <span className="label label--gold compose-eyebrow">{c.title}</span>

            <section className="compose-step">
              <h4 className="compose-step__title">{c.step1}</h4>
              <div className="build-grid">
                {COMPOSE_BASES.map((b) => (
                  <button
                    key={b.id}
                    className={`build-card ${baseId === b.id ? 'is-selected' : ''}`}
                    onClick={() => setBaseId(b.id)}
                    aria-pressed={baseId === b.id}
                  >
                    <span className="build-card__thumb"><Thumb src={baseThumb(b)} label={labelOf(b)} /></span>
                    <span className="build-card__name">{labelOf(b)}</span>
                    <span className="build-card__price">{b.delta === 0 ? c.included : `+${b.delta} €`}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="compose-step">
              <h4 className="compose-step__title">{c.step2}</h4>
              <div className="build-grid">
                {addons.map((o) => {
                  const on = selected.has(o.id)
                  return (
                    <button
                      key={o.id}
                      className={`build-card build-card--addon ${on ? 'is-selected' : ''}`}
                      onClick={() => toggle(o.id)}
                      aria-pressed={on}
                    >
                      <span className="build-card__thumb">
                        <Thumb src={o.thumb} label={labelOf(o)} />
                        <span className="build-card__badge" aria-hidden="true">{on ? '✓' : '+'}</span>
                      </span>
                      <span className="build-card__name">{labelOf(o)}</span>
                      <span className="build-card__price">+{o.price} €</span>
                    </button>
                  )
                })}
              </div>
            </section>
          </div>

          {/* RIGHT — live preview */}
          <div className="compose-right">
            <div className="compose-preview">
              <span className="compose-preview__glow" aria-hidden="true" />
              <span className="compose-preview__steam" aria-hidden="true" />
              <img className="compose-preview__img" src={asset(`/images/dish-${index}.webp`)} alt={dish.name} />
            </div>
            <div className="compose-preview__caption">
              <span className="label label--gold">{c.yourDish}</span>
              <h3 className="compose-preview__name">{dish.name}</h3>
              <p className="compose-preview__style">{dish.desc}</p>
            </div>

            <ul className="compose-breakdown">
              <li className="compose-line compose-line--base">
                <span>{dish.name}</span>
                <span>{dishPrice} €</span>
              </li>
              {base.delta > 0 && (
                <li className="compose-line">
                  <span>{labelOf(base)}</span>
                  <span>+{base.delta} €</span>
                </li>
              )}
              {chosenAddons.map((o) => (
                <li className="compose-line" key={o.id}>
                  <span>{labelOf(o)}</span>
                  <span>+{o.price} €</span>
                </li>
              ))}
            </ul>

            <div className="compose-summary">
              <div className="compose-total">
                <span className="compose-total__label">{c.total}</span>
                <span className="compose-total__value" ref={totalRef}>{total} €</span>
              </div>
              <button className="btn compose-order" onClick={close}>
                {c.order}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
