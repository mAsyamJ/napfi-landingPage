"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Reveal } from "./reveal"
import { Zap, Boxes, Heart } from 'lucide-react'
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])

  const handleJoinWaitlist = () => {
    const element = document.getElementById('waitlist-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleExploreDemo = () => {
    window.open('https://napfi-zenith.vercel.app/', '_blank')
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-0 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        {/* Left gradient circle */}
        <motion.div 
          className="absolute -left-40 md:-left-20 top-1/3 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full blur-3xl opacity-20"
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Right gradient circle */}
        <motion.div 
          className="absolute -right-40 md:-right-20 bottom-1/4 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-bl from-purple-500 to-purple-300 rounded-full blur-3xl opacity-20"
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="container-custom text-center px-4 md:px-6">
          <Reveal>
            <h1 className="text-display mb-4 md:mb-8 text-neutral-900 font-bold tracking-tight">
              <span className="block">Invest in movements</span>
              <span className="block italic font-light">you believe in</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Simple, automated yield vaults for creators, communities, and anyone who wants their money to work while they do what they love.
            </p>
          </Reveal>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">Simple to start</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-200" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                <Boxes className="w-4 h-4 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">Automated strategies</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-200" />
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">Built for everyone</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={handleExploreDemo}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-sm hover:shadow-md text-base"
            >
              Explore Demo App
            </button>
            <button 
              onClick={handleJoinWaitlist}
              className="w-full sm:w-auto px-8 py-3.5 border border-neutral-900 text-neutral-900 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-200 text-base"
            >
              Join Waitlist
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
