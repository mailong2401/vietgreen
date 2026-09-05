'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight,
  Sparkles,
  Award,
  Shield,
  Users,
  Building2,
  GraduationCap
} from 'lucide-react'
import {
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa6'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/ve-chung-toi', label: 'Về VietGreen' },
    { href: '/tuyen-dung', label: 'Tuyển dụng' },
    { href: '/khach-hang', label: 'Dành cho khách hàng' },
    { href: '/nghien-cuu', label: 'Dành cho nhà nghiên cứu' },
    { href: '/doanh-nghiep', label: 'Dành cho doanh nghiệp' },
  ]

  const supportLinks = [
    { href: '/dia-chi', label: 'Địa chỉ liên hệ' },
    { href: '/nhan-biet', label: 'Cách nhận biết sản phẩm xanh' },
    { href: '/tam-nhin', label: 'Tầm nhìn sứ mệnh' },
    { href: '/san-pham', label: 'Các sản phẩm dịch vụ' },
    { href: '/faq', label: 'Câu hỏi thường gặp' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'Youtube' },
    { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter / X' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-primary/5 border-t-2 border-primary/20 pt-16 pb-6 mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute -top-12 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute -top-12 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="VietGreen Logo"
                  width={40}
                  height={40}
                  className="relative object-contain transition-transform group-hover:scale-110 duration-300"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-[#6aa34a] bg-clip-text text-transparent">
                VietGreen
              </span>
            </Link>

            <p className="text-sm text-foreground/60 leading-relaxed">
              Nền tảng Data & AI quy mô quốc gia về sản xuất xanh
              và tiêu dùng bền vững tại Việt Nam.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <Shield size={14} className="text-primary" />
              <span>© {currentYear} VietGreen. All rights reserved.</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground/80 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Điều hướng
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground/80 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Hỗ trợ
            </h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground/80 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span>
              Liên hệ
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-foreground/60">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Tp Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@vietgreen.com" className="hover:text-primary transition-colors">
                  info@vietgreen.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/60">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+84987654321" className="hover:text-primary transition-colors">
                  +84 987 654 321
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-xs text-foreground/50 mb-2 flex items-center gap-1">
                <Send size={12} className="text-primary" />
                Đăng ký nhận bản tin
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="flex-1 px-3 py-2 text-sm bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                />
                <Button
                  variant="primary"
                  size="sm"
                  icon={<Send size={14} />}
                  className="flex-shrink-0 rounded-xl px-4"
                >
                  Gửi
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-borderflex flex-col items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-foreground/40">
              <span>© {currentYear} VietGreen</span>
              <span className="hidden sm:inline">|</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
