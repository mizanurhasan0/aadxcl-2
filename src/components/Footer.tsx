'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Heart,
  Linkedin,
  Twitter,
  Dribbble,
  Instagram,
  Globe
} from 'lucide-react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const footerSections = [
    {
      title: 'Important Links',
      links: [
        { name: 'Contact Us', href: '#contact' },
        { name: 'About us', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'UI/UX Design', href: '#ui-ux' },
        { name: 'Web Design', href: '#web-design' },
        { name: 'Logo & Branding', href: '#branding' },
        { name: 'Webflow Design', href: '#webflow' },
        { name: 'Framer Design', href: '#framer' },
      ],
    },
    {
      title: 'Specialized Industry',
      links: [
        { name: 'Fintech Industry', href: '#fintech' },
        { name: 'Healthcare & Fitness Industry', href: '#healthcare' },
        { name: 'Edtech Industry', href: '#edtech' },
        { name: 'E-Commerce Industry', href: '#ecommerce' },
        { name: 'Company Deck', href: '#company-deck' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Case Study', href: '#case-study' },
        { name: 'Products', href: '#products' },
        { name: 'Industry', href: '#industry' },
        { name: 'Blogs', href: '#blogs' },
      ],
    },
  ]

  const offices = [
    {
      country: 'Australia',
      address: '155 Bennett Rd, St Clair NSW 2759',
    },
    {
      country: 'South Africa',
      address: '55 Mons Rd, Bellevue East, Johannesburg, 2198',
    },
    {
      country: 'Singapore',
      address: '6 Raffles Blvd, Marina Square',
    },
    {
      country: 'Bangladesh',
      address: 'Level 3, Ventura Iconia, Plot 37 Road No. 11, Dhaka 1213',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Dribbble, href: '#', name: 'Dribbble' },
    { icon: Globe, href: '#', name: 'Behance' },
    { icon: Instagram, href: '#', name: 'Instagram' },
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-muted text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-bold mb-6"
            >
              Your Brand Deserves the{' '}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Next Level!
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground mb-8"
            >
              Get expert advice and a custom strategy session worth $799 at no cost
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-sm text-muted-foreground mt-6"
            >
              Why risk it with the wrong partner? Get 100% value and guarantee. Don't miss out - Secure your brand's future today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8"
          >
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <a href="/" className="text-3xl font-bold">
                  Design<span className="text-accent">Monks</span>
                </a>
              </motion.div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Say goodbye to outdated enterprise software and welcome the smoother one. 
                We lead you from design to product innovation to shape your path from idea to success.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                custom={sectionIndex}
              >
                <h3 className="font-bold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-primary-foreground/80 hover:text-accent transition-all duration-300 block"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Offices */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-primary-foreground/20"
          >
            <h3 className="font-bold text-xl mb-8 text-center">Our Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-accent mr-2" />
                    <h4 className="font-semibold">{office.country}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">{office.address}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <span>© 2025, Design Monks, All Rights Reserved.</span>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by Design Monks</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
