// MAISON LUMIÈRE — fixed premium header
import { useEffect, useState } from 'react'
import { LANGS } from '../i18n'

export default function Header({ tr, lang, setLang, menuOpen, onToggleMenu, onReserve }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="header__brand" href="#hero" aria-label="MAISON LUMIÈRE — retour en haut">
        MAISON <em>LUMIÈRE</em>
      </a>
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
