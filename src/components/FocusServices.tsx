'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code2, Server, Smartphone, Rocket, PenTool, Palette, BadgeCheck, Layers } from 'lucide-react'
import { useRef } from 'react'

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <motion.li variants={fadeUp} className="flex items-start space-x-3">
    <div className="mt-1 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center">
      <Icon className="w-3.5 h-3.5" />
    </div>
    <div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </motion.li>
)

const Section = ({
  kicker,
  title,
  description,
  image,
  imageAlt,
  features,
  reverse,
}: {
  kicker: string
  title: string
  description: string
  image: string
  imageAlt: string
  features: { icon: any; title: string; desc: string }[]
  reverse?: boolean
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      {/* Text */}
      <div className="lg:col-span-6">
        <motion.span initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: '-20% 0px' }} transition={{ duration: 0.4 }} className="inline-flex text-xs uppercase tracking-wide bg-accent/10 text-accent px-3 py-1 rounded-full">{kicker}</motion.span>
        <div className="overflow-hidden">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20% 0px' }} className="text-3xl lg:text-5xl font-bold mt-3">{title}</motion.h3>
        </div>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 text-lg text-muted-foreground">{description}</motion.p>
        <motion.ul variants={{ show: { transition: { staggerChildren: 0.08 } } }} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map(f => <Feature key={f.title} {...f} />)}
        </motion.ul>
      </div>

      {/* Image */}
      <div className="lg:col-span-6">
        <motion.div style={{ scale }} className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border bg-muted shadow">
          <Image src={image} alt={imageAlt} fill className="object-contain p-10" />
        </motion.div>
      </div>
    </div>
  )
}

const FocusServices = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="focus-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <Section
          kicker="Web Development"
          title="Full‑stack web that ships fast"
          description="Frontend, backend, and integrations—built with performance, accessibility, and maintainability in mind."
          image="/window.svg"
          imageAlt="Web development visual"
          features={[
            { icon: Code2, title: 'Frontend', desc: 'Next.js + Tailwind for fast, accessible UI.' },
            { icon: Server, title: 'Backend', desc: 'APIs and services designed for scale.' },
            { icon: Smartphone, title: 'Responsive', desc: 'Pixel‑perfect on every device.' },
            { icon: Rocket, title: 'Performance', desc: 'Best practices, fast loads, great SEO.' },
          ]}
        />

        <Section
          kicker="Logo & Branding"
          title="Brands that are memorable and scalable"
          description="From strategy to systems—logos, palettes, type, and guidelines so teams can ship consistently."
          image="/file.svg"
          imageAlt="Branding visual"
          features={[
            { icon: PenTool, title: 'Logo Systems', desc: 'Primary, secondary, and marks.' },
            { icon: Palette, title: 'Color & Type', desc: 'Accessible palettes and type scales.' },
            { icon: Layers, title: 'Design Tokens', desc: 'Ready for design‑to‑code handoff.' },
            { icon: BadgeCheck, title: 'Guidelines', desc: 'Usage rules for teams and partners.' },
          ]}
          reverse
        />
      </div>
    </section>
  )
}

export default FocusServices


