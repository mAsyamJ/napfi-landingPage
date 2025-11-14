"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { CommunitySection } from "@/components/community-section"
import { WhatIsNapfi } from "@/components/what-is-napfi"
import { HowItWorks } from "@/components/how-it-works"
import { WhyVaultsMatter } from "@/components/why-vaults-matter"
import { WhoIsNapfi } from "@/components/who-is-napfi"
import { WhyNapfiDifferent } from "@/components/why-napfi-different"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <WaitlistSection />
      <CommunitySection />
      <WhatIsNapfi />
      <HowItWorks />
      <WhyVaultsMatter />
      <WhoIsNapfi />
      <WhyNapfiDifferent />
      <Footer />
    </main>
  )
}
