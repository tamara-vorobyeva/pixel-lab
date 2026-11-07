import { useEffect, useRef, useState } from 'react'
import { Captions, Check, ChevronDown, Circle, FileText, MessageCircle, Pause, Play, SlidersHorizontal, Star, Send, Users, X } from 'lucide-react'
import { useApp, STEPS, stepDone } from '../store'
import { courses, competences, mentors, resources, women, type Access, type CourseType, type Modality, type Level, type MentorKind } from '../data/content'
import { professions } from '../data/professions'
import { Avatar } from '../components/Avatar'
import { Button, Card, Chip, Icon, ListLink, ProgressBar, Screen, SearchField, toneBg, readAloud } from '../components/ui'
import { TrophyIllustration } from '../components/Illustrations'

const DemoNote = () => <p className="text-xs text-muted mt-4">Datos de demostración. Comprueba requisitos, precios y fechas en la fuente oficial.</p>

/* ---------------- Courses ---------------- */
const TYPES: (CourseType | 'Todos')[] = ['Todos', 'Grado', 'FP', 'Curso online', 'Bootcamp', 'Beca']
const MODS: Modality[] = ['Online', 'Presencial', 'Híbrida']
const LEVELS: Level[] = ['Inicial', 'Intermedio', 'Avanzado']
const ACCESS: Access[] = ['Subtítulos', 'Lectura fácil', 'Lector de pantalla', 'Intérprete LSE', 'Movilidad reducida', 'Ritmo flexible']

export function Courses() {
  const { progress, toggleIn, notify } = useApp()
  const [q, setQ] = useState('')
  const [type, setType] = useState<CourseType | 'Todos'>('Todos')
  const [showFilters, setShowFilters] = useState(false)
  const [mods, setMods] = useState<Modality[]>([])
  const [levels, setLevels] = useState<Level[]>([])
  const [freeOnly, setFreeOnly] = useState(false)
  const [access, setAccess] = useState<Access[]>([])
  const [open, setOpen] = useState<string | null>(null)
  const tog = <T,>(arr: T[], set: (v: T[]) => void, v: T) => set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v])

  const list = courses.filter((c) =>
    (type === 'Todos' || c.type === type) &&
    (c.title + c.description + c.provider).toLowerCase().includes(q.toLowerCase()) &&
    (!mods.length || mods.includes(c.modality)) && (!levels.length || levels.includes(c.level)) &&
    (!freeOnly || c.free) && access.every((a) => c.access.includes(a)))
  const nFilters = mods.length + levels.length + access.length + (freeOnly ? 1 : 0)

  return (
    <Screen title="Formación y cursos" center>
      <SearchField value={q} onChange={setQ} label="Buscar cursos" placeholder="Buscar cursos…" />
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 -mx-4 px-4" role="group" aria-label="Tipo de formación">
        {TYPES.map((t) => <Chip key={t} active={type === t} onClick={() => setType(t)}>{t}</Chip>)}
      </div>
      <Button variant="soft" full aria-expanded={showFilters} aria-controls="filters" onClick={() => setShowFilters(!showFilters)}>
        <SlidersHorizontal className="size-5" aria-hidden="true" /> Filtros {nFilters > 0 && `(${nFilters})`} <ChevronDown className={`size-5 transition ${showFilters ? 'rotate-180' : ''}`} aria-hidden="true" />
      </Button>
      {showFilters && (
        <Card className="p-4 mt-3 grid gap-4" >
          <div id="filters" className="grid gap-4">
            {[
              { t: 'Modalidad', items: MODS, sel: mods, set: setMods },
              { t: 'Nivel', items: LEVELS, sel: levels, set: setLevels },
              { t: 'Accesibilidad', items: ACCESS, sel: access, set: setAccess },
            ].map((g) => (
              <fieldset key={g.t}>
                <legend className="font-bold mb-2">{g.t}</legend>
                <div className="flex flex-wrap gap-2">
                  {(g.items as string[]).map((v) => <Chip key={v} active={(g.sel as string[]).includes(v)} onClick={() => tog(g.sel as string[], g.set as (v: string[]) => void, v)}>{v}</Chip>)}
                </div>
              </fieldset>
            ))}
            <fieldset>
              <legend className="font-bold mb-2">Precio</legend>
              <div className="flex gap-2"><Chip active={!freeOnly} onClick={() => setFreeOnly(false)}>Todos</Chip><Chip active={freeOnly} onClick={() => setFreeOnly(true)}>Solo gratuitos</Chip></div>
            </fieldset>
            {nFilters > 0 && <Button variant="ghost" onClick={() => { setMods([]); setLevels([]); setAccess([]); setFreeOnly(false) }}>Quitar filtros</Button>}
          </div>
        </Card>
      )}
      <p className="text-sm text-muted my-3" aria-live="polite">{list.length} resultados</p>
      <ul className="grid gap-3">
        {list.map((c) => {
          const fav = progress.favCourses.includes(c.id)
          const isOpen = open === c.id
          return (
            <Card as="li" key={c.id} className="overflow-hidden">
              <div className="flex">
                <button onClick={() => setOpen(isOpen ? null : c.id)} aria-expanded={isOpen} className="flex-1 flex gap-3 p-3 text-left items-center">
                  <span className={`size-16 rounded-2xl grid place-items-center shrink-0 ${toneBg[c.tone]}`}><Icon name={c.icon} className="size-8" /></span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold leading-tight">{c.title}</span>
                    <span className="flex flex-wrap gap-1 mt-1.5"><Chip>{c.type}</Chip><Chip>{c.modality}</Chip>{c.free && <Chip>Gratuito</Chip>}</span>
                  </span>
                  <ChevronDown className={`size-5 text-primary shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <button onClick={() => { toggleIn('favCourses', c.id); notify(fav ? 'Quitado de favoritos' : 'Guardado en favoritos') }} aria-pressed={fav} aria-label={`${fav ? 'Quitar' : 'Guardar'} ${c.title} ${fav ? 'de' : 'en'} favoritos`} className="w-12 grid place-items-center text-primary hover:bg-lavender">
                  <Star className={`size-6 ${fav ? 'fill-current' : ''}`} aria-hidden="true" />
                </button>
              </div>
              {isOpen && (
                <div className="px-4 pb-4 text-sm grid gap-2 pop">
                  <p>{c.description}</p>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-1">
                    <dt className="text-muted">Centro</dt><dd className="font-bold">{c.provider}</dd>
                    <dt className="text-muted">Duración</dt><dd className="font-bold">{c.duration}</dd>
                    <dt className="text-muted">Nivel</dt><dd className="font-bold">{c.level}</dd>
                    <dt className="text-muted">Precio</dt><dd className="font-bold">{c.price}</dd>
                  </dl>
                  <p className="font-bold mt-1">Accesibilidad:</p>
                  <ul className="flex flex-wrap gap-1">{c.access.map((a) => <li key={a} className="chip rounded-full px-3 py-1 text-xs font-bold bg-success-soft text-success flex items-center gap-1"><Check className="size-3.5" aria-hidden="true" />{a}</li>)}</ul>
                  <Button className="mt-2" onClick={() => notify('Enlace simulado: en la versión real abriría la web oficial')}>Más información</Button>
                </div>
              )}
            </Card>
          )
        })}
      </ul>
      {list.length === 0 && <p className="text-center py-8">No hay resultados. Prueba a quitar algún filtro.</p>}
      <DemoNote />
    </Screen>
  )
}

/* ---------------- Inspiring women ---------------- */
export function Women() {
  const { go } = useApp()
  const [f, setF] = useState(0)
  const w = women[f]
  return (
    <Screen title="Mujeres que inspiran" center>
      <section aria-roledescription="carrusel" aria-label="Historia destacada">
        <button onClick={() => go({ name: 'woman', id: w.id })} className="card w-full rounded-3xl bg-lilac border border-line p-4 flex gap-4 items-center text-left">
          <Avatar {...w.avatar} size={96} />
          <span>
            <span className="block font-display text-lg leading-snug">“{w.quote}”</span>
            <span className="block mt-2 font-bold text-sm">{w.name}</span>
            <span className="block text-xs text-muted">{w.role}</span>
          </span>
        </button>
        <div className="flex justify-center gap-1 mt-2">
          {women.map((x, i) => (
            <button key={x.id} onClick={() => setF(i)} aria-label={`Ver historia de ${x.name}`} aria-current={i === f} className="size-11 grid place-items-center">
              <span className={`block rounded-full ${i === f ? 'w-6 h-2.5 bg-primary' : 'size-2.5 bg-line'}`} />
            </button>
          ))}
        </div>
      </section>
      <h2 className="font-display font-bold text-lg mt-2 mb-3">Todas las historias</h2>
      <ul className="grid gap-3">
        {women.map((x) => (
          <li key={x.id}>
            <ListLink title={x.name} desc={`${x.role} · ${x.disability}`} icon={<Avatar {...x.avatar} size={56} />} onClick={() => go({ name: 'woman', id: x.id })} />
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted mt-4">Perfiles ficticios de demostración. En la versión real se incluirían referentes reales con su consentimiento.</p>
    </Screen>
  )
}

export function WomanDetail({ id }: { id: string }) {
  const { settings, progress, toggleIn, notify } = useApp()
  const w = women.find((x) => x.id === id)!
  const [playing, setPlaying] = useState(false)
  const [line, setLine] = useState(-1)
  const [cc, setCc] = useState(settings.subtitles)
  const [tx, setTx] = useState(settings.transcripts)
  const timer = useRef<number | undefined>(undefined)
  const fav = progress.favWomen.includes(id)

  useEffect(() => () => { clearInterval(timer.current); if ('speechSynthesis' in window) speechSynthesis.cancel() }, [])
  const play = () => {
    if (playing) { clearInterval(timer.current); setPlaying(false); speechSynthesis?.cancel(); return }
    setPlaying(true)
    let i = line >= w.captions.length - 1 ? -1 : line
    const step = () => {
      i += 1
      if (i >= w.captions.length) { clearInterval(timer.current); setPlaying(false); return }
      setLine(i); readAloud(w.captions[i])
    }
    step(); timer.current = window.setInterval(step, 3500)
  }

  return (
    <Screen title={w.name}
      actions={<button aria-pressed={fav} aria-label={fav ? 'Quitar de favoritos' : 'Guardar en favoritos'} onClick={() => { toggleIn('favWomen', id); notify(fav ? 'Quitada de favoritos' : 'Guardada en favoritos') }} className="size-11 grid place-items-center rounded-full bg-lilac text-primary-strong"><Star className={`size-6 ${fav ? 'fill-current' : ''}`} aria-hidden="true" /></button>}>
      <div className="flex gap-4 items-center">
        <Avatar {...w.avatar} size={88} />
        <div>
          <p className="font-bold text-lg">{w.role}</p>
          <p className="text-sm text-muted">{w.path}</p>
          <p className="mt-1"><Chip>{w.disability}</Chip></p>
        </div>
      </div>

      {/* Simulated video with real captions, transcript and synthesized audio */}
      <section aria-label="Vídeo de la historia" className="mt-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-strong to-primary aspect-video grid place-items-center">
          <Avatar {...w.avatar} size={110} />
          <button onClick={play} aria-label={playing ? 'Pausar vídeo' : 'Reproducir vídeo'} className="absolute size-16 rounded-full bg-white/90 text-primary-strong grid place-items-center shadow-lg left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: playing ? 0.35 : 1 }}>
            {playing ? <Pause className="size-8" aria-hidden="true" /> : <Play className="size-8 ml-1" aria-hidden="true" />}
          </button>
          {cc && line >= 0 && <p className="absolute bottom-3 inset-x-3 text-center bg-black/80 text-white rounded-xl px-3 py-2 text-base" aria-live="polite">{w.captions[line]}</p>}
        </div>
        <div className="flex gap-2 mt-2">
          <Button variant={cc ? 'primary' : 'soft'} aria-pressed={cc} onClick={() => setCc(!cc)} className="flex-1 !px-3"><Captions className="size-5" aria-hidden="true" /> Subtítulos</Button>
          <Button variant={tx ? 'primary' : 'soft'} aria-pressed={tx} aria-expanded={tx} onClick={() => setTx(!tx)} className="flex-1 !px-3"><FileText className="size-5" aria-hidden="true" /> Transcripción</Button>
        </div>
        {tx && (
          <Card className="p-4 mt-2 text-sm">
            <h3 className="font-bold mb-1">Transcripción</h3>
            {w.captions.map((c, i) => <p key={i} className={i === line ? 'font-bold text-primary-strong' : ''}>{c}</p>)}
          </Card>
        )}
      </section>

      <Card as="section" className="p-4 mt-4">
        <h2 className="font-display font-bold mb-1">Su historia</h2>
        <p>{settings.easyRead ? w.captions.join(' ') : w.story}</p>
      </Card>
      <Card as="section" className="p-4 mt-3 bg-pink border-0">
        <h2 className="font-display font-bold mb-2">Consejos para ti</h2>
        <ul className="grid gap-2">{w.advice.map((a) => <li key={a} className="flex gap-2"><Check className="size-5 text-pink-ink shrink-0 mt-0.5" aria-hidden="true" />{a}</li>)}</ul>
      </Card>
    </Screen>
  )
}

/* ---------------- Itinerary ---------------- */
export function Itinerary() {
  const { progress, go, toggleIn } = useApp()
  const done = STEPS.map((_, i) => stepDone(progress, i))
  const n = done.filter(Boolean).length
  const current = done.findIndex((d) => !d)
  return (
    <Screen title="Mi itinerario" subtitle="Tu camino paso a paso hacia el sector tech" center>
      <div className="mb-5">
        <div className="flex justify-between text-sm font-bold mb-1"><span>Progreso</span><span>{Math.round((n / STEPS.length) * 100)}%</span></div>
        <ProgressBar value={(n / STEPS.length) * 100} label="Progreso del itinerario" />
      </div>
      <ol className="relative grid gap-3">
        {STEPS.map((s, i) => {
          const isDone = done[i], isCur = i === current
          return (
            <li key={s.title} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className={`size-10 rounded-full grid place-items-center font-bold shrink-0 ${isDone ? 'bg-success text-white' : isCur ? 'bg-primary text-on-primary' : 'border-2 border-line text-muted bg-surface'}`}>
                  {isDone ? <Check className="size-6" strokeWidth={3} aria-hidden="true" /> : i + 1}
                </span>
                {i < STEPS.length - 1 && <span className={`w-0.5 flex-1 mt-1 ${isDone ? 'bg-success' : 'bg-line'}`} aria-hidden="true" />}
              </div>
              <Card className={`flex-1 p-4 ${isCur ? 'bg-lilac border-primary' : ''}`}>
                <h2 className="font-bold text-ink">{s.title} <span className="sr-only">{isDone ? '(completado)' : isCur ? '(paso actual)' : '(pendiente)'}</span></h2>
                <p className="text-sm text-muted">{s.desc}</p>
                {i === 3 && (
                  <fieldset className="mt-3">
                    <legend className="text-sm font-bold mb-2">Competencias que estoy trabajando ({progress.competences.length}/3)</legend>
                    <div className="flex flex-wrap gap-2">{competences.map((c) => <Chip key={c} active={progress.competences.includes(c)} onClick={() => toggleIn('competences', c)}>{c}</Chip>)}</div>
                  </fieldset>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {i !== 3 && <Button variant={isCur ? 'primary' : 'soft'} className="!py-2 !px-4 text-sm" onClick={() => go(s.route)}>Ir</Button>}
                  <Button variant="ghost" className="!py-2 !px-3 text-sm" aria-pressed={progress.manual.includes(i)} onClick={() => toggleIn('manual', i)}>
                    {progress.manual.includes(i) ? <Check className="size-4" aria-hidden="true" /> : <Circle className="size-4" aria-hidden="true" />} Marcar como hecho
                  </Button>
                </div>
              </Card>
            </li>
          )
        })}
      </ol>
      <Card className="p-4 mt-5 flex items-center gap-3 bg-lilac border-0">
        <TrophyIllustration />
        <p className="font-display font-bold">{n === STEPS.length ? '¡Lo has conseguido! Sigue creciendo.' : '¡Tú puedes llegar muy lejos!'}</p>
      </Card>
    </Screen>
  )
}

/* ---------------- Mentors ---------------- */
const KINDS: (MentorKind | 'Todas')[] = ['Todas', 'Profesional', 'Estudiante', 'Con discapacidad', 'Asociación']
export function Mentors() {
  const { progress, update, notify, toggleIn } = useApp()
  const [q, setQ] = useState('')
  const [k, setK] = useState<MentorKind | 'Todas'>('Todas')
  const [chat, setChat] = useState<string | null>(null)
  const [msg, setMsg] = useState('')
  const list = mentors.filter((m) => (k === 'Todas' || m.kinds.includes(k)) && (m.name + m.role + m.topics.join(' ')).toLowerCase().includes(q.toLowerCase()))
  const m = mentors.find((x) => x.id === chat)

  return (
    <Screen title="Mentoras" subtitle="Conecta con profesionales del sector" center>
      <SearchField value={q} onChange={setQ} label="Buscar mentora" placeholder="Buscar mentora o tema…" />
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-3 -mx-4 px-4" role="group" aria-label="Tipo de mentora">
        {KINDS.map((x) => <Chip key={x} active={k === x} onClick={() => setK(x)}>{x}</Chip>)}
      </div>
      <ul className="grid gap-3">
        {list.map((x) => (
          <Card as="li" key={x.id} className="p-3">
            <div className="flex gap-3 items-center">
              {x.avatar ? <Avatar {...x.avatar} size={60} /> : <span className="size-[60px] rounded-full bg-pink text-pink-ink grid place-items-center"><Icon name={x.icon!} className="size-8" /></span>}
              <div className="flex-1 min-w-0">
                <p className="font-bold">{x.name}</p>
                <p className="text-sm text-muted">{x.role}</p>
                <p className={`text-xs font-bold flex items-center gap-1 ${x.available ? 'text-success' : 'text-muted'}`}><span className={`size-2.5 rounded-full ${x.available ? 'bg-success' : 'bg-muted'}`} aria-hidden="true" />{x.available ? 'Disponible' : 'No disponible ahora'}</p>
              </div>
              <button onClick={() => setChat(x.id)} aria-label={`Escribir a ${x.name}`} className="size-12 rounded-full bg-lilac text-primary-strong grid place-items-center">
                <MessageCircle className="size-6" aria-hidden="true" />
              </button>
            </div>
            <p className="text-sm mt-2">{x.bio}</p>
            <ul className="flex flex-wrap gap-1 mt-2" aria-label="Formatos de contacto">{x.formats.map((f) => <li key={f}><Chip>{f}</Chip></li>)}</ul>
            {progress.contacted.includes(x.id) && <p className="text-xs text-success font-bold mt-2 flex items-center gap-1"><Check className="size-4" aria-hidden="true" /> Mensaje enviado</p>}
          </Card>
        ))}
      </ul>
      <Button full className="mt-5" onClick={() => { update((p) => ({ ...p, joined: !p.joined })); notify(progress.joined ? 'Has salido de la comunidad' : '¡Bienvenida a la comunidad AdaptaTech!') }} aria-pressed={progress.joined}>
        <Users className="size-5" aria-hidden="true" /> {progress.joined ? 'Ya eres parte de la comunidad' : 'Unirme a la comunidad'}
      </Button>

      {m && (
        <div role="dialog" aria-modal="true" aria-labelledby="chat-title" className="absolute inset-0 z-30 bg-black/40 flex items-end" onKeyDown={(e) => e.key === 'Escape' && setChat(null)}>
          <div className="w-full bg-surface rounded-t-3xl p-5 pop">
            <div className="flex items-center gap-3 mb-3">
              {m.avatar && <Avatar {...m.avatar} size={44} />}
              <h2 id="chat-title" className="font-display font-bold flex-1">Escribir a {m.name}</h2>
              <button onClick={() => setChat(null)} aria-label="Cerrar" className="size-11 grid place-items-center rounded-full hover:bg-lilac"><X className="size-6" aria-hidden="true" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); if (!progress.contacted.includes(m.id)) toggleIn('contacted', m.id); setChat(null); setMsg(''); notify(`Mensaje enviado a ${m.name} (simulado)`) }}>
              <label className="block text-sm font-bold mb-1" htmlFor="msg">Tu mensaje</label>
              <textarea id="msg" autoFocus rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} required placeholder="Hola, me interesa saber cómo empezaste…" className="w-full rounded-2xl border border-line bg-lavender p-3" />
              <div className="flex flex-wrap gap-2 my-2">
                {['¿Cómo empezaste?', '¿Qué adaptaciones usas?', '¿Me recomiendas algún curso?'].map((s) => <Chip key={s} onClick={() => setMsg(s)}>{s}</Chip>)}
              </div>
              <Button full type="submit"><Send className="size-5" aria-hidden="true" /> Enviar</Button>
            </form>
          </div>
        </div>
      )}
      <p className="text-xs text-muted mt-4">Perfiles y mensajería simulados. Ver README para lo necesario en producción.</p>
    </Screen>
  )
}

/* ---------------- Resources ---------------- */
export function Resources() {
  const [open, setOpen] = useState<string | null>('becas')
  return (
    <Screen title="Recursos y becas" subtitle="Ayudas, adaptaciones y empleo inclusivo">
      <ul className="grid gap-3">
        {resources.map((g) => {
          const isOpen = open === g.id
          return (
            <Card as="li" key={g.id} className="overflow-hidden">
              <h2>
                <button onClick={() => setOpen(isOpen ? null : g.id)} aria-expanded={isOpen} className="w-full flex items-center gap-3 p-3 text-left">
                  <span className="size-12 rounded-2xl bg-lilac text-primary-strong grid place-items-center shrink-0"><Icon name={g.icon} className="size-6" /></span>
                  <span className="flex-1 font-bold">{g.title}</span>
                  <ChevronDown className={`size-5 text-primary transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h2>
              {isOpen && (
                <ul className="px-4 pb-4 grid gap-3 pop">
                  {g.items.map((it) => (
                    <li key={it.title} className="rounded-2xl bg-lavender p-3">
                      <p className="font-bold flex flex-wrap items-center gap-2">{it.title}{it.tag && <Chip>{it.tag}</Chip>}</p>
                      <p className="text-sm mt-1">{it.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          )
        })}
      </ul>
      <DemoNote />
    </Screen>
  )
}

/* ---------------- Favorites ---------------- */
export function Favorites() {
  const { progress, go } = useApp()
  const favC = courses.filter((c) => progress.favCourses.includes(c.id))
  const favP = professions.filter((p) => progress.favProfessions.includes(p.id))
  const favW = women.filter((w) => progress.favWomen.includes(w.id))
  const empty = !favC.length && !favP.length && !favW.length
  return (
    <Screen title="Favoritos" back={false}>
      {empty && (
        <Card className="p-6 text-center">
          <Star className="size-10 mx-auto text-primary" aria-hidden="true" />
          <p className="font-bold mt-2">Aún no tienes favoritos</p>
          <p className="text-sm text-muted mb-4">Pulsa la estrella en profesiones, cursos o historias para guardarlos aquí.</p>
          <Button onClick={() => go({ name: 'explore' })}>Explorar</Button>
        </Card>
      )}
      {favP.length > 0 && <h2 className="font-display font-bold mb-2">Profesiones</h2>}
      <ul className="grid gap-3 mb-5">{favP.map((p) => <li key={p.id}><ListLink title={p.name} tone={p.tone} icon={<Icon name={p.icon} className="size-7" />} onClick={() => go({ name: 'profession', id: p.id })} /></li>)}</ul>
      {favC.length > 0 && <h2 className="font-display font-bold mb-2">Formación</h2>}
      <ul className="grid gap-3 mb-5">{favC.map((c) => <li key={c.id}><ListLink title={c.title} desc={`${c.type} · ${c.modality} · ${c.price}`} tone={c.tone} icon={<Icon name={c.icon} className="size-7" />} onClick={() => go({ name: 'courses' })} /></li>)}</ul>
      {favW.length > 0 && <h2 className="font-display font-bold mb-2">Historias</h2>}
      <ul className="grid gap-3">{favW.map((w) => <li key={w.id}><ListLink title={w.name} desc={w.role} icon={<Avatar {...w.avatar} size={56} />} onClick={() => go({ name: 'woman', id: w.id })} /></li>)}</ul>
    </Screen>
  )
}
