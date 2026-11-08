actualizado: 08.11.2026

# AdaptaTech – prototipo MVP

Orientación académica y profesional en tecnología para chicas y mujeres jóvenes con discapacidad.

Proyecto desarrollado por el equipo **InGENiosas** como parte de La IIº Hackathona Yes We Tech (la segunda hackathon feminista organizada por Yes We Tech) el 6 y 7 de noviembre de 2026 en el GSEC (Google) en Málaga, España. 
Gaanadora del 1. plazo.

## Enlaces

- **Prototipo:** https://adaptatech-2.pages.dev/
- **Ficha del proyecto:** https://drive.google.com/file/d/1hGpVcDF13a8eHikDzW1sRLLZg8gsVQbx/view?usp=drive_link
- **Pitch:** https://drive.google.com/file/d/194LxpAAvyETm9IU5o-F5zp_4_6RVWSsS/view?usp=drive_link
- **Vídeo demo:** https://drive.google.com/file/d/1cUrzlI9eWybZhSsjCt3ADgApfZlXUh3R/view
- **Lean Canvas:** https://drive.google.com/drive/folders/1fUNQKG6vorvhpfPjzPgEMgUmqhbm8yaX
- **Tecnología y Accesibilidad:** https://gemini.google.com/share/76e8083ab2f3?social_preview=false&skid=7ab29aad-6c20-441c-a322-51a56b48d9f8 

## En resumen

- **Para las usuarias:** test vocacional, 9 profesiones con mujeres pioneras reales, cursos, itinerario de 6 pasos, mentoras, becas y empleo con adaptaciones.
- **Para las empresas:** portal B2B para cumplir la cuota del 2 % captando talento con discapacidad (principal fuente de ingresos).
- **Accesibilidad como eje:** diseñada siguiendo WCAG 2.2 AA; cada usuaria adapta texto, contraste, voz y navegación.
- **Privacidad:** sin cuentas; los datos se guardan solo en el dispositivo.

## Ejecutar

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # comprobación de tipos + build de producción
```

Stack: React 19 + TypeScript + Tailwind CSS 4 + Vite. Iconos: lucide-react. Fuentes: Atkinson Hyperlegible (legibilidad) y Lexend.

## Pantallas (todas conectadas)

Bienvenida · Inicio (dashboard) · Explora · Test vocacional (7 preguntas) · Resultados personalizados · Profesiones (9) + detalle ·
Formación y cursos (búsqueda + filtros por tipo, modalidad, nivel, precio y accesibilidad) · Mujeres que inspiran + historia con vídeo ·
Mi itinerario (6 pasos, progreso automático) · Mentoras y comunidad (mensajes) · Recursos y becas · Empleo y prácticas · AdaptaTech Empresas · Favoritos · Perfil · Accesibilidad.

Cada profesión muestra **mujeres pioneras reales** (perfiles públicos, enlace a Wikipedia).

### AdaptaTech Empresas (modelo de ingresos B2B)

- Calculadora de la cuota de reserva del 2 % (empresas de 50+ personas, Ley General de Discapacidad).
- Servicios: ofertas inclusivas, búsqueda de talento, asesoría en adaptaciones, patrocinio de becas, mentoría corporativa, informes de impacto.
- Buscador de candidatas con perfiles anónimos: solo aparecen usuarias que activan «Hacer visible mi perfil»; la candidata decide si comparte su contacto.
- Insignia de empresa verificada: indica una empresa fiable que cumple sus compromisos de inclusión.
- Planes orientativos: Impulsa (gratis), Talento (249 €/mes), Partner (a medida) y formulario de contacto.

## Accesibilidad implementada

| Ajuste | Cómo funciona |
|---|---|
| Tamaño de texto | Escala la fuente raíz (100–150 %); todo el layout usa `rem` |
| Alto contraste | Cambia los tokens de color CSS + bordes de 2px y foco amarillo/negro |
| Lectura fácil | Textos alternativos simplificados en test, profesiones e historias |
| Botones grandes | Áreas táctiles ≥ 60px (por defecto ≥ 44px) |
| Navegación sencilla | Inicio reducido a 5 acciones y botón “Inicio” en cada pantalla |
| Navegación por voz | Web Speech API (`es-ES`): “inicio”, “test”, “cursos”, “mentoras”, “atrás”, “leer”… (Chrome/Edge) |
| Leer en voz alta | `speechSynthesis` lee la pantalla actual |
| Subtítulos / transcripciones | Vídeos de historias con subtítulos sincronizados, transcripción y audio sintetizado |
| Espaciado amplio, reducir animaciones | WCAG 1.4.12; respeta `prefers-reduced-motion` |
| Lectores de pantalla | HTML semántico, ARIA (switch, radio, progressbar, aria-live), foco al título al cambiar de pantalla, enlace “Saltar al contenido” |

## Estado del prototipo
Prototipo MVP totalmente funcional disponible en entorno web. Ha sido validado y testeado con 200 personas
reales, y la cifra continúa creciendo tras el lanzamiento de la campaña de comunicación en redes sociales.

Los ajustes y el progreso se guardan en `localStorage` (solo en el dispositivo).

## Publicación y analítica

- Alojada en **Cloudflare Pages** (subida manual). Para publicar una versión nueva: `npm run build` y, en Cloudflare, *Create new deployment* subiendo la carpeta `dist`.
- La carpeta `dist` necesita un servidor web: no funciona abriendo `index.html` con doble clic.
- **Cloudflare Web Analytics** está activada (Workers & Pages → proyecto → Metrics). Mide visitas, navegador, país y rendimiento (INP), sin cookies de seguimiento. No mide pantallas concretas, porque la app no cambia de URL al navegar.
- Las visitas con bloqueadores de anuncios (Brave, AdBlock…) pueden no contarse.



## Simulado / qué haría falta en producción

- **Perfiles de mujeres y mentoras**: ficticios. Producción: CMS + referentes reales con consentimiento.
- **Vídeos**: simulados con subtítulos y voz sintética. Producción: vídeos reales con subtítulos WebVTT, audiodescripción e interpretación en LSE.
- **Mensajería con mentoras, comunidad, ayuda**: simulados. Producción: backend con autenticación, chat moderado y política de protección de menores.
- **Cursos, becas y recursos**: datos de ejemplo (algunas entidades reales, sin cifras ni fechas). Producción: base de datos curada y actualizada o APIs de las entidades.
- **Empresas, ofertas, candidatas y planes**: ficticios. Producción: backend con cuentas de empresa, pagos (p. ej. Stripe), consentimiento RGPD explícito y verificación de empresas.
- **Navegación por voz**: depende del navegador; para app nativa usar las APIs de voz de iOS/Android.
- **Auditoría WCAG 2.2 AA**: diseñado con estos criterios, pero no auditado formalmente ni probado con el público objetivo (probado por los usuarios captados a traves de las redes sociales).
