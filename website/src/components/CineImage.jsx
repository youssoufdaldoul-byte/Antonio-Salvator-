// LA TABLE D'ANTONIO SALVATORE — image with elegant fallback.
// Tries the generated file first; if absent, falls back to an existing
// on-brand visual so pages never look broken while assets are pending.
import { useState } from 'react'
import { asset } from '../asset'

export default function CineImage({ src, fallback, alt, className }) {
  const [current, setCurrent] = useState(src)
  return (
    <img
      className={className}
      src={asset(current)}
      alt={alt}
      loading="lazy"
      onError={() => current !== fallback && setCurrent(fallback)}
    />
  )
}
