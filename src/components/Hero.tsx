'use client'

import { motion } from 'framer-motion'
import BrandMarquee from './BrandMarquee'
import HeroHeading from './hero/HeroHeading'
import HeroSubtitle from './hero/HeroSubtitle'
import HeroCTA from './hero/HeroCTA'
import FloatingElements from './hero/FloatingElements'
import { containerVariants, itemVariants, headingVariants } from './hero/animations'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <FloatingElements />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          <motion.div variants={headingVariants}>
            <HeroHeading />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroSubtitle />
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeroCTA />
          </motion.div>

          <motion.div variants={itemVariants}>
            <BrandMarquee />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero