'use client'

import { BarChart3, Package, Users, Shield, Network, Bot } from 'lucide-react'
import ScrollAnimation from '@/components/ui/ScrollAnimation'

const modules = [
  {
    icon: BarChart3,
    title: 'Green Production Observatory',
    description: 'Đánh giá doanh nghiệp và nhà máy dựa trên các chỉ số năng lượng, nước, emissions, waste, circularity',
    tag: 'VGPI Index'
  },
  {
    icon: Package,
    title: 'Green Product Observatory',
    description: 'Cơ sở dữ liệu sản phẩm xanh - Green Product Passport với thông tin sản phẩm, QR/barcode, chứng nhận',
    tag: 'Product Database'
  },
  {
    icon: Users,
    title: 'Green Consumption Observatory',
    description: 'Phân tích hành vi tiêu dùng xanh theo địa phương, thời gian, độ tuổi, nhóm hàng, thu nhập',
    tag: 'VGCI Index'
  },
  {
    icon: Shield,
    title: 'Green Claim & Greenwashing Detector',
    description: 'Sử dụng NLP/LLM để trích xuất environmental claims và đánh giá greenwashing risk',
    tag: 'AI Detection'
  },
  {
    icon: Network,
    title: 'Green Knowledge Graph',
    description: 'Liên kết các thực thể: Company → Product → Material → Certification → Factory → Location → Consumer Review',
    tag: 'Knowledge Graph'
  },
  {
    icon: Bot,
    title: 'Green AI Assistant',
    description: 'Trợ lý AI thông minh hỗ trợ phân tích và tư vấn các vấn đề về sản xuất và tiêu dùng xanh',
    tag: 'AI Assistant'
  }
]

export default function CoreModules() {
  return (
    <section className="py-16 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation direction="up" duration={0.6}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sáu module cốt lõi</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Hệ thống module tích hợp tạo nên nền tảng dữ liệu toàn diện
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <ScrollAnimation
                key={index}
                direction="up"
                duration={0.5}
                delay={index * 0.1}
              >
                <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{module.description}</p>
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {module.tag}
                  </div>
                </div>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </section>
  )
}
