'use client'

import SectionHeader from './workstack/SectionHeader'
import StackedCards from './workstack/StackedCards'
import { IT_SERVICES } from './workstack/data'

const WorkStack = () => {
	return (
		<section id="services" className="relative bg-gradient-to-b from-white via-gray-50 to-white">
			{/* Section Header */}
			{/* <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-20">
				<SectionHeader />
			</div> */}

			{/* Stacked Service Cards */}
			<StackedCards services={IT_SERVICES} />


		</section>
	)
}

export default WorkStack


