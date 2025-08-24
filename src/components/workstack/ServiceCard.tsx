'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, Award } from 'lucide-react'
import { ServiceCard as ServiceCardType } from './data'

type ServiceCardProps = {
    data: ServiceCardType
    style?: any
    zIndex?: number
}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(
    ({ data, style, zIndex }, ref) => {
        return (
            <motion.div
                ref={ref}
                style={{ ...style, zIndex }}
                className={`relative rounded-3xl border border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm h-[400px] ${data.bgClass}`}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
            >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Accent gradient on the right */}
                <div className="absolute inset-y-0 right-0 w-2/3">
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-l ${data.accentClass}`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                </div>

                {/* Floating tech pattern */}
                <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,currentColor_1px,transparent_1px),linear-gradient(-45deg,currentColor_1px,transparent_1px)] bg-[size:8px_8px] text-gray-600" />
                </div>

                <div className="relative p-6 h-full flex flex-col justify-between">
                    {/* Header with icon and tag */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                                {data.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-600 bg-white/60 px-2 py-1 rounded-full">
                                {data.tag}
                            </span>
                        </div>
                        <Award className="w-5 h-5 text-gray-400" />
                    </div>

                    {/* Title and description */}
                    <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                            {data.title}
                        </h3>

                        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                            {data.description}
                        </p>

                        {/* Course details */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <div className="flex items-center space-x-1 text-gray-600">
                                <Clock className="w-3 h-3" />
                                <span className="text-xs font-medium">{data.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-gray-600">
                                <Users className="w-3 h-3" />
                                <span className="text-xs font-medium">{data.level}</span>
                            </div>
                        </div>
                    </div>

                    {/* Badge and CTA */}
                    <div className="flex items-center justify-between mt-auto">
                        <span className={`inline-flex items-center rounded-xl bg-gradient-to-r ${data.accentClass} text-white px-3 py-2 text-xs font-semibold shadow-lg`}>
                            <Award className="w-3 h-3 mr-1" />
                            {data.badge}
                        </span>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:bg-white transition-all duration-300 border border-white/40"
                        >
                            Enroll
                        </motion.button>
                    </div>
                </div>

                {/* Subtle border glow */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${data.accentClass} opacity-20 -z-10`} />
            </motion.div>
        )
    }
)

ServiceCard.displayName = 'ServiceCard'

export default ServiceCard
