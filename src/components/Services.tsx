'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Palette, 
  Globe, 
  Layers, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  Sparkles 
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Palette,
      title: 'UI UX',
      subtitle: 'Creating user-friendly digital experiences.',
      description: 'UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.',
      color: 'from-blue-500 to-purple-600',
      delay: 0,
    },
    {
      icon: Globe,
      title: 'Web Design',
      subtitle: 'Building visually appealing & functional websites.',
      description: 'Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.',
      color: 'from-green-500 to-teal-600',
      delay: 0.1,
    },
    {
      icon: Layers,
      title: 'Webflow Design',
      subtitle: 'Developing responsive websites effortlessly.',
      description: 'Custom Webflow Websites, Webflow Plugin, CMS Integration, Responsive Design, SEO Optimization, and Performance Enhancement.',
      color: 'from-orange-500 to-red-600',
      delay: 0.2,
    },
    {
      icon: Zap,
      title: 'Framer Design',
      subtitle: 'Interactive web designs are made simple.',
      description: 'Framer Prototypes, Framer Material, Framer App, Interactive Components, Animation Design, and Rapid Prototyping.',
      color: 'from-purple-500 to-pink-600',
      delay: 0.3,
    },
    {
      icon: Crown,
      title: 'Logo & Branding',
      subtitle: 'Creating memorable identities for brands.',
      description: 'Logo Design, Full Branding, Business Branding, 3D Logo, Custom Logo, Visual Identity, Brand Strategy, and Brand Guidelines.',
      color: 'from-yellow-500 to-orange-600',
      delay: 0.4,
    },
    {
      icon: Rocket,
      title: 'SaaS Design',
      subtitle: 'Intuitive interfaces that boost user engagement.',
      description: 'SaaS Dashboard Design, User Flow Optimization, Data Visualization, Admin Panels, Customer Portals, and Integration Design.',
      color: 'from-indigo-500 to-blue-600',
      delay: 0.5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Level Up Like Player 456
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Our services will help you win the business success game in every design aspect you face on the way.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  custom={service.delay}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 relative z-10`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 font-medium">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* See More Link */}
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center space-x-2 text-accent font-medium group-hover:text-primary transition-colors duration-300"
                      >
                        <span>See More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 lg:mt-24"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
