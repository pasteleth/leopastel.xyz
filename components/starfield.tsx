"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleDelay: number
  parallaxSpeed: number
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Generate random stars across a much wider canvas
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 400 // More stars to fill the wider space

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 300, // Spread across 300% width
          y: Math.random() * 200, // Extended height for scrolling
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 4,
          parallaxSpeed: Math.random() * 0.5 + 0.1,
        })
      }
      setStars(newStars)
    }

    generateStars()

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate horizontal offset based on scroll (much slower than vertical scroll)
  const horizontalOffset = scrollY * 0.15

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          width: "300%", // Make the starfield 3x wider than viewport
          transform: `translateX(-${horizontalOffset}px)`,
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.twinkleDelay}s`,
              transform: `translateY(${scrollY * star.parallaxSpeed * -1}px)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
