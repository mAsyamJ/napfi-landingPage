"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Sparkles, Heart, Sprout, TrendingUp } from 'lucide-react'

export function WhoIsNapfi() {
  const personas = [
    {
      icon: Sparkles,
      title: "Creators",
      description: "Turn your audience's support into sustainable growth.",
    },
    {
      icon: Heart,
      title: "Friends & Groups",
      description: "Pool savings, fund shared goals, and grow together.",
    },
    {
      icon: Sprout,
      title: "Communities",
      description: "Build vaults around causes and movements you believe in.",
    },
    {
      icon: TrendingUp,
      title: "Everyday People",
      description: "Let your money grow without needing to be a finance expert.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
              Made for creators, communities, and <span className="italic font-light">everyday people.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <Icon className="w-8 h-8 text-neutral-900 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{persona.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{persona.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
