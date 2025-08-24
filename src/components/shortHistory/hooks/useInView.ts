import { useEffect, useState, useRef } from 'react'

export const useInView = (threshold = 0.3) => {
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        
        // Reset triggered state when element goes out of view
        if (!entry.isIntersecting && hasTriggered) {
          setHasTriggered(false)
        }
        
        // Mark as triggered when entering view
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
        }
      },
      { 
        threshold,
        rootMargin: '-50px 0px'
      }
    )

    // Small delay to ensure ref is properly attached
    const timer = setTimeout(() => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [threshold, hasTriggered])

  return { ref, isInView, hasTriggered }
}
