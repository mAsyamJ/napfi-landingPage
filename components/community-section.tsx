"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { MessageCircle, Twitter } from 'lucide-react'

export function CommunitySection() {
  const communityLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/SpVfYsn7aq",
      icon: MessageCircle,
      description: "Join our community for real-time discussions",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/nap_Finance",
      icon: Twitter,
      description: "Follow for latest updates and announcements",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-sm mb-4 text-neutral-900">
              Join our community
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-neutral-600 mb-12 leading-relaxed font-light">
              Connect with fellow vault creators, builders, and believers. Share ideas, ask questions, and grow together.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {communityLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-300 bg-white hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-100 group-hover:bg-neutral-900 transition-all duration-300 mb-4 mx-auto"
                  whileHover={{ rotate: 12 }}
                >
                  <link.icon className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                  {link.name}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
