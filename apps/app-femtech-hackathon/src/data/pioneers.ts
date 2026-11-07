/** Real, publicly documented women pioneers per profession. Only well-established facts. */
export interface Pioneer {
  name: string
  years: string
  country: string
  achievement: string
  disability?: string // only when the person has publicly spoken about it
}

export const pioneers: Record<string, Pioneer[]> = {
  informatica: [
    { name: 'Ada Lovelace', years: '1815–1852', country: 'Reino Unido', achievement: 'Escribió en 1843 el que se considera el primer algoritmo pensado para una máquina: la Máquina Analítica de Babbage.' },
    { name: 'Grace Hopper', years: '1906–1992', country: 'EE. UU.', achievement: 'Creó uno de los primeros compiladores y sus ideas fueron la base del lenguaje COBOL.' },
    { name: 'Margaret Hamilton', years: '1936', country: 'EE. UU.', achievement: 'Dirigió el equipo que programó el software de vuelo de las misiones Apolo y popularizó el término «ingeniería de software».' },
  ],
  videojuegos: [
    { name: 'Carol Shaw', years: '1955', country: 'EE. UU.', achievement: 'Una de las primeras diseñadoras y programadoras de videojuegos. Creó River Raid (1982).' },
    { name: 'Roberta Williams', years: '1953', country: 'EE. UU.', achievement: 'Cofundadora de Sierra On-Line y creadora de la saga de aventuras King’s Quest.' },
  ],
  ia: [
    { name: 'Chieko Asakawa', years: '1958', country: 'Japón', achievement: 'Investigadora de IBM y referente mundial en accesibilidad. Desarrolla tecnologías con IA que ayudan a personas ciegas a orientarse.', disability: 'Es ciega desde los 14 años' },
    { name: 'Fei-Fei Li', years: '1976', country: 'China / EE. UU.', achievement: 'Creó ImageNet, la base de datos de imágenes que impulsó la IA moderna de visión por ordenador.' },
    { name: 'Joy Buolamwini', years: '1989', country: 'Canadá / EE. UU.', achievement: 'Demostró los sesgos de género y raza en el reconocimiento facial y fundó la Algorithmic Justice League.' },
  ],
  ciberseguridad: [
    { name: 'Dorothy E. Denning', years: '1945', country: 'EE. UU.', achievement: 'Pionera de la seguridad informática. Propuso uno de los primeros modelos de sistemas de detección de intrusos.' },
    { name: 'Hedy Lamarr', years: '1914–2000', country: 'Austria / EE. UU.', achievement: 'Coinventó un sistema de salto de frecuencia, precursor de comunicaciones seguras como el wifi o el Bluetooth.' },
  ],
  robotica: [
    { name: 'Cynthia Breazeal', years: '1967', country: 'EE. UU.', achievement: 'Pionera de la robótica social en el MIT. Creó Kismet, uno de los primeros robots capaces de expresar emociones.' },
    { name: 'Ayanna Howard', years: '1972', country: 'EE. UU.', achievement: 'Roboticista que ha trabajado para la NASA y desarrolla robots terapéuticos para niñas y niños con discapacidad.' },
  ],
  uxui: [
    { name: 'Susan Kare', years: '1954', country: 'EE. UU.', achievement: 'Diseñó los iconos y tipografías del primer Macintosh. Sus pictogramas definieron las interfaces gráficas.' },
    { name: 'Haben Girma', years: '1988', country: 'EE. UU.', achievement: 'Abogada y defensora de la accesibilidad digital. Primera persona sordociega graduada en Derecho por Harvard.', disability: 'Es sordociega' },
  ],
  datos: [
    { name: 'Florence Nightingale', years: '1820–1910', country: 'Reino Unido', achievement: 'Además de enfermera, fue pionera de la estadística: usó gráficos para demostrar qué causaba las muertes en hospitales.' },
    { name: 'Katherine Johnson', years: '1918–2020', country: 'EE. UU.', achievement: 'Matemática de la NASA. Sus cálculos de trayectorias fueron clave para los primeros vuelos espaciales tripulados.' },
  ],
  web: [
    { name: 'Radia Perlman', years: '1951', country: 'EE. UU.', achievement: 'Inventó el protocolo Spanning Tree, fundamental para las redes en las que funciona internet.' },
    { name: 'Léonie Watson', years: '', country: 'Reino Unido', achievement: 'Experta en accesibilidad web y miembro activa del W3C, el organismo que define los estándares de la web.', disability: 'Es ciega y usa lector de pantalla' },
  ],
  biomedica: [
    { name: 'Patricia Bath', years: '1942–2019', country: 'EE. UU.', achievement: 'Oftalmóloga e inventora del Laserphaco, un dispositivo láser para operar cataratas.' },
    { name: 'Frances Arnold', years: '1956', country: 'EE. UU.', achievement: 'Premio Nobel de Química 2018 por la evolución dirigida de enzimas, usada en medicamentos y biotecnología.' },
  ],
}

export const wikiSearch = (name: string) => `https://es.wikipedia.org/w/index.php?search=${encodeURIComponent(name)}`
