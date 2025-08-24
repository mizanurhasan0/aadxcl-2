'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { ServiceCard as ServiceCardType } from './data'

type StackedCardsProps = {
    services: ServiceCardType[]
}

type CardProps = {
    index: number
    total: number
    progress: any
    data: ServiceCardType
}

const OVERLAP = 0.8 // 80% overlap as requested
const CARD_HEIGHT = 400 // Fixed height for consistent stacking

const Card = ({ index, total, progress, data }: CardProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    // Each card gets its own scroll segment - cards stack one by one
    const cardProgress = 1 / total // Each card gets equal scroll space
    const start = index * cardProgress
    const end = start + cardProgress

    // Use fixed height for consistent stacking calculation
    // For 80% overlap, each next card moves up by 20% of its height from the previous.
    const STEP_OFFSET = CARD_HEIGHT * (1 - OVERLAP) // 20% of height
    // Reverse stack: earlier cards stay on top and later cards settle BELOW them
    const finalStackedY = index * STEP_OFFSET

    // Transform values for this specific card
    // Start from below the stage and move up to final stacked position
    const y = useTransform(progress, [start, end], [CARD_HEIGHT, finalStackedY])
    const opacity = useTransform(progress, [start, start + cardProgress * 0.1], [0, 1])
    const scale = useTransform(progress, [start, end], [0.95, 1])
    const rotateX = useTransform(progress, [start, start + cardProgress * 0.3], [12, 0])

    return (
        <ServiceCard
            ref={ref}
            data={data}
            style={{
                y,
                opacity,
                scale,
                rotateX,
                transformPerspective: 1200
            }}
            zIndex={100 + index}
        />
    )
}

const StackedCards = ({ services }: StackedCardsProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        // Start as soon as the section hits the bottom of viewport; finish when section top reaches top
        offset: ['start end', 'end start']
    })

    // Stage height must accommodate full stack height so next component never intrudes early
    const STEP_OFFSET = CARD_HEIGHT * (1 - OVERLAP)
    const STAGE_HEIGHT = CARD_HEIGHT + (services.length) * STEP_OFFSET

    return (
        <div ref={ref} className="relative h-[600vh]">
            <div className="sticky top-0 px-4 sm:px-6 lg:px-8 pb-32">
                <div className="mx-auto max-w-5xl">
                    {/* Stage sized to full stacked height */}
                    <div className="relative" style={{ height: STAGE_HEIGHT }}>
                        {services.map((service, index) => (
                            <div key={`${service.tag}-${index}`} className="absolute inset-0">
                                <Card
                                    index={index}
                                    total={services.length}
                                    progress={scrollYProgress}
                                    data={service}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackedCards
