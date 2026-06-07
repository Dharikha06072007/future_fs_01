import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export function Navbar() {
  const activeSection = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-[0_16px_40px_rgba(43,45,66,0.08)] backdrop-blur-xl">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="flex items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2B2D42]/20"
          aria-label="Go to home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2B2D42] text-sm font-bold text-white">
            DU
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold text-[#2B2D42]">
              Dharikha U
            </span>
            <span className="block text-xs text-[#2B2D42]/60">
              Product Builder
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id
                  ? 'bg-[#2B2D42] text-white shadow-lg shadow-[#2B2D42]/10'
                  : 'text-[#2B2D42]/70 hover:bg-[#BDE0FE]/45 hover:text-[#2B2D42]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#BDE0FE]/45 text-[#2B2D42] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-[1.5rem] border border-white/80 bg-white/90 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                activeSection === item.id
                  ? 'bg-[#2B2D42] text-white'
                  : 'text-[#2B2D42] hover:bg-[#BDE0FE]/45'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  )
}
