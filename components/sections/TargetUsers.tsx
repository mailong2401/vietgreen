'use client'

import Image from 'next/image'
import { Landmark, Building2, ShoppingBag, GraduationCap } from 'lucide-react'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

export default function TargetUsers() {
  return (
    <section className="relative py-16 px-4 bg-foreground/10 overflow-hidden">
      {/* Ảnh lơ lửng */}
      <ScrollAnimation direction="right" duration={0.8} delay={0.3}>
        <div className="absolute top-8 left-8 z-10 animate-float">
          <div className="relative w-40 h-40 md:w-56 md:h-56">
            <Image
              src="/images/home/xi-nghiep.png"
              alt="Xí nghiệp"
              fill
              className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </ScrollAnimation>

      <div className="container mx-auto max-w-6xl relative z-0">
        <ScrollAnimation direction="up" duration={0.6}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đối tượng sử dụng</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Nền tảng phục vụ đa dạng đối tượng với các nhu cầu khác nhau
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollAnimation direction="up" duration={0.6} delay={0.1}>
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Landmark size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Policymakers</h3>
              <p className="text-sm text-foreground/60">Theo dõi chỉ số xanh cấp quốc gia/tỉnh/ngành</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" duration={0.6} delay={0.2}>
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Businesses</h3>
              <p className="text-sm text-foreground/60">Benchmark và đánh giá hiệu suất xanh</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" duration={0.6} delay={0.3}>
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Consumers</h3>
              <p className="text-sm text-foreground/60">Tìm kiếm, so sánh và xác minh sản phẩm</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" duration={0.6} delay={0.4}>
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Researchers</h3>
              <p className="text-sm text-foreground/60">Khai thác dataset, API, visualization</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
