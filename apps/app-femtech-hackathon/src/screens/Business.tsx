import { useState } from 'react'
import { ArrowRight, BadgeCheck, Building2, Check, ChevronRight, Eye, EyeOff, Laptop, MapPin, Scale, Send, ShieldCheck, Sparkles, UserSearch } from 'lucide-react'
import { useApp } from '../store'
import { offers, companies, services, plans, candidates, type OfferType } from '../data/companies'
import { professionById, professions } from '../data/professions'
import { Button, Card, Chip, Icon, LogoMark, Screen } from '../components/ui'

const Demo = ({ children }: { children: string }) => <p className="text-xs text-muted mt-4">{children}</p>

function CompanyBadge({ name, color, size = 48 }: { name: string; color: string; size?: number }) {
  return (
    <span aria-hidden="true" className="rounded-2xl grid place-items-center font-display font-bold text-white shrink-0" style={{ background: color, width: size, height: size }}>
      {name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
    </span>
  )
}

/* ---------------- Candidate side: jobs & inclusive companies ---------------- */
const TYPES: (OfferType | 'Todas')[] = ['Todas', 'Prácticas', 'Empleo', 'Programa de talento']

export function Jobs() {
  const { go, progress, update, toggleIn, notify, settings } = useApp()
  const [tab, setTab] = useState<'ofertas' | 'empresas'>('ofertas')
  const [type, setType] = useState<OfferType | 'Todas'>('Todas')
  const list = offers.filter((o) => type === 'Todas' || o.type === type)

  return (
    <Screen title="Empleo y prácticas" back={false}>
      <button onClick={() => go({ name: 'business' })} className="card w-full mb-4 flex items-center gap-3 rounded-3xl p-4 text-left text-on-primary bg-gradient-to-br from-primary-strong to-primary border-0 shadow-md">
        <Building2 className="size-8 shrink-0" aria-hidden="true" />
        <span className="flex-1"><span className="block font-bold">¿Eres una empresa?</span><span className="text-sm opacity-95">Capta talento tecnológico con AdaptaTech Empresas</span></span>
        <ChevronRight className="size-6" aria-hidden="true" />
      </button>

      <Card className="p-4 mb-4">
        <div className="flex items-start gap-3">
          {progress.visible ? <Eye className="size-6 text-success shrink-0" aria-hidden="true" /> : <EyeOff className="size-6 text-muted shrink-0" aria-hidden="true" />}
          <div className="flex-1">
            <p className="font-bold">{progress.visible ? 'Tu perfil es visible para empresas' : 'Tu perfil está oculto para empresas'}</p>
            <p className="text-sm text-muted">{settings.easyRead ? 'Tú decides si las empresas te ven.' : 'Las empresas ven tu área, formación y disponibilidad, nunca tu nombre ni tu discapacidad. Tú decides si compartes tus datos de contacto.'}</p>
          </div>
        </div>
        <Button variant={progress.visible ? 'soft' : 'primary'} full className="mt-3" aria-pressed={progress.visible}
          onClick={() => { update((p) => ({ ...p, visible: !p.visible })); notify(progress.visible ? 'Perfil oculto para empresas' : 'Tu perfil anónimo ya es visible para empresas') }}>
          {progress.visible ? 'Ocultar mi perfil' : 'Hacer visible mi perfil'}
        </Button>
      </Card>

      <div role="tablist" aria-label="Secciones de empleo" className="grid grid-cols-2 gap-1 rounded-full bg-lilac p-1 mb-3">
        {(['ofertas', 'empresas'] as const).map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full py-2 font-bold capitalize ${tab === t ? 'bg-surface text-primary-strong shadow' : 'text-primary-strong'}`}>
            {t === 'ofertas' ? 'Ofertas' : 'Empresas inclusivas'}
          </button>
        ))}
      </div>

      {tab === 'ofertas' ? (
        <div role="tabpanel">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4" role="group" aria-label="Tipo de oferta">
            {TYPES.map((t) => <Chip key={t} active={type === t} onClick={() => setType(t)}>{t}</Chip>)}
          </div>
          <ul className="grid gap-3 mt-2">
            {list.map((o) => {
              const applied = progress.applied.includes(o.id)
              const prof = professionById(o.area)
              return (
                <Card as="li" key={o.id} className="p-4">
                  <div className="flex gap-3">
                    <CompanyBadge name={o.company} color={o.color} />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold leading-tight">{o.title}</p>
                      <p className="text-sm text-muted">{o.company}</p>
                      <p className="text-sm flex flex-wrap gap-x-3 mt-1">
                        <span className="inline-flex items-center gap-1"><Laptop className="size-4" aria-hidden="true" />{o.modality}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="size-4" aria-hidden="true" />{o.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3"><Chip>{o.type}</Chip>{prof && <Chip>{prof.name}</Chip>}</div>
                  <p className="text-sm mt-2">{o.description}</p>
                  {o.salary && <p className="text-sm font-bold mt-1">{o.salary}</p>}
                  <p className="text-sm font-bold mt-3 text-success">Adaptaciones que ofrece:</p>
                  <ul className="flex flex-wrap gap-1 mt-1">{o.adaptations.map((a) => <li key={a} className="chip rounded-full px-3 py-1 text-xs font-bold bg-success-soft text-success inline-flex items-center gap-1"><Check className="size-3.5" aria-hidden="true" />{a}</li>)}</ul>
                  <Button full className="mt-3" variant={applied ? 'soft' : 'primary'} aria-pressed={applied}
                    onClick={() => { toggleIn('applied', o.id); notify(applied ? 'Has retirado tu interés' : `${o.company} recibirá tu perfil anónimo (simulado)`) }}>
                    {applied ? <><Check className="size-5" aria-hidden="true" /> Interés enviado</> : <>Me interesa <ArrowRight className="size-5" aria-hidden="true" /></>}
                  </Button>
                </Card>
              )
            })}
          </ul>
        </div>
      ) : (
        <ul role="tabpanel" className="grid gap-3">
          {companies.map((c) => (
            <Card as="li" key={c.name} className="p-4">
              <div className="flex gap-3 items-center">
                <CompanyBadge name={c.name} color={c.color} />
                <div className="flex-1"><p className="font-bold">{c.name}</p><p className="text-sm text-muted">{c.sector} · {c.size}</p></div>
                <BadgeCheck className="size-7 text-primary" aria-label="Empresa inclusiva verificada" />
              </div>
              <ul className="grid gap-1 mt-3 text-sm">{c.highlights.map((h) => <li key={h} className="flex gap-2"><Check className="size-4 text-success shrink-0 mt-0.5" aria-hidden="true" />{h}</li>)}</ul>
              <p className="text-sm font-bold text-primary-strong mt-2">{offers.filter((o) => o.company === c.name).length} ofertas activas</p>
            </Card>
          ))}
        </ul>
      )}
      <Demo>Empresas y ofertas ficticias de demostración.</Demo>
    </Screen>
  )
}

/* ---------------- Company side: B2B portal ---------------- */
export function Business() {
  const { notify } = useApp()
  const [staff, setStaff] = useState('120')
  const [area, setArea] = useState('todas')
  const [requested, setRequested] = useState<string[]>([])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ company: '', email: '', size: '', plan: 'Talento' })

  const n = Math.max(0, Math.floor(Number(staff) || 0))
  const required = n >= 50 ? Math.ceil(n * 0.02) : 0
  const pool = candidates.filter((c) => area === 'todas' || c.area === area)

  return (
    <Screen title="AdaptaTech Empresas" subtitle="Talento tecnológico diverso para tu equipo">
      {/* Hero */}
      <section className="rounded-3xl p-5 text-on-primary bg-gradient-to-br from-primary-strong to-primary">
        <div className="flex items-center gap-2 mb-2"><span className="rounded-2xl bg-white p-1.5"><LogoMark className="h-8" /></span><span className="font-bold text-sm uppercase tracking-wider">Para empresas</span></div>
        <h2 className="font-display font-bold text-2xl leading-tight text-balance">Contrata a las profesionales tech que el sector necesita</h2>
        <p className="mt-2 opacity-95">Conectamos tu empresa con chicas y mujeres con discapacidad que se forman en tecnología. Cumple la normativa y gana talento comprometido.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <a href="#contacto" className="btn inline-flex items-center gap-2 rounded-full bg-white text-primary-strong px-5 py-3 font-bold">Solicitar demo <ArrowRight className="size-5" aria-hidden="true" /></a>
          <a href="#planes" className="btn inline-flex items-center rounded-full border-2 border-white px-5 py-3 font-bold">Ver planes</a>
        </div>
      </section>

      {/* Legal quota calculator */}
      <Card as="section" className="p-5 mt-4">
        <h2 className="font-display font-bold text-lg flex items-center gap-2"><Scale className="size-5 text-primary" aria-hidden="true" /> ¿Cumples la cuota de reserva?</h2>
        <p className="text-sm text-muted mt-1">En España, las empresas de 50 o más personas en plantilla deben reservar al menos un 2 % de los puestos a personas con discapacidad (Ley General de Discapacidad).</p>
        <label className="block font-bold mt-4" htmlFor="staff">Personas en tu plantilla</label>
        <input id="staff" type="number" inputMode="numeric" min={0} value={staff} onChange={(e) => setStaff(e.target.value)}
          className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-3 text-lg font-bold" />
        <div className="mt-3 rounded-2xl bg-lilac p-4" aria-live="polite">
          {n >= 50 ? (
            <p><span className="font-display font-bold text-3xl text-primary-strong">{required}</span> <span className="font-bold">personas con discapacidad como mínimo</span><span className="block text-sm text-muted">Cálculo orientativo. Confírmalo con tu asesoría laboral.</span></p>
          ) : (
            <p className="font-bold">Con menos de 50 personas no tienes obligación legal, pero el talento diverso mejora tus equipos y productos.</p>
          )}
        </div>
      </Card>

      {/* Services */}
      <section className="mt-6">
        <h2 className="font-display font-bold text-lg mb-3">Qué te ofrecemos</h2>
        <ul className="grid grid-cols-2 gap-3">
          {services.map((s) => (
            <Card as="li" key={s.title} className="p-4">
              <span className="size-11 rounded-2xl bg-lilac text-primary-strong grid place-items-center mb-2"><Icon name={s.icon} className="size-6" /></span>
              <p className="font-bold leading-tight">{s.title}</p>
              <p className="text-sm text-muted mt-1">{s.text}</p>
            </Card>
          ))}
        </ul>
      </section>

      {/* Talent search demo */}
      <section className="mt-6" aria-labelledby="talento">
        <h2 id="talento" className="font-display font-bold text-lg flex items-center gap-2"><UserSearch className="size-5 text-primary" aria-hidden="true" /> Busca talento</h2>
        <p className="text-sm text-muted mb-3">Vista previa con perfiles anónimos. Solo aparecen candidatas que han aceptado ser visibles.</p>
        <label className="block text-sm font-bold" htmlFor="area">Área</label>
        <select id="area" value={area} onChange={(e) => setArea(e.target.value)} className="mt-1 mb-3 w-full rounded-2xl border border-line bg-surface px-4 py-2 text-base">
          <option value="todas">Todas las áreas</option>
          {professions.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <ul className="grid gap-3">
          {pool.map((c) => {
            const done = requested.includes(c.id)
            return (
              <Card as="li" key={c.id} className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="font-bold">Candidata {c.id}</p>
                    <p className="text-sm text-muted">{professionById(c.area)?.name} · {c.level}</p>
                  </div>
                  <ShieldCheck className="size-6 text-success shrink-0" aria-label="Perfil anónimo con consentimiento" />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">{c.skills.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                <dl className="grid grid-cols-2 gap-x-3 text-sm mt-2">
                  <dt className="text-muted">Modalidad</dt><dd className="font-bold">{c.modality}</dd>
                  <dt className="text-muted">Zona</dt><dd className="font-bold">{c.region}</dd>
                  <dt className="text-muted">Disponibilidad</dt><dd className="font-bold">{c.availability}</dd>
                  <dt className="text-muted">Necesita</dt><dd className="font-bold">{c.needs.join(', ')}</dd>
                </dl>
                <Button full variant={done ? 'soft' : 'primary'} className="mt-3" disabled={done}
                  onClick={() => { setRequested([...requested, c.id]); notify(`Solicitud enviada. La candidata ${c.id} decidirá si comparte su contacto (simulado)`) }}>
                  {done ? <><Check className="size-5" aria-hidden="true" /> Solicitud enviada</> : 'Solicitar contacto'}
                </Button>
              </Card>
            )
          })}
        </ul>
        {pool.length === 0 && <p className="text-center py-6">Aún no hay candidatas visibles en esta área.</p>}
      </section>

      {/* How it works */}
      <Card as="section" className="p-5 mt-6 bg-lavender">
        <h2 className="font-display font-bold text-lg mb-3">Cómo funciona</h2>
        <ol className="grid gap-3">
          {['Crea tu perfil de empresa y cuéntanos qué adaptaciones ofreces.', 'Publica ofertas o busca candidatas por área y formación.', 'La candidata acepta compartir su contacto y empezáis a hablar.', 'Te acompañamos en la adaptación del puesto y medimos el impacto.'].map((t, i) => (
            <li key={t} className="flex gap-3"><span className="size-8 rounded-full bg-primary text-on-primary font-bold grid place-items-center shrink-0">{i + 1}</span><span className="pt-1">{t}</span></li>
          ))}
        </ol>
      </Card>

      {/* Plans */}
      <section id="planes" className="mt-6 scroll-mt-20">
        <h2 className="font-display font-bold text-lg mb-3">Planes</h2>
        <ul className="grid gap-3">
          {plans.map((p) => (
            <Card as="li" key={p.name} className={`p-5 ${p.featured ? 'border-primary border-2' : ''}`}>
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-display font-bold text-xl">{p.name}</p>
                {p.featured && <span className="chip rounded-full px-3 py-1 text-xs font-bold bg-primary text-on-primary inline-flex items-center gap-1"><Sparkles className="size-3.5" aria-hidden="true" /> Más elegido</span>}
              </div>
              <p className="mt-1"><span className="font-display font-bold text-3xl text-primary-strong">{p.price}</span> {p.period && <span className="text-muted">{p.period}</span>}</p>
              <ul className="grid gap-1.5 mt-3 text-sm">{p.features.map((f) => <li key={f} className="flex gap-2"><Check className="size-4 text-success shrink-0 mt-0.5" aria-hidden="true" />{f}</li>)}</ul>
              <Button full variant={p.featured ? 'primary' : 'soft'} className="mt-4" onClick={() => { setForm({ ...form, plan: p.name }); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('c-company')?.focus({ preventScroll: true }) }}>{p.cta}</Button>
            </Card>
          ))}
        </ul>
        <p className="text-xs text-muted mt-2">Precios orientativos del prototipo, sin IVA.</p>
      </section>

      {/* Contact */}
      <Card as="section" className="p-5 mt-6">
        <h2 id="contacto" className="font-display font-bold text-lg mb-3 scroll-mt-20">Habla con nuestro equipo</h2>
        {sent ? (
          <div className="text-center py-4" role="status">
            <BadgeCheck className="size-12 text-success mx-auto" aria-hidden="true" />
            <p className="font-bold mt-2">¡Gracias, {form.company}!</p>
            <p className="text-sm text-muted">Te escribiremos a {form.email} en menos de 48 horas (simulado).</p>
          </div>
        ) : (
          <form className="grid gap-3" onSubmit={(e) => { e.preventDefault(); setSent(true); notify('Solicitud enviada (simulado)') }}>
            <label className="text-sm font-bold" htmlFor="c-company">Empresa
              <input id="c-company" required type="text" autoComplete="organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base" />
            </label>
            <label className="text-sm font-bold" htmlFor="c-email">Email de trabajo
              <input id="c-email" required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base min-h-11" />
            </label>
            <label className="text-sm font-bold" htmlFor="c-size">Tamaño de la plantilla
              <select id="c-size" required value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })} className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base">
                <option value="">Elige una opción</option><option>Menos de 50</option><option>50–249</option><option>250–999</option><option>1.000 o más</option>
              </select>
            </label>
            <label className="text-sm font-bold" htmlFor="c-plan">Plan que te interesa
              <select id="c-plan" value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })} className="mt-1 w-full rounded-2xl border border-line bg-lavender px-4 py-2 font-normal text-base">
                {plans.map((p) => <option key={p.name}>{p.name}</option>)}
              </select>
            </label>
            <Button type="submit" full><Send className="size-5" aria-hidden="true" /> Enviar solicitud</Button>
          </form>
        )}
      </Card>
      <Demo>Prototipo: candidatas, solicitudes y formulario simulados. Ver README para lo necesario en producción.</Demo>
    </Screen>
  )
}
