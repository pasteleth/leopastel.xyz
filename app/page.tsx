"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Music, Instagram, Twitter, Video, Globe, Headphones, Radio, Disc3, Star } from "lucide-react"
import Starfield from "@/components/starfield"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false) // Close menu when navigating
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const galleryImages = [
    { src: "/images/meta-sxsw-2024.jpg", filename: "meta-sxsw-2024.jpg" },
    { src: "/images/fwb-fest-2023.jpg", filename: "fwb-fest-2023.jpg" },
    { src: "/images/blink-2024.png", filename: "blink-2024.png" },
    { src: "/images/cartoons-stereo-2025.jpeg", filename: "cartoons-stereo-2025.jpeg" },
    { src: "/images/homecoming-festival-2023.jpg", filename: "homecoming-festival-2023.jpg" },
    { src: "/images/sunday-service.gif", filename: "sunday-service.gif" },
    {
      src: "/images/usa-today-article.jpg",
      filename: "usa-today-article.jpg",
      link: "https://www.usatoday.com/story/entertainment/music/2025/05/22/song-of-the-summer-2025/83774681007/#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Starfield />
      <ContactModal />

      {/* Fade overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 fade-overlay" />

      <div className="relative z-10">
        {/* Y2K Star Navigation Menu */}
        <div className="fixed top-6 left-6 z-30">
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-12 h-12 bg-transparent flex items-center justify-center hover:text-gray-300 transition-all duration-200 y2k-star-button"
            >
              <Star className="w-6 h-6 fill-current" />
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-black border-2 border-white overflow-hidden y2k-menu">
                <button
                  onClick={() => scrollToSection("about-section")}
                  className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-200 border-b border-white"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection("gallery-section")}
                  className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-200 border-b border-white"
                >
                  GALLERY
                </button>
                <button
                  onClick={() => scrollToSection("music-section")}
                  className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-200 border-b border-white"
                >
                  MUSIC
                </button>
                <button
                  onClick={() => scrollToSection("connect-section")}
                  className="block w-full text-left px-4 py-3 text-white font-bold hover:bg-white hover:text-black transition-all duration-200"
                >
                  CONNECT
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Header */}
        <header className="px-6 py-8 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold" style={{ letterSpacing: "-0.05em" }}>
            Leo Pastel
          </h1>
          <p className="text-lg md:text-xl mt-2 font-bold">❦ Cincinnati, Ohio ✞</p>
        </header>

        {/* Hero Image */}
        <section className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative aspect-[4/3] md:aspect-[16/9] group cursor-pointer"
              onMouseEnter={() => setHoveredImage("FWB-LEO-keeganburckhard-3968.JPG")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src="/images/leo-portrait-2.jpg"
                alt="Leo Pastel portrait in natural setting"
                fill
                className="object-cover transition-all duration-300 group-hover:brightness-75"
                priority
              />
              {hoveredImage === "FWB-LEO-keeganburckhard-3968.JPG" && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                  <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                    FWB-LEO-keeganburckhard-3968.JPG
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="about-section" className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-3xl mx-auto">
            {/* Removed the h2 heading here */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed font-bold">
              <p>
                Leo Pastel made his debut in 2018 with "Woah", a track created alongside close friends Muwosi and
                internetboy. The song's early success launched a dynamic career that has included performing with Kanye
                West's Sunday Service Choir, being tapped by The National to play their Cincy-based Homecoming Festival,
                and co-founding the Detroit-based indie band Hard Car Kids.
              </p>
              <p>
                A self-described "multisensory artist", Leo loves experimenting with novel technology. He's an early
                adopter of AI music, an active contributor to the onchain music space, and also works as a freelance
                graphic and UX designer.
              </p>
              <p>
                Leo cares deeply about family and community. Raised one of six in a faith-driven household, he now
                channels those values into THE 3THER—a grassroots creative collective traveling the country and hosting
                events, while staying true to its mission of spreading love through art.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div
                className="relative aspect-[3/4] group cursor-pointer"
                onMouseEnter={() => setHoveredImage("FWB-LEO-keeganburckhard-3943.JPG")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/leo-portrait-1.jpg"
                  alt="Leo Pastel with raised hand in outdoor setting"
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-75"
                  style={{ objectPosition: "25% center" }}
                />
                {hoveredImage === "FWB-LEO-keeganburckhard-3943.JPG" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      FWB-LEO-keeganburckhard-3943.JPG
                    </p>
                  </div>
                )}
              </div>
              <div
                className="relative aspect-[3/4] group cursor-pointer"
                onMouseEnter={() => setHoveredImage("FWB-LEO-keeganburckhard-3955.JPG")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/leo-portrait-3.jpg"
                  alt="Leo Pastel close-up portrait"
                  fill
                  className="object-cover transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "FWB-LEO-keeganburckhard-3955.JPG" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      FWB-LEO-keeganburckhard-3955.JPG
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mosaic Gallery */}
        <section id="gallery-section" className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-7xl mx-auto">
            {/* Removed the h2 heading here */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
              {/* Meta SXSW - Portrait orientation */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("meta-sxsw-2024.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/meta-sxsw-2024.jpg"
                  alt="Meta SXSW Creator Showcase 2024"
                  width={280}
                  height={350}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "meta-sxsw-2024.jpg" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      meta-sxsw-2024.jpg
                    </p>
                  </div>
                )}
              </div>

              {/* FWB Fest - Square */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("fwb-fest-2023.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/fwb-fest-2023.jpg"
                  alt="FWB Fest 2023"
                  width={320}
                  height={320}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "fwb-fest-2023.jpg" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">fwb-fest-2023.jpg</p>
                  </div>
                )}
              </div>

              {/* Sunday Service - Animated GIF - Using local file instead */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("sunday-service.gif")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full overflow-hidden">
                  <img
                    src="/images/sunday-service.gif"
                    alt="Sunday Service"
                    className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                    style={{ aspectRatio: "400/225" }}
                  />
                </div>
                {hoveredImage === "sunday-service.gif" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      sunday-service.gif
                    </p>
                  </div>
                )}
              </div>

              {/* BLINK - Square */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("blink-2024.png")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/blink-2024.png"
                  alt="BLINK 2024"
                  width={300}
                  height={300}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "blink-2024.png" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">blink-2024.png</p>
                  </div>
                )}
              </div>

              {/* USA Today Article - Original dimensions */}
              <Link
                href="https://www.usatoday.com/story/entertainment/music/2025/05/22/song-of-the-summer-2025/83774681007/#"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer block break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("usa-today-article.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/usa-today-article.jpg"
                  alt="USA Today Interview about Song of the Summer"
                  width={350}
                  height={500}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "usa-today-article.jpg" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      usa-today-article.jpg
                      <br />
                      <span className="text-blue-400">(Click to read article)</span>
                    </p>
                  </div>
                )}
              </Link>

              {/* Cartoons & Stereo - Portrait */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("cartoons-stereo-2025.jpeg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/cartoons-stereo-2025.jpeg"
                  alt="Cartoons & Stereo 2025"
                  width={260}
                  height={340}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "cartoons-stereo-2025.jpeg" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      cartoons-stereo-2025.jpeg
                    </p>
                  </div>
                )}
              </div>

              {/* Homecoming Festival - Portrait */}
              <div
                className="relative group cursor-pointer break-inside-avoid mb-2"
                onMouseEnter={() => setHoveredImage("homecoming-festival-2023.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src="/images/homecoming-festival-2023.jpg"
                  alt="Homecoming Festival 2023"
                  width={240}
                  height={320}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-75"
                />
                {hoveredImage === "homecoming-festival-2023.jpg" && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2">
                    <p className="text-white text-xs md:text-sm font-bold text-center break-words">
                      homecoming-festival-2023.jpg
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Music & Social Links */}
        <section id="music-section" className="px-6 md:px-12 lg:px-24 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              {/* Music Links */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ letterSpacing: "-0.01em" }}>
                  MUSIC
                </h2>
                <div className="flex gap-6 overflow-x-auto">
                  <a
                    href="https://music.apple.com/us/artist/leo-pastel/1402898502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Music className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold whitespace-nowrap">APPLE MUSIC</span>
                  </a>

                  <a
                    href="https://open.spotify.com/artist/7vQGIpk5D46TsDuZbVDaZH?si=Nm2iuBaSQ6m3Zj9HsrHOrg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Radio className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">SPOTIFY</span>
                  </a>

                  <a
                    href="https://tidal.com/browse/artist/10005549"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Headphones className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">TIDAL</span>
                  </a>

                  <a
                    href="https://audius.co/leopastel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Globe className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">AUDIUS</span>
                  </a>

                  <a
                    href="https://leopastel.bandcamp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Disc3 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">BANDCAMP</span>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div id="connect-section" className="flex-1">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-8 text-right md:text-right"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  CONNECT
                </h2>
                <div className="flex gap-6 justify-end overflow-x-auto">
                  <a
                    href="https://instagram.com/1980wavy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Instagram className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">INSTAGRAM</span>
                  </a>

                  <a
                    href="https://x.com/pasteleth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Twitter className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">X</span>
                  </a>

                  <a
                    href="https://tiktok.com/1980wavy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Video className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">TIKTOK</span>
                  </a>

                  <a
                    href="https://farcaster.xyz/leopastel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group hover:opacity-70 transition-opacity"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <Globe className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold">FARCASTER</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-400">THE 3THER Creative Collective</p>
              <p className="text-sm font-bold text-gray-400">Spreading love through art</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
