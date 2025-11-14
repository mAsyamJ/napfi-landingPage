"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"

export function WhyVaultsMatter() {
  const highlights = [
    "Built for collaboration",
    "Built for transparency",
    "Built for the long run",
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              When money moves with <span className="italic font-light">meaning, everyone wins.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed text-center">
              Vaults make collective growth easy. Whether it's funding a creative project, supporting a social initiative, or growing a shared savings goal, NAPFI aligns financial growth with shared purpose, not speculation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 rounded-xl p-6 text-center border border-neutral-200"
                >
                  <p className="font-semibold text-neutral-900">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
