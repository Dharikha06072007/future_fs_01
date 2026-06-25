import { motion } from 'framer-motion'

const skillTags = [
  'Python Developer', 'AI & ML Enthusiast', 'IoT Builder',
  'Product Development', 'Entrepreneurship', 'Design Thinking',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#C9A84C]">About</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-[#1A1A1A] sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-16 bg-[#C9A84C] rounded-full" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[45%_55%] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white rounded-[20px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center">
              <div className="w-[180px] h-[180px] mx-auto rounded-full bg-[#E8EDE3] border-[3px] border-[#C9A84C] flex items-center justify-center shadow-inner">
                <span className="font-display text-6xl font-bold text-[#7B2D3E]">DU</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-[#1A1A1A]">Dharikha U</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-[2px] text-[#5B6B3A]">Product Builder</p>
              <div className="mx-auto my-4 h-[2px] w-10 bg-[#C9A84C] rounded-full" />
              <p className="font-display text-lg italic leading-relaxed text-[#4A4A4A] max-w-[240px] mx-auto">
                &ldquo;Building what matters, one project at a time.&rdquo;
              </p>
            </div>

            <div className="mt-6 bg-[#7B2D3E] rounded-xl px-8 py-6 text-center shadow-md">
              <p className="font-display text-xl italic leading-relaxed text-white">
                &ldquo;I don't wait for opportunities to appear. I build them.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#FAF8F5]"
          >
            <div className="space-y-5 text-lg leading-[1.8] text-[#1A1A1A]">
              <p>
                I'm Dharikha — a B.Tech Computer Science student at Karunya Institute of Technology
                and Sciences, and someone who believes the best way to learn is to build.
              </p>
              <p>
                As a Python developer from Tamil Nadu, I started my coding journey solving small
                problems, and quickly realized that technology is more than just code — it's about
                creating value and empowering communities. I'm an AI and machine learning enthusiast
                who believes intelligent systems can transform how we live and work.
              </p>
              <p>
                From IoT project builder to full-stack web developer, my product development journey
                has taken me through hardware prototypes, web applications, and AI-powered tools.
                Every project is a step toward building something that matters.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-bold text-[#1A1A1A]">What I Do</h3>
              <div className="mt-2 h-[2px] w-10 bg-[#C9A84C] rounded-full" />
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillTags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2, backgroundColor: '#E8EDE3', borderColor: '#5B6B3A' }}
                  className="inline-flex items-center justify-center rounded-full border border-[#E8EDE3] bg-white px-5 py-3 text-sm font-medium text-[#1A1A1A] transition-all duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 border-y border-[#C9A84C]/30 bg-[#FAF8F5] py-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '7+', label: 'Projects' },
              { num: '10+', label: 'Technologies' },
              { num: '2+', label: 'Products' },
              { num: 'Every Day', label: 'Learning' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-[#7B2D3E]">{stat.num}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[1px] text-[#4A4A4A]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
