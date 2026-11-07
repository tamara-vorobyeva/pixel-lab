# AdaptaTech – prototipo

Orientación académica y profesional en tecnología para chicas y mujeres jóvenes con discapacidad.
Diseño basado en `Collage de pantallas_mockup_AdaptaTech.png`.

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
Mi itinerario (6 pasos, progreso automático) · Mentoras y comunidad (mensajes) · Recursos y becas · Favoritos · Perfil · Accesibilidad.

## Accesibilidad implementada

| Ajuste | Cómo funciona |
|---|---|
| Tamaño de texto | Escala la fuente raíz (100–150 %); todo el layout usa `rem` |
| Alto contraste | Cambia los tokens de color CSS + bordes de 2px y foco amarillo/negro |
| Lectura fácil | Textos alternativos simplificados en test, profesiones e historias |
| Botones grandes | Áreas táctiles ≥ 60px (por defecto ≥ 44px) |
| Navegación sencilla | Inicio reducido a 4 acciones y botón “Inicio” en cada pantalla |
| Navegación por voz | Web Speech API (`es-ES`): “inicio”, “test”, “cursos”, “mentoras”, “atrás”, “leer”… (Chrome/Edge) |
| Leer en voz alta | `speechSynthesis` lee la pantalla actual |
| Subtítulos / transcripciones | Vídeos de historias con subtítulos sincronizados, transcripción y audio sintetizado |
| Espaciado amplio, reducir animaciones | WCAG 1.4.12; respeta `prefers-reduced-motion` |
| Lectores de pantalla | HTML semántico, ARIA (switch, radio, progressbar, aria-live), foco al título al cambiar de pantalla, enlace “Saltar al contenido” |

Los ajustes y el progreso se guardan en `localStorage` (solo en el dispositivo).

## Simulado / qué haría falta en producción

- **Perfiles de mujeres y mentoras**: ficticios. Producción: CMS + referentes reales con consentimiento.
- **Vídeos**: simulados con subtítulos y voz sintética. Producción: vídeos reales con subtítulos WebVTT, audiodescripción e interpretación en LSE.
- **Mensajería con mentoras, comunidad, ayuda**: simulados. Producción: backend con autenticación, chat moderado y política de protección de menores.
- **Cursos, becas y recursos**: datos de ejemplo (algunas entidades reales, sin cifras ni fechas). Producción: base de datos curada y actualizada o APIs de las entidades.
- **Navegación por voz**: depende del navegador; para app nativa usar las APIs de voz de iOS/Android.
- **Auditoría WCAG 2.2 AA**: diseñado con estos criterios, pero no auditado formalmente ni probado con usuarias.
