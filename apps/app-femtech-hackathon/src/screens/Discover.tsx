import { useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, Check, ChevronRight, Crown, ExternalLink, GraduationCap, ListChecks, Sparkles, Star, Wrench, Accessibility } from 'lucide-react'
import { pioneers, wikiSearch } from '../data/pioneers'
import { useApp, computeResults } from '../store'
import { quiz } from '../data/content'
import { professions, professionById } from '../data/professions'
import { Button, Card, Icon, ListLink, ProgressBar, Screen, SearchField, toneBg } from '../components/ui'
import { HeroIllustration } from '../components/Illustrations'

export function Quiz() {
  const { progress, update, go, settings, announce } = useApp()
  const [i, setI] = useState(0)
  const q = quiz[i]
  const picked = progress.answers[q.id] ?? []
  const last = i === quiz.length - 1

  const pick = (id: string) => update((p) => {
    const cur = p.answers[q.id] ?? []
    const nextVal = q.multi ? (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]) : [id]
    return { ...p, answers: { ...p.answers, [q.id]: nextVal } }
  })
  const next = () => {
    if (last) { update((p) => ({ ...p, quizDone: true })); go({ name: 'results' }); return }
    setI(i + 1); announce(`Pregunta ${i + 2} de ${quiz.length}`)
    document.getElementById('quiz-q')?.focus()
  }

  return (
    <Screen title="Test de intereses" center>
      <div className="flex items-center gap-3 mb-4">
        <ProgressBar value={((i + 1) / quiz.length) * 100} label="Progreso del test" />
        <span className="font-bold text-sm whitespace-nowrap">{i + 1}/{quiz.length}</span>
      </div>
      <fieldset>
        <legend id="quiz-q" tabIndex={-1} className="w-full rounded-3xl bg-lilac px-5 py-5 text-center font-display font-bold text-xl mb-2 outline-none">
          {settings.easyRead ? q.easy : q.text}
        </legend>
        <p className="text-center text-sm text-muted mb-4">{q.multi ? 'Puedes elegir varias opciones' : 'Elige una opción'}</p>
        <div className="grid grid-cols-2 gap-3">
          {q.options.map((o) => {
            const on = picked.includes(o.id)
            return (
              <label key={o.id} className={`tap card relative cursor-pointer rounded-3xl border-2 p-4 flex flex-col items-center justify-center gap-2 text-center font-bold transition min-h-28 ${on ? 'border-primary bg-lilac' : 'border-line bg-surface hover:border-primary'}`}>
                <input type={q.multi ? 'checkbox' : 'radio'} name={q.id} checked={on} onChange={() => pick(o.id)} className="sr-only peer" />
                <span className={`size-12 rounded-2xl grid place-items-center ${on ? 'bg-primary text-on-primary' : 'bg-lavender text-primary'}`}><Icon name={o.icon} className="size-7" /></span>
                <span>{o.label}</span>
                {on && <Check className="absolute top-2 right-2 size-5 text-primary" strokeWidth={3} aria-hidden="true" />}
                <span className="pointer-events-none absolute inset-0 rounded-3xl peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-primary-strong peer-focus-visible:outline-offset-2" />
              </label>
            )
          })}
        </div>
      </fieldset>
      <div className="flex gap-3 mt-6">
        {i > 0 && <Button variant="soft" onClick={() => setI(i - 1)}><ArrowLeft className="size-5" aria-hidden="true" /> Anterior</Button>}
        <Button full onClick={next} disabled={picked.length === 0}>{last ? 'Ver mis resultados' : 'Siguiente'} <ArrowRight className="size-5" aria-hidden="true" /></Button>
      </div>
      {picked.length === 0 && <p className="text-center text-sm text-muted mt-2">Elige al menos una opción para continuar.</p>}
    </Screen>
  )
}

export function Results() {
  const { progress, go } = useApp()
  const results = computeResults(progress.answers)
  const top = results.slice(0, 3)
  return (
    <Screen title="Tus resultados" center>
      <p className="text-center font-display font-bold text-2xl text-primary-strong">¡Tu perfil tech!</p>
      <div className="grid grid-cols-[1fr_1.1fr] gap-2 items-center mt-2">
        <HeroIllustration label="Ilustración: chica en silla de ruedas celebrando con su portátil" />
        <div>
          <p className="font-bold mb-2">Te interesan las áreas de:</p>
          <ul className="grid gap-2">
            {top.map(({ profession: p }) => (
              <li key={p.id} className={`rounded-2xl px-3 py-2 flex items-center gap-2 text-sm font-bold ${toneBg[p.tone]}`}><Icon name={p.icon} className="size-5 shrink-0" />{p.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <Card className="p-4 mt-4">
        <h2 className="font-display font-bold flex items-center gap-2 mb-3"><Star className="size-5 text-[#E0A800] fill-[#F7C948]" aria-hidden="true" /> Profesiones recomendadas</h2>
        <ul className="grid gap-3">
          {results.slice(0, 5).map(({ profession: p, pct }) => (
            <li key={p.id}>
              <button onClick={() => go({ name: 'profession', id: p.id })} className="w-full text-left rounded-2xl p-2 hover:bg-lavender">
                <span className="flex justify-between font-bold"><span>{p.short}</span><span className="text-primary">{pct}%</span></span>
                <span className="block mt-1"><ProgressBar value={pct} label={`Afinidad con ${p.name}`} /></span>
              </button>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-4 mt-4 bg-pink border-0">
        <p className="font-bold">Recuerda</p>
        <p className="text-sm">Esto es una orientación, no un límite. Todas las profesiones tienen adaptaciones posibles. Puedes repetir el test cuando quieras.</p>
      </Card>
      <div className="grid gap-3 mt-5">
        <Button full onClick={() => go({ name: 'itinerary' })}>Ver mi itinerario <ArrowRight className="size-5" aria-hidden="true" /></Button>
        <Button full variant="soft" onClick={() => go({ name: 'quiz' })}>Repetir el test</Button>
      </div>
    </Screen>
  )
}

export function Professions() {
  const { go, settings, progress } = useApp()
  const [q, setQ] = useState('')
  const list = professions.filter((p) => (p.name + p.summary).toLowerCase().includes(q.toLowerCase()))
  return (
    <Screen title="Profesiones tecnológicas" subtitle="Explicadas de forma sencilla">
      <SearchField value={q} onChange={setQ} label="Buscar profesión" placeholder="Buscar profesión…" />
      <p className="text-sm text-muted my-3" aria-live="polite">{list.length} profesiones · has explorado {progress.viewed.length}</p>
      <ul className="grid gap-3">
        {list.map((p) => (
          <li key={p.id}>
            <ListLink title={p.name} desc={settings.easyRead ? p.easy : p.summary.split(':')[0].split('.')[0]} tone={p.tone} icon={<Icon name={p.icon} className="size-7" />}
              onClick={() => go({ name: 'profession', id: p.id })}
              right={progress.viewed.includes(p.id) ? <Check className="size-5 text-success" aria-label="Vista" /> : undefined} />
          </li>
        ))}
      </ul>
    </Screen>
  )
}

export function ProfessionDetail({ id }: { id: string }) {
  const { settings, progress, toggleIn, notify, go } = useApp()
  const p = professionById(id)!
  const fav = progress.favProfessions.includes(id)
  const sections = [
    { t: 'Qué tareas se realizan', i: <ListChecks className="size-5" />, items: p.tasks },
    { t: 'Qué formación necesitas', i: <GraduationCap className="size-5" />, items: p.training },
    { t: 'Habilidades importantes', i: <Sparkles className="size-5" />, items: p.skills },
    { t: 'Salidas laborales', i: <Briefcase className="size-5" />, items: p.jobs },
  ]
  return (
    <Screen title={p.name}
      actions={<button aria-pressed={fav} aria-label={fav ? 'Quitar de favoritos' : 'Guardar en favoritos'} onClick={() => { toggleIn('favProfessions', id); notify(fav ? 'Quitada de favoritos' : 'Guardada en favoritos') }} className="size-11 grid place-items-center rounded-full bg-lilac text-primary-strong"><Star className={`size-6 ${fav ? 'fill-current' : ''}`} aria-hidden="true" /></button>}>
      <div className={`rounded-3xl p-5 flex gap-4 items-center ${toneBg[p.tone]}`}>
        <span className="size-16 rounded-2xl bg-white/70 grid place-items-center shrink-0"><Icon name={p.icon} className="size-9" /></span>
        <div>
          <h2 className="font-display font-bold">En qué consiste</h2>
          <p className="text-ink">{settings.easyRead ? p.easy : p.summary}</p>
        </div>
      </div>
      <section className="mt-4" aria-labelledby="pioneras">
        <h2 id="pioneras" className="font-display font-bold text-lg mb-2 flex items-center gap-2"><Crown className="size-5 text-[#B07A00]" aria-hidden="true" /> Mujeres pioneras</h2>
        <ul className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1 snap-x">
          {(pioneers[p.id] ?? []).map((w) => (
            <li key={w.name} className="card snap-start shrink-0 w-64 rounded-3xl bg-surface border border-line p-4 flex flex-col gap-2 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="size-12 rounded-full bg-gradient-to-br from-pink to-lilac text-primary-strong font-display font-bold grid place-items-center shrink-0" aria-hidden="true">
                  {w.name[0] + w.name.split(' ').at(-1)![0]}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold leading-tight">{w.name}</span>
                  <span className="block text-xs text-muted">{[w.years, w.country].filter(Boolean).join(' · ')}</span>
                </span>
              </div>
              <p className="text-sm flex-1">{settings.easyRead ? w.achievement.split('.')[0] + '.' : w.achievement}</p>
              {w.disability && <span className="chip self-start rounded-full px-3 py-1 text-xs font-bold bg-success-soft text-success">{w.disability}</span>}
              <a href={wikiSearch(w.name)} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary-strong underline underline-offset-2 inline-flex items-center gap-1 self-start">
                Saber más <ExternalLink className="size-4" aria-hidden="true" /><span className="sr-only">sobre {w.name} en Wikipedia (se abre en otra pestaña)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted mt-1">Perfiles públicos reales. Desliza para ver más.</p>
      </section>
      <div className="grid gap-3 mt-4">
        {sections.map((s) => (
          <Card key={s.t} as="section" className="p-4">
            <h2 className="font-display font-bold flex items-center gap-2 mb-2 text-primary-strong">{s.i}{s.t}</h2>
            <ul className="grid gap-1.5">
              {(settings.easyRead ? s.items.slice(0, 2) : s.items).map((x) => <li key={x} className="flex gap-2"><ChevronRight className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{x}</li>)}
            </ul>
          </Card>
        ))}
        <Card as="section" className="p-4 bg-success-soft border-success/30">
          <h2 className="font-display font-bold flex items-center gap-2 mb-2 text-success"><Accessibility className="size-5" aria-hidden="true" /> Herramientas y adaptaciones</h2>
          <ul className="grid gap-1.5">
            {p.access.map((x) => <li key={x} className="flex gap-2"><Wrench className="size-5 text-success shrink-0 mt-0.5" aria-hidden="true" />{x}</li>)}
          </ul>
          <p className="text-sm mt-3 font-bold">Tu discapacidad no te impide dedicarte a esto. Las adaptaciones del puesto son un derecho.</p>
        </Card>
      </div>
      <div className="grid gap-3 mt-5">
        <Button full onClick={() => go({ name: 'courses' })}><BookOpen className="size-5" aria-hidden="true" /> Ver formación relacionada</Button>
        <Button full variant="soft" onClick={() => go({ name: 'mentors' })}>Hablar con una mentora</Button>
      </div>
    </Screen>
  )
}
