import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  opacity: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const dots: Dot[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.35 + 0.06),
      opacity: Math.random() * 0.22 + 0.08,
    }))

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const dark = document.documentElement.classList.contains('dark')
      const rgb = dark ? '88,166,255' : '9,105,218'

      dots.forEach((d, i) => {
        d.x += d.vx
        d.y += d.vy
        if (d.y < -4) { d.y = height + 4; d.x = Math.random() * width }
        if (d.x < -4) d.x = width + 4
        if (d.x > width + 4) d.x = -4

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${d.opacity})`
        ctx.fill()

        for (let j = i + 1; j < dots.length; j++) {
          const dx = d.x - dots[j].x
          const dy = d.y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(${rgb},${0.10 * (1 - dist / 130)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
