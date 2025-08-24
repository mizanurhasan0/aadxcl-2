"use client"

import Image from 'next/image'
import React from 'react'

type Logo = {
  src: string
  alt: string
}

type BrandMarqueeProps = {
  logos?: Logo[]
  rowGapClassName?: string
  repeat?: number
  speedSecondsRow1?: number
  speedSecondsRow2?: number
}

const defaultLogos: Logo[] = [
  { src: '/next.svg', alt: 'Next.js' },
  { src: '/vercel.svg', alt: 'Vercel' },
  { src: '/globe.svg', alt: 'Globe' },
  { src: '/window.svg', alt: 'Window' },
  { src: '/file.svg', alt: 'File' },
]

const BrandMarquee: React.FC<BrandMarqueeProps> = ({ logos = defaultLogos, rowGapClassName = 'gap-16', repeat = 4, speedSecondsRow1 = 28, speedSecondsRow2 = 32 }) => {
  const repeats = Math.max(3, repeat)
  const sequence = Array.from({ length: repeats }).flatMap(() => logos)
  const shift = `${-(100 / repeats)}%`

  return (
    <div className="w-full select-none">
      <div className="marquee mask-fade py-6" style={{ ['--duration' as any]: `${speedSecondsRow1}s`, ['--marquee-shift' as any]: shift }}>
        <div className={`marquee__track ${rowGapClassName}`} aria-hidden>
          {sequence.map((logo, index) => (
            <div key={`row1-${index}`} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="marquee marquee--reverse mask-fade py-6" style={{ ['--duration' as any]: `${speedSecondsRow2}s`, ['--marquee-shift' as any]: shift }}>
        <div className={`marquee__track ${rowGapClassName}`} aria-hidden>
          {sequence.map((logo, index) => (
            <div key={`row2-${index}`} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandMarquee


