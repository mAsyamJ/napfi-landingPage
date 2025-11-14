"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Check } from 'lucide-react'

export function WhatIsNapfi() {
  const bullets = [
    "No trading needed",
    "No technical jargon",
    "Transparent, automated growth",
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
              Finance that <span className="italic font-light">feels human.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.2}>
            <div>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                NAPFI is an open, community-powered platform where anyone can create or join yield-generating vaults. Instead of navigating complicated charts and protocols, you choose the movement you believe in: creators, social causes, shared goals. NAPFI handles the strategy behind the scenes.
              </p>

              <div className="space-y-4">
                {bullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-neutral-700">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl p-12 h-96 flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <p className="text-lg">Visual representation of NAPFI platform</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
