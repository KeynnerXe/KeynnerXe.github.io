import { skills } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="section section--paper">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// 02 — Stack tecnológico</span>
          <h2>Habilidades</h2>
          <hr />
        </div>

        <div ref={ref} className="skills__grid reveal">
          {skills.map((cat, i) => (
            <div
              key={cat.category}
              className={`skill-card reveal-d${i + 1}`}
            >
              <h3>{cat.category}</h3>
              <div className="skill-tags">
                {cat.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
