'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Leaf, 
  BarChart3, 
  Package, 
  Users, 
  Lightbulb, 
  Network,
  Bot,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Building2,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Sparkles,
  Database,
  Shield,
  Award,
  Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
                <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.png" // Đường dẫn ảnh của bạn
            alt="VietGreen Background"
            fill
            className="object-cover"
            priority
          />
          {/* Lớp overlay để làm mờ */}
          <div className="absolute inset-0 bg-background/80 "></div>
          {/* Hoặc overlay với opacity */}
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
              <Button variant="playful" size="lg" icon={<Leaf size={20} />}>
                Khám phá ngay
              </Button>
              <Button variant="outline" size="lg" icon={<BarChart3 size={20} />}>
                Xem Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl">
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

      {/* Target Users */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đối tượng sử dụng</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Nền tảng phục vụ đa dạng đối tượng với các nhu cầu khác nhau
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Landmark size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Policymakers</h3>
              <p className="text-sm text-foreground/60">Theo dõi chỉ số xanh cấp quốc gia/tỉnh/ngành</p>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Businesses</h3>
              <p className="text-sm text-foreground/60">Benchmark và đánh giá hiệu suất xanh</p>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Consumers</h3>
              <p className="text-sm text-foreground/60">Tìm kiếm, so sánh và xác minh sản phẩm</p>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 text-center shadow-border-sm hover:shadow-border-md transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Researchers</h3>
              <p className="text-sm text-foreground/60">Khai thác dataset, API, visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 px-4 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sáu module cốt lõi</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Hệ thống module tích hợp tạo nên nền tảng dữ liệu toàn diện
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Production Observatory</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Đánh giá doanh nghiệp và nhà máy dựa trên các chỉ số năng lượng, nước, emissions, waste, circularity
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                VGPI Index
              </div>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Product Observatory</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Cơ sở dữ liệu sản phẩm xanh - Green Product Passport với thông tin sản phẩm, QR/barcode, chứng nhận
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                Product Database
              </div>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Consumption Observatory</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Phân tích hành vi tiêu dùng xanh theo địa phương, thời gian, độ tuổi, nhóm hàng, thu nhập
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                VGCI Index
              </div>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Claim & Greenwashing Detector</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Sử dụng NLP/LLM để trích xuất environmental claims và đánh giá greenwashing risk
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                AI Detection
              </div>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Network size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Knowledge Graph</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Liên kết các thực thể: Company → Product → Material → Certification → Factory → Location → Consumer Review
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                Knowledge Graph
              </div>
            </div>
            
            <div className="bg-background border-2 border-border rounded-2xl p-6 shadow-border-sm hover:shadow-border-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green AI Assistant</h3>
              <p className="text-sm text-foreground/60 mb-3">
                Trợ lý AI thông minh hỗ trợ phân tích và tư vấn các vấn đề về sản xuất và tiêu dùng xanh
              </p>
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                AI Assistant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Data Lakehouse Architecture</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Kiến trúc dữ liệu hiện đại cho nền tảng thông minh
            </p>
          </div>
          
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-border-md">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <Database size={20} />
                  Data Sources
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Enterprise Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Public Data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    IoT Sensors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Consumer Feedback
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <Database size={20} />
                  Data Processing
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    ETL/ELT Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Data Lakehouse
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    NLP/LLM Processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Knowledge Graph
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <Database size={20} />
                  Intelligence & Insights
                </h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    VGPI & VGCI Indices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    Analytics Dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    API & Visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    AI Recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng tham gia hệ sinh thái xanh?</h2>
          <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
            Cùng VietGreen xây dựng nền tảng dữ liệu thông minh cho sản xuất và tiêu dùng bền vững
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="playful" size="lg" icon={<Globe size={20} />}>
              Khám phá nền tảng
            </Button>
            <Button variant="outline" size="lg" icon={<Users size={20} />}>
              Liên hệ hợp tác
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
