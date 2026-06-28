import { useState, useEffect } from 'react'
import AsciiRain from './AsciiRain.jsx'

function useAvailable() {
  const [available, setAvailable] = useState(false)
  useEffect(() => {
    const check = () => {
      const h = new Date().getHours()
      setAvailable(h >= 8 && h < 18)
    }
    check()
    const id = setInterval(check, 60_000)
    return () => clearInterval(id)
  }, [])
  return available
}

export default function Hero() {
  const available = useAvailable()
  return (
    <section id="hero" className="hero">

      <AsciiRain />
      <div className="hero__watermark" aria-hidden="true">KR</div>

      <div className="hero__inner">

        <div className="hero__top">
          <span className="hero__index">— 01</span>
          <div className="hero__meta">
            <span className="hero__meta-role">Full Stack Developer</span>
            <span className="hero__meta-sep" aria-hidden="true">·</span>
            <span className="hero__meta-loc">Cartagena, Colombia</span>
            <span
              className="hero__meta-available"
              style={available
                ? { color: '#4ade80', borderColor: 'rgba(74,222,128,0.22)' }
                : { color: '#f87171', borderColor: 'rgba(248,113,113,0.22)' }
              }
            >
              <span
                className="hero__dot"
                aria-hidden="true"
                style={{ background: available ? '#4ade80' : '#f87171' }}
              />
              {available ? 'Disponible · 8am – 6pm' : 'No disponible · 8am – 6pm'}
            </span>
          </div>
        </div>

        <div className="hero__name-block">
          <span className="hero__name hero__name--outline">Keinner</span>
          <span className="hero__name hero__name--fill">Ramos</span>
        </div>

        <div className="hero__rule" />

        <div className="hero__bottom">
          <div className="hero__tagline">
            <p>Tu me dices, yo ejecuto,<br />sin mamadera de gallo.</p>
          </div>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">Ver proyectos</a>
            <a href="#contact" className="btn btn--secondary">Contactar</a>
          </div>
        </div>

      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-track" />
        <span>Scroll</span>
      </div>

    </section>
  )
}
