'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['Master', 'Excel', 'Lead', 'Innovate']

const HeroHeading = () => {
    const [currentWord, setCurrentWord] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="space-y-6 mb-8">
            <h1 className="leading-tight text-center font-light tracking-tight">
                <span className="block text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-2">
                    Advanced IT Training &
                </span>
                <span className="block text-white/90 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light">
                    Development
                    <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text ml-3">
                        Academy
                    </span>
                </span>
            </h1>

            {/* Animated Word */}
            <div className="relative h-16 lg:h-20 flex items-center justify-center my-8">
                <span className="text-white/80 text-2xl sm:text-3xl lg:text-4xl font-light ">
                    Learn to
                </span>

                <motion.span
                    key={currentWord}
                    initial={{ y: 40, opacity: 0, rotateX: -90, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90, scale: 0.8 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                    className="font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text  text-3xl sm:text-4xl lg:text-5xl xl:text-6xl px-2"
                >
                    {words[currentWord]}
                </motion.span>
                <span className="text-white/80 text-2xl sm:text-3xl lg:text-4xl font-light">
                    Technology
                </span>
            </div>
        </div>
    )
}

export default HeroHeading
