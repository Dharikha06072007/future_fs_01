import { useEffect, useState } from 'react'
import { ArrowUp, Briefcase, Code2, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Briefcase, href: 'https://www.linkedin.com/in/dharikha-u-07343a37a', label: 'LinkedIn' },
  { icon: Code2, href: 'https://github.com/DharikhaU', label: 'GitHub' },
  { icon: Mail, href: 'mailto:dharikha27@gmail.com', label: 'Email' },
]

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-white">
              Dharikha <span className="text-[#C9A84C]">U</span>
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B]">&copy; {new Date().getFullYear()}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#6B6B6B] mb-4">Quick Links</p>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="block text-sm text-[#C9A84C] hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-[#6B6B6B] mb-4">Connect</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#7B2D3E] hover:text-white hover:border-[#7B2D3E] transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#2C2C2C] text-center">
          <p className="font-mono text-[12px] text-[#6B6B6B]">Built with curiosity and code.</p>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#7B2D3E] text-white shadow-lg border border-[#C9A84C]/40 hover:bg-[#5B6B3A] transition-all duration-300 hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  )
}
