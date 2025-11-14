"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { CheckCircle } from 'lucide-react'

export function WhyNapfiDifferent() {
  const features = [
    {
      title: "Automatic growth",
      description: "Strategies work in the background.",
    },
    {
      title: "Transparent & open",
      description: "You always see where funds are going.",
    },
    {
      title: "Community first",
      description: "Designed for groups, not just individuals.",
    },
    {
      title: "Built on trustless tech",
      description: "Secure vaults powered by smart contracts.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
              A better way to save, <span className="italic font-light">support, and grow.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-neutral-900 mb-2">{feature.title}</h4>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
