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
  rotation: number // Added for varied rotation
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([])
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 500 // Adjusted star count slightly

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 300, // Spread across 300% width
          y: Math.random() * 200, // Extended height for scrolling
          size: Math.random() * 4 + 2, // Adjusted size for better visibility of the shape
          opacity: Math.random() * 0.7 + 0.3, // Slightly brighter base opacity
          twinkleDelay: Math.random() * 5,
          parallaxSpeed: Math.random() * 0.5 + 0.1,
          rotation: Math.random() * 360, // Random initial rotation
        })
      }
      setStars(newStars)
    }

    generateStars()

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const horizontalOffset = scrollY * 0.15

  // SVG path for the custom star shape.
  // This path is designed to resemble the image provided.
  // viewBox is chosen to make it easy to scale.
  const starPath = "M50 0 L61.8 38.2 L100 50 L61.8 61.8 L50 100 L38.2 61.8 L0 50 L38.2 38.2 Z"

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          width: "300%",
          transform: `translateX(-${horizontalOffset}px)`,
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-twinkle" // Twinkle animation still applied
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity, // Base opacity
              transform: `translateY(${scrollY * star.parallaxSpeed * -1}px) rotate(${star.rotation + star.twinkleDelay * 20}deg) scale(${star.size / 10})`, // Apply rotation and scale
              animationDelay: `${star.twinkleDelay}s`,
              transformOrigin: "center center",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path d={starPath} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}
