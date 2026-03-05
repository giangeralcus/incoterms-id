import { useEffect } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Ship, BookOpen, Gamepad2, GitBranch, BarChart3, Calculator, Instagram } from 'lucide-react'
import useGameStore from '../../stores/gameStore'
import useLanguageStore from '../../stores/languageStore'
import { translations as T, t } from '../../i18n/translations'

const SEO_BY_LANG = {
  id: {
    htmlLang: 'id',
    ogLocale: 'id_ID',
    title: 'incoterms.id — Simulator Incoterms 2020',
    description: 'Simulator interaktif Incoterms 2020 untuk belajar ekspor impor Indonesia. 26 skenario nyata, kalkulator pajak impor, dan tracking progress.',
    ogDescription: 'Simulator interaktif untuk belajar Incoterms 2020, ekspor impor Indonesia. 26 skenario nyata, drag & drop, kalkulator pajak.',
    twitterDescription: 'Simulator interaktif Incoterms 2020 untuk freight forwarding Indonesia.',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'incoterms.id — Incoterms 2020 Learning Simulator',
    description: 'Interactive Incoterms 2020 simulator for Indonesian export-import learning. 26 real scenarios, import tax calculator, and progress tracking.',
    ogDescription: 'Interactive simulator to learn Incoterms 2020 and Indonesian export-import basics. 26 real scenarios, drag and drop exercises, and tax tools.',
    twitterDescription: 'Interactive Incoterms 2020 simulator for Indonesian trade learning.',
  },
}

function setMeta(selector, content) {
  const element = document.querySelector(selector)
  if (!element) return
  element.setAttribute('content', content)
}

function buildKnowledgeGraph(lang, seo) {
  const isId = lang === 'id'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://incoterms.id/#organization',
        name: 'incoterms.id',
        url: 'https://incoterms.id/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://incoterms.id/og-cover.jpg',
        },
        sameAs: [
          'https://www.instagram.com/giangeralcus/',
          'https://www.instagram.com/gatewayprimaindonusa/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://incoterms.id/#website',
        url: 'https://incoterms.id/',
        name: 'incoterms.id',
        description: seo.description,
        inLanguage: seo.htmlLang,
        publisher: {
          '@id': 'https://incoterms.id/#organization',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://incoterms.id/#app',
        name: seo.title,
        url: 'https://incoterms.id/',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        inLanguage: seo.htmlLang,
        description: seo.ogDescription,
        isPartOf: {
          '@id': 'https://incoterms.id/#website',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'DefinedTermSet',
        '@id': 'https://incoterms.id/#incoterms2020',
        name: 'Incoterms 2020',
        url: 'https://incoterms.id/learn',
        description: isId
          ? 'Referensi 11 Incoterms 2020 untuk pembelajaran ekspor impor Indonesia.'
          : 'Reference for all 11 Incoterms 2020 rules for export-import learning.',
      },
    ],
  }
}

function setKnowledgeGraph(lang, seo) {
  let script = document.getElementById('knowledge-graph-jsonld')
  if (!script) {
    script = document.createElement('script')
    script.id = 'knowledge-graph-jsonld'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(buildKnowledgeGraph(lang, seo))
}

export default function Layout() {
  const { score, streak } = useGameStore()
  const { lang, toggleLang } = useLanguageStore()

  useEffect(() => {
    const seo = SEO_BY_LANG[lang] || SEO_BY_LANG.id
    document.documentElement.lang = seo.htmlLang
    document.title = seo.title
    setMeta('meta[name="description"]', seo.description)
    setMeta('meta[property="og:title"]', seo.title)
    setMeta('meta[property="og:description"]', seo.ogDescription)
    setMeta('meta[property="og:locale"]', seo.ogLocale)
    setMeta('meta[name="twitter:title"]', seo.title)
    setMeta('meta[name="twitter:description"]', seo.twitterDescription)
    setKnowledgeGraph(lang, seo)
  }, [lang])

  const navItems = [
    { to: '/', icon: Ship, label: t(T.nav.home, lang) },
    { to: '/learn', icon: BookOpen, label: t(T.nav.learn, lang) },
    { to: '/scenario', icon: Gamepad2, label: t(T.nav.play, lang) },
    { to: '/cost-simulator', icon: Calculator, label: t(T.nav.costs, lang) },
    { to: '/pipeline', icon: GitBranch, label: t(T.nav.pipeline, lang) },
    { to: '/progress', icon: BarChart3, label: t(T.nav.progress, lang) },
  ]

  return (
    <div className="min-h-screen flex flex-col text-slate-800 bg-[radial-gradient(circle_at_85%_12%,rgba(14,165,233,0.16),transparent_38%),radial-gradient(circle_at_12%_28%,rgba(124,58,237,0.14),transparent_42%),linear-gradient(180deg,#f3f9ff_0%,#ffffff_52%,#f7faff_100%)]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/78 backdrop-blur-xl shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="group inline-flex items-center gap-2.5 text-ocean font-bold text-lg">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-ocean-light to-ocean flex items-center justify-center shadow-sm">
              <Ship className="w-5 h-5 text-white" />
            </span>
            <span className="hidden sm:inline font-display tracking-tight group-hover:text-primary transition-colors">
              {t(T.common.appName, lang)}
            </span>
          </NavLink>
          <div className="flex items-center gap-2.5 sm:gap-3 text-sm">
            {streak > 0 && (
              <span className="hidden sm:inline-flex items-center text-amber-700 bg-amber-100/70 border border-amber-200 rounded-full px-2.5 py-1 font-semibold">
                {streak} {t(T.common.streak, lang)}
              </span>
            )}
            <button
              onClick={toggleLang}
              className="text-[11px] sm:text-xs font-semibold px-2.5 py-1.5 rounded-full border border-slate-200 bg-white/80 hover:bg-slate-50 transition-colors"
            >
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <span className="bg-gradient-to-r from-primary/10 to-ocean/15 text-primary px-3 py-1.5 rounded-full font-semibold border border-primary/15">
              {score} {t(T.common.points, lang)}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="mx-3 sm:mx-6 mb-2 rounded-2xl border border-white/70 bg-white/65 backdrop-blur-md px-3 py-2.5 flex items-center justify-center gap-3 text-[11px] sm:text-xs text-slate-500">
        <a href="https://www.instagram.com/giangeralcus/" target="_blank" rel="noopener noreferrer" aria-label="giangeralcus Instagram" className="hover:text-pink-500 transition-colors flex items-center gap-1">
          <Instagram className="w-3.5 h-3.5" />
          <span>@giangeralcus</span>
        </a>
        <span>·</span>
        <a href="https://www.instagram.com/gatewayprimaindonusa/" target="_blank" rel="noopener noreferrer" aria-label="GPIndo Instagram" className="hover:text-pink-500 transition-colors flex items-center gap-1">
          <Instagram className="w-3.5 h-3.5" />
          <span>@gatewayprimaindonusa</span>
        </a>
        <span>·</span>
        <span>
          Made by{' '}
          <a href="https://ggcd.tech" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-slate-700 transition-colors">
            ggcd.tech
          </a>
        </span>
      </div>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-40 mx-3 mb-3 sm:mb-4 rounded-2xl border border-white/75 bg-white/82 backdrop-blur-xl shadow-[0_14px_34px_rgba(15,23,42,0.14)] grid grid-cols-6 p-1 sm:p-1.5">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-1 py-1.5 rounded-xl transition-all duration-200 text-[10px] sm:text-xs ${
                isActive
                  ? 'text-primary font-semibold bg-gradient-to-b from-primary/15 to-ocean-light/10'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/70'
              }`
            }
          >
            <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
