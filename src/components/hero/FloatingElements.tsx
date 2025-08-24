'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingElements = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-5">
            <motion.div
                className="absolute top-1/4 left-8 w-48 h-48 sm:w-64 sm:h-64 opacity-60"
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Image
                    src="/computer-1.png"
                    alt="Programming & Development"
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </motion.div>

            <motion.div
                className="absolute top-1/3 right-8 w-48 h-48 sm:w-64 sm:h-64 opacity-60"
                animate={{
                    y: [20, -20, 20],
                    rotate: [0, -5, 0],
                    scale: [1.05, 1, 1.05]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                <Image
                    src="/training-1.png"
                    alt="IT Training & Certification"
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </motion.div>

            {/* Tech Icons */}
            <motion.div
                className="absolute top-1/5 right-1/4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-blue-400 text-lg">{'</>'}</span>
            </motion.div>

            <motion.div
                className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <span className="text-purple-400 text-lg">⚡</span>
            </motion.div>

            <motion.div
                className="absolute top-2/3 right-1/3 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <span className="text-cyan-400 text-lg">🚀</span>
            </motion.div>
        </div>
    )
}

export default FloatingElements
