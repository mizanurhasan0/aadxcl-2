'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const HeroCTA = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <motion.a
                href="#courses"
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-5 rounded-2xl font-medium text-lg flex items-center space-x-3 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500"
            >
                <BookOpen className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Start Learning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            <motion.a
                href="#about"
                whileHover={{
                    scale: 1.02,
                    borderColor: "#3b82f6",
                    color: "#60a5fa"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group border-2 border-white/30 text-white/90 px-10 py-5 rounded-2xl font-medium text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-500 backdrop-blur-sm bg-white/5"
            >
                Explore Programs
            </motion.a>
        </div>
    )
}

export default HeroCTA
