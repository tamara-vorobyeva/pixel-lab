import { useEffect, useRef, useState } from 'react'
import { Accessibility, ArrowRight, BookOpen, Compass, GraduationCap, Heart, Route as RouteIcon, Sparkles, Users, Wallet, Briefcase, Star, Building2, Settings as SettingsIcon } from 'lucide-react'
import { useApp, STEPS, stepDone, computeResults } from '../store'
import { Button, Card, ListLink, Logo, ProgressBar, Screen, Icon, toneBg } from '../components/ui'
import { HeroIllustration } from '../components/Illustrations'
import { Avatar } from '../components/Avatar'
import { women } from '../data/content'
import accessibilityIcon from '../assets/accessibility.jpg'

export function Welcome() {
  const { go, announce } = useApp()
  const h1 = useRef<HTMLHeadingElement>(null)
  useEffect(() => { h1.current?.focus(); announce('Bienvenida a AdaptaTech') }, [announce])
  return (
    <div id="main" className="min-h-full flex flex-col items-center text-center px-6 pt-8 pb-6 bg-gradient-to-b from-lavender to-bg">
      <h1 ref={h1} tabIndex={-1} className="outline-none"><Logo /></h1>
      <p className="font-display font-semibold text-lg mt-1">Sueña · Explora · Conecta</p>
      <p className="mt-4 text-lg text-ink max-w-xs">Tu guía en el mundo tech, <strong>sin barreras</strong> <Heart className="inline size-5 text-primary fill-primary" aria-hidden="true" /></p>
      <HeroIllustration className="w-full max-w-[250px] my-3" />
      <p className="text-sm text-muted max-w-xs mb-5">Te acompañamos desde descubrir lo que te gusta hasta tu primer empleo en tecnología.</p>
      <Button full onClick={() => go({ name: 'home' })} className="text-lg">Comenzar <ArrowRight className="size-5" aria-hidden="true" /></Button>
      <Button variant="ghost" className="mt-3" onClick={() => go({ name: 'accessibility' })}>
        <Accessibility className="size-5" aria-hidden="true" /> Configurar accesibilidad
      </Button>
      <Button variant="ghost" onClick={() => go({ name: 'business' })}>
        <Building2 className="size-5" aria-hidden="true" /> Soy una empresa
      </Button>
    </div>
  )
}

export function Home() {
  const { go, progress, settings, update } = useApp()
  const done = STEPS.filter((_, i) => stepDone(progress, i)).length
  const next = STEPS.findIndex((_, i) => !stepDone(progress, i))
  const top = progress.quizDone ? computeResults(progress.answers).slice(0, 2) : []
  const [name, setName] = useState(progress.name)
  const [askName, setAskName] = useState(false)
  const pct = Math.round((done / STEPS.length) * 100)
  // The quiz is step 0: when it is the next step, the hero card already offers it, so the separate test card is hidden.
  const quizIsNext = next === 0

  return (
    <Screen title={progress.name ? `¡Hola, ${progress.name}!` : '¡Hola!'} back={false} center subtitle={settings.easyRead ? 'Tu camino en la tecnología.' : 'Cada paso cuenta. Tu discapacidad no es un límite para la tecnología.'}
      actions={<button aria-label="Ajustes de accesibilidad" onClick={() => go({ name: 'accessibility' })} className="size-12 grid place-items-center rounded-full bg-white border border-line shadow-sm"><img src={accessibilityIcon} alt="" aria-hidden="true" className="size-9 object-contain" draggable={false} /></button>}>
      <div className="pt-4" />

      {/* Hero: one card, one primary action */}
      <Card className="p-6 bg-gradient-to-br from-primary-strong to-primary text-on-primary border-0 mb-6">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display font-semibold text-lg flex items-center gap-2"><RouteIcon className="size-5" aria-hidden="true" /> Mi itinerario</h2>
          <p className="text-sm opacity-90 tabular-nums whitespace-nowrap">{done} de {STEPS.length} pasos</p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-primary-strong/70 ring-1 ring-white/40 overflow-hidden" role="progressbar" aria-label="Progreso del itinerario" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-white rounded-full" style={{ width: `${pct}%` }} />
        </div>
        {next >= 0 && (
          <>
            <p className="mt-6 text-sm opacity-90">Siguiente paso</p>
            <p className="font-display font-semibold text-xl leading-snug text-balance">{STEPS[next].title}</p>
            {quizIsNext && <p className="text-sm opacity-90 mt-1">Test de 7 preguntas · 3 minutos</p>}
            <button onClick={() => go(STEPS[next].route)} className="btn mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary-strong px-6 py-3 font-bold transition hover:bg-lavender">
              {quizIsNext ? 'Empezar el test' : 'Continuar'} <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </>
        )}
      </Card>

      {/* Optional name: a quiet link that expands, instead of a form at the top */}
      {!progress.name && (
        askName ? (
          <Card className="p-4 mb-6">
            <form onSubmit={(e) => { e.preventDefault(); update((p) => ({ ...p, name: name.trim() })) }} className="flex gap-2 items-end">
              <label className="flex-1 text-sm font-semibold">¿Cómo quieres que te llamemos? <span className="font-normal text-muted">(opcional)</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" autoFocus className="mt-2 w-full min-h-12 rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base" />
              </label>
              <Button type="submit" variant="soft" className="min-h-12">Guardar</Button>
            </form>
          </Card>
        ) : (
          <button onClick={() => setAskName(true)} className="-mt-2 mb-6 px-2 text-sm font-semibold text-primary-strong hover:underline underline-offset-4">
            + Añadir tu nombre (opcional)
          </button>
        )
      )}

      {settings.simpleNav ? (
        <div className="grid gap-3">
          <ListLink title="Descubre tu camino" desc="Test vocacional" icon={<Compass className="size-7" />} onClick={() => go({ name: 'quiz' })} />
          <ListLink title="Profesiones" icon={<Sparkles className="size-7" />} tone="pink" onClick={() => go({ name: 'professions' })} />
          <ListLink title="Formación" icon={<GraduationCap className="size-7" />} tone="sky" onClick={() => go({ name: 'courses' })} />
          <ListLink title="Mentoras" icon={<Users className="size-7" />} onClick={() => go({ name: 'mentors' })} />
          <ListLink title="Empleo" icon={<Briefcase className="size-7" />} tone="pink" onClick={() => go({ name: 'jobs' })} />
        </div>
      ) : (
        <>
          {top.length > 0 ? (
            <Card className="p-5 mb-6">
              <h2 className="font-display font-semibold mb-3">Tus profesiones recomendadas</h2>
              <ul className="grid gap-2">
                {top.map(({ profession: p, pct }) => (
                  <li key={p.id}><ListLink title={p.name} desc={`${pct}% de afinidad`} tone={p.tone} icon={<Icon name={p.icon} className="size-7" />} onClick={() => go({ name: 'profession', id: p.id })} /></li>
                ))}
              </ul>
            </Card>
          ) : !progress.quizDone && !quizIsNext && (
            <div className="mb-6">
              <ListLink title="Descubre tu camino" desc="Test de 7 preguntas · 3 minutos" tone="pink" icon={<Compass className="size-7" />} onClick={() => go({ name: 'quiz' })} />
            </div>
          )}

          <div className="mb-8">
            <ListLink title="Empleo y prácticas" desc="Empresas inclusivas que buscan talento como tú" tone="sky" icon={<Briefcase className="size-7" />} onClick={() => go({ name: 'jobs' })} />
          </div>

          <h2 className="font-display font-semibold text-lg mb-4">Explora</h2>
          <ul className="grid grid-cols-2 gap-3 mb-8">
            {[
              { t: 'Profesiones', r: 'professions', i: <Sparkles className="size-7" />, tone: 'lilac' },
              { t: 'Formación y cursos', r: 'courses', i: <GraduationCap className="size-7" />, tone: 'sky' },
              { t: 'Mujeres que inspiran', r: 'women', i: <Heart className="size-7" />, tone: 'pink' },
              { t: 'Mentoras y comunidad', r: 'mentors', i: <Users className="size-7" />, tone: 'lilac' },
              { t: 'Recursos y becas', r: 'resources', i: <Wallet className="size-7" />, tone: 'sky' },
              { t: 'Mi itinerario', r: 'itinerary', i: <RouteIcon className="size-7" />, tone: 'pink' },
            ].map((x) => (
              <li key={x.r}>
                <button onClick={() => go({ name: x.r } as never)} className="card w-full h-full rounded-3xl bg-surface border border-line p-4 text-left hover:border-primary shadow-sm">
                  <span className={`size-12 rounded-2xl grid place-items-center mb-2 ${toneBg[x.tone as keyof typeof toneBg]}`} aria-hidden="true">{x.i}</span>
                  <span className="font-semibold leading-tight block">{x.t}</span>
                </button>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-semibold text-lg mb-4">Historia destacada</h2>
          <button onClick={() => go({ name: 'woman', id: women[0].id })} className="card w-full flex gap-4 items-center rounded-3xl bg-lilac p-4 text-left border border-line">
            <Avatar {...women[0].avatar} size={72} />
            <span>
              <span className="block italic">“{women[0].quote}”</span>
              <span className="block text-sm font-bold mt-1">{women[0].name} · {women[0].role}</span>
            </span>
          </button>
        </>
      )}
    </Screen>
  )
}

export function Explore() {
  const { go } = useApp()
  const items = [
    { t: 'Descubre tu camino', d: 'Test vocacional interactivo', r: 'quiz', i: <Compass className="size-7" />, tone: 'pink' },
    { t: 'Profesiones tecnológicas', d: '9 profesiones explicadas fácil', r: 'professions', i: <Sparkles className="size-7" />, tone: 'lilac' },
    { t: 'Formación y cursos', d: 'Grados, FP, cursos, bootcamps y becas', r: 'courses', i: <GraduationCap className="size-7" />, tone: 'sky' },
    { t: 'Mujeres que inspiran', d: 'Referentes con discapacidad', r: 'women', i: <Heart className="size-7" />, tone: 'pink' },
    { t: 'Mi itinerario', d: 'Tu camino paso a paso', r: 'itinerary', i: <RouteIcon className="size-7" />, tone: 'lilac' },
    { t: 'Mentoras y comunidad', d: 'Conecta con profesionales', r: 'mentors', i: <Users className="size-7" />, tone: 'sky' },
    { t: 'Recursos y becas', d: 'Ayudas, adaptaciones y empleo', r: 'resources', i: <BookOpen className="size-7" />, tone: 'pink' },
    { t: 'Empleo y prácticas', d: 'Ofertas de empresas inclusivas', r: 'jobs', i: <Briefcase className="size-7" />, tone: 'lilac' },
    { t: 'AdaptaTech Empresas', d: 'Para empresas que buscan talento', r: 'business', i: <Building2 className="size-7" />, tone: 'sky' },
  ] as const
  return (
    <Screen title="Explora" back={false}>
      <ul className="grid gap-3">
        {items.map((x) => <li key={x.r}><ListLink title={x.t} desc={x.d} icon={x.i} tone={x.tone} onClick={() => go({ name: x.r })} /></li>)}
      </ul>
    </Screen>
  )
}

export function Profile() {
  const { go, progress, update, notify } = useApp()
  const done = STEPS.filter((_, i) => stepDone(progress, i)).length
  const [name, setName] = useState(progress.name)
  return (
    <Screen title="Mi perfil" back={false}>
      <Card className="p-5 flex flex-col items-center text-center mb-4">
        <Avatar skin="#E3B08C" hair="#4A2C1C" style="long" size={88} />
        <form className="mt-3 w-full flex gap-2 items-end" onSubmit={(e) => { e.preventDefault(); update((p) => ({ ...p, name: name.trim() })); notify('Nombre guardado') }}>
          <label className="flex-1 text-left text-sm font-bold">Nombre
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base" />
          </label>
          <Button type="submit" variant="soft">Guardar</Button>
        </form>
        <div className="w-full mt-4 text-left">
          <p className="text-sm font-bold mb-1">Itinerario: {done}/{STEPS.length}</p>
          <ProgressBar value={(done / STEPS.length) * 100} label="Progreso del itinerario" />
        </div>
      </Card>
      <div className="grid gap-3">
        <ListLink title="Accesibilidad" desc="Texto, contraste, voz, lectura fácil…" icon={<Accessibility className="size-7" />} onClick={() => go({ name: 'accessibility' })} />
        <ListLink title="Mi itinerario" icon={<RouteIcon className="size-7" />} tone="pink" onClick={() => go({ name: 'itinerary' })} />
        <ListLink title="Mis resultados del test" desc={progress.quizDone ? 'Ver resultados' : 'Aún no has hecho el test'} icon={<Compass className="size-7" />} tone="sky" onClick={() => go({ name: progress.quizDone ? 'results' : 'quiz' })} />
        <ListLink title="Favoritos" icon={<Star className="size-7" />} onClick={() => go({ name: 'favorites' })} />
        <ListLink title="Empleo y prácticas" desc={progress.visible ? 'Perfil visible para empresas' : 'Perfil oculto para empresas'} icon={<Briefcase className="size-7" />} tone="pink" onClick={() => go({ name: 'jobs' })} />
        <ListLink title="Borrar mis datos" desc="Se guardan solo en este dispositivo" icon={<SettingsIcon className="size-7" />} tone="sky"
          onClick={() => { if (confirm('¿Borrar tu progreso y ajustes de este dispositivo?')) { localStorage.clear(); location.reload() } }} />
      </div>
    </Screen>
  )
}
