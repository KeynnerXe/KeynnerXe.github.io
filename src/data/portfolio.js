export const personal = {
  name: 'Keinner Ramos',
  fullName: 'Keinner Manuel Ramos Zuñiga',
  role: 'Full Stack Developer',
  tagline: 'Tu me dices, yo ejecuto, sin mamadera de gallo.',
  bio: [
    'Soy Keinner Ramos, estudiante de Tecnología en Desarrollo de Software y Sistemas de Información en la Fundación Universitaria Colombo Internacional (Unicolombo), actualmente en el 6.º semestre. Tengo 21 años y más de 11 meses de experiencia profesional como desarrollador Full Stack.',
    'Me apasiona construir productos digitales funcionales: desde el diseño de APIs y microservicios hasta interfaces que realmente sirven. Trabajo con lo que el proyecto necesita, no con lo que está de moda.',
    'Actualmente abierto a nuevas oportunidades y colaboraciones.',
  ],
  location: 'Cartagena, Colombia',
  age: 21,
  email: 'kmrzdeprousen@gmail.com',
  github: 'https://github.com/KeynnerXe',
  linkedin: 'https://www.linkedin.com/in/keinner-manuel-ramos-z%C3%BA%C3%B1iga-889088383/',
}

export const skills = [
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Java', 'REST APIs', 'Microservicios'],
  },
  {
    category: 'Cloud & Datos',
    items: ['Supabase', 'PostgreSQL', 'Render', 'Resend'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    category: 'IA & Asistentes',
    items: ['Claude Code', 'OpenAI Codex', 'Prompt Engineering'],
  },
]

export const projects = [
  {
    id: 2,
    size: 'small',
    label: 'Proyecto',
    title: 'GammaTechLabs',
    description:
      'Sitio web de venta de péptidos para empresa especializada en biotecnología. Catálogo de productos, información técnica y presencia digital profesional para el mercado.',
    tags: ['Web', 'HTML', 'CSS', 'JavaScript'],
    screenshot: './screenshots/gammatechlab.png',
    github: null,
    live: 'https://www.gammatechlab.com/',
    wip: false,
  },
  {
    id: 3,
    size: 'small',
    label: 'Proyecto',
    title: 'Fundación Mis Años Dorados',
    description:
      'Sitio web para fundación sin ánimo de lucro dedicada al cuidado del adulto mayor. Presencia digital institucional con información de servicios y canales de contacto.',
    tags: ['Web', 'HTML', 'CSS', 'JavaScript'],
    screenshot: './screenshots/funmiador.png',
    github: null,
    live: 'https://funmiador.org/',
    wip: false,
  },
  {
    id: 4,
    size: 'small',
    label: 'Proyecto',
    title: 'Monarco Viajes',
    description:
      'Sitio web para agencia de viajes con catálogo de destinos. Responsable de la configuración de dominio, hosting y despliegue en producción.',
    tags: ['Dominio', 'Hosting', 'Deploy', 'Web'],
    screenshot: './screenshots/monarco.png',
    github: null,
    live: 'https://monarcovt.com/',
    wip: false,
  },
]

export const experience = [
  {
    role: 'Desarrollador Full Stack',
    company: 'BI PLANNING S.A.S',
    period: 'Jul. 2024 — Presente',
    duration: '11+ meses',
    description: [
      'Desarrollo y mantenimiento de microservicios en Python para procesos de negocio críticos',
      'Integración con servicios en la nube: Supabase (base de datos), Render (despliegue) y Resend (correos)',
      'Construcción de interfaces web con React y manejo de bases de datos PostgreSQL',
      'Diseño de arquitecturas de software junto al equipo técnico',
    ],
  },
]

export const education = [
  {
    title: 'Tecnología en Desarrollo de Software y Sistemas de Información',
    institution: 'Fundación Universitaria Colombo Internacional — Unicolombo',
    period: '2023 — Presente',
    status: '6.º Semestre en curso',
    description:
      'Formación en desarrollo de software, bases de datos, arquitectura de sistemas e ingeniería de software aplicada.',
  },
]
