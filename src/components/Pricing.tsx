'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Sparkles, Zap, Crown, ArrowRight, Gift } from 'lucide-react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const pricingPlans = [
    {
      id: 1,
      name: 'Website Design',
      price: '$2,200',
      description: 'Ideal for Startup Owners, MVP Builders',
      icon: Sparkles,
      color: 'from-blue-500 to-purple-600',
      features: [
        'Design Style Guide',
        'Responsive across all devices',
        'Unlimited Revisions',
        'Developer Handoff',
        'Project Management',
        'Design Prototype',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Web/Mobile App Design',
      price: '$3,500',
      description: 'For SaaS & fast MVP launches.',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      features: [
        'UX Research',
        'Design System with token',
        'Unlimited Revisions',
        'Developer handoff',
        'Transparent communication',
        'Responsive across all devices',
        'Project Consultation',
        'Advanced Prototyping',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Monthly Subscription',
      price: '$2,950+',
      description: 'Ideal for Startup or MVP',
      icon: Crown,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Monthly dedicated designers',
        'Adhoc design support',
        'Right designer for right product',
        'Transparent communication',
        'Priority Support',
        'Flexible Scaling',
      ],
      popular: false,
    },
  ]

  const bonuses = [
    {
      title: 'Free Design Prototype',
      description: 'Experience your design in action before development.',
      icon: '🎨',
    },
    {
      title: 'Developer Handoff',
      description: 'We ensure what we design is exactly what gets built.',
      icon: '💻',
    },
    {
      title: 'Project Management',
      description: 'Stay on track with our expert project management.',
      icon: '📋',
    },
    {
      title: 'Project Consultation',
      description: 'Get professional advice to enhance your project.',
      icon: '💡',
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
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
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
              Unbeatable{' '}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Value
              </span>
              <br />
              Unmatched Quality
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Choose the perfect plan that fits your needs and budget. All plans include our commitment to excellence.
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <div
                  key={plan.id}
                  className={[
                    'relative rounded-3xl p-[6px] overflow-hidden',
                    'shadow-[0_0_18px_0_rgba(56,189,248,0.25)]'
                  ].join(' ')}
                >
                  <span
                    aria-hidden
                    className={[
                      'pointer-events-none absolute inset-0 rounded-[inherit]',
                      'bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_190deg,rgba(56,189,248,1)_360deg)]',
                      inView ? 'animate-[spin_2.6s_linear_infinite]' : ''
                    ].join(' ')}
                  />
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setHoveredCard(plan.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`relative z-10 bg-card rounded-3xl p-8 transition-all duration-500 ${
                      plan.popular ? 'shadow-xl scale-105' : ''
                    } ${hoveredCard === plan.id ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
                  >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-semibold"
                    >
                      Most Popular
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} p-4 mb-6`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </motion.div>

                  {/* Plan Details */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-primary mb-4">
                      {plan.price}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-accent text-white hover:bg-accent/90 shadow-lg'
                        : 'bg-primary text-primary-foreground hover:bg-accent'
                    }`}
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  {/* Background Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === plan.id ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl`}
                  />
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Bonuses Section */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/50 rounded-3xl p-8 lg:p-12 border border-border"
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6"
              >
                <Gift className="w-4 h-4" />
                <span className="text-sm font-medium">Special Offer</span>
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Bonuses Worth Over $2,500 - Yours Free!
              </h3>
              <p className="text-muted-foreground">
                Get these amazing bonuses included with every plan at no extra cost.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={bonus.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{bonus.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {bonus.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {bonus.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
