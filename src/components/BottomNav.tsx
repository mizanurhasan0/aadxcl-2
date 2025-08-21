'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type NavItem = {
  id: string
  label: string
  href: string
  isPrimary?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'start', label: 'Start a Project', href: '#contact', isPrimary: true },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'more', label: 'More', href: '#projects' },
]

const BottomNav = () => {
  const [active, setActive] = useState<string>('work')

  useEffect(() => {
    const sectionIds = ['work', 'services', 'pricing']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id)
          })
        },
        { rootMargin: '-30% 0px -50% 0px', threshold: 0.1 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Bottom navigation"
    >
      <div className="rounded-full border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
        <ul className="flex items-center gap-2 px-3 py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={[
                  'relative inline-flex items-center rounded-full text-sm font-semibold transition-all duration-300',
                  item.isPrimary
                    ? 'p-[2px]'
                    : 'px-4 py-3',
                  !item.isPrimary && active === item.id
                    ? 'bg-black/5 dark:bg-white/10 text-foreground'
                    : !item.isPrimary
                    ? 'text-muted-foreground hover:text-foreground'
                    : ''
                ].join(' ')}
              >
                {item.isPrimary ? (
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,theme(colors.fuchsia.500),theme(colors.amber.400),theme(colors.sky.400),theme(colors.fuchsia.500))] bg-[length:200%_100%] animate-[gradient-move_2s_linear_infinite]" aria-hidden />
                ) : null}
                {item.isPrimary ? (
                  <span className="relative z-10 inline-flex items-center rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-3">
                    {item.label}
                  </span>
                ) : (
                  <span className="relative z-10">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default BottomNav


