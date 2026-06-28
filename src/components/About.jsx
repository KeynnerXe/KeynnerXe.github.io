import { personal } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// 01 — Sobre mí</span>
          <h2>Quién soy</h2>
          <hr />
        </div>

        <div ref={ref} className="about__grid reveal">
          <div className="about__text">
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className="about__sidebar">
            <div className="about__fact">
              <span className="about__fact-label">Edad</span>
              <span className="about__fact-value">{personal.age} años</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Ubicación</span>
              <span className="about__fact-value">{personal.location}</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Institución</span>
              <span className="about__fact-value">Unicolombo</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Semestre actual</span>
              <span className="about__fact-value">6.º Semestre</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Experiencia laboral</span>
              <span className="about__fact-value">11+ meses</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Disponibilidad</span>
              <span className="about__fact-value">Abierto a oportunidades</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
