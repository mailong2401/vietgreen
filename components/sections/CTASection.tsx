'use client'

import { Globe, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Sẵn sàng tham gia hệ sinh thái xanh?</h2>
        <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
          Cùng VietGreen xây dựng nền tảng dữ liệu thông minh cho sản xuất và tiêu dùng bền vững
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" icon={<Globe size={20} />}>
            Khám phá nền tảng
          </Button>
          <Button variant="outline" size="lg" icon={<Users size={20} />}>
            Liên hệ hợp tác
          </Button>
        </div>
      </div>
    </section>
  )
}
