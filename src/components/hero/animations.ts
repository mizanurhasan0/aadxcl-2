import { Variants } from 'framer-motion'

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            duration: 1.2,
            ease: "easeOut",
        },
    },
}

export const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        },
    },
}

export const headingVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        },
    },
}
