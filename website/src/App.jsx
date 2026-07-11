// LA TABLE D'ANTONIO SALVATORE — routed shell
// "/" keeps the original cinematic one-page experience untouched; secondary
// pages mount inside PageShell. HashRouter so deep links work on any static
// host (GitHub Pages, Vercel) without rewrites.
import { useRef, useState, useCallback, useEffect } from 'react'
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import useScrollSystem from './hooks/useScrollSystem'
import { t } from './i18n'

import Particles from './components/Particles'
import Header from './components/Header'
import FullscreenMenu from './components/FullscreenMenu'
import Home from './pages/Home'
import MaisonPage from './pages/MaisonPage'

function Shell() {
  const videoRef = useRef(null)
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const tr = t[lang]
  const navigate = useNavigate()
  const location = useLocation()

  useScrollSystem(videoRef)

  // Keyboard accessibility: Escape closes the fullscreen menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Route-aware navigation: sections live on "/", pages are routes.
  const goSection = useCallback(
    (id) => {
      setMenuOpen(false)
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: id } })
        return
      }
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: 0, duration: 1.6 })
        else el?.scrollIntoView({ behavior: 'smooth' })
      }, 350)
    },
    [location.pathname, navigate],
  )

  const goRoute = useCallback(
    (to) => {
      setMenuOpen(false)
      setTimeout(() => navigate(to), 300)
    },
    [navigate],
  )

  const onReserve = useCallback(() => goSection('reservation'), [goSection])

  return (
    <>
      <Particles />
      <Header
        tr={tr}
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onReserve={onReserve}
        onHome={() => goRoute('/')}
      />
      <FullscreenMenu
        tr={tr}
        open={menuOpen}
        pathname={location.pathname}
        onSection={goSection}
        onRoute={goRoute}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home tr={tr} lang={lang} setLang={setLang} videoRef={videoRef} onReserve={onReserve} />
          }
        />
        <Route
          path="/maison"
          element={<MaisonPage tr={tr} lang={lang} setLang={setLang} onReserve={onReserve} />}
        />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}
