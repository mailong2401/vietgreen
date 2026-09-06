'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import {
  Menu,
  X,
  Moon,
  Sun,
  Search,
  Briefcase,
  Building2,
  UserCircle,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import NavItem from '@/components/common/NavItem'
import ThemeToggle from '@/components/common/ThemeToggle'
import MobileDropdown from '@/components/ui/MobileDropdown'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    {
      href: '/',
      label: 'Trang chủ',
    },
    {
      href: '/green-index',
      label: 'Chỉ số Xanh',
      dropdown: [
        { href: '/green-index/vgpi', label: 'Chỉ số VGPI (Sản xuất Xanh)' },
        { href: '/green-index/vgci', label: 'Chỉ số VGCI (Tiêu dùng Xanh)' },
        { href: '/green-index/benchmarking', label: 'Đối sánh Ngành (Benchmarking)' },
      ]
    },
    {
      href: '/ho-chieu-xanh',
      label: 'Hộ chiếu Sản phẩm',
      dropdown: [
        { href: '/ho-chieu-xanh/tra-cuu', label: 'Tra cứu Mã QR Sản phẩm' },
        { href: '/ho-chieu-xanh/danh-muc', label: 'Danh mục Nhãn sinh thái' },
        { href: '/ho-chieu-xanh/dang-ky', label: 'Đăng ký Cấp Hộ chiếu Xanh' },
      ]
    },
    {
      href: '/kiem-duyet-esg',
      label: 'Minh bạch ESG',
      dropdown: [
        { href: '/kiem-duyet-esg/greenwashing-detector', label: 'Phát hiện Rủi ro Greenwashing' },
        { href: '/kiem-duyet-esg/bao-cao-doanh-nghiep', label: 'Báo cáo ESG Doanh nghiệp' },
        { href: '/kiem-duyet-esg/tri-thuc-chuoi-cung-ung', label: 'Đồ thị Chuỗi cung ứng (Graph)' },
      ]
    },
    {
      href: '/danh-cho-doanh-nghiep',
      label: 'Doanh nghiệp',
      dropdown: [
        { href: '/danh-cho-doanh-nghiep/ho-so-xanh', label: 'Quản trị Hồ sơ Xanh (Self-Audit)' },
        { href: '/danh-cho-doanh-nghiep/tin-dung-xanh', label: 'Hồ sơ Vay Tín dụng Xanh' },
        { href: '/danh-cho-doanh-nghiep/tieu-chuan-xuat-khau', label: 'Tuân thủ Thị trường (CBAM/EUDR)' },
      ]
    },
    {
      href: '/nghien-cuu-du-lieu',
      label: 'Thư viện & Dữ liệu',
      dropdown: [
        { href: '/nghien-cuu-du-lieu/trung-tam-tin-tuc', label: 'Tin tức & Chính sách Môi trường' },
        { href: '/nghien-cuu-du-lieu/bao-cao-thi-truong', label: 'Báo cáo Thị trường Carbon' },
        { href: '/nghien-cuu-du-lieu/tai-lieu-api', label: 'Tài liệu Tích hợp API (Data)' },
      ]
    },
  ];

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-8xl">
      <nav className="relative bg-background/95 backdrop-blur-md border-2 border-border rounded-2xl px-4 py-3 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo - Sử dụng hình ảnh */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="VietGreen Logo"
                width={40}
                height={40}
                className="relative object-contain transition-transform duration-300"
                priority
              />
            </div>
            <span className="text-xl font-bold text-primary hidden sm:block">
              VietGreen
            </span>
          </Link>

          {/* Desktop Menu - Sử dụng NavItem component */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center" ref={dropdownRef}>
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                dropdown={link.dropdown}
                isOpen={openDropdown === link.href}
                onOpen={() => setOpenDropdown(link.href)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Search Button */}
            <IconButton
              icon={<Search size={18} />}
              variant="ghost"
              size="sm"
              className="text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Login Button */}
            <Link href="/sign-in">
              <Button
                variant="primary"
                size="sm"
                icon={<UserCircle size={16} />}
                iconPosition="left"
                className="hover:scale-105 transition-transform text-sm px-4 py-1.5"
              >
                Đăng nhập
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button
                variant="outline"
                size="sm"
                icon={<UserCircle size={16} />}
                iconPosition="left"
                className="hover:scale-105 transition-transform text-sm px-4 py-1.5"
              >
                Đăng Ký
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <IconButton
              icon={isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="sm"
              className="lg:hidden text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />
          </div>
        </div>

        {/* Mobile Menu - Sử dụng MobileDropdown component */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/98 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-border-md max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* Main nav links with dropdown on mobile */}
              {navLinks.map((link) => (
                <MobileDropdown
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  dropdown={link.dropdown}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}

              <div className="border-t border-border/50 my-2"></div>

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-transparent text-foreground/70 hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300 flex items-center gap-3"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'}</span>
              </button>

              {/* Mobile Login Button */}
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center mt-1 shadow-border-sm hover:shadow-border-md hover:scale-[1.02] transition-all"
                icon={<UserCircle size={18} />}
                iconPosition="left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Đăng nhập
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
