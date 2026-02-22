import { Outlet, NavLink } from 'react-router-dom'
import { Ship, BookOpen, Gamepad2, Calculator, BarChart3 } from 'lucide-react'
import useGameStore from '../../stores/gameStore'

const navItems = [
  { to: '/', icon: Ship, label: 'Home' },
  { to: '/learn', icon: BookOpen, label: 'Learn' },
  { to: '/scenario', icon: Gamepad2, label: 'Play' },
  { to: '/cost-simulator', icon: Calculator, label: 'Costs' },
  { to: '/progress', icon: BarChart3, label: 'Progress' },
]

export default function Layout() {
  const { score, streak } = useGameStore()

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean/5 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-ocean font-bold text-lg">
          <Ship className="w-6 h-6" />
          <span className="hidden sm:inline">Belajar Ekspor Impor</span>
        </NavLink>
        <div className="flex items-center gap-4 text-sm">
          {streak > 0 && (
            <span className="text-accent font-semibold">{streak} streak</span>
          )}
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {score} pts
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Bottom Navigation (mobile) */}
      <nav className="bg-white border-t border-gray-200 flex justify-around py-2 sm:py-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors text-xs ${
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
