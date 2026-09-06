'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  Droplets,
  Factory,
  Leaf,
  Recycle,
  Sparkles,
  Database,
  Landmark,
  GraduationCap,
  TrendingUp,
  TreePine,
  Zap,
  Globe,
  Award,
  Shield,
  Users
} from 'lucide-react'
import Button from '@/components/ui/Button'
import {
  HeroSection,
  ProblemsSection,
  TargetUsers,
  CoreModules,
  Architecture,
  CTASection
} from '@/components/sections'

export default function VGPIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/green-index/banner-vgpi.jpg"
            alt="VGPI Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Chỉ số Sản xuất Xanh</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-[#6aa34a] bg-clip-text text-transparent">
              Vietnam Green Production Index
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-6">
              Chỉ số đánh giá mức độ sản xuất xanh của doanh nghiệp và nhà máy
              dựa trên các tiêu chí bền vững
            </p>
            <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-8">
              <span className="font-semibold text-primary">VGPI</span> - Đo lường hiệu suất xanh qua các chỉ số:
              Năng lượng, Nước, Khí thải, Chất thải và Tính tuần hoàn
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg" icon={<BarChart3 size={20} />}>
                Xem Dashboard
              </Button>
              <Button variant="outline" size="lg" icon={<Building2 size={20} />}>
                Tra cứu Doanh nghiệp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VGPI Overview */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tổng quan VGPI</h2>
            <p className="text-foreground/60 max-w-3xl mx-auto">
              Chỉ số Sản xuất Xanh Việt Nam được xây dựng dựa trên 5 trụ cột chính,
              đánh giá toàn diện hiệu suất xanh của doanh nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Năng lượng</h4>
              <p className="text-xs text-foreground/50">Hiệu quả năng lượng</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Droplets size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Nước</h4>
              <p className="text-xs text-foreground/50">Sử dụng nước bền vững</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Factory size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Khí thải</h4>
              <p className="text-xs text-foreground/50">Giảm phát thải carbon</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Recycle size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Chất thải</h4>
              <p className="text-xs text-foreground/50">Quản lý chất thải</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <TreePine size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Tuần hoàn</h4>
              <p className="text-xs text-foreground/50">Kinh tế tuần hoàn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VGPI */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Tại sao VGPI?</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Tầm quan trọng của Chỉ số Sản xuất Xanh</h2>
              <p className="text-foreground/60 mb-6">
                VGPI giúp định lượng và đánh giá mức độ xanh của doanh nghiệp,
                từ đó tạo động lực cho sản xuất bền vững và minh bạch thông tin.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Định hướng chiến lược</span>
                    <p className="text-sm text-foreground/50">Giúp doanh nghiệp xác định lộ trình sản xuất xanh</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Minh bạch thông tin</span>
                    <p className="text-sm text-foreground/50">Cung cấp dữ liệu tin cậy cho nhà đầu tư và đối tác</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Cạnh tranh bền vững</span>
                    <p className="text-sm text-foreground/50">Tạo lợi thế cạnh tranh trên thị trường quốc tế</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Tuân thủ quy định</span>
                    <p className="text-sm text-foreground/50">Đáp ứng các tiêu chuẩn xuất khẩu như CBAM, EUDR</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-border-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Xếp hạng VGPI</h3>
                <span className="text-sm text-foreground/50">Top 5 doanh nghiệp</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Công ty A', score: 92, level: 'Vàng' },
                  { name: 'Công ty B', score: 88, level: 'Xanh' },
                  { name: 'Công ty C', score: 85, level: 'Xanh' },
                  { name: 'Công ty D', score: 78, level: 'Bạc' },
                  { name: 'Công ty E', score: 72, level: 'Bạc' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background border border-border rounded-xl hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground/30">#{index + 1}</span>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-primary">{item.score}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${item.level === 'Vàng' ? 'bg-yellow-400/20 text-yellow-600' :
                        item.level === 'Xanh' ? 'bg-green-400/20 text-green-600' :
                          'bg-gray-400/20 text-gray-600'
                        }`}>{item.level}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="#" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                  Xem tất cả <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Phương pháp luận</h2>
            <p className="text-foreground/60 max-w-3xl mx-auto">
              VGPI được xây dựng dựa trên khung đánh giá khoa học, kết hợp dữ liệu
              từ nhiều nguồn và áp dụng công nghệ AI để phân tích
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Database size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Thu thập dữ liệu</h3>
              <p className="text-sm text-foreground/60">
                Tổng hợp dữ liệu từ doanh nghiệp, báo cáo ESG, cơ quan quản lý và nguồn công khai
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phân tích đa chiều</h3>
              <p className="text-sm text-foreground/60">
                Đánh giá dựa trên 5 trụ cột với trọng số khác nhau theo ngành và đặc thù
              </p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Xếp hạng quốc gia</h3>
              <p className="text-sm text-foreground/60">
                Công bố chỉ số và xếp hạng doanh nghiệp theo cấp quốc gia, tỉnh và ngành
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Lợi ích cho từng đối tượng</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              VGPI mang lại giá trị thiết thực cho tất cả các bên liên quan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Landmark size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Policymakers</h4>
              <p className="text-sm text-foreground/60">Đánh giá hiệu quả chính sách xanh và xu hướng ngành</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Businesses</h4>
              <p className="text-sm text-foreground/60">So sánh và cải thiện hiệu suất xanh</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Consumers</h4>
              <p className="text-sm text-foreground/60">Nhận biết và lựa chọn sản phẩm xanh</p>
            </div>

            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Researchers</h4>
              <p className="text-sm text-foreground/60">Khai thác dữ liệu phục vụ nghiên cứu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Bắt đầu theo dõi VGPI ngay hôm nay</h2>
          <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
            Tra cứu chỉ số sản xuất xanh của doanh nghiệp và cập nhật xu hướng mới nhất
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" icon={<BarChart3 size={20} />}>
              Xem Dashboard
            </Button>
            <Button variant="outline" size="lg" icon={<Building2 size={20} />}>
              Tra cứu Doanh nghiệp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
