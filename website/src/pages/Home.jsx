// LA TABLE D'ANTONIO SALVATORE — home page (the original one-page experience)
// Owns the scroll-scrubbed background video + cinematic entrance; the other
// routes use PageShell with a static backdrop instead.
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useEntrance from '../hooks/useEntrance'
import useReveals from '../hooks/useReveals'

import BgVideo from '../components/BgVideo'
import EntranceVeil from '../components/EntranceVeil'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Maison from '../components/Maison'
import MenuSection from '../components/MenuSection'
import Ambiance from '../components/Ambiance'
import Reviews from '../components/Reviews'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

export default function Home({ tr, lang, setLang, videoRef, onReserve }) {
  const location = useLocation()

  useEntrance(videoRef)
  useReveals([lang])

  // Arriving from another page with a section target (menu link / Réserver).
  // Runs once per navigation (location.state identity changes on navigate).
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const t = setTimeout(() => {
      const el = document.getElementById(target)
      if (el && window.__lenis) window.__lenis.scrollTo(el, { duration: 1.4 })
      else el?.scrollIntoView({ behavior: 'smooth' })
    }, 450)
    return () => clearTimeout(t)
  }, [location.state])

  return (
    <>
      <BgVideo ref={videoRef} />
      <EntranceVeil />
      <main className="site-content">
        <Hero tr={tr} onReserve={onReserve} />
        <Experience tr={tr} />
        <Maison tr={tr} />
        <MenuSection tr={tr} lang={lang} />
        <Ambiance tr={tr} />
        <Reservation tr={tr} tableRequest={location.state?.table || ''} />
        <Reviews tr={tr} />
        <Footer tr={tr} lang={lang} setLang={setLang} />
      </main>
    </>
  )
}
