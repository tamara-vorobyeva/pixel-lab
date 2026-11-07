import { useEffect, useRef, useState } from 'react'
import { BookOpen, Captions, Contrast, FileText, Headphones, Keyboard, Mic, MousePointerClick, RotateCcw, Route as RouteIcon, Type, Volume2, Waves, X, Heart } from 'lucide-react'
import { useApp, type Route } from '../store'
import { Button, Card, Screen, Switch, readAloud } from '../components/ui'

export function AccessibilitySettings() {
  const { settings: s, setSetting, resetSettings, notify } = useApp()
  const [help, setHelp] = useState(false)
  const voiceSupported = typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const sizes = ['Normal', 'Grande', 'Muy grande', 'Enorme']

  return (
    <Screen title="Accesibilidad" subtitle="Una app para todas" center>
      <Card as="section" className="p-4 mb-3">
        <h2 className="font-display font-bold flex items-center gap-2 mb-3"><Type className="size-5 text-primary" aria-hidden="true" /> Tamaño de texto</h2>
        <div role="radiogroup" aria-label="Tamaño de texto" className="grid grid-cols-4 gap-2">
          {sizes.map((label, i) => (
            <button key={label} role="radio" aria-checked={s.textScale === i} onClick={() => setSetting('textScale', i as 0 | 1 | 2 | 3)}
              className={`rounded-2xl border-2 py-2 font-bold ${s.textScale === i ? 'border-primary bg-lilac text-primary-strong' : 'border-line'}`}>
              <span aria-hidden="true" style={{ fontSize: `${1 + i * 0.25}rem` }}>A</span>
              <span className="block text-[0.65rem] leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card as="section" className="py-2 mb-3">
        <h2 className="sr-only">Visualización y lectura</h2>
        <Switch icon={<BookOpen className="size-6" />} label="Modo lectura fácil" desc="Textos más cortos y sencillos" checked={s.easyRead} onChange={(v) => setSetting('easyRead', v)} />
        <Switch icon={<Contrast className="size-6" />} label="Alto contraste" desc="Colores más intensos y bordes marcados" checked={s.highContrast} onChange={(v) => setSetting('highContrast', v)} />
        <Switch icon={<Type className="size-6" />} label="Espaciado amplio" desc="Más espacio entre letras y líneas" checked={s.spacing} onChange={(v) => setSetting('spacing', v)} />
        <Switch icon={<Waves className="size-6" />} label="Reducir animaciones" checked={s.reduceMotion} onChange={(v) => setSetting('reduceMotion', v)} />
      </Card>

      <Card as="section" className="py-2 mb-3">
        <h2 className="sr-only">Movilidad y navegación</h2>
        <Switch icon={<MousePointerClick className="size-6" />} label="Botones grandes" desc="Áreas táctiles de 60px o más" checked={s.bigButtons} onChange={(v) => setSetting('bigButtons', v)} />
        <Switch icon={<RouteIcon className="size-6" />} label="Navegación sencilla" desc="Menos opciones en pantalla y botón de inicio siempre visible" checked={s.simpleNav} onChange={(v) => setSetting('simpleNav', v)} />
        <Switch icon={<Mic className="size-6" />} label="Navegación por voz" desc={voiceSupported ? 'Di “inicio”, “test”, “cursos”, “atrás”…' : 'No disponible en este navegador (prueba Chrome o Edge)'} checked={s.voiceNav}
          onChange={(v) => { if (v && !voiceSupported) { notify('Tu navegador no soporta reconocimiento de voz'); return } setSetting('voiceNav', v) }} />
      </Card>

      <Card as="section" className="py-2 mb-3">
        <h2 className="sr-only">Audio y vídeo</h2>
        <Switch icon={<Volume2 className="size-6" />} label="Leer en voz alta" desc={ttsSupported ? 'Añade un botón de altavoz en cada pantalla' : 'No disponible en este navegador'} checked={s.readAloud}
          onChange={(v) => { setSetting('readAloud', v); if (v) readAloud('Lectura en voz alta activada') }} />
        <Switch icon={<Captions className="size-6" />} label="Subtítulos" desc="Activados por defecto en los vídeos" checked={s.subtitles} onChange={(v) => setSetting('subtitles', v)} />
        <Switch icon={<FileText className="size-6" />} label="Transcripciones" desc="Mostrar el texto completo de los vídeos" checked={s.transcripts} onChange={(v) => setSetting('transcripts', v)} />
      </Card>

      <Card as="section" className="p-4 mb-3 bg-lavender">
        <h2 className="font-display font-bold flex items-center gap-2 mb-2"><Keyboard className="size-5 text-primary" aria-hidden="true" /> Lectores de pantalla y tecnologías de asistencia</h2>
        <ul className="text-sm grid gap-1 list-disc pl-5">
          <li>Compatible con VoiceOver, TalkBack y NVDA: encabezados, etiquetas y estados anunciados.</li>
          <li>Todo se puede usar con teclado, conmutadores o switch access (Tab, Enter, Espacio).</li>
          <li>Al cambiar de pantalla, el foco va al título y se anuncia.</li>
          <li>Respeta los ajustes del sistema de tamaño de texto y reducción de movimiento.</li>
        </ul>
      </Card>

      <Button variant="soft" full onClick={() => { resetSettings(); notify('Ajustes restablecidos') }}><RotateCcw className="size-5" aria-hidden="true" /> Restablecer ajustes</Button>

      <button onClick={() => setHelp(true)} className="card mt-3 w-full flex items-center gap-3 rounded-3xl bg-lilac border border-line p-4 text-left">
        <Headphones className="size-8 text-primary" aria-hidden="true" />
        <span className="flex-1"><span className="block font-bold">¿Necesitas ayuda?</span><span className="text-sm text-muted">Contáctanos por chat, email o videollamada en LSE</span></span>
      </button>

      {help && (
        <div role="dialog" aria-modal="true" aria-labelledby="help-t" className="absolute inset-0 z-30 bg-black/40 flex items-end" onKeyDown={(e) => e.key === 'Escape' && setHelp(false)}>
          <div className="w-full bg-surface rounded-t-3xl p-5 pop">
            <div className="flex items-center mb-2">
              <h2 id="help-t" className="font-display font-bold flex-1">Estamos aquí para ayudarte <Heart className="inline size-5 text-primary" aria-hidden="true" /></h2>
              <button autoFocus onClick={() => setHelp(false)} aria-label="Cerrar" className="size-11 grid place-items-center rounded-full hover:bg-lilac"><X className="size-6" aria-hidden="true" /></button>
            </div>
            <div className="grid gap-2">
              {['Chat accesible', 'Email', 'Videollamada en lengua de signos (LSE)', 'Llamada con subtítulos'].map((c) => (
                <Button key={c} variant="soft" full onClick={() => { setHelp(false); notify(`${c}: canal simulado en el prototipo`) }}>{c}</Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </Screen>
  )
}

/* ---------- Voice navigation (Web Speech API) ---------- */
const COMMANDS: [RegExp, Route | 'back' | 'read'][] = [
  [/inicio|casa|principal/, { name: 'home' }], [/test|descubr|camino/, { name: 'quiz' }], [/resultado/, { name: 'results' }],
  [/profesi/, { name: 'professions' }], [/curso|formaci/, { name: 'courses' }], [/mujeres|inspir|referente|historia/, { name: 'women' }],
  [/itinerario/, { name: 'itinerary' }], [/mentora|comunidad/, { name: 'mentors' }], [/recurso|beca|ayuda/, { name: 'resources' }],
  [/accesib|ajuste|configura/, { name: 'accessibility' }], [/favorit/, { name: 'favorites' }], [/perfil/, { name: 'profile' }],
  [/explora/, { name: 'explore' }], [/atr[aá]s|volver/, 'back'], [/lee|leer/, 'read'],
]

type Rec = { lang: string; continuous: boolean; interimResults: boolean; start(): void; stop(): void; onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> & { length: number } }) => void) | null; onend: (() => void) | null; onerror: ((e: { error: string }) => void) | null }

export function VoiceNav() {
  const { settings, setSetting, go, back, notify } = useApp()
  const [heard, setHeard] = useState('')
  const rec = useRef<Rec | null>(null)
  const nav = useRef({ go, back })
  nav.current = { go, back }

  useEffect(() => {
    if (!settings.voiceNav) return
    const W = window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec }
    const SR = W.SpeechRecognition ?? W.webkitSpeechRecognition
    if (!SR) return
    const r = new SR()
    r.lang = 'es-ES'; r.continuous = true; r.interimResults = false
    let active = true
    r.onresult = (e) => {
      const t = e.results[e.results.length - 1][0].transcript.toLowerCase().trim()
      setHeard(t)
      const hit = COMMANDS.find(([re]) => re.test(t))
      if (!hit) return
      if (hit[1] === 'back') nav.current.back()
      else if (hit[1] === 'read') readAloud(document.getElementById('main')?.innerText ?? '')
      else nav.current.go(hit[1])
    }
    r.onerror = (e) => { if (e.error === 'not-allowed') { active = false; setSetting('voiceNav', false); notify('Permiso de micrófono denegado') } }
    r.onend = () => { if (active) try { r.start() } catch { /* already started */ } }
    try { r.start() } catch { /* ignore */ }
    rec.current = r
    return () => { active = false; r.stop() }
  }, [settings.voiceNav, setSetting, notify])

  if (!settings.voiceNav) return null
  return (
    <div className="absolute z-20 left-3 right-3 bottom-[84px] rounded-2xl bg-primary-strong text-white px-4 py-2 text-sm flex items-center gap-2 shadow-lg" role="status">
      <Mic className="size-5 animate-pulse shrink-0" aria-hidden="true" />
      <span className="flex-1">{heard ? <>Has dicho: “{heard}”</> : 'Escuchando… di “inicio”, “test”, “cursos”, “atrás”'}</span>
      <button onClick={() => setSetting('voiceNav', false)} aria-label="Desactivar navegación por voz" className="size-11 grid place-items-center"><X className="size-5" aria-hidden="true" /></button>
    </div>
  )
}
