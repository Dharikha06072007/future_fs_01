interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[#7D6B91]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-[#2B2D42] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#2B2D42]/70">
          {description}
        </p>
      ) : null}
    </div>
  )
}
