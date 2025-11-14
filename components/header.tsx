"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from 'lucide-react'
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-sm border-b",
        isScrolled 
          ? "bg-white/80 border-neutral-200/50" 
          : "bg-white/40 border-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          <motion.div 
            className="flex-shrink-0" 
            whileHover={{ scale: 1.02 }} 
            transition={{ duration: 0.2 }}
          >
            <a
              href="#"
              className="text-2xl font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
              aria-label="NAPFI Home"
            >
              NAPFI
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
            >
              Explore
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown("docs")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
                Documentation
                <ChevronDown size={16} className={cn("transition-transform", openDropdown === "docs" && "rotate-180")} />
              </button>
              {openDropdown === "docs" && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-200 rounded-lg shadow-lg py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 transition-colors text-sm"
                  >
                    User Guide
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 transition-colors text-sm"
                  >
                    Developer Docs
                  </a>
                </motion.div>
              )}
            </div>

            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium"
            >
              Whitepaper
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Link
                href="/auth/login"
                className="px-4 py-2 text-neutral-900 border border-neutral-300 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-200 text-sm"
              >
                Sign In
              </Link>
            </motion.div>
            <motion.button
              className="px-6 py-2.5 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://napfi-zenith.vercel.app/', '_blank')}
            >
              Launch App
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
