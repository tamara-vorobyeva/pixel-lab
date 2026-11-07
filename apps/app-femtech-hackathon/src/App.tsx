import { useEffect, useRef } from 'react'
import { AppProvider, useApp } from './store'
import { BottomNav } from './components/ui'
import { Welcome, Home, Explore, Profile } from './screens/Main'
import { Quiz, Results, Professions, ProfessionDetail } from './screens/Discover'
import { Courses, Women, WomanDetail, Itinerary, Mentors, Resources, Favorites } from './screens/Learn'
import { AccessibilitySettings, VoiceNav } from './screens/AccessibilitySettings'

function CurrentScreen() {
  const { route } = useApp()
  switch (route.name) {
    case 'welcome': return <Welcome />
    case 'home': return <Home />
    case 'explore': return <Explore />
    case 'quiz': return <Quiz />
    case 'results': return <Results />
    case 'professions': return <Professions />
    case 'profession': return <ProfessionDetail id={route.id} />
    case 'courses': return <Courses />
    case 'women': return <Women />
    case 'woman': return <WomanDetail id={route.id} />
    case 'itinerary': return <Itinerary />
    case 'mentors': return <Mentors />
    case 'resources': return <Resources />
    case 'accessibility': return <AccessibilitySettings />
    case 'favorites': return <Favorites />
    case 'profile': return <Profile />
  }
}

function Shell() {
  const { route, toast, liveMsg } = useApp()
  const scroller = useRef<HTMLDivElement>(null)
  useEffect(() => { scroller.current?.scrollTo(0, 0) }, [route])
  const key = route.name + ('id' in route ? route.id : '')

  return (
    <div className="min-h-dvh md:py-8 md:grid md:place-items-center bg-[radial-gradient(circle_at_top,_#efe6ff,_var(--color-bg))]">
      <a href="#main" className="sr-only-focusable fixed top-2 left-2 z-50 bg-primary text-white px-4 py-2 rounded-full">Saltar al contenido</a>
      {/* Phone frame on desktop, full screen on mobile */}
      <div className="relative mx-auto w-full md:w-[420px] h-dvh md:h-[min(860px,calc(100dvh-4rem))] md:rounded-[44px] md:border-[10px] md:border-[#2a1b4a] md:shadow-2xl overflow-hidden bg-bg flex flex-col">
        <div className="hidden md:flex justify-between px-7 pt-2 text-xs font-bold text-ink" aria-hidden="true"><span>9:41</span><span>●●● 100%</span></div>
        <div ref={scroller} className="flex-1 overflow-y-auto">
          <main key={key}><CurrentScreen /></main>
        </div>
        {route.name !== 'welcome' && <BottomNav />}
        <VoiceNav />
        {toast && <div className="absolute z-40 left-4 right-4 top-12 rounded-2xl bg-ink text-white px-4 py-3 text-sm font-bold shadow-lg pop" aria-hidden="true">{toast}</div>}
        <div aria-live="polite" className="sr-only">{liveMsg}</div>
      </div>
    </div>
  )
}

export default function App() {
  return <AppProvider><Shell /></AppProvider>
}
