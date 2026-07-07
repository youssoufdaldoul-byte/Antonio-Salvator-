// MAISON LUMIÈRE — cinematic scroll-driven single page
// Layers: 0 video · 1 tint · 2 grain/particles · 10 content (see styles.css)
import { useRef, useState, useCallback, useEffect } from 'react'
import useScrollSystem from './hooks/useScrollSystem'
import useReveals from './hooks/useReveals'
import { t } from './i18n'

import BgVideo from './components/BgVideo'
import Particles from './components/Particles'
import Header from './components/Header'
import FullscreenMenu from './components/FullscreenMenu'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Maison from './components/Maison'
import MenuSection from './components/MenuSection'
import Ambiance from './components/Ambiance'
import Reviews from './components/Reviews'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

export default function App() {
  const videoRef = useRef(null)
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const tr = t[lang]

  useScrollSystem(videoRef)
  useReveals([lang])

  // Keyboard accessibility: Escape closes the fullscreen menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const scrollTo = useCallback((id) => {
    setMenuOpen(false)
    // small delay so the menu close animation starts before travel
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: 0, duration: 1.6 })
      else el?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }, [])

  return (
    <>
      <BgVideo ref={videoRef} />
      <Particles />

      <Header
        tr={tr}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onReserve={() => scrollTo('reservation')}
      />
      <FullscreenMenu tr={tr} open={menuOpen} onNavigate={scrollTo} />

      <main className="site-content">
        <Hero tr={tr} onReserve={() => scrollTo('reservation')} />
        <Experience tr={tr} />
        <Maison tr={tr} />
        <MenuSection tr={tr} />
        <Ambiance tr={tr} />
        <Reservation tr={tr} />
        <Reviews tr={tr} />
        <Footer tr={tr} lang={lang} setLang={setLang} />
      </main>
    </>
  )
}
