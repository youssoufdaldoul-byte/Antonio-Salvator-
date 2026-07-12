// LA TABLE D'ANTONIO SALVATORE — 3D product presentation (isolated)
// A floating luxury object: a 360° rotation video loop (products have
// volume) → still image → monogram placeholder, with a soft reflection,
// warm gold rim glow, and mouse-driven 3D tilt on desktop / idle float
// on touch. Media: public/products/product-N-360.mp4 + product-N.webp.
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '../asset'

export default function ProductObject({ index, name, image, video }) {
  const stageRef = useRef(null)
  const floatRef = useRef(null)
  const videoRef = useRef(null)
  const [videoOk, setVideoOk] = useState(true)
  const [imgOk, setImgOk] = useState(true)

  // Absolute (CDN) URLs are used as-is; otherwise fall back to a self-hosted
  // file under /products/ resolved against the deploy base path.
  const videoSrc = video || asset(`/products/product-${index}-360.mp4`)
  const imgSrc = image || asset(`/products/product-${index}.webp`)

  const finePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  // touch: soft auto-rotating loop
  useEffect(() => {
    const v = videoRef.current
    if (v && !finePointer && videoOk) v.play().catch(() => {})
  }, [finePointer, videoOk])

  const onEnter = () => {
    if (finePointer && videoOk) videoRef.current?.play().catch(() => {})
    gsap.to(floatRef.current, { y: -14, scale: 1.05, duration: 0.7, ease: 'power3.out' })
  }
  const onMove = (e) => {
    if (!finePointer) return
    const el = stageRef.current
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, {
      rotateY: px * 16, rotateX: -py * 12, duration: 0.6, ease: 'power2.out', transformPerspective: 1000,
    })
  }
  const onLeave = () => {
    if (finePointer) videoRef.current?.pause()
    gsap.to(stageRef.current, { rotateX: 0, rotateY: 0, duration: 1.0, ease: 'elastic.out(1, 0.5)' })
    gsap.to(floatRef.current, { y: 0, scale: 1, duration: 0.9, ease: 'power3.out' })
  }

  return (
    <div
      className="product-stage"
      ref={stageRef}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <span className="product-stage__glow" aria-hidden="true" />
      <div className="product-stage__float" ref={floatRef}>
        {videoOk ? (
          <video
            ref={videoRef}
            className="product-media"
            src={videoSrc}
            poster={imgOk ? imgSrc : undefined}
            muted loop playsInline preload="metadata"
            aria-label={`${name} — rotation 360°`}
            onError={() => setVideoOk(false)}
          />
        ) : imgOk ? (
          <img
            className="product-media"
            src={imgSrc}
            alt={name}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="product-media product-media--missing" aria-hidden="true">
            {name.replace(/[«».“”]/g, '').trim().charAt(0)}
          </div>
        )}
      </div>
      <span className="product-stage__reflection" aria-hidden="true" />
    </div>
  )
}
