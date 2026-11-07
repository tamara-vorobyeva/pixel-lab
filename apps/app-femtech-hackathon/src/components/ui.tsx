import { useEffect, useRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import {
  Accessibility, Atom, BriefcaseBusiness, Award, BarChart3, Bot, Brain, Briefcase, Building2, Check, ChevronLeft, ChevronRight, Code, Compass,
  Cpu, Gamepad2, Heart, House, Laptop, Meh, Search, Shield, Sparkles, Star, ThumbsUp, User, Users, Volume2, Wallet, Palette,
  type LucideIcon,
} from 'lucide-react'
import { useApp, type Route } from '../store'
import logoUrl from '../assets/logo.png'

const icons: Record<string, LucideIcon> = {
  cpu: Cpu, gamepad: Gamepad2, brain: Brain, shield: Shield, bot: Bot, palette: Palette, chart: BarChart3, code: Code,
  heart: Heart, sparkles: Sparkles, thumbs: ThumbsUp, meh: Meh, laptop: Laptop, atom: Atom, users: Users, award: Award,
  accessibility: Accessibility, briefcase: Briefcase, building: Building2, wallet: Wallet, search: Search,
}
export function Icon({ name, className = 'size-6' }: { name: string; className?: string }) {
  const C = icons[name] ?? Sparkles
  return <C className={className} aria-hidden="true" />
}

export const toneBg = { lilac: 'bg-lilac text-primary-strong', pink: 'bg-pink text-pink-ink', sky: 'bg-sky text-sky-ink' } as const

export function LogoMark({ className = 'h-10' }: { className?: string }) {
  return <img src={logoUrl} alt="" aria-hidden="true" className={`${className} w-auto mix-blend-multiply select-none`} draggable={false} />
}

export function Logo({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  if (size === 'sm') {
    return (
      <span className="font-display font-bold tracking-tight text-xl inline-flex items-center gap-2">
        <LogoMark className="h-8" /><span className="text-primary-strong">Adapta</span><span className="text-primary -ml-2">Tech</span>
      </span>
    )
  }
  return (
    <span className="font-display font-bold tracking-tight text-5xl flex flex-col items-center">
      <LogoMark className="h-28" />
      <span><span className="text-primary-strong">Adapta</span><span className="text-primary">Tech</span></span>
    </span>
  )
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'soft' | 'ghost'; full?: boolean }
export function Button({ variant = 'primary', full, className = '', children, ...rest }: BtnProps) {
  const v = {
    primary: 'bg-primary text-on-primary hover:bg-primary-strong shadow-md shadow-primary/25',
    soft: 'bg-lilac text-primary-strong hover:bg-line',
    ghost: 'text-primary-strong hover:bg-lilac',
  }[variant]
  return (
    <button className={`btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-base transition ${v} ${full ? 'w-full' : ''} disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function Card({ children, className = '', as: As = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'section' | 'article' }) {
  const bg = /(^|\s)bg-/.test(className) ? '' : 'bg-surface'
  const border = /(^|\s)border-(0|primary|success)/.test(className) ? '' : 'border-line'
  return <As className={`card rounded-3xl border ${bg} ${border} shadow-sm ${className}`}>{children}</As>
}

export function Chip({ children, active, onClick, pressed }: { children: ReactNode; active?: boolean; onClick?: () => void; pressed?: boolean }) {
  const cls = `chip rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap border transition ${active ? 'bg-primary text-on-primary border-primary' : 'bg-surface text-primary-strong border-line hover:bg-lavender'}`
  if (!onClick) return <span className={`chip rounded-full px-3 py-1 text-xs font-bold bg-lilac text-primary-strong`}>{children}</span>
  return <button type="button" className={cls} onClick={onClick} aria-pressed={pressed ?? active}>{children}</button>
}

export function Switch({ label, desc, checked, onChange, icon }: { label: string; desc?: string; checked: boolean; onChange: (v: boolean) => void; icon?: ReactNode }) {
  return (
    <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className="w-full flex items-center gap-4 px-4 py-3 text-left hover:bg-lavender rounded-2xl">
      {icon && <span className="text-primary shrink-0">{icon}</span>}
      <span className="flex-1">
        <span className="block font-bold">{label}</span>
        {desc && <span className="block text-sm text-muted">{desc}</span>}
      </span>
      <span className={`relative h-8 w-14 shrink-0 rounded-full border-2 transition ${checked ? 'bg-primary border-primary' : 'bg-surface border-muted'}`} aria-hidden="true">
        <span className={`absolute top-0.5 size-6 rounded-full transition-all grid place-items-center ${checked ? 'left-6 bg-white text-primary' : 'left-0.5 bg-muted'}`}>
          {checked && <Check className="size-4" strokeWidth={3} />}
        </span>
      </span>
    </button>
  )
}

export function SearchField({ value, onChange, label, placeholder }: { value: string; onChange: (v: string) => void; label: string; placeholder: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <Search className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full rounded-full bg-lavender border border-line pl-12 pr-4 py-3 text-base placeholder:text-muted focus:bg-surface" />
    </label>
  )
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div role="progressbar" aria-label={label} aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}
      className="h-3 w-full rounded-full bg-lilac overflow-hidden border border-line">
      <div className="h-full rounded-full bg-gradient-to-r from-primary to-[#B48CF5] transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}

export function stopReading() {
  try { if ('speechSynthesis' in window) speechSynthesis.cancel() } catch { /* unsupported */ }
}

export function readAloud(text: string) {
  if (!('speechSynthesis' in window)) return false
  speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'es-ES'
  speechSynthesis.speak(u)
  return true
}

/** Screen layout: header with back button, focusable h1 (focus moves here on navigation), and main content. */
export function Screen({ title, subtitle, children, back = true, actions, center }: {
  title: string; subtitle?: string; children: ReactNode; back?: boolean; actions?: ReactNode; center?: boolean
}) {
  const { back: goBack, settings, notify, announce, go } = useApp()
  const h1 = useRef<HTMLHeadingElement>(null)
  useEffect(() => { h1.current?.focus(); announce(`Pantalla: ${title}`) }, [title, announce])

  return (
    <>
      <header className="sticky top-0 z-10 bg-bg/95 backdrop-blur px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 min-h-12">
          {back ? (
            <button onClick={goBack} className="size-11 grid place-items-center rounded-full hover:bg-lilac text-primary-strong" aria-label="Volver atrás">
              <ChevronLeft className="size-7" aria-hidden="true" />
            </button>
          ) : <LogoMark className="h-10 -ml-1" />}
          <h1 ref={h1} tabIndex={-1} className={`flex-1 font-display font-bold text-xl text-ink ${center ? 'text-center' : ''} outline-none`}>{title}</h1>
          {settings.readAloud && (
            <button className="size-11 grid place-items-center rounded-full bg-lilac text-primary-strong" aria-label="Leer esta pantalla en voz alta o detener la lectura"
              onClick={() => {
                if ('speechSynthesis' in window && speechSynthesis.speaking) { stopReading(); return }
                const t = document.getElementById('main')?.innerText ?? ''
                if (!readAloud(`${title}. ${t}`)) notify('Tu navegador no permite leer en voz alta')
              }}>
              <Volume2 className="size-6" aria-hidden="true" />
            </button>
          )}
          {settings.simpleNav && back && (
            <button className="size-11 grid place-items-center rounded-full hover:bg-lilac text-primary-strong" aria-label="Ir al inicio" onClick={() => go({ name: 'home' })}>
              <House className="size-6" aria-hidden="true" />
            </button>
          )}
          {actions}
        </div>
        {subtitle && <p className={`text-muted text-sm px-2 ${center ? 'text-center' : back ? 'pl-14' : ''}`}>{subtitle}</p>}
      </header>
      <div id="main" className="px-4 pb-6 pt-2 pop">{children}</div>
    </>
  )
}

export function ListLink({ title, desc, icon, onClick, tone = 'lilac', right }: { title: string; desc?: string; icon: ReactNode; onClick: () => void; tone?: keyof typeof toneBg; right?: ReactNode }) {
  return (
    <button onClick={onClick} className="card w-full flex items-center gap-4 rounded-3xl bg-surface border border-line p-3 text-left hover:border-primary transition shadow-sm">
      <span className={`size-14 rounded-2xl grid place-items-center shrink-0 ${toneBg[tone]}`}>{icon}</span>
      <span className="flex-1 min-w-0">
        <span className="block font-bold text-ink">{title}</span>
        {desc && <span className="block text-sm text-muted">{desc}</span>}
      </span>
      {right}
      <ChevronRight className="size-6 text-primary shrink-0" aria-hidden="true" />
    </button>
  )
}

const tabs: { r: Route; label: string; I: LucideIcon }[] = [
  { r: { name: 'home' }, label: 'Inicio', I: House },
  { r: { name: 'explore' }, label: 'Explora', I: Compass },
  { r: { name: 'jobs' }, label: 'Empleo', I: BriefcaseBusiness },
  { r: { name: 'favorites' }, label: 'Favoritos', I: Star },
  { r: { name: 'profile' }, label: 'Perfil', I: User },
]
const exploreRoutes = ['explore', 'quiz', 'results', 'professions', 'profession', 'courses', 'women', 'woman', 'itinerary', 'mentors', 'resources']

export function BottomNav() {
  const { route, go } = useApp()
  const activeFor = (n: string) => n === route.name || (n === 'explore' && exploreRoutes.includes(route.name)) || (n === 'profile' && route.name === 'accessibility') || (n === 'jobs' && route.name === 'business')
  return (
    <nav aria-label="Navegación principal" className="sticky bottom-0 z-10 bg-surface border-t border-line">
      <ul className="grid grid-cols-5">
        {tabs.map(({ r, label, I }) => {
          const active = activeFor(r.name)
          return (
            <li key={r.name}>
              <button onClick={() => go(r)} aria-current={active ? 'page' : undefined}
                className={`nav-item w-full flex flex-col items-center justify-center gap-0.5 py-2 text-xs font-bold ${active ? 'text-primary' : 'text-muted'}`}>
                <I className="size-6" aria-hidden="true" strokeWidth={active ? 2.5 : 2} />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
