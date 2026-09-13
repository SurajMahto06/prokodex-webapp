"use client"
import React from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export function FloatingWhatsApp() {
  const pathname = usePathname()
  const isInternship = pathname === "/internship"

  return (
    <motion.a
      href="https://wa.me/917250591448"
      target="_blank"
      rel="noopener noreferrer"
      className={
        isInternship
          ? "fixed bottom-[5.25rem] sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[#25D366]/50 hover:shadow-xl"
          : "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[#25D366]/50 hover:shadow-xl"
      }
      aria-label="Chat on WhatsApp"
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  )
}
