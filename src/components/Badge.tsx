interface BadgeProps {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/80 bg-white/65 px-3 py-1 text-xs font-semibold text-[#2B2D42]/75 shadow-sm backdrop-blur">
      {children}
    </span>
  )
}
