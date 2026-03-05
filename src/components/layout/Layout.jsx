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
    <div className="min-h-screen bg-gradient-to-b from-ocean/5 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-ocean font-bold text-lg">
          <Ship className="w-6 h-6" />
          <span className="hidden sm:inline">{t(T.common.appName, lang)}</span>
        </NavLink>
        <div className="flex items-center gap-4 text-sm">
          {streak > 0 && (
            <span className="text-accent font-semibold">{streak} {t(T.common.streak, lang)}</span>
          )}
          <button onClick={toggleLang} className="text-xs font-medium px-2 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors">
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {score} {t(T.common.points, lang)}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="flex items-center justify-center gap-4 py-1.5 text-xs text-gray-300">
        <a href="https://www.instagram.com/giangeralcus/" target="_blank" rel="noopener noreferrer" aria-label="giangeralcus Instagram" className="hover:text-pink-400 transition-colors flex items-center gap-1">
          <Instagram className="w-3.5 h-3.5" />
          <span>@giangeralcus</span>
        </a>
        <span>·</span>
        <a href="https://www.instagram.com/gatewayprimaindonusa/" target="_blank" rel="noopener noreferrer" aria-label="GPIndo Instagram" className="hover:text-pink-400 transition-colors flex items-center gap-1">
          <Instagram className="w-3.5 h-3.5" />
          <span>@gatewayprimaindonusa</span>
        </a>
        <span>·</span>
        <span>Made by <a href="https://ggcd.tech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">ggcd.tech</a></span>
      </div>

      {/* Bottom Navigation (mobile) */}
      <nav className="bg-white border-t border-gray-200 grid grid-cols-6 py-2 sm:py-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-1 py-1 rounded-lg transition-colors text-[10px] sm:text-xs ${
                isActive
                  ? 'text-primary font-semibold'
                  : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
