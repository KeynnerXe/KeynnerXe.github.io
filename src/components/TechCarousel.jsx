import { techLogos } from '../data/logos.js'

// 4× duplication ensures the track is always wider than any screen.
// The animation moves -25% (= exactly 1 set width), so the loop is seamless.
const ROW_1 = techLogos.slice(0, 8)
const ROW_2 = techLogos.slice(8, 16)
const AI_LOGOS = techLogos.slice(16)

function LogoItem({ icon, name, color, index }) {
  return (
    <div
      className="carousel__logo-item"
      title={name}
      aria-label={name}
    >
      <svg
        className="carousel__logo-svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ fill: color }}
      >
        <path d={icon.path} />
      </svg>
      <span className="carousel__logo-name" aria-hidden="true">{name}</span>
    </div>
  )
}

function CarouselRow({ items, reverse = false }) {
  // 4 copies → animate by -25% = exactly 1 set width, seamless on any screen size
  const copies = [...items, ...items, ...items, ...items]

  return (
    <div className="carousel__row">
      <div className={`carousel__track${reverse ? ' carousel__track--reverse' : ''}`}>
        {copies.map((tech, i) => (
          <LogoItem
            key={`${tech.name}-${i}`}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

export default function TechCarousel() {
  return (
    <div className="carousel" aria-label="Tecnologías utilizadas">
      <div className="carousel__label">
        <span className="section-label">Stack tecnológico</span>
      </div>
      <CarouselRow items={ROW_1} />
      <CarouselRow items={ROW_2} reverse />

      <div className="carousel__divider">
        <span className="carousel__divider-line" />
        <span className="carousel__divider-label">IA &amp; Asistentes</span>
        <span className="carousel__divider-line" />
      </div>

      <div className="carousel__ai-grid">
        {AI_LOGOS.map(tech => (
          <div key={tech.name} className="carousel__logo-item">
            <svg
              className="carousel__logo-svg"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={tech.name}
              style={{ fill: tech.color }}
            >
              <path d={tech.icon.path} />
            </svg>
            <span className="carousel__logo-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
