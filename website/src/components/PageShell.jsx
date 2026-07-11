// LA TABLE D'ANTONIO SALVATORE — shared shell for the secondary pages.
// Keeps the cinematic universe (charcoal backdrop, warm glow, particles are
// global) with an elegant fade/rise transition on route entry, scroll reset,
// scroll reveals, and the site footer.
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useReveals from '../hooks/useReveals'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)

export default function PageShell({ tr, lang, setLang, children }) {
  const rootRef = useRef(null)
  useReveals([lang])

  useEffect(() => {
    // arrive at the top, softly
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 26 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      )
    })
    // positions depend on the freshly mounted layout
    const t = setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => {
      clearTimeout(t)
      ctx.revert()
    }
  }, [])

  return (
    <div className="page-shell" ref={rootRef}>
      <div className="page-shell__bg" aria-hidden="true" />
      <main className="site-content page-shell__content">
        {children}
        <Footer tr={tr} lang={lang} setLang={setLang} />
      </main>
    </div>
  )
}
