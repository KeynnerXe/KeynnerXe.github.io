import { education } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// 05 — Formación</span>
          <h2>Educación</h2>
          <hr />
        </div>

        <div ref={ref} className="education__grid reveal">
          {education.map((item, i) => (
            <div key={i} className="education-card">
              <p className="education-card__period">{item.period}</p>
              <h3 className="education-card__title">{item.title}</h3>
              <p className="education-card__institution">{item.institution}</p>
              <p className="education-card__status">{item.status}</p>
              <p className="education-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
