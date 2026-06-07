import { MotionCard } from '../components/MotionCard'
import { SectionHeader } from '../components/SectionHeader'
import { mindsetCards } from '../data/portfolio'

export function Mindset() {
  return (
    <section className="section-shell pt-0">
      <SectionHeader
        eyebrow="Mindset"
        title="How Dharikha approaches ambiguous problems."
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mindsetCards.map((card, index) => {
          const Icon = card.icon
          return (
            <MotionCard key={card.title} delay={index * 0.04}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#BDE0FE]/60 text-[#2B2D42]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#2B2D42]">
                {card.title}
              </h3>
            </MotionCard>
          )
        })}
      </div>
    </section>
  )
}
