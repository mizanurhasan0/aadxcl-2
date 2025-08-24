import { useState, useEffect, useRef } from 'react'

export const useCountAnimation = (end: number, duration = 1500, delay = 0, shouldStart = false) => {
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const animationRef = useRef<{ timer?: NodeJS.Timeout; counter?: NodeJS.Timeout }>({})

  useEffect(() => {
    // Clear any existing animations
    if (animationRef.current.timer) clearTimeout(animationRef.current.timer)
    if (animationRef.current.counter) clearInterval(animationRef.current.counter)
    
    if (!shouldStart) {
      setCount(0)
      setIsAnimating(false)
      return
    }
    
    if (isAnimating) return // Prevent multiple animations
    
    setIsAnimating(true)
    setCount(0) // Reset to 0 before starting
    
    animationRef.current.timer = setTimeout(() => {
      let current = 0
      const increment = end / (duration / 50)
      
      animationRef.current.counter = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          setIsAnimating(false)
          if (animationRef.current.counter) clearInterval(animationRef.current.counter)
        } else {
          setCount(Math.floor(current))
        }
      }, 50)
    }, delay)
    
    return () => {
      if (animationRef.current.timer) clearTimeout(animationRef.current.timer)
      if (animationRef.current.counter) clearInterval(animationRef.current.counter)
    }
  }, [end, duration, delay, shouldStart])

  // Reset animation when shouldStart becomes false
  useEffect(() => {
    if (!shouldStart) {
      setIsAnimating(false)
    }
  }, [shouldStart])

  return count
}
