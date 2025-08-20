'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

type NewsItem = {
  src: string
  alt: string
}

const IMAGES: NewsItem[] = [
  { src: '/globe.svg', alt: 'Case visual 1' },
  { src: '/window.svg', alt: 'Case visual 2' },
  { src: '/file.svg', alt: 'Case visual 3' },
  { src: '/next.svg', alt: 'Case visual 4' },
  { src: '/vercel.svg', alt: 'Case visual 5' },
  { src: '/globe.svg', alt: 'Case visual 6' },
]

const TITLES = [
  {
    kicker: 'News & Notes',
    title: 'Latest Insights',
    description:
      'Fresh stories, learnings, and behind‑the‑scenes from recent product sprints.'
  },
  {
    kicker: 'Studio',
    title: 'From the Team',
    description:
      'Snippets from our design systems, motion studies, and web builds.'
  },
  {
    kicker: 'Stories',
    title: 'Client Highlights',
    description:
      'Real outcomes from launches across SaaS, fintech, and marketplaces.'
  }
]

const News = () => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start end', 'end start'] })
  const pairCount = useMemo(() => Math.ceil(IMAGES.length / 2), [])
  const [activePair, setActivePair] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(pairCount - 1, Math.floor(v * pairCount))
    setActivePair(idx)
  })

  return (
    <section id="news" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky title column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activePair}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <span className="inline-flex text-xs tracking-wide uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {TITLES[activePair].kicker}
                  </span>
                  <h3 className="text-3xl lg:text-5xl font-bold">
                    {TITLES[activePair].title}
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    {TITLES[activePair].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrolling images column */}
          <div className="lg:col-span-8" ref={listRef}>
            <div className="space-y-10">
              {IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: '-20% 0px -20% 0px' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-muted shadow"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-contain p-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News


