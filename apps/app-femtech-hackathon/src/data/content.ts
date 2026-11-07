import type { Dim } from './professions'
import type { AvatarProps } from '../components/Avatar'

/* ---------------- Quiz ---------------- */
export interface QuizOption { id: string; label: string; icon: string; adds: Partial<Record<Dim, number>> }
export interface QuizQuestion { id: string; text: string; easy: string; multi: boolean; options: QuizOption[] }

const scale = (dim: Dim): QuizOption[] => [
  { id: '3', label: '¡Me encanta!', icon: 'heart', adds: { [dim]: 3 } },
  { id: '2', label: 'Me gustaría probar', icon: 'sparkles', adds: { [dim]: 2 } },
  { id: '1', label: 'Un poco', icon: 'thumbs', adds: { [dim]: 1 } },
  { id: '0', label: 'No mucho', icon: 'meh', adds: {} },
]

export const quiz: QuizQuestion[] = [
  {
    id: 'libre', text: '¿Qué te gusta hacer en tu tiempo libre?', easy: '¿Qué te gusta hacer?', multi: true,
    options: [
      { id: 'juegos', label: 'Jugar a videojuegos', icon: 'gamepad', adds: { games: 1 } },
      { id: 'aprender', label: 'Aprender cosas nuevas', icon: 'laptop', adds: { ai: 0.5, logic: 0.5 } },
      { id: 'crear', label: 'Crear y diseñar', icon: 'palette', adds: { design: 1 } },
      { id: 'resolver', label: 'Resolver problemas', icon: 'atom', adds: { logic: 1 } },
      { id: 'equipo', label: 'Trabajar en equipo', icon: 'users', adds: { social: 0.5 } },
      { id: 'ayudar', label: 'Ayudar a los demás', icon: 'heart', adds: { social: 1 } },
    ],
  },
  { id: 'programar', text: '¿Te interesa programar, es decir, dar instrucciones a un ordenador?', easy: '¿Te gustaría programar?', multi: false, options: scale('code') },
  { id: 'disenar', text: '¿Te gusta diseñar cosas: dibujos, pantallas, espacios u objetos?', easy: '¿Te gusta diseñar?', multi: false, options: scale('design') },
  { id: 'ia', text: '¿Te interesa la inteligencia artificial y cómo aprenden las máquinas?', easy: '¿Te interesa la inteligencia artificial?', multi: false, options: scale('ai') },
  { id: 'retos', text: '¿Disfrutas resolviendo retos, puzzles o problemas de lógica?', easy: '¿Te gustan los retos y puzzles?', multi: false, options: scale('logic') },
  { id: 'robots', text: '¿Te llama la atención la robótica y construir aparatos?', easy: '¿Te gustan los robots?', multi: false, options: scale('robot') },
  { id: 'ayudar', text: '¿Te gustaría que tu trabajo ayude directamente a otras personas?', easy: '¿Quieres ayudar a otras personas?', multi: false, options: scale('social') },
]

/* ---------------- Courses ---------------- */
export type CourseType = 'Grado' | 'FP' | 'Curso online' | 'Bootcamp' | 'Beca'
export type Modality = 'Online' | 'Presencial' | 'Híbrida'
export type Level = 'Inicial' | 'Intermedio' | 'Avanzado'
export type Access = 'Subtítulos' | 'Lectura fácil' | 'Lector de pantalla' | 'Intérprete LSE' | 'Movilidad reducida' | 'Ritmo flexible'

export interface Course {
  id: string; title: string; provider: string; type: CourseType; modality: Modality; level: Level
  free: boolean; price: string; duration: string; area: string; icon: string; tone: 'lilac' | 'pink' | 'sky'
  access: Access[]; description: string
}

export const courses: Course[] = [
  { id: 'c1', title: 'Introducción a la programación', provider: 'Plataforma online (demo)', type: 'Curso online', modality: 'Online', level: 'Inicial', free: true, price: 'Gratis', duration: '6 semanas', area: 'web', icon: 'code', tone: 'sky', access: ['Subtítulos', 'Lector de pantalla', 'Ritmo flexible'], description: 'Aprende los conceptos básicos de programación con ejercicios cortos y vídeos subtitulados.' },
  { id: 'c2', title: 'IA para principiantes', provider: 'Universidad abierta (demo)', type: 'Curso online', modality: 'Online', level: 'Inicial', free: true, price: 'Gratis', duration: '30 horas', area: 'ia', icon: 'brain', tone: 'lilac', access: ['Subtítulos', 'Lectura fácil', 'Ritmo flexible'], description: 'Qué es la IA, cómo funciona y cómo afecta a nuestra vida. Sin matemáticas avanzadas.' },
  { id: 'c3', title: 'Analítica de datos', provider: 'Academia digital (demo)', type: 'Curso online', modality: 'Online', level: 'Inicial', free: true, price: 'Gratis', duration: '8 semanas', area: 'datos', icon: 'chart', tone: 'pink', access: ['Subtítulos', 'Lector de pantalla'], description: 'Hojas de cálculo, gráficos y primeros pasos con Python para analizar datos.' },
  { id: 'c4', title: 'Grado en Ingeniería Informática', provider: 'Universidades públicas', type: 'Grado', modality: 'Presencial', level: 'Avanzado', free: false, price: 'Precio público*', duration: '4 años', area: 'informatica', icon: 'cpu', tone: 'lilac', access: ['Movilidad reducida', 'Intérprete LSE', 'Lector de pantalla'], description: 'Formación completa en software, hardware y sistemas. Pregunta al servicio de atención a la diversidad de tu universidad por adaptaciones.' },
  { id: 'c5', title: 'FP Grado Superior: Desarrollo de Aplicaciones Web (DAW)', provider: 'Institutos públicos', type: 'FP', modality: 'Presencial', level: 'Intermedio', free: true, price: 'Gratis (centros públicos)', duration: '2 años', area: 'web', icon: 'code', tone: 'pink', access: ['Movilidad reducida', 'Ritmo flexible'], description: 'Dos años muy prácticos con prácticas en empresa. Existe también en modalidad a distancia en muchas comunidades.' },
  { id: 'c6', title: 'FP Grado Superior: Desarrollo de Aplicaciones Multiplataforma (DAM)', provider: 'FP a distancia', type: 'FP', modality: 'Online', level: 'Intermedio', free: true, price: 'Gratis (centros públicos)', duration: '2-3 años', area: 'informatica', icon: 'laptop', tone: 'sky', access: ['Ritmo flexible', 'Lector de pantalla'], description: 'Aprende a crear apps para móvil y ordenador desde casa, a tu ritmo.' },
  { id: 'c7', title: 'Bootcamp Diseño UX/UI accesible', provider: 'Escuela de diseño (demo)', type: 'Bootcamp', modality: 'Híbrida', level: 'Inicial', free: false, price: '1.900 €', duration: '12 semanas', area: 'uxui', icon: 'palette', tone: 'lilac', access: ['Subtítulos', 'Intérprete LSE', 'Movilidad reducida'], description: 'Proyecto real, portafolio y mentoría. Plazas becadas para mujeres con discapacidad (ejemplo).' },
  { id: 'c8', title: 'Bootcamp Ciberseguridad desde cero', provider: 'Academia tech (demo)', type: 'Bootcamp', modality: 'Online', level: 'Inicial', free: false, price: '2.400 €', duration: '16 semanas', area: 'ciberseguridad', icon: 'shield', tone: 'pink', access: ['Subtítulos', 'Lector de pantalla'], description: 'Redes, sistemas y hacking ético con laboratorios virtuales.' },
  { id: 'c9', title: 'Robótica con Arduino', provider: 'Makerspace inclusivo (demo)', type: 'Curso online', modality: 'Híbrida', level: 'Inicial', free: false, price: '60 €', duration: '5 semanas', area: 'robotica', icon: 'bot', tone: 'sky', access: ['Movilidad reducida', 'Lectura fácil'], description: 'Monta tu primer robot. Kit adaptado y mesas regulables en sesiones presenciales.' },
  { id: 'c10', title: 'Crea tu primer videojuego', provider: 'Comunidad de desarrollo (demo)', type: 'Curso online', modality: 'Online', level: 'Inicial', free: true, price: 'Gratis', duration: '4 semanas', area: 'videojuegos', icon: 'gamepad', tone: 'lilac', access: ['Subtítulos', 'Ritmo flexible'], description: 'Diseña y programa un juego sencillo con un motor gratuito.' },
  { id: 'c11', title: 'Beca de formación digital para mujeres con discapacidad', provider: 'Fundación (ejemplo)', type: 'Beca', modality: 'Online', level: 'Inicial', free: true, price: 'Becada 100%', duration: 'Convocatoria anual', area: 'web', icon: 'award', tone: 'pink', access: ['Lectura fácil', 'Subtítulos', 'Intérprete LSE'], description: 'Cubre matrícula de cursos tecnológicos y un ordenador con productos de apoyo (ejemplo de convocatoria).' },
  { id: 'c12', title: 'Grado en Ingeniería Biomédica', provider: 'Universidades públicas', type: 'Grado', modality: 'Presencial', level: 'Avanzado', free: false, price: 'Precio público*', duration: '4 años', area: 'biomedica', icon: 'heart', tone: 'sky', access: ['Movilidad reducida', 'Intérprete LSE'], description: 'Tecnología aplicada a la salud: biomecánica, dispositivos médicos y productos de apoyo.' },
]

/* ---------------- Inspiring women (fictional demo profiles) ---------------- */
export interface Woman {
  id: string; name: string; role: string; path: string; disability: string; quote: string
  story: string; advice: string[]; avatar: AvatarProps
  captions: string[]
}

export const women: Woman[] = [
  {
    id: 'ana', name: 'Ana Torres', role: 'Ingeniera de IA', path: 'Grado en Matemáticas → Máster en IA', disability: 'Usuaria de silla de ruedas',
    quote: 'La tecnología me ha dado libertad para crear mi propio camino.',
    story: 'De pequeña me decían que eligiera algo “más tranquilo”. Descubrí la programación con 15 años en un taller online y no he parado. Hoy diseño modelos de IA que ayudan a planificar rutas accesibles en la ciudad.',
    advice: ['Pide las adaptaciones que necesitas: es tu derecho, no un favor.', 'Busca comunidad: aprender acompañada es más fácil.', 'Empieza por proyectos pequeños que te ilusionen.'],
    avatar: { skin: '#E8B796', hair: '#6B3E26', style: 'long', glasses: true, bg: '#EDE5FF' },
    captions: ['Hola, soy Ana y trabajo en inteligencia artificial.', 'Uso silla de ruedas desde los ocho años.', 'Con 15 años hice mi primer taller de programación online.', 'Hoy creo modelos que calculan rutas accesibles.', 'Si te gusta la tecnología, este también es tu sitio.'],
  },
  {
    id: 'lucia', name: 'Lucía Pérez', role: 'Desarrolladora web', path: 'FP DAW → Empresa de software', disability: 'Baja visión, usa lector de pantalla',
    quote: 'Programo con los oídos: el lector de pantalla es mi mejor herramienta.',
    story: 'Pensaba que sin ver bien no podría programar. En la FP descubrí que el código es texto y que los lectores de pantalla lo leen perfectamente. Ahora reviso la accesibilidad de webs que usan millones de personas.',
    advice: ['Aprende atajos de teclado: te harán súper rápida.', 'La FP es una vía directa y práctica al empleo.', 'Tu forma de usar la tecnología es un conocimiento valioso.'],
    avatar: { skin: '#C98E6B', hair: '#1F1A17', style: 'bun', glasses: false, bg: '#FFE0EF' },
    captions: ['Soy Lucía, desarrolladora web.', 'Tengo baja visión y uso lector de pantalla.', 'El código es texto, y eso lo hace muy accesible.', 'Mi trabajo es que las webs funcionen para todas las personas.'],
  },
  {
    id: 'maria', name: 'María Gómez', role: 'Data Scientist', path: 'Grado en Estadística → Analista → Científica de datos', disability: 'Sorda, usuaria de lengua de signos',
    quote: 'Los datos hablan un idioma que todo el mundo puede aprender.',
    story: 'En la universidad pedí intérprete de lengua de signos para las clases y subtítulos en los vídeos. Hoy lidero un equipo que analiza datos de empleo para detectar desigualdades de género.',
    advice: ['Solicita intérprete o subtítulos desde el primer día.', 'Las matemáticas se aprenden practicando, no hace falta ser un genio.', 'Busca empresas con políticas de inclusión reales.'],
    avatar: { skin: '#8D5A3B', hair: '#2A1A12', style: 'curly', glasses: false, hearing: true, bg: '#DFF1FF' },
    captions: ['Me llamo María y soy científica de datos.', 'Soy sorda y mi lengua es la lengua de signos.', 'Analizo datos para encontrar desigualdades.', 'Pide siempre las adaptaciones que necesites.'],
  },
  {
    id: 'sara', name: 'Sara Ruiz', role: 'Diseñadora UX', path: 'Bootcamp UX → Agencia de diseño', disability: 'Persona autista',
    quote: 'Mi forma diferente de ver el mundo es mi superpoder en diseño.',
    story: 'Me cuesta el ruido y los cambios inesperados, así que trabajo en remoto con tareas bien definidas. Me encanta investigar cómo usan las apps personas diversas y convertirlo en diseños claros.',
    advice: ['Conoce cómo trabajas mejor y compártelo con tu equipo.', 'Los bootcamps con mentoría ayudan a orientarse.', 'Crea un portafolio con proyectos que te apasionen.'],
    avatar: { skin: '#F1C9A5', hair: '#C9773A', style: 'short', glasses: true, bg: '#EDE5FF' },
    captions: ['Hola, soy Sara, diseñadora UX.', 'Soy autista y trabajo en remoto.', 'Investigo cómo usan las apps personas diversas.', 'Tu forma de pensar puede ser tu superpoder.'],
  },
  {
    id: 'elena', name: 'Elena Martín', role: 'Analista de ciberseguridad', path: 'FP ASIR → Especialización en ciberseguridad', disability: 'Usa prótesis de brazo',
    quote: 'Proteger a otras personas en internet me hace sentir útil cada día.',
    story: 'Empecé con retos de seguridad online. Uso un teclado adaptado y atajos personalizados. Ahora trabajo en un equipo que detecta ataques a hospitales.',
    advice: ['Prueba retos CTF para principiantes, ¡engancha!', 'Personaliza tus herramientas: teclado, ratón, atajos.', 'No esperes a sentirte “preparada” para empezar.'],
    avatar: { skin: '#D9A07A', hair: '#3B2416', style: 'long', glasses: false, bg: '#FFE0EF' },
    captions: ['Soy Elena y trabajo en ciberseguridad.', 'Uso una prótesis y un teclado adaptado.', 'Detecto ataques a hospitales.', 'Empieza con retos pequeños y sigue aprendiendo.'],
  },
]

/* ---------------- Mentors & community ---------------- */
export type MentorKind = 'Profesional' | 'Estudiante' | 'Con discapacidad' | 'Asociación'
export interface Mentor {
  id: string; name: string; role: string; kinds: MentorKind[]; available: boolean
  formats: string[]; topics: string[]; bio: string; avatar?: AvatarProps; icon?: string
}

export const mentors: Mentor[] = [
  { id: 'm1', name: 'Laura García', role: 'Desarrolladora Full Stack', kinds: ['Profesional'], available: true, formats: ['Chat', 'Videollamada con subtítulos'], topics: ['Desarrollo web', 'Primer empleo'], bio: '8 años creando apps. Te ayudo a preparar tu portafolio.', avatar: { skin: '#E3B08C', hair: '#4A2C1C', style: 'long', bg: '#EDE5FF' } },
  { id: 'm2', name: 'Marta López', role: 'Ingeniera de Datos', kinds: ['Profesional', 'Con discapacidad'], available: true, formats: ['Chat', 'Lengua de signos (LSE)'], topics: ['Datos', 'Adaptaciones en el trabajo'], bio: 'Mujer sorda en tecnología. Hablamos en LSE o por chat.', avatar: { skin: '#B97A55', hair: '#20140E', style: 'curly', hearing: true, bg: '#FFE0EF' } },
  { id: 'm3', name: 'Paula Fernández', role: 'UX Designer', kinds: ['Profesional'], available: true, formats: ['Videollamada con subtítulos', 'Email'], topics: ['Diseño UX', 'Bootcamps'], bio: 'Diseño apps de salud. Me encanta revisar portafolios.', avatar: { skin: '#F2CBAA', hair: '#8A4B22', style: 'bun', glasses: true, bg: '#DFF1FF' } },
  { id: 'm4', name: 'Nerea Sánchez', role: 'Estudiante de Ing. Informática', kinds: ['Estudiante', 'Con discapacidad'], available: true, formats: ['Chat'], topics: ['Universidad', 'Adaptaciones de examen'], bio: 'Usuaria de silla de ruedas, 3.º de carrera. Te cuento cómo es la uni de verdad.', avatar: { skin: '#D7A27E', hair: '#2E1C12', style: 'short', bg: '#EDE5FF' } },
  { id: 'm5', name: 'Aitana Ruiz', role: 'Estudiante de FP DAM', kinds: ['Estudiante'], available: false, formats: ['Chat'], topics: ['FP', 'Primeros pasos'], bio: 'Empecé sin saber nada de programación. Si yo puedo, tú también.', avatar: { skin: '#9C6644', hair: '#1A120D', style: 'long', bg: '#FFE0EF' } },
  { id: 'm6', name: 'Irene Morales', role: 'Investigadora en IA', kinds: ['Profesional', 'Con discapacidad'], available: true, formats: ['Lectura fácil', 'Chat', 'Videollamada'], topics: ['IA', 'Neurodiversidad'], bio: 'Persona con TDAH. Te ayudo a organizar tu estudio a tu manera.', avatar: { skin: '#EBC1A0', hair: '#5B3A26', style: 'bun', glasses: true, bg: '#DFF1FF' } },
  { id: 'a1', name: 'Red Tech Inclusiva', role: 'Asociación (ejemplo)', kinds: ['Asociación'], available: true, formats: ['Eventos accesibles', 'Grupo de chat'], topics: ['Comunidad', 'Hackathons'], bio: 'Comunidad de mujeres y personas no binarias con discapacidad en tecnología.', icon: 'users' },
  { id: 'a2', name: 'Chicas STEAM Sin Barreras', role: 'Asociación (ejemplo)', kinds: ['Asociación'], available: true, formats: ['Talleres', 'Mentoría grupal'], topics: ['STEAM', 'Talleres'], bio: 'Talleres accesibles de programación y robótica para adolescentes.', icon: 'sparkles' },
]

/* ---------------- Resources & scholarships ---------------- */
export interface ResourceGroup { id: string; title: string; icon: string; items: { title: string; text: string; tag?: string }[] }

export const resources: ResourceGroup[] = [
  { id: 'becas', title: 'Becas para estudiantes con discapacidad', icon: 'award', items: [
    { title: 'Becas Oportunidad al Talento', text: 'Programa de Fundación ONCE con becas para estudiantes con discapacidad en distintos niveles de formación.', tag: 'Fundación ONCE' },
    { title: 'Becas generales del Ministerio', text: 'Las becas estatales de estudios contemplan condiciones específicas para estudiantes con discapacidad. Consulta la convocatoria vigente.', tag: 'Estatal' },
    { title: 'Becas de tu universidad o comunidad', text: 'Muchas universidades y comunidades autónomas tienen ayudas propias y exención de tasas por discapacidad.', tag: 'Local' },
  ] },
  { id: 'adaptaciones', title: 'Adaptaciones universitarias', icon: 'accessibility', items: [
    { title: 'Servicio de atención a la diversidad', text: 'La mayoría de universidades tienen una unidad de apoyo a estudiantes con discapacidad. Contacta antes de matricularte.' },
    { title: 'Adaptación de exámenes', text: 'Tiempo extra, formatos accesibles, ordenador con productos de apoyo, aula separada o intérprete de LSE.' },
    { title: 'Reserva de plazas', text: 'Existe un cupo de plazas reservadas para estudiantes con discapacidad en el acceso a la universidad.' },
  ] },
  { id: 'apoyo', title: 'Recursos tecnológicos de apoyo', icon: 'laptop', items: [
    { title: 'Lectores de pantalla', text: 'NVDA (gratuito para Windows), VoiceOver (Apple) y TalkBack (Android).', tag: 'Visual' },
    { title: 'Control por voz y dictado', text: 'Incluidos en Windows, macOS, iOS y Android. Permiten escribir y navegar sin teclado.', tag: 'Motora' },
    { title: 'Subtítulos en directo', text: 'Las principales apps de videollamada y los sistemas operativos ofrecen subtítulos automáticos.', tag: 'Auditiva' },
    { title: 'Ampliadores y alto contraste', text: 'Lupa de Windows, Zoom de macOS y modos de color del sistema.', tag: 'Visual' },
  ] },
  { id: 'empleo', title: 'Programas de empleo inclusivo', icon: 'briefcase', items: [
    { title: 'Inserta Empleo', text: 'Entidad de Fundación ONCE para la formación y el empleo de personas con discapacidad.', tag: 'Fundación ONCE' },
    { title: 'Por Talento Digital', text: 'Programa de formación en competencias digitales de Fundación ONCE.', tag: 'Fundación ONCE' },
    { title: 'Prácticas en empresa', text: 'Pregunta en tu centro de FP o universidad por convenios con empresas inclusivas.' },
  ] },
  { id: 'empresas', title: 'Empresas con políticas de inclusión', icon: 'building', items: [
    { title: 'Sello Bequal', text: 'Certificación que reconoce a empresas comprometidas con la inclusión de personas con discapacidad.' },
    { title: 'Qué preguntar en una entrevista', text: '¿Tenéis plan de accesibilidad? ¿Teletrabajo? ¿Cómo gestionáis las adaptaciones del puesto?' },
  ] },
  { id: 'ayudas', title: 'Ayudas para formación', icon: 'wallet', items: [
    { title: 'Ayudas para productos de apoyo', text: 'Comunidades autónomas y fundaciones ofrecen ayudas para ordenadores adaptados, software y otros productos de apoyo.' },
    { title: 'Formación gratuita para el empleo', text: 'Los servicios públicos de empleo ofrecen cursos tecnológicos gratuitos.' },
  ] },
]

/* ---------------- Competences for itinerary step 4 ---------------- */
export const competences = ['Pensamiento lógico', 'Programación básica', 'Comunicación', 'Trabajo en equipo', 'Inglés técnico', 'Uso de herramientas de apoyo', 'Autonomía y organización', 'Creatividad']
