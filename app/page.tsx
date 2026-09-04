'use client'

import { 
  HeroSection,
  ProblemsSection,
  TargetUsers,
  CoreModules,
  Architecture,
  CTASection
} from '@/components/sections'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <TargetUsers />
      <CoreModules />
      <Architecture />
      <CTASection />
    </div>
  )
}
