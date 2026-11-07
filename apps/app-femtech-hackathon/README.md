# AdaptaTech – prototipo

Orientación académica y profesional en tecnología para chicas y mujeres jóvenes con discapacidad.
Diseño basado en `Collage de pantallas_mockup_AdaptaTech.png`.

**Demo pública:** https://adaptatech-2.pages.dev/

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
- **Auditoría WCAG 2.2 AA**: diseñado con estos criterios, pero no auditado formalmente ni probado con usuarias.
