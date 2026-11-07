import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { professions, type Dim } from './data/professions'
import { quiz } from './data/content'

/* ---------- Routing ---------- */
export type Route =
  | { name: 'welcome' } | { name: 'home' } | { name: 'explore' } | { name: 'quiz' } | { name: 'results' }
  | { name: 'professions' } | { name: 'profession'; id: string } | { name: 'courses' } | { name: 'women' }
  | { name: 'woman'; id: string } | { name: 'itinerary' } | { name: 'mentors' } | { name: 'resources' }
  | { name: 'accessibility' } | { name: 'favorites' } | { name: 'profile' }

/* ---------- Settings ---------- */
export interface Settings {
  textScale: 0 | 1 | 2 | 3
  highContrast: boolean
  easyRead: boolean
  bigButtons: boolean
  simpleNav: boolean
  subtitles: boolean
  transcripts: boolean
  voiceNav: boolean
  readAloud: boolean
  reduceMotion: boolean
  spacing: boolean
}
export const defaultSettings: Settings = {
  textScale: 0, highContrast: false, easyRead: false, bigButtons: false, simpleNav: false,
  subtitles: true, transcripts: false, voiceNav: false, readAloud: false, reduceMotion: false, spacing: false,
}

/* ---------- Progress ---------- */
export interface Progress {
  name: string
  answers: Record<string, string[]>
  quizDone: boolean
  viewed: string[]
  favCourses: string[]
  favProfessions: string[]
  favWomen: string[]
  contacted: string[]
  joined: boolean
  competences: string[]
  manual: number[]
}
const defaultProgress: Progress = {
  name: '', answers: {}, quizDone: false, viewed: [], favCourses: [], favProfessions: [], favWomen: [],
  contacted: [], joined: false, competences: [], manual: [],
}

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? { ...fallback, ...JSON.parse(v) } : fallback } catch { return fallback }
}
function save(key: string, v: unknown) { try { localStorage.setItem(key, JSON.stringify(v)) } catch { /* storage unavailable */ } }

/* ---------- Results ---------- */
export function computeResults(answers: Record<string, string[]>) {
  const score: Record<Dim, number> = { code: 0, design: 0, ai: 0, logic: 0, robot: 0, social: 0, games: 0 }
  const max: Record<Dim, number> = { ...score }
  for (const q of quiz) {
    const picked = answers[q.id] ?? []
    for (const o of q.options) {
      for (const [d, v] of Object.entries(o.adds) as [Dim, number][]) {
        if (q.multi) max[d] += v
        if (picked.includes(o.id)) score[d] += v
      }
    }
    if (!q.multi) for (const [d, v] of Object.entries(q.options[0].adds) as [Dim, number][]) max[d] += v
  }
  return professions
    .map((p) => {
      let s = 0, m = 0
      for (const [d, w] of Object.entries(p.weights) as [Dim, number][]) { s += w * score[d]; m += w * max[d] }
      return { profession: p, pct: m ? Math.round((s / m) * 100) : 0 }
    })
    .sort((a, b) => b.pct - a.pct)
}

/* ---------- Itinerary ---------- */
export const STEPS = [
  { title: 'Descubrir mis intereses', desc: 'Haz el test vocacional', route: { name: 'quiz' } as Route },
  { title: 'Conocer las profesiones', desc: 'Explora al menos 3 profesiones', route: { name: 'professions' } as Route },
  { title: 'Encontrar formación', desc: 'Guarda un curso o formación', route: { name: 'courses' } as Route },
  { title: 'Aprender competencias', desc: 'Marca 3 competencias que estás trabajando', route: { name: 'itinerary' } as Route },
  { title: 'Conectar con mentoras', desc: 'Escribe a una mentora o únete a la comunidad', route: { name: 'mentors' } as Route },
  { title: 'Buscar prácticas y empleo', desc: 'Revisa programas de empleo inclusivo', route: { name: 'resources' } as Route },
]
export function stepDone(p: Progress, i: number): boolean {
  if (p.manual.includes(i)) return true
  switch (i) {
    case 0: return p.quizDone
    case 1: return p.viewed.length >= 3
    case 2: return p.favCourses.length > 0
    case 3: return p.competences.length >= 3
    case 4: return p.contacted.length > 0 || p.joined
    default: return false
  }
}

/* ---------- Context ---------- */
interface Ctx {
  route: Route
  go: (r: Route) => void
  back: () => void
  canGoBack: boolean
  settings: Settings
  setSetting: <K extends keyof Settings>(k: K, v: Settings[K]) => void
  resetSettings: () => void
  progress: Progress
  update: (fn: (p: Progress) => Progress) => void
  toggleIn: (key: 'favCourses' | 'favProfessions' | 'favWomen' | 'competences' | 'contacted' | 'manual', id: string | number) => void
  toast: string | null
  notify: (msg: string) => void
  announce: (msg: string) => void
  liveMsg: string
}
const AppCtx = createContext<Ctx | null>(null)
export const useApp = () => useContext(AppCtx)!

export function AppProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<Route[]>(() => [load('at-onboarded', { v: false }).v ? { name: 'home' } : { name: 'welcome' }])
  const [settings, setSettings] = useState<Settings>(() => load('at-settings', defaultSettings))
  const [progress, setProgress] = useState<Progress>(() => load('at-progress', defaultProgress))
  const [toast, setToast] = useState<string | null>(null)
  const [liveMsg, setLiveMsg] = useState('')

  useEffect(() => save('at-settings', settings), [settings])
  useEffect(() => save('at-progress', progress), [progress])

  // Apply accessibility settings to <html>
  useEffect(() => {
    const h = document.documentElement
    h.style.fontSize = ['100%', '115%', '130%', '150%'][settings.textScale]
    h.classList.toggle('hc', settings.highContrast)
    h.classList.toggle('big', settings.bigButtons)
    h.classList.toggle('reduce-motion', settings.reduceMotion)
    h.classList.toggle('spacing', settings.spacing)
    h.classList.toggle('easy', settings.easyRead)
  }, [settings])

  const announce = useCallback((m: string) => { setLiveMsg(''); setTimeout(() => setLiveMsg(m), 50) }, [])
  const notify = useCallback((m: string) => { setToast(m); announce(m); setTimeout(() => setToast((t) => (t === m ? null : t)), 3000) }, [announce])

  const go = useCallback((r: Route) => {
    if (r.name === 'home') save('at-onboarded', { v: true })
    setStack((s) => (['home', 'explore', 'favorites', 'profile'].includes(r.name) ? [r] : [...s, r]))
    if (r.name === 'profession') setProgress((p) => (p.viewed.includes(r.id) ? p : { ...p, viewed: [...p.viewed, r.id] }))
  }, [])
  const back = useCallback(() => setStack((s) => (s.length > 1 ? s.slice(0, -1) : [{ name: 'home' }])), [])

  const value = useMemo<Ctx>(() => ({
    route: stack[stack.length - 1], go, back, canGoBack: stack.length > 1,
    settings,
    setSetting: (k, v) => setSettings((s) => ({ ...s, [k]: v })),
    resetSettings: () => setSettings(defaultSettings),
    progress,
    update: (fn) => setProgress(fn),
    toggleIn: (key, id) => setProgress((p) => {
      const arr = p[key] as (string | number)[]
      return { ...p, [key]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id] }
    }),
    toast, notify, announce, liveMsg,
  }), [stack, go, back, settings, progress, toast, notify, announce, liveMsg])

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
}
