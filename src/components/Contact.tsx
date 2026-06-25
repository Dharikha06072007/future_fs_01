import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Send, Briefcase, Code2, Mail, MapPin } from 'lucide-react'

interface FormData { name: string; email: string; message: string }
interface FormErrors { name?: string; email?: string; message?: string }

const socialLinks = [
  { icon: Briefcase, href: 'https://www.linkedin.com/in/dharikha-u-07343a37a', label: 'LinkedIn' },
  { icon: Code2, href: 'https://github.com/DharikhaU', label: 'GitHub' },
  { icon: Mail, href: 'mailto:dharikha27@gmail.com', label: 'Email' },
]

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">Contact</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">Open to learning, building, and meaningful opportunities.</h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8EDE3]">
              <p className="font-display text-2xl italic leading-snug text-[#7B2D3E] sm:text-3xl">
                &ldquo;I don't wait for opportunities to appear. I build them.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-2 text-[#4A4A4A]">
                <MapPin size={14} className="text-[#C9A84C]" />
                <span className="text-base">Tamil Nadu, India</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#5B6B3A]/30 text-[#5B6B3A] hover:bg-[#7B2D3E] hover:text-white hover:border-[#7B2D3E] transition-all duration-300"
                      aria-label={link.label}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E8EDE3]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#E8EDE3] text-[#5B6B3A] mb-4">
                  <Check size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A]">Message Sent!</h3>
                <p className="mt-2 text-base text-[#4A4A4A]">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs font-medium uppercase tracking-wider text-[#4A4A4A]">Name</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5 block w-full border-b-2 border-[#E8EDE3] bg-transparent px-1 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#5B6B3A] placeholder:text-[#4A4A4A]/50"
                      placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-[#7B2D3E] font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-xs font-medium uppercase tracking-wider text-[#4A4A4A]">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5 block w-full border-b-2 border-[#E8EDE3] bg-transparent px-1 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#5B6B3A] placeholder:text-[#4A4A4A]/50"
                      placeholder="your@email.com" />
                    {errors.email && <p className="mt-1 text-xs text-[#7B2D3E] font-medium">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="font-mono text-xs font-medium uppercase tracking-wider text-[#4A4A4A]">Message</label>
                    <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 block w-full border-b-2 border-[#E8EDE3] bg-transparent px-1 py-3 text-base text-[#1A1A1A] outline-none transition-colors focus:border-[#5B6B3A] placeholder:text-[#4A4A4A]/50 resize-none"
                      placeholder="Tell me about your idea..." />
                    {errors.message && <p className="mt-1 text-xs text-[#7B2D3E] font-medium">{errors.message}</p>}
                  </div>
                </div>
                <button type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#7B2D3E] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#7B2D3E]/20 transition-all duration-300 hover:shadow-xl hover:bg-[#8B3A4B] hover:-translate-y-0.5">
                  <Send size={16} />
                  Send Message
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
