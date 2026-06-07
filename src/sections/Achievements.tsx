import { Trophy } from 'lucide-react'
import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { achievements } from '../data/portfolio'

export function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader
        eyebrow="Achievements"
        title="Signals of initiative, resilience, and product curiosity."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <MotionCard key={achievement} delay={index * 0.05}>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#FFC8DD]/55 text-[#2B2D42]">
              <Trophy size={22} />
            </div>
            <p className="font-semibold leading-7 text-[#2B2D42]/75">
              {achievement}
            </p>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
