// MAISON LUMIÈRE — fixed scroll-scrubbed background video (layers 0 & 1)
// Paused by default; motion comes exclusively from scroll-driven
// currentTime updates (see hooks/useScrollSystem.js).
import { forwardRef } from 'react'

const BgVideo = forwardRef(function BgVideo(_, ref) {
  return (
    <>
      <video
        id="bgv"
        ref={ref}
        className="bg-video"
        src="/bg.mp4"
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="bg-tint" aria-hidden="true" />
    </>
  )
})

export default BgVideo
