// MAISON LUMIÈRE — fullscreen hamburger menu (Phase 11)
// GSAP open/close, oversized preview visual on the right, hover-driven
// preview transitions, dimming of non-hovered links.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'

const PREVIEWS = {
  hero: { src: '/images/interior-hall.png', label: 'La salle' },
  experience: { src: '/images/detail-table.png', label: 'La table' },
  maison: { src: '/images/detail-bar.png', label: 'Le bar' },
  menu: { src: '/images/dish-2.png', label: 'Les plats' },
  ambiance: { src: '/images/terrace-night.png', label: 'La terrasse' },
  reservation: { src: '/images/terrace-night.png', label: 'Votre table' },
}

const IDS = ['hero', 'experience', 'maison', 'menu', 'ambiance', 'reservation']

export default function FullscreenMenu({ tr, open, onNavigate }) {
  const rootRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [failed, setFailed] = useState({})
  const active = hovered ?? 'hero'

  const labels = [
    tr.nav.home,
    tr.nav.experience,
    tr.nav.maison,
    tr.nav.menu,
    tr.nav.ambiance,
    tr.nav.reserve,
  ]

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const links = el.querySelectorAll('.fs-link')
    const preview = el.querySelector('.fs-menu__preview')
    const hint = el.querySelector('.fs-menu__hint')

    if (open) {
      gsap.timeline()
        .set(el, { visibility: 'visible' })
        .fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55, ease: 'power2.out' })
        .fromTo(
          links,
          { y: 56, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.07, ease: 'power3.out' },
          '-=0.25',
        )
        .fromTo(
          preview,
          { autoAlpha: 0, x: 44, scale: 0.97 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.7',
        )
        .fromTo(hint, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, '-=0.5')
    } else {
      gsap.timeline()
        .to(links, { y: -30, autoAlpha: 0, duration: 0.4, stagger: 0.04, ease: 'power2.in' })
        .to(preview, { autoAlpha: 0, x: 30, duration: 0.4, ease: 'power2.in' }, '<')
        .to(el, { autoAlpha: 0, duration: 0.45, ease: 'power2.inOut' }, '-=0.2')
        .set(el, { visibility: 'hidden' })
    }
  }, [open])

  return (
    <div ref={rootRef} className="fs-menu" aria-hidden={!open}>
      <div className="fs-menu__inner">
        <nav className={`fs-menu__nav ${hovered ? 'has-hover' : ''}`} aria-label={tr.menuOverlay.label}>
          {IDS.map((id, i) => (
            <button
              key={id}
              className={`fs-link ${active === id ? 'is-active' : ''}`}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(id)}
              onBlur={() => setHovered(null)}
              onClick={() => onNavigate(id)}
            >
              <span className="fs-link__num">0{i + 1}</span>
              {labels[i]}
            </button>
          ))}
        </nav>

        <div className="fs-menu__preview glass">
          <div className="fs-menu__preview-back" />
          <div className="fs-menu__frame">
            {IDS.map((id) => {
              const p = PREVIEWS[id]
              return failed[p.src] ? null : (
                <img
                  key={id}
                  src={asset(p.src)}
                  alt=""
                  loading="lazy"
                  className={active === id ? 'is-visible' : ''}
                  onError={() => setFailed((f) => ({ ...f, [p.src]: true }))}
                />
              )
            })}
            {failed[PREVIEWS[active].src] && (
              <div className="fs-menu__frame-missing">asset à venir</div>
            )}
            <span className="label label--gold fs-menu__caption">{PREVIEWS[active].label}</span>
          </div>
        </div>
      </div>
      <p className="fs-menu__hint">{tr.menuOverlay.hint}</p>
    </div>
  )
}
