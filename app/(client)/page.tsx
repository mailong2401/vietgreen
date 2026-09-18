'use client'

import {
  HeroSection,
  ProblemsSection,
  TargetUsers,
  CoreModules,
  TrustedPartners,
  CTASection
} from '@/components/sections'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <TargetUsers />
      <CoreModules />
      <TrustedPartners />
      <CTASection />
    </div>
  )
}
