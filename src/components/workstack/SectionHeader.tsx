'use client'

import { motion } from 'framer-motion'

const SectionHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="mr-2">🎓</span>
                Professional IT Training
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="block">Master In-Demand</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text">
                    Tech Skills
                </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your career with industry-leading training programs designed by experts.
                Build real projects, earn certifications, and land your dream tech job.
            </p>
        </motion.div>
    )
}

export default SectionHeader
