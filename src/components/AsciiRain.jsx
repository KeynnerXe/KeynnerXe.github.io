import { useEffect, useRef } from 'react'

const SPEED  = 0.65
const DIST   = 200
const RADIUS = 1.8

class Node {
  constructor(w, h) {
    this.x  = Math.random() * w
    this.y  = Math.random() * h
    const angle = Math.random() * Math.PI * 2
    const spd   = 0.35 + Math.random() * SPEED
    this.vx = Math.cos(angle) * spd
    this.vy = Math.sin(angle) * spd
  }
  step(w, h) {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > w) this.vx *= -1
    if (this.y < 0 || this.y > h) this.vy *= -1
  }
}

export default function ParticleNetwork() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, nodes, animId

    const init = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      const count = Math.floor((W * H) / 10000)
      nodes = Array.from({ length: Math.min(Math.max(count, 70), 130) },
        () => new Node(W, H))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      for (const n of nodes) n.step(W, H)

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x
          const dy   = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < DIST) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(201,168,76,${(1 - dist / DIST) * 0.2})`
            ctx.lineWidth   = 0.7
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, RADIUS, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.55)'
        ctx.fill()
      }
    }

    init()
    window.addEventListener('resize', init)
    const loop = () => { draw(); animId = requestAnimationFrame(loop) }
    loop()

    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={ref} className="ascii-rain" aria-hidden="true" />
}
