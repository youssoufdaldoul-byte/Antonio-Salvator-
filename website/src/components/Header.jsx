// MAISON LUMIÈRE — fixed premium header
import { useEffect, useState } from 'react'
import { LANGS } from '../i18n'
import { RESTAURANT } from '../config/restaurant'

// "Antonio Salvatore" → "Antonio" + amber "Salvatore" for the logo lockup.
const [BRAND_FIRST, ...BRAND_REST] = RESTAURANT.nameShort.split(' ')
const BRAND_ACCENT = BRAND_REST.join(' ')

export default function Header({ tr, lang, setLang, menuOpen, onToggleMenu, onReserve, onHome }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="header__brand" onClick={onHome} aria-label={`${RESTAURANT.name} — accueil`}>
        {BRAND_FIRST} <em>{BRAND_ACCENT}</em>
      </button>
      <div className="header__side">
        <div className="lang-switch glass" role="group" aria-label="Langue">
          {LANGS.map((l) => (
            <button
              key={l}
              className={lang === l ? 'is-active' : ''}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="btn header__reserve" onClick={onReserve}>
          {tr.nav.reserve}
        </button>
        <button
          className={`burger ${menuOpen ? 'is-open' : ''}`}
          onClick={onToggleMenu}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
