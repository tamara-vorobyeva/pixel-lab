export type Dim = 'code' | 'design' | 'ai' | 'logic' | 'robot' | 'social' | 'games'

export interface Profession {
  id: string
  name: string
  short: string
  icon: string // lucide icon name key (see components/Icon)
  tone: 'lilac' | 'pink' | 'sky'
  summary: string
  easy: string
  tasks: string[]
  training: string[]
  skills: string[]
  jobs: string[]
  access: string[]
  weights: Partial<Record<Dim, number>>
}

export const professions: Profession[] = [
  {
    id: 'informatica', name: 'Ingeniería informática', short: 'Ingeniera informática', icon: 'cpu', tone: 'lilac',
    summary: 'Diseña y construye sistemas, programas y aplicaciones que usamos cada día, desde el móvil hasta los servicios del hospital.',
    easy: 'Creas programas para ordenadores y móviles.',
    tasks: ['Analizar qué necesita un programa', 'Escribir y revisar código', 'Probar y corregir errores', 'Trabajar en equipo con otras áreas'],
    training: ['Grado en Ingeniería Informática (4 años)', 'FP Grado Superior: DAM o DAW', 'Cursos online de programación'],
    skills: ['Pensamiento lógico', 'Curiosidad', 'Trabajo en equipo', 'Paciencia para resolver problemas'],
    jobs: ['Desarrolladora de software', 'Arquitecta de sistemas', 'Consultora tecnológica', 'Administradora de sistemas'],
    access: ['Lectores de pantalla (NVDA, VoiceOver) y líneas braille en el editor de código', 'Dictado por voz para programar', 'Teletrabajo y horarios flexibles', 'Temas de alto contraste y ampliación en el editor'],
    weights: { code: 2, logic: 2 },
  },
  {
    id: 'videojuegos', name: 'Desarrollo de videojuegos', short: 'Desarrolladora de videojuegos', icon: 'gamepad', tone: 'pink',
    summary: 'Crea juegos: programa mecánicas, diseña niveles y personajes, y piensa en cómo se siente quien juega.',
    easy: 'Creas videojuegos con tu equipo.',
    tasks: ['Programar cómo funciona el juego', 'Diseñar niveles y personajes', 'Probar el juego con jugadoras', 'Hacer juegos accesibles para todas las personas'],
    training: ['Grado en Diseño y Desarrollo de Videojuegos', 'FP Grado Superior: DAM o Animaciones 3D, Juegos y Entornos Interactivos', 'Cursos de motores de juego (Unity, Godot)'],
    skills: ['Creatividad', 'Programación', 'Contar historias', 'Trabajo en equipo'],
    jobs: ['Programadora de gameplay', 'Diseñadora de niveles', 'Tester de accesibilidad en juegos', 'Artista técnica'],
    access: ['Mandos adaptados y remapeo de controles', 'Herramientas de diseño con soporte de lector de pantalla', 'Subtítulos y señales visuales en reuniones y playtests', 'Estudios con teletrabajo'],
    weights: { games: 3, code: 1.5, design: 1 },
  },
  {
    id: 'ia', name: 'Inteligencia artificial', short: 'Ingeniera de IA', icon: 'brain', tone: 'sky',
    summary: 'Enseña a los ordenadores a aprender de los datos para reconocer voz, imágenes o ayudar a tomar decisiones de forma justa.',
    easy: 'Enseñas a los ordenadores a aprender.',
    tasks: ['Preparar y limpiar datos', 'Entrenar modelos de IA', 'Revisar que la IA no discrimine', 'Explicar resultados a otras personas'],
    training: ['Grado en Ingeniería Informática o Matemáticas + máster en IA', 'Grado en Inteligencia Artificial', 'Cursos online gratuitos de introducción a la IA'],
    skills: ['Matemáticas básicas', 'Programación (Python)', 'Pensamiento crítico', 'Ética'],
    jobs: ['Ingeniera de machine learning', 'Investigadora en IA', 'Especialista en IA responsable', 'Ingeniera de IA accesible'],
    access: ['Notebooks compatibles con lector de pantalla', 'Dictado por voz y asistentes de código', 'Trabajo remoto y asíncrono', 'Documentación en formatos accesibles'],
    weights: { ai: 3, logic: 1, code: 1 },
  },
  {
    id: 'ciberseguridad', name: 'Ciberseguridad', short: 'Analista de ciberseguridad', icon: 'shield', tone: 'lilac',
    summary: 'Protege a personas y empresas de ataques informáticos: encuentra fallos antes que los delincuentes y responde a incidentes.',
    easy: 'Proteges ordenadores y datos de ataques.',
    tasks: ['Buscar fallos de seguridad', 'Vigilar sistemas', 'Responder a incidentes', 'Formar a otras personas en seguridad'],
    training: ['Grado en Ingeniería Informática o Ciberseguridad', 'FP Grado Superior: ASIR + curso de especialización en ciberseguridad', 'Retos CTF y cursos online'],
    skills: ['Pensamiento lógico', 'Atención al detalle', 'Curiosidad', 'Ética'],
    jobs: ['Analista SOC', 'Pentester (hacker ética)', 'Auditora de seguridad', 'Especialista en privacidad'],
    access: ['Herramientas de terminal muy compatibles con lectores de pantalla', 'Turnos y teletrabajo adaptables', 'Alertas visuales y sonoras configurables', 'Ampliadores de pantalla'],
    weights: { logic: 2.5, code: 1 },
  },
  {
    id: 'robotica', name: 'Robótica', short: 'Ingeniera robótica', icon: 'bot', tone: 'pink',
    summary: 'Diseña robots que ayudan en fábricas, hospitales o en casa, incluyendo productos de apoyo como exoesqueletos.',
    easy: 'Diseñas y programas robots.',
    tasks: ['Diseñar piezas y circuitos', 'Programar el movimiento del robot', 'Probar en simulador', 'Mejorar productos de apoyo'],
    training: ['Grado en Ingeniería Robótica, Electrónica o Mecatrónica', 'FP Grado Superior: Automatización y Robótica Industrial', 'Kits y cursos de Arduino'],
    skills: ['Creatividad técnica', 'Matemáticas y física', 'Programación', 'Resolver problemas'],
    jobs: ['Ingeniera de robótica', 'Programadora de robots', 'Diseñadora de productos de apoyo', 'Técnica de automatización'],
    access: ['Simuladores que permiten trabajar sin manipular piezas', 'Puestos de laboratorio regulables en altura', 'Software CAD con atajos de teclado', 'Trabajo en equipo con reparto de tareas'],
    weights: { robot: 3, logic: 1, code: 1 },
  },
  {
    id: 'uxui', name: 'Diseño UX/UI', short: 'Diseñadora UX/UI', icon: 'palette', tone: 'sky',
    summary: 'Diseña cómo se usan las apps y webs para que sean fáciles, bonitas y accesibles. Tu experiencia vivida es un valor enorme aquí.',
    easy: 'Diseñas apps fáciles de usar para todas.',
    tasks: ['Entrevistar a personas usuarias', 'Dibujar pantallas y prototipos', 'Probar diseños con personas reales', 'Revisar la accesibilidad'],
    training: ['Grado en Diseño o Multimedia', 'Bootcamp de UX/UI', 'Cursos online de diseño accesible'],
    skills: ['Empatía', 'Creatividad', 'Comunicación', 'Observación'],
    jobs: ['Diseñadora UX', 'Diseñadora UI', 'Investigadora UX', 'Especialista en accesibilidad digital'],
    access: ['Herramientas de diseño con zoom y atajos', 'Investigación con personas con discapacidad (tu experiencia suma)', 'Teletrabajo', 'Plantillas y componentes reutilizables'],
    weights: { design: 3, social: 1.5 },
  },
  {
    id: 'datos', name: 'Ciencia de datos', short: 'Científica de datos', icon: 'chart', tone: 'lilac',
    summary: 'Encuentra historias en los datos para responder preguntas: ¿qué barrios necesitan más rampas? ¿qué alumnado abandona y por qué?',
    easy: 'Usas datos para responder preguntas.',
    tasks: ['Recoger y ordenar datos', 'Hacer gráficos', 'Encontrar patrones', 'Contar los resultados de forma clara'],
    training: ['Grado en Ciencia de Datos, Estadística o Matemáticas', 'FP + curso de especialización en IA y Big Data', 'Cursos online de Python y análisis de datos'],
    skills: ['Curiosidad', 'Lógica', 'Comunicación', 'Programación básica'],
    jobs: ['Analista de datos', 'Científica de datos', 'Ingeniera de datos', 'Analista de impacto social'],
    access: ['Gráficos sonificados y tablas accesibles', 'Lectores de pantalla con hojas de cálculo', 'Trabajo remoto', 'Ritmos de trabajo flexibles'],
    weights: { logic: 2, ai: 1.5, code: 1 },
  },
  {
    id: 'web', name: 'Desarrollo web', short: 'Desarrolladora web', icon: 'code', tone: 'pink',
    summary: 'Construye páginas y aplicaciones web. Una puerta de entrada muy rápida al sector, con muchos recursos gratuitos.',
    easy: 'Creas páginas web.',
    tasks: ['Maquetar páginas con HTML y CSS', 'Programar con JavaScript', 'Hacer webs accesibles', 'Publicar y mantener webs'],
    training: ['FP Grado Superior: DAW', 'Bootcamp de desarrollo web', 'Cursos online gratuitos'],
    skills: ['Lógica', 'Creatividad', 'Atención al detalle', 'Aprender de forma autónoma'],
    jobs: ['Desarrolladora front-end', 'Desarrolladora back-end', 'Full stack', 'Especialista en accesibilidad web'],
    access: ['Editores de código con lector de pantalla y braille', 'Control por voz y teclados alternativos', 'Teletrabajo muy extendido', 'Herramientas automáticas de accesibilidad'],
    weights: { code: 2, design: 1.5 },
  },
  {
    id: 'biomedica', name: 'Ingeniería biomédica', short: 'Ingeniera biomédica', icon: 'heart', tone: 'sky',
    summary: 'Une tecnología y salud: crea prótesis, sillas inteligentes, audífonos o apps médicas que mejoran la vida de las personas.',
    easy: 'Creas tecnología para la salud.',
    tasks: ['Diseñar dispositivos médicos', 'Trabajar con personal sanitario', 'Probar productos de apoyo', 'Analizar señales del cuerpo'],
    training: ['Grado en Ingeniería Biomédica (4 años)', 'FP Grado Superior: Electromedicina Clínica', 'Máster en tecnologías de apoyo'],
    skills: ['Ganas de ayudar', 'Ciencias', 'Resolver problemas', 'Trabajo en equipo'],
    jobs: ['Ingeniera clínica', 'Diseñadora de prótesis y ortesis', 'Investigadora en tecnologías de apoyo', 'Especialista en dispositivos médicos'],
    access: ['Laboratorios adaptados y regulables', 'Software de simulación', 'Tu experiencia como usuaria de productos de apoyo es un valor', 'Equipos multidisciplinares'],
    weights: { social: 2.5, robot: 1.5, logic: 1 },
  },
]

export const professionById = (id: string) => professions.find((p) => p.id === id)
