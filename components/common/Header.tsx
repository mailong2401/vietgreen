'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { 
  Menu, 
  X, 
  Users, 
  Settings, 
  LogOut,
  Moon,
  Sun,
  Leaf,
  Search,
  Sparkles,
  Briefcase,
  GraduationCap,
  Building2,
  MapPin,
  Eye,
  Target,
  Package,
  UserCircle,
  TreePine,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import NavItem from '@/components/common/NavItem'
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
      href: '/ve-chung-toi', 
      label: 'Về VietGreen', 
      icon: TreePine,
      dropdown: [
        { href: '/ve-chung-toi/tam-nhin', label: 'Tầm nhìn sứ mệnh', icon: Target },
        { href: '/ve-chung-toi/doi-ngu', label: 'Đội ngũ', icon: Users },
        { href: '/ve-chung-toi/lich-su', label: 'Lịch sử phát triển', icon: Settings },
      ]
    },
    { 
      href: '/tuyen-dung', 
      label: 'Tuyển dụng', 
      icon: Users,
      dropdown: [
        { href: '/tuyen-dung/viec-lam', label: 'Việc làm', icon: Briefcase },
        { href: '/tuyen-dung/thuc-tap', label: 'Thực tập', icon: GraduationCap },
        { href: '/tuyen-dung/ung-tuyen', label: 'Ứng tuyển', icon: UserCircle },
      ]
    },
    { 
      href: '/khach-hang', 
      label: 'Dành cho khách hàng', 
      icon: UserCircle,
      dropdown: [
        { href: '/khach-hang/san-pham', label: 'Sản phẩm', icon: Package },
        { href: '/khach-hang/dich-vu', label: 'Dịch vụ', icon: Settings },
        { href: '/khach-hang/ho-tro', label: 'Hỗ trợ', icon: MapPin },
      ]
    },
    { 
      href: '/nghien-cuu', 
      label: 'Dành cho nhà nghiên cứu', 
      icon: GraduationCap,
      dropdown: [
        { href: '/nghien-cuu/tai-lieu', label: 'Tài liệu', icon: Package },
        { href: '/nghien-cuu/du-an', label: 'Dự án', icon: Target },
        { href: '/nghien-cuu/hop-tac', label: 'Hợp tác', icon: Building2 },
      ]
    },
    { 
      href: '/doanh-nghiep', 
      label: 'Dành cho doanh nghiệp', 
      icon: Building2,
      dropdown: [
        { href: '/doanh-nghiep/giai-phap', label: 'Giải pháp', icon: Package },
        { href: '/doanh-nghiep/doi-tac', label: 'Đối tác', icon: Users },
        { href: '/doanh-nghiep/du-an', label: 'Dự án', icon: Target },
      ]
    },
  ]

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-8xl">
      <nav className="relative bg-background/95 backdrop-blur-md border-2 border-border rounded-2xl px-4 py-3 shadow-border-md hover:shadow-border-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
              <IconButton 
                icon={<Leaf size={22} />} 
                variant="primary"
                size="sm"
                className="relative transition-transform group-hover:scale-110 group-hover:rotate-12"
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
                icon={link.icon}
                dropdown={link.dropdown}
                isOpen={openDropdown === link.href}
                onOpen={() => setOpenDropdown(link.href)}
                onClose={() => setOpenDropdown(null)}
              />
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Search Button */}
            <IconButton 
              icon={<Search size={18} />} 
              variant="ghost"
              size="sm"
              className="text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />
            
            {/* Theme Toggle */}
            <IconButton 
              icon={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              variant="ghost"
              size="sm"
              className="text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all"
            />

            {/* Login Button */}
            <Button 
              variant="primary" 
              size="sm"
              icon={<UserCircle size={16} />}
              iconPosition="left"
              className="hover:scale-105 transition-transform text-sm px-4 py-1.5"
            >
              Đăng nhập
            </Button>

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
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-background/98 backdrop-blur-md border-2 border-primary/20 rounded-2xl p-4 shadow-border-md max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {/* Main nav links with dropdown on mobile */}
              {navLinks.map((link) => (
                <MobileDropdown
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
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
