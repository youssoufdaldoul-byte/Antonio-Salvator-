// MAISON LUMIÈRE — warm floating particles + film grain (layer 2)
// A lightweight Three.js points field: tiny candlelit embers drifting
// slowly upward, additive-blended over the video.
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const COUNT = 140

export default function Particles() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 60)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    mount.appendChild(renderer.domElement)

    const positions = new Float32Array(COUNT * 3)
    const speeds = new Float32Array(COUNT)
    const phases = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
      speeds[i] = 0.12 + Math.random() * 0.35
      phases[i] = Math.random() * Math.PI * 2
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // soft round ember sprite
    const cnv = document.createElement('canvas')
    cnv.width = cnv.height = 64
    const g = cnv.getContext('2d')
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32)
    grad.addColorStop(0, 'rgba(224,164,88,1)')
    grad.addColorStop(0.4, 'rgba(201,119,46,0.55)')
    grad.addColorStop(1, 'rgba(201,119,46,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 64, 64)
    const sprite = new THREE.CanvasTexture(cnv)

    const mat = new THREE.PointsMaterial({
      size: 0.16,
      map: sprite,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    let rafId
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      const pos = geo.attributes.position.array
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] += speeds[i] * 0.008
        pos[i * 3] += Math.sin(t * 0.4 + phases[i]) * 0.0022
        if (pos[i * 3 + 1] > 8.5) pos[i * 3 + 1] = -8.5
      }
      geo.attributes.position.needsUpdate = true
      mat.opacity = 0.42 + Math.sin(t * 0.8) * 0.1
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      geo.dispose()
      mat.dispose()
      sprite.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="bg-grain" aria-hidden="true" />
}
