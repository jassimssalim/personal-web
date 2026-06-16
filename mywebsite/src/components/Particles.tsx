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

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const dots: Dot[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.0 + 0.8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.35 + 0.06),
      opacity: Math.random() * 0.4 + 0.18,
    }))

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const dark = document.documentElement.classList.contains('dark')
      const rgb = dark ? '168,85,247' : '109,40,217'

      dots.forEach((d, i) => {
        d.x += d.vx
        d.y += d.vy
        if (d.y < -4) { d.y = canvas.height + 4; d.x = Math.random() * canvas.width }
        if (d.x < -4) d.x = canvas.width + 4
        if (d.x > canvas.width + 4) d.x = -4

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
            ctx.strokeStyle = `rgba(${rgb},${0.22 * (1 - dist / 130)})`
            ctx.lineWidth = 0.9
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
