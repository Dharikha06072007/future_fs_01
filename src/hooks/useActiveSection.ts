import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(navItems[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0.12, 0.32, 0.56] },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
