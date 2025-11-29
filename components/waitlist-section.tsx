"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Reveal } from "./reveal"
import { Check, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address")
        setIsLoading(false)
        return
      }

      const supabase = createClient()

      const { error: supabaseError } = await supabase.from("waitlist").insert([{ email: email.toLowerCase().trim() }])

      if (supabaseError) {
        console.log("[v0] Supabase error:", supabaseError)

        if (supabaseError.code === "23505" || supabaseError.message?.includes("duplicate")) {
          setError("This email is already on the waitlist!")
        } else if (supabaseError.message?.includes("permission denied")) {
          setError("Unable to add email. Please try again.")
        } else {
          setError(supabaseError.message || "Failed to join waitlist. Please try again.")
        }
        setIsLoading(false)
        return
      }

      setSubmitted(true)
      setEmail("")
      setIsLoading(false)

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.log("[v0] Error:", err)
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-neutral-50" id="waitlist-section">
      <div className="container-custom px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-sm mb-4 text-neutral-900">Get early access</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed font-light">
              Be among the first to invest in movements that matter. Join our waitlist and stay updated on launch.
            </p>
          </Reveal>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted || isLoading}
              className="flex-1 px-4 py-3.5 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-0 transition-all disabled:opacity-50 text-base"
              required
            />
            <motion.button
              type="submit"
              disabled={submitted || isLoading}
              className="px-8 py-3.5 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-base whitespace-nowrap"
              whileHover={!submitted ? { scale: 1.02 } : {}}
              whileTap={!submitted ? { scale: 0.98 } : {}}
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Confirmed!
                </span>
              ) : isLoading ? (
                "Adding..."
              ) : (
                "Join Waitlist"
              )}
            </motion.button>
          </motion.form>

          {error && (
            <motion.div
              className="flex items-center gap-2 text-red-600 text-sm mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="w-4 h-4" />
              {error}
            </motion.div>
          )}

          <motion.p
            className="text-sm text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No spam, just vault updates. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
