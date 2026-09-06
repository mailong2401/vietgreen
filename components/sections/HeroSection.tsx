'use client'

import Image from 'next/image'
import { Leaf, BarChart3, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

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
          {/* Badge - Xuất hiện đầu tiên */}
          <ScrollAnimation direction="down" duration={0.6} delay={0}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-border rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Data & AI Platform</span>
            </div>
          </ScrollAnimation>

          {/* Title - Xuất hiện thứ 2 */}
          <ScrollAnimation direction="up" duration={0.8} delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              VietGreen
            </h1>
          </ScrollAnimation>

          {/* Subtitle - Xuất hiện thứ 3 */}
          <ScrollAnimation direction="up" duration={0.8} delay={0.4}>
            <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">
              Vietnam Green Production & Consumption Intelligence Platform
            </p>
          </ScrollAnimation>

          {/* Description - Xuất hiện thứ 4 */}
          <ScrollAnimation direction="up" duration={0.8} delay={0.6}>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto mb-8">
              Nền tảng Data & AI quy mô quốc gia nhằm thu thập, chuẩn hóa, phân tích
              và khai thác dữ liệu về sản xuất xanh và tiêu dùng bền vững tại Việt Nam
            </p>
          </ScrollAnimation>

          {/* Buttons - Xuất hiện cuối cùng */}
          <ScrollAnimation direction="up" duration={0.6} delay={0.8}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" icon={<Leaf size={20} />}>
                Khám phá ngay
              </Button>
              <Button variant="outline" size="lg" icon={<BarChart3 size={20} />}>
                Xem Dashboard
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
