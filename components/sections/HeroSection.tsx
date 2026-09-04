'use client'

import Image from 'next/image'
import { Leaf, BarChart3, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-home.png"
          alt="VietGreen Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-border rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Data & AI Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[#7ab358] to-primary bg-clip-text text-transparent">
            VietGreen
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">
            Vietnam Green Production & Consumption Intelligence Platform
          </p>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto mb-8">
            Nền tảng Data & AI quy mô quốc gia nhằm thu thập, chuẩn hóa, phân tích 
            và khai thác dữ liệu về sản xuất xanh và tiêu dùng bền vững tại Việt Nam
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" icon={<Leaf size={20} />}>
              Khám phá ngay
            </Button>
            <Button variant="outline" size="lg" icon={<BarChart3 size={20} />}>
              Xem Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
