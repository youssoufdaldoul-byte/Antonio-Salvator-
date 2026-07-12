// LA TABLE D'ANTONIO SALVATORE — fullscreen menu, the gateway to the pages.
// Data-driven NAV: section items scroll on "/", route items navigate.
// Each link swaps an elegant visual preview on hover. Adding a future page
// is one entry in NAV + one PREVIEWS line.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'

// type 'section' → id on the home page · type 'route' → router path
const NAV = [
  { key: 'home', type: 'route', to: '/', trKey: 'home' },
  { key: 'maison', type: 'route', to: '/maison', trKey: 'maison' },
  { key: 'menu', type: 'section', id: 'menu', trKey: 'menu' },
  { key: 'tables', type: 'route', to: '/tables', trKey: 'tables' },
  { key: 'maisons', type: 'route', to: '/maisons', trKey: 'maisons' },
  { key: 'boutique', type: 'route', to: '/boutique', trKey: 'boutique' },
  { key: 'events', type: 'route', to: '/evenements', trKey: 'events' },
  { key: 'ambiance', type: 'section', id: 'ambiance', trKey: 'ambiance' },
  { key: 'reservation', type: 'section', id: 'reservation', trKey: 'reserve' },
]

const PREVIEWS = {
  home: { src: '/images/interior-hall.webp', label: 'La salle' },
  maison: { src: '/images/kitchen-scene.webp', fallback: '/images/detail-bar.webp', label: 'La cuisine' },
  tables: { src: '/images/table-vue.webp', fallback: '/images/detail-table.webp', label: 'Les tables' },
  maisons: { src: '/images/house-monaco.webp', fallback: '/images/terrace-night.webp', label: 'Nos maisons' },
  boutique: { src: '/products/product-1.webp', fallback: '/images/detail-bar.webp', label: 'La boutique' },
  events: { src: '/images/event-harbour.webp', fallback: '/images/terrace-night.webp', label: 'Événements' },
  menu: { src: '/images/dish-2.webp', label: 'Les plats' },
  ambiance: { src: '/images/terrace-night.webp', label: 'La terrasse' },
  reservation: { src: '/images/terrace-night.webp', label: 'Votre table' },
}

export default function FullscreenMenu({ tr, open, pathname, onSection, onRoute }) {
  const rootRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [failed, setFailed] = useState({})
  const active = hovered ?? (pathname === '/maison' ? 'maison' : 'home')

  const isCurrent = (item) =>
    item.type === 'route' ? pathname === item.to : pathname === '/' && false

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
        .fromTo(links, { y: 56, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06, ease: 'power3.out' }, '-=0.25')
        .fromTo(preview, { autoAlpha: 0, x: 44, scale: 0.97 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
        .fromTo(hint, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, '-=0.5')
    } else {
      gsap.timeline()
        .to(links, { y: -30, autoAlpha: 0, duration: 0.4, stagger: 0.03, ease: 'power2.in' })
        .to(preview, { autoAlpha: 0, x: 30, duration: 0.4, ease: 'power2.in' }, '<')
        .to(el, { autoAlpha: 0, duration: 0.45, ease: 'power2.inOut' }, '-=0.2')
        .set(el, { visibility: 'hidden' })
    }
  }, [open])

  const activate = (item) => {
    if (item.type === 'route') onRoute(item.to)
    else onSection(item.id)
  }

  const previewSrc = (p) => p.src && !failed[p.src] ? p.src : p.fallback && !failed[p.fallback] ? p.fallback : null

  return (
    <div ref={rootRef} className="fs-menu" aria-hidden={!open}>
      <div className="fs-menu__inner">
        <nav className={`fs-menu__nav ${hovered ? 'has-hover' : ''}`} aria-label={tr.menuOverlay.label}>
          {NAV.map((item, i) => (
            <button
              key={item.key}
              className={`fs-link ${active === item.key ? 'is-active' : ''} ${isCurrent(item) ? 'is-current' : ''}`}
              onMouseEnter={() => setHovered(item.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(item.key)}
              onBlur={() => setHovered(null)}
              onClick={() => activate(item)}
            >
              <span className="fs-link__num">0{i + 1}</span>
              {tr.nav[item.trKey]}
            </button>
          ))}
        </nav>

        <div className="fs-menu__preview glass">
          <div className="fs-menu__preview-back" />
          <div className="fs-menu__frame">
            {NAV.map((item) => {
              const p = PREVIEWS[item.key]
              const src = previewSrc(p)
              return src ? (
                <img
                  key={item.key}
                  src={asset(src)}
                  alt=""
                  loading="lazy"
                  className={active === item.key ? 'is-visible' : ''}
                  onError={() => setFailed((f) => ({ ...f, [src]: true }))}
                />
              ) : null
            })}
            {!previewSrc(PREVIEWS[active]) && (
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
