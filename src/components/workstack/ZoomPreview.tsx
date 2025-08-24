'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const ZoomPreview = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    const y = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section ref={ref} className="relative h-[120vh] bg-gradient-to-b from-gray-50 to-white">
            <div className="sticky top-24 h-[70vh] flex items-center justify-center px-4">
                <motion.div
                    style={{ scale, opacity, y }}
                    className="relative w-full max-w-6xl"
                >
                    {/* Premium preview container */}
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                        {/* Header bar */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-sm font-medium text-gray-600">IT Training Academy Dashboard</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <span className="text-xs text-gray-500">Live</span>
                            </div>
                        </div>

                        {/* Preview content */}
                        <div className="aspect-[16/10] relative bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-4xl text-white shadow-lg">
                                    🎓
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Learning Platform</h3>
                                    <p className="text-gray-600 max-w-md">Experience hands-on coding, real-time feedback, and project-based learning</p>
                                </div>

                                {/* Feature highlights */}
                                <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                                        <div className="text-2xl mb-2">💻</div>
                                        <div className="text-sm font-medium text-gray-700">Live Coding</div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                                        <div className="text-2xl mb-2">🏆</div>
                                        <div className="text-sm font-medium text-gray-700">Certifications</div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg">
                                        <div className="text-2xl mb-2">👥</div>
                                        <div className="text-sm font-medium text-gray-700">Mentorship</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 left-8 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                            >
                                <span className="text-blue-600 text-xl">{'</>'}</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 right-8 w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                            >
                                <span className="text-purple-600 text-xl">⚡</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl -z-10 scale-110" />
                </motion.div>
            </div>
        </section>
    )
}

export default ZoomPreview
