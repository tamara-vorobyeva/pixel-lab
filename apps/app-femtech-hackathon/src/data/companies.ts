/* Companies, job offers, plans and anonymised candidates. All companies and people are fictional demo data. */

export type OfferType = 'Prácticas' | 'Empleo' | 'Programa de talento'

export interface Offer {
  id: string; company: string; color: string; title: string; type: OfferType
  modality: 'Remoto' | 'Híbrido' | 'Presencial'; location: string; area: string
  adaptations: string[]; description: string; salary?: string
}

export const offers: Offer[] = [
  { id: 'o1', company: 'Nubia Software', color: '#6B3FD0', title: 'Prácticas en desarrollo web', type: 'Prácticas', modality: 'Remoto', location: 'España', area: 'web', adaptations: ['Teletrabajo 100 %', 'Horario flexible', 'Equipo con lector de pantalla'], description: '6 meses con mentora asignada. Aprenderás React y accesibilidad web.', salary: 'Beca de 800 €/mes' },
  { id: 'o2', company: 'Datalia', color: '#0B5A8F', title: 'Analista de datos junior', type: 'Empleo', modality: 'Híbrido', location: 'Madrid', area: 'datos', adaptations: ['Intérprete LSE en reuniones', 'Subtítulos en todas las formaciones'], description: 'Equipo de análisis de impacto social. Formación inicial de 2 meses.', salary: '24.000–27.000 €/año' },
  { id: 'o3', company: 'Cibersafe Iberia', color: '#17734A', title: 'Programa Talento Ciber', type: 'Programa de talento', modality: 'Remoto', location: 'España', area: 'ciberseguridad', adaptations: ['Formación a tu ritmo', 'Puesto adaptado en casa', 'Mentoría 1 a 1'], description: '12 meses de formación pagada + contrato. Plazas reservadas para mujeres con discapacidad.', salary: 'Contrato de formación' },
  { id: 'o4', company: 'Medtech Levante', color: '#A3195B', title: 'Prácticas en ingeniería biomédica', type: 'Prácticas', modality: 'Presencial', location: 'Valencia', area: 'biomedica', adaptations: ['Laboratorio accesible', 'Mesas regulables', 'Aparcamiento reservado'], description: 'Diseño y pruebas de productos de apoyo junto a usuarias reales.' },
  { id: 'o5', company: 'Pixelaria Games', color: '#C2571A', title: 'QA y accesibilidad en videojuegos', type: 'Empleo', modality: 'Remoto', location: 'España', area: 'videojuegos', adaptations: ['Teletrabajo', 'Mandos adaptados', 'Comunicación por escrito'], description: 'Prueba juegos y propone mejoras de accesibilidad.', salary: '22.000 €/año' },
  { id: 'o6', company: 'Nubia Software', color: '#6B3FD0', title: 'Diseñadora UX junior', type: 'Empleo', modality: 'Híbrido', location: 'Barcelona', area: 'uxui', adaptations: ['Lectura fácil en documentación', 'Espacio tranquilo', 'Horario flexible'], description: 'Diseño de apps de salud con investigación con usuarias.', salary: '26.000 €/año' },
]

export interface Company { name: string; color: string; sector: string; size: string; highlights: string[] }
export const companies: Company[] = [
  { name: 'Nubia Software', color: '#6B3FD0', sector: 'Software', size: '450 personas', highlights: ['Plan de accesibilidad publicado', 'Teletrabajo para todo el equipo', 'Red interna de mujeres con discapacidad'] },
  { name: 'Datalia', color: '#0B5A8F', sector: 'Datos e IA', size: '120 personas', highlights: ['Intérprete LSE disponible', 'Mentoría interna'] },
  { name: 'Cibersafe Iberia', color: '#17734A', sector: 'Ciberseguridad', size: '800 personas', highlights: ['Programa de talento con plazas reservadas', 'Adaptación del puesto en 15 días'] },
  { name: 'Medtech Levante', color: '#A3195B', sector: 'Salud y biomedicina', size: '210 personas', highlights: ['Instalaciones accesibles', 'Colaboración con asociaciones'] },
]

/* ---------- B2B ---------- */
export const services = [
  { icon: 'briefcase', title: 'Publica ofertas inclusivas', text: 'Llega a chicas formadas y motivadas para trabajar en tecnología. Indica las adaptaciones que ofreces.' },
  { icon: 'search', title: 'Busca talento', text: 'Encuentra candidatas por área, formación y modalidad. Solo ves perfiles de quien ha dado su consentimiento.' },
  { icon: 'accessibility', title: 'Asesoría en adaptaciones', text: 'Te ayudamos a adaptar puestos, procesos de selección y herramientas para que nadie se quede fuera.' },
  { icon: 'award', title: 'Patrocina becas y cursos', text: 'Forma a tu futura plantilla. Tu marca aparece junto a la formación que financias.' },
  { icon: 'users', title: 'Mentoría corporativa', text: 'Tus profesionales acompañan a las usuarias. Impulsa el compromiso de tu equipo.' },
  { icon: 'chart', title: 'Informes de impacto', text: 'Mide contrataciones, retención y diversidad para tus informes de sostenibilidad.' },
]

export interface Plan { name: string; price: string; period: string; featured?: boolean; features: string[]; cta: string }
export const plans: Plan[] = [
  { name: 'Impulsa', price: '0 €', period: 'siempre', features: ['1 oferta activa', 'Perfil de empresa', 'Guía de selección inclusiva'], cta: 'Empezar gratis' },
  { name: 'Talento', price: '249 €', period: 'al mes', featured: true, features: ['Ofertas ilimitadas', 'Búsqueda de candidatas', 'Contacto con candidatas', 'Insignia «Empresa inclusiva»', 'Asesoría en adaptaciones (4 h/mes)'], cta: 'Solicitar demo' },
  { name: 'Partner', price: 'A medida', period: '', features: ['Todo lo del plan Talento', 'Programa de talento propio', 'Patrocinio de becas y cursos', 'Mentoría corporativa', 'Informes de impacto y diversidad'], cta: 'Hablar con ventas' },
]

export interface Candidate { id: string; area: string; level: string; skills: string[]; modality: string; region: string; availability: string; needs: string[] }
export const candidates: Candidate[] = [
  { id: 'A-214', area: 'web', level: 'FP Grado Superior DAW', skills: ['HTML/CSS', 'JavaScript', 'Accesibilidad web'], modality: 'Remoto', region: 'Andalucía', availability: 'Inmediata', needs: ['Teletrabajo'] },
  { id: 'B-087', area: 'datos', level: 'Grado en Estadística (4.º curso)', skills: ['Python', 'SQL', 'Visualización'], modality: 'Híbrido', region: 'Madrid', availability: 'Prácticas desde marzo', needs: ['Intérprete LSE en reuniones'] },
  { id: 'C-330', area: 'uxui', level: 'Bootcamp UX/UI', skills: ['Figma', 'Investigación con usuarias', 'Prototipado'], modality: 'Remoto', region: 'Galicia', availability: 'Inmediata', needs: ['Comunicación por escrito'] },
  { id: 'D-412', area: 'ciberseguridad', level: 'FP ASIR + especialización', skills: ['Redes', 'Linux', 'Análisis de logs'], modality: 'Presencial', region: 'Cataluña', availability: '1 mes', needs: ['Puesto accesible en silla de ruedas'] },
  { id: 'E-158', area: 'ia', level: 'Grado en Ingeniería Informática', skills: ['Python', 'Machine learning', 'Ética de la IA'], modality: 'Remoto', region: 'C. Valenciana', availability: 'Inmediata', needs: ['Lector de pantalla'] },
  { id: 'F-501', area: 'informatica', level: 'FP DAM (2.º curso)', skills: ['Java', 'Kotlin', 'Git'], modality: 'Híbrido', region: 'País Vasco', availability: 'Prácticas desde abril', needs: ['Horario flexible'] },
]
