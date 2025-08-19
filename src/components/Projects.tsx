'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Users, Calendar } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: 'Triply',
      category: 'Travel',
      subtitle: 'Easy Booking for Dream Trips',
      description: 'Triply is a hassle-free & effective tour solution for travelers. It\'s an all-inclusive booking and planning website that helps people make their dream trips easier.',
      image: '/api/placeholder/600/400',
      stats: [
        { label: 'Pages in Projects', value: '40+' },
        { label: 'Retention Growth', value: '36%' },
      ],
      testimonial: {
        text: 'Amazing work on our travel platform. The design is intuitive and beautiful.',
        author: 'Shubho Al-Faroque',
        role: 'Triply CEO',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Plate',
      category: 'Restaurant',
      subtitle: 'Transform Your Dining',
      description: 'At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences.',
      image: '/api/placeholder/600/400',
      stats: [
        { label: 'Revenue', value: '10X Business' },
        { label: 'Project Duration', value: '8 Week' },
      ],
      testimonial: {
        text: 'The restaurant website design exceeded our expectations completely.',
        author: 'Neil Saidi',
        role: 'Plate CEO',
      },
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Yenex',
      category: 'SaaS',
      subtitle: 'Reducing Carbon Footprints',
      description: 'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
      image: '/api/placeholder/600/400',
      stats: [
        { label: 'Revenue Increase', value: '$5M+' },
        { label: 'Customer Acquisition', value: '40%' },
      ],
      testimonial: {
        text: 'Outstanding design work that helped us scale our energy platform.',
        author: 'Ted Nash',
        role: 'Yenex CEO',
      },
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Fitmate',
      category: 'Healthcare',
      subtitle: 'Revolutionize Fitness Goals',
      description: 'Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights.',
      image: '/api/placeholder/600/400',
      stats: [
        { label: 'Project scope', value: 'Mobile App' },
        { label: 'Project Duration', value: '2 Months' },
      ],
      testimonial: {
        text: 'The mobile app design is incredible and user-friendly.',
        author: 'Omar',
        role: 'Fitmate CEO',
      },
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Zantrik',
      category: 'Vehicle Maintenance',
      subtitle: 'Simplifying Vehicle Care',
      description: 'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features.',
      image: '/api/placeholder/600/400',
      stats: [
        { label: 'Funding Raised', value: '$338K' },
        { label: 'Work Scope', value: 'Mobile App' },
      ],
      testimonial: {
        text: 'Great redesign work that increased our user engagement significantly.',
        author: 'Shubho Al-Farooque',
        role: 'Zantrik CEO',
      },
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
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

  const project = projects[currentProject]

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Our Latest Work
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              We've recently worked on some amazing projects. Let's have a glance over the case studies to learn how our effort works to grow our clients' businesses.
            </motion.p>
          </div>

          {/* Project Showcase */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Project Image */}
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                      <span className="text-lg font-medium">{project.title} Preview</span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-black p-3 rounded-full"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white mb-4`}
                    >
                      {project.category}
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl lg:text-3xl font-bold text-foreground mb-2"
                    >
                      {project.subtitle}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 gap-6"
                  >
                    {project.stats.map((stat, index) => (
                      <div key={stat.label} className="text-center lg:text-left">
                        <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-muted/50 rounded-xl p-6 border border-border"
                  >
                    <p className="text-foreground italic mb-4">"{project.testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {project.testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {project.testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {project.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* View Project Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-accent transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject ? 'bg-accent' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* See All Projects */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              See All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
