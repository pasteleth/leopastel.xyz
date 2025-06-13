"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem("hasSeenContactModal")

    if (!hasSeenModal) {
      // Show modal after a brief delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // 2 second delay

      return () => clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    // Remember that user has seen the modal for this session
    sessionStorage.setItem("hasSeenContactModal", "true")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        {/* Modal with Windows 95 styling but black colorway */}
        <div className="relative bg-black max-w-lg w-full max-h-[85vh] overflow-hidden win95-window-black">
          {/* Windows 95 title bar - black version */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 h-8 flex items-center justify-between px-2 win95-titlebar-black">
            <div className="flex items-center">
              {/* Globe icon (no dropdown) */}
              <div className="w-4 h-4 bg-black mr-2 flex items-center justify-center text-xs font-bold win95-icon-black">
                <Globe className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-sm font-bold">Contact Form</span>
            </div>

            {/* Windows 95 close button - black version */}
            <button
              onClick={closeModal}
              className="w-6 h-6 bg-black flex items-center justify-center text-red-500 font-bold text-lg hover:bg-gray-900 win95-button-black"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Modal content with Windows 95 styling - black version */}
          <div className="p-2 bg-black">
            <div className="w-full bg-black win95-inset-black">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScCK4qUNjuGfQSA8cVLIsCvkoFmp1G18xQdE8GnfW3o4B6F8g/viewform?embedded=true"
                width="96%"
                height="507"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
