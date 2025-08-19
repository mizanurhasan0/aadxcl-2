'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type CaseCard = {
	tag: string
	title: string
	description: string
	badge: string
	bgClass: string
	accentClass: string
}

const CARDS: CaseCard[] = [
	{
		tag: 'Travel',
		title: 'Easy Booking for Dream Trips',
		description:
			"Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
		badge: 'Triply',
		bgClass: 'bg-[#E9EDFF]',
		accentClass: 'from-[#758BFD] to-[#9AA9FF]'
	},
	{
		tag: 'Restaurant',
		title: 'Transform Your Dining',
		description:
			'Plate curates premium restaurants and memorable dining experiences with modern UX.',
		badge: 'Plate',
		bgClass: 'bg-[#FFD6D1]',
		accentClass: 'from-[#FF8A7A] to-[#FFB3A9]'
	},
	{
		tag: 'SaaS',
		title: 'Reducing Carbon Footprints',
		description:
			'Yenex empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
		badge: 'Yenex',
		bgClass: 'bg-[#FFEFB2]',
		accentClass: 'from-[#FFCC66] to-[#FFD77F]'
	},
	{
		tag: 'Healthcare',
		title: 'Revolutionize Fitness Goals',
		description:
			'Fitmate transforms fitness with flexible gym access, personalized schedules, and AI-driven insights.',
		badge: 'Fitmate',
		bgClass: 'bg-[#C9F6FF]',
		accentClass: 'from-[#21C4E6] to-[#20E3F2]'
	}
]

const Card = ({
	index,
	progress,
	data
}: {
	index: number
	progress: any
	data: CaseCard
}) => {
	const start = index * 0.18
	const end = start + 0.28

	const y = useTransform(progress, [start, end], [80, index * 6])
	const opacity = useTransform(progress, [start, start + 0.1], [0, 1])
	const scale = useTransform(progress, [start, end], [0.98, 1 + index * 0.02])

	return (
		<motion.div
			style={{ y, opacity, scale, zIndex: 50 - index }}
			className={`relative rounded-3xl border border-border shadow-lg overflow-hidden ${data.bgClass}`}
		>
			{/* Accent stripes on the right side */}
			<div className="absolute inset-y-0 right-0 w-1/2">
				<div className={`absolute inset-0 opacity-30 bg-gradient-to-r ${data.accentClass}`} />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)]" />
			</div>

			<div className="relative p-6 sm:p-10 lg:p-12">
				<p className="italic text-sm text-foreground/70 mb-3">{data.tag}</p>
				<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
					{data.title}
				</h3>
				<p className="text-foreground/80 max-w-2xl mb-6">{data.description}</p>
				<span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium border border-border shadow">
					{data.badge}
				</span>
			</div>
		</motion.div>
	)
}

const ZoomImage = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	})
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])
	const radius = useTransform(scrollYProgress, [0, 1], [24, 0])

	return (
		<section ref={ref} className="relative h-[160vh]">
			<div className="sticky top-24 h-[70vh] flex items-center justify-center">
				<motion.div
					style={{ scale, borderRadius: radius }}
					className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden border border-border shadow-xl bg-muted"
				>
					<Image
						src="/globe.svg"
						alt="Project preview"
						fill
						className="object-contain p-12 opacity-80"
						priority
					/>
				</motion.div>
			</div>
		</section>
	)
}

const WorkStack = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start']
	})

	return (
		<section id="work" className="relative">
			{/* Stacked cards phase */}
			<div ref={ref} className="relative h-[280vh]">
				<div className="sticky top-24 px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-6xl space-y-4">
						{CARDS.map((card, index) => (
							<Card key={card.tag} index={index} progress={scrollYProgress} data={card} />
						))}
					</div>
				</div>
			</div>

			{/* Zoom image phase */}
			<ZoomImage />
		</section>
	)
}

export default WorkStack


