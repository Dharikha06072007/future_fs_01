import { motion } from 'framer-motion'
import { Download, Lightbulb, Rocket, Sprout, Target } from 'lucide-react'

const passionHighlights = [
  { label: 'Building Products', icon: Rocket, className: 'bg-[#A8DADC]/45' },
  { label: 'Solving Real Problems', icon: Lightbulb, className: 'bg-[#FFC8DD]/45' },
  { label: 'Learning Every Day', icon: Target, className: 'bg-[#BDE0FE]/55' },
  {
    label: 'Exploring Entrepreneurship',
    icon: Sprout,
    className: 'bg-[#CDB4DB]/45',
  },
]

const identityTags = [
  'B.Tech Undergraduate',
  'Python Developer',
  'Product Builder',
  'Tech Enthusiast',
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-32 sm:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(189,224,254,0.55),transparent_34%),radial-gradient(circle_at_15%_25%,rgba(168,218,220,0.35),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(255,200,221,0.42),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <span className="inline-flex items-center rounded-full border border-white/80 bg-white/65 px-4 py-2 text-sm font-bold text-[#2B2D42]/75 shadow-sm backdrop-blur-xl">
          📍 Tamil Nadu, India
        </span>

        <div className="mt-8">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#7D6B91] sm:text-base">
            Hello, I'm
          </p>
          <h1 className="mt-3 text-6xl font-black leading-none text-[#2B2D42] sm:text-7xl lg:text-8xl">
            DHARIKHA 👋
          </h1>
        </div>

        <p className="mt-7 max-w-3xl text-2xl font-semibold leading-9 text-[#2B2D42]/80 sm:text-3xl sm:leading-10">
          Turning ideas into products and problems into opportunities.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#2B2D42]/68 sm:text-xl sm:leading-9">
          A passionate B.Tech undergraduate at Karunya Institute of Technology
          and Sciences who enjoys building technology-driven solutions,
          exploring entrepreneurship, and transforming innovative ideas into
          impactful products.
        </p>

        <div className="mt-10 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {passionHighlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="rounded-3xl border border-white/80 bg-white/58 p-4 shadow-[0_18px_45px_rgba(43,45,66,0.07)] backdrop-blur-xl"
              >
                <div
                  className={`mx-auto grid h-11 w-11 place-items-center rounded-2xl ${item.className} text-[#2B2D42]`}
                >
                  <Icon size={21} />
                </div>
                <p className="mt-3 text-sm font-bold text-[#2B2D42]/78">
                  {item.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {identityTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/80 bg-white/62 px-4 py-2 text-sm font-bold text-[#2B2D42]/72 shadow-sm backdrop-blur-xl"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.a
          href="/resume/Dharikha_U_Resume.pdf"
          download
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/90 bg-gradient-to-r from-[#A8DADC]/85 via-white/85 to-[#FFC8DD]/85 px-7 py-4 text-sm font-black text-[#2B2D42] shadow-[0_18px_45px_rgba(43,45,66,0.12)] backdrop-blur-xl transition focus:outline-none focus:ring-2 focus:ring-[#2B2D42]/20"
        >
          <Download size={18} />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  )
}
