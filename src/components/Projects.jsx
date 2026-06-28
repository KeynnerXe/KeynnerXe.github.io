import { projects } from '../data/portfolio.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const sizeClass = {
  featured: 'project-card--featured',
  medium:   'project-card--medium',
  small:    'project-card--small',
}

function ProjectPreview({ project }) {
  if (project.size === 'featured') {
    return (
      <div className="project-card__preview project-card__preview--soon">
        <div className="project-card__soon-content">
          <span className="project-card__soon-label">Coming Soon</span>
          <p className="project-card__soon-sub">Plataforma empresarial en construcción</p>
        </div>
        <div className="project-card__soon-grid" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="project-card__soon-cell" />
          ))}
        </div>
      </div>
    )
  }

  if (!project.screenshot) return null

  return (
    <div className="project-card__preview">
      <img
        src={project.screenshot}
        alt={`Captura de pantalla de ${project.title}`}
        className="project-card__screenshot"
        loading="lazy"
      />
      {project.live && (
        <a
          href={project.live}
          className="project-card__preview-overlay"
          target="_blank"
          rel="noreferrer"
          aria-label={`Visitar ${project.title}`}
        >
          <span className="project-card__preview-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Ver sitio
          </span>
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">// 03 — Trabajo</span>
          <h2>Proyectos</h2>
          <hr />
        </div>

        <div ref={ref} className="projects__grid reveal">
          {projects.map(p => (
            <article
              key={p.id}
              className={`project-card ${sizeClass[p.size]}`}
            >
              {p.wip && p.size !== 'featured' && (
                <span className="project-card__wip-badge">En desarrollo</span>
              )}

              <span className="project-card__label">{p.label}</span>

              <h3 className="project-card__title">{p.title}</h3>

              <p className="project-card__desc">{p.description}</p>

              <div className="project-card__tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              <ProjectPreview project={p} />

              <div className="project-card__links">
                {p.github ? (
                  <a
                    href={p.github}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositorio
                  </a>
                ) : (
                  <span className="project-card__link project-card__link--disabled">
                    Repositorio privado
                  </span>
                )}
                {p.live ? (
                  <a
                    href={p.live}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    En producción
                  </a>
                ) : (
                  <span className="project-card__link project-card__link--disabled">
                    {p.wip ? 'En construcción' : 'Sin sitio'}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
