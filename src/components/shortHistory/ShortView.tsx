import { useCountAnimation } from './hooks/useCountAnimation';
import { Variants, motion } from 'framer-motion';
import React from 'react'
import { THistoryData, TShortViewProps } from './TypeShortView';
import { useInView } from '@/components/shortHistory/hooks/useInView';


const HistoryData: THistoryData[] = [
    { label: 'Projects Completed', value: 200 },
    { label: 'Happy Clients', value: 150 },
    { label: 'Years Experience', value: 5 },
    { label: 'Success Rate', value: 98 },
]
const ShortView = ({ delay }: TShortViewProps) => {
    const { ref: statsRef, isInView } = useInView(0.2);

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
        <motion.div ref={statsRef} variants={itemVariants as Variants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {HistoryData.map((item, index) => {
                const { value, label } = item;
                const count = useCountAnimation(value, 1500, index * 200, isInView);

                return (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: delay / 1000 }}
                        className="text-center"
                    >
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-2">
                            {count}+
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground">
                            {label}
                        </div>
                    </motion.div>
                )
            })}

        </motion.div>

    )
}

export default ShortView;