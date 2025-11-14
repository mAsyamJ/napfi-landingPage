"use client"

import { motion } from "framer-motion"
import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Video Container with soft rounded edges */}
            <div className="relative group rounded-2xl overflow-hidden bg-neutral-100 aspect-video shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5JH47tJAkMo"
                title="NAPFI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Subtle overlay on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/5 transition-all duration-300 pointer-events-none"
            />
          </motion.div>

          {/* Description below video */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-600 text-base leading-relaxed font-light max-w-2xl mx-auto">
              Watch how NAPFI makes it simple to create vaults, invest in movements you believe in, and grow your impact together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
