// MAISON LUMIÈRE — Section 2 · L'Expérience (pinned story, Phase 10)
// The section pins while the background video keeps scrubbing; three
// editorial lines cross-fade one by one with kinetic keyword emphasis.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Wrap the keyword of each line in an italic amber <span class="kw">.
function emphasize(line, keywords) {
  const kw = keywords.find((k) => line.toLowerCase().includes(k.toLowerCase()))
  if (!kw) return line
  const idx = line.toLowerCase().indexOf(kw.toLowerCase())
  return (
    <>
      {line.slice(0, idx)}
      <span className="kw">{line.slice(idx, idx + kw.length)}</span>
      {line.slice(idx + kw.length)}
    </>
  )
}

export default function Experience({ tr }) {
  const rootRef = useRef(null)
  const [step, setStep] = useState(0)
  const lineCount = tr.experience.lines.length

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 761px)', () => {
        const lines = gsap.utils.toArray('.exp-line')
        gsap.set(lines, { autoAlpha: 0, y: 60, scale: 0.98 })
        gsap.set(lines[0], { autoAlpha: 1, y: 0, scale: 1 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: '+=220%',
            pin: true,
            scrub: 0.8,
            onUpdate: (self) => {
              setStep(Math.min(lineCount - 1, Math.floor(self.progress * lineCount)))
            },
          },
        })

        lines.forEach((line, i) => {
          if (i > 0) {
            tl.to(lines[i - 1], { autoAlpha: 0, y: -60, scale: 1.02, duration: 1 }, i * 2)
            tl.fromTo(
              line,
              { autoAlpha: 0, y: 60, scale: 0.98 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 1 },
              i * 2 + 0.6,
            )
          }
        })
        tl.to({}, { duration: 0.8 }) // breathing room at the end of the pin

        // kinetic parallax on the keywords while pinned
        gsap.utils.toArray('.exp-line .kw').forEach((kw) => {
          gsap.to(kw, {
            y: -14,
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top top',
              end: '+=220%',
              scrub: 1.2,
            },
          })
        })
      })

      // Mobile: no pin, lines stack with simple reveals.
      mm.add('(max-width: 760px)', () => {
        gsap.utils.toArray('.exp-line').forEach((line) => {
          gsap.from(line, {
            autoAlpha: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: line, start: 'top 85%', once: true },
          })
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [lineCount])

  return (
    <section id="experience" className="section experience" ref={rootRef}>
      <div className="section__head">
        <span className="gold-line" data-line />
        <span className="label label--gold">{tr.experience.label}</span>
      </div>
      <div className="experience__stage">
        {tr.experience.lines.map((group, i) => (
          <div className="exp-line" key={i}>
            {group.map((l, j) => (
              <span key={j}>{emphasize(l, tr.experience.keywords)}</span>
            ))}
          </div>
        ))}
        <div className="experience__progress" aria-hidden="true">
          {tr.experience.lines.map((_, i) => (
            <i key={i} className={i === step ? 'is-active' : ''} />
          ))}
        </div>
      </div>
      <div className="experience__panel glass" data-reveal>
        <h3>{tr.experience.panel.title}</h3>
        <p>{tr.experience.panel.body}</p>
      </div>
    </section>
  )
}
