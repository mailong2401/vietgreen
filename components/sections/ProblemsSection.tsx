'use client'

import Image from 'next/image'
import { Building2, Package, TrendingUp, Bot } from 'lucide-react'

export default function ProblemsSection() {
  return (
    <section className="relative py-16 px-4 bg-background/50 overflow-hidden">
      {/* Ảnh lơ lửng ở góc trên bên phải */}
      <div className="absolute top-8 right-8 z-10 animate-float">
        <div className="relative w-32 h-32 md:w-48 md:h-48">
          <Image
            src="/images/home/ve-tinh.png"
            alt="Vệ tinh"
            width={192}
            height={192}
            className="object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dự án giải quyết bài toán gì?</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Xây dựng hệ sinh thái dữ liệu về "green economy", kết nối thông tin từ doanh nghiệp, 
            sản phẩm, người tiêu dùng, chính phủ và các nguồn dữ liệu công khai.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Doanh nghiệp nào đang sản xuất xanh tốt?</h3>
                <p className="text-sm text-foreground/60">Đánh giá mức độ sản xuất xanh của doanh nghiệp dựa trên các chỉ số</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sản phẩm nào thực sự "xanh"?</h3>
                <p className="text-sm text-foreground/60">Phát hiện sản phẩm có dấu hiệu greenwashing</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Khoảng cách sản xuất - tiêu dùng xanh</h3>
                <p className="text-sm text-foreground/60">Phân tích ngành có khoảng cách lớn giữa sản xuất và nhu cầu</p>
              </div>
            </div>
          </div>
          
          <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bot className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI hỗ trợ ra quyết định</h3>
                <p className="text-sm text-foreground/60">Tổng hợp dữ liệu hỗ trợ policymaker, doanh nghiệp và researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
