'use client'

import { useState, useEffect } from 'react'
import { Variants, motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import BrandMarquee from './BrandMarquee';
import ShortView from './shortHistory/ShortView'


const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Drive', 'Scale', 'Boost', 'Transform']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-gray-800 to-green-700  overflow-hidden ">
      {/* Background Elements */}


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >

          {/* Main Heading */}
          <motion.div variants={itemVariants as Variants} className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-none">
              <span className="text-foreground">We Design Products That</span>
            </h1>

            {/* Animated Word */}
            <div className="relative h-20 lg:h-32 flex items-center justify-center">
              <motion.span
                key={currentWord}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text absolute"
              >
                {words[currentWord]}
              </motion.span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-foreground">
              Results
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants as Variants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We create exceptional digital experiences that drive business growth.
            From concept to launch, we craft designs that convert visitors into customers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants as Variants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 107, 53, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-accent transition-all duration-300 shadow-lg"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-8 py-4  rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Brand marquee */}
          <motion.div variants={itemVariants as Variants} className="mt-10 mb-6">
            <BrandMarquee />
          </motion.div>

          {/* Industry Wins */}
          <ShortView delay={0} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
