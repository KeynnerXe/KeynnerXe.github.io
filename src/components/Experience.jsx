import { experience } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="section section--paper">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// 04 — Trayectoria</span>
          <h2>Experiencia</h2>
          <hr />
        </div>

        <div ref={ref} className="experience__timeline reveal">
          {experience.map((job, i) => (
            <div key={i} className="experience__item">
              <p className="experience__date">{job.period} &middot; {job.duration}</p>
              <h3 className="experience__role">{job.role}</h3>
              <p className="experience__company">{job.company}</p>
              <ul className="experience__desc">
                {job.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
