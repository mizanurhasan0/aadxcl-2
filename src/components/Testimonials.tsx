'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Jenna Carvalho',
      role: 'Principal @ Guardian Estate Company',
      avatar: 'JC',
      rating: 5,
      text: 'Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful, and I would not hesitate to retain them again in the future',
    },
    {
      id: 2,
      name: 'Ted Nash',
      role: 'Founder & CEO @ Yenex',
      avatar: 'TN',
      rating: 5,
      text: "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them",
    },
    {
      id: 3,
      name: 'Nora Peng',
      role: 'Marketing Manager @ Voc AI',
      avatar: 'NP',
      rating: 5,
      text: 'Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements. I appreciated their flexibility, professionalism, and quick turnaround on feedback. Would happily work together again!',
    },
    {
      id: 4,
      name: 'Victor Okon',
      role: 'CEO & Founder @ Dlicio',
      avatar: 'VO',
      rating: 5,
      text: 'Big shoutout to the Design Monks team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind.',
    },
    {
      id: 5,
      name: 'Kunle Adetayo',
      role: 'CEO & Founder @ Plentypay',
      avatar: 'KA',
      rating: 5,
      text: 'Working with Design Monks transformed our workflow. Their adherence to guidelines increased efficiency and contributed to business growth. We can now focus more on strategic initiatives and client engagement, thanks to saved hours',
    },
    {
      id: 6,
      name: 'Shakhawat Hossain',
      role: 'Founder @ Carnesia',
      avatar: 'SH',
      rating: 5,
      text: 'What I love most about Design Monks is how they truly listen to their clients. They guided us through each step, kept us informed, and made sure the final design was exactly what we envisioned. Their after-service support is amazing.',
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentTestimonial(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Our Clients Love to{' '}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Recommend us
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Don't just take our word for it. Here's what our clients have to say about working with Design Monks.
            </motion.p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg relative overflow-hidden"
              >
                {/* Background Quote */}
                <Quote className="absolute top-6 right-6 w-20 h-20 text-muted/20 transform rotate-12" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic"
                  >
                    "{testimonials[currentTestimonial].text}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentTestimonial].avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'w-8 h-3 bg-accent rounded-full'
                        : 'w-3 h-3 bg-muted-foreground/30 rounded-full hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 lg:mt-24"
          >
            {[
              { value: '200+', label: 'Happy Clients' },
              { value: '98%', label: 'Success Rate' },
              { value: '5+', label: 'Years Experience' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
