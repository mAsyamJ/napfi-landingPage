"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create or Join a Vault",
      description: "Start your own movement or support one that inspires you. Creators, builders, friends, or community goals.",
    },
    {
      number: 2,
      title: "Set Your Strategy",
      description: "Choose from simple, automated yield strategies designed to keep things safe, stable, and clear.",
    },
    {
      number: 3,
      title: "Grow Together",
      description: "Funds are put to work in the background. You and your community watch the vault grow over time with full transparency.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-neutral-50">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4">
              How It <span className="italic font-light">Works</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-neutral-900 text-white rounded-lg font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
