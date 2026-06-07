import { Badge } from '../components/Badge'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { interests } from '../data/portfolio'

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Me"
        title="A builder learning to turn curiosity into useful products."
        description="I'm a technology enthusiast, builder, and aspiring entrepreneur passionate about creating solutions that solve real-world problems and create meaningful impact."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionCard>
          <div className="space-y-5 text-lg leading-8 text-[#2B2D42]/75">
            <p>
              Currently pursuing my B.Tech degree at Karunya Institute of
              Technology and Sciences, I believe technology is more than just
              writing code. It's about creating value, empowering communities,
              and transforming ideas into reality.
            </p>
            <p>
              My journey began at Daniel Thomas Matric Higher Secondary School,
              where curiosity sparked my interest in innovation and
              problem-solving.
            </p>
          </div>
        </MotionCard>
        <MotionCard delay={0.08}>
          <h3 className="mb-5 text-xl font-bold text-[#2B2D42]">
            Interests I keep coming back to
          </h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </MotionCard>
      </div>
    </section>
  )
}
