// MAISON LUMIÈRE — footer with language switch + legal notice modal
import { useEffect, useState } from 'react'
import { LANGS } from '../i18n'
import { RESTAURANT } from '../config/restaurant'

export default function Footer({ tr, lang, setLang }) {
  const [legalOpen, setLegalOpen] = useState(false)

  useEffect(() => {
    if (!legalOpen) return
    const onKey = (e) => e.key === 'Escape' && setLegalOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [legalOpen])

  return (
    <footer className="footer-block">
      <div className="footer">
        <span>© {new Date().getFullYear()} {RESTAURANT.name} — {tr.reservation.footer}</span>
        <nav className="footer__links" aria-label="Footer">
          {RESTAURANT.instagram && (
            <a href={RESTAURANT.instagram} target="_blank" rel="noreferrer">Instagram</a>
          )}
          {RESTAURANT.facebook && (
            <a href={RESTAURANT.facebook} target="_blank" rel="noreferrer">Facebook</a>
          )}
          <button className="footer__legal" onClick={() => setLegalOpen(true)}>
            {tr.legal.link}
          </button>
        </nav>
        <div className="lang-switch glass" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l} className={lang === l ? 'is-active' : ''}
              onClick={() => setLang(l)} aria-pressed={lang === l}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {legalOpen && (
        <div className="legal-overlay" role="dialog" aria-modal="true" aria-label={tr.legal.title}
          onClick={(e) => e.target === e.currentTarget && setLegalOpen(false)}>
          <div className="legal-modal glass">
            <h3>{tr.legal.title}</h3>
            <p>{tr.legal.body}</p>
            <p className="legal-modal__contact">
              {RESTAURANT.name} — {RESTAURANT.address}, {RESTAURANT.city}
              <br />
              <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}>{RESTAURANT.phone}</a> ·{' '}
              <a href={`mailto:${RESTAURANT.email}`}>{RESTAURANT.email}</a>
            </p>
            <button className="btn btn--ghost" onClick={() => setLegalOpen(false)} autoFocus>
              {tr.legal.close}
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
