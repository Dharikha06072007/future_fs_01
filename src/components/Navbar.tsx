import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((n) => n.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id && ids.includes(visible.target.id)) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.3] }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.06)]' : ''}`}>
      <nav className="bg-white mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button type="button" onClick={() => navigate('home')} className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-[#1A1A1A]">
            Dharikha <span className="text-[#7B2D3E]">U</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id ? 'text-[#7B2D3E]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#C9A84C] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative grid h-9 w-9 place-items-center md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-5 rounded-full bg-[#1A1A1A] transition-all duration-300 ${isOpen ? 'translate-y-[3px] rotate-45' : '-translate-y-[3px]'}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-[#1A1A1A] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[2px] w-5 rounded-full bg-[#1A1A1A] transition-all duration-300 ${isOpen ? '-translate-y-[3px] -rotate-45' : 'translate-y-[3px]'}`} />
        </button>
      </nav>

      {isOpen && (
        <div className="bg-white mx-4 mt-2 rounded-2xl border border-[#E8EDE3] p-3 shadow-xl md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(item.id)}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-[#7B2D3E] bg-[#F5E6E0]' : 'text-[#4A4A4A] hover:text-[#1A1A1A] hover:bg-[#E8EDE3]/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
