'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Search,
  Building2,
  Factory,
  BarChart3,
  Leaf,
  Zap,
  Recycle,
  ClipboardList,
  Shield,
  Award,
  TrendingUp,
  LineChart,
  ScanSearch,
  Network,
  FileText,
  Download,
  Settings,
  ChevronsDownUp,
  Menu,
  X,
} from 'lucide-react'

interface MenuItem {
  href: string
  label: string
  icon: React.ElementType
  badge?: string
  badgeColor?: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: '',
    items: [
      { href: '/business', label: 'Organization', icon: Building2 },
      { href: '/business/facilities', label: 'Facilities & Branches', icon: Factory },
    ]
  },
  {
    title: 'GREEN PRODUCTION',
    items: [
      { href: '/business/production-overview', label: 'Production Overview', icon: BarChart3 },
      { href: '/business/vgpi', label: 'VGPI Index', icon: Leaf, badge: '82.4', badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
      { href: '/business/energy-emissions', label: 'Energy & Emissions', icon: Zap },
      { href: '/business/waste-circularity', label: 'Waste & Circularity', icon: Recycle },
    ]
  },
  {
    title: 'PRODUCT MANAGEMENT',
    items: [
      { href: '/business/products', label: 'Product List', icon: ClipboardList },
      { href: '/business/product-passport', label: 'Product Passport', icon: Shield, badge: 'AI VERIFIED', badgeColor: 'bg-primary text-white text-[10px]' },
      { href: '/business/certifications', label: 'Certifications & LCA', icon: Award },
    ]
  },
  {
    title: 'CONSUMPTION & MARKET',
    items: [
      { href: '/business/demand-insights', label: 'Demand Insights', icon: TrendingUp },
      { href: '/business/vgci', label: 'VGCI Index', icon: LineChart },
    ]
  },
  {
    title: 'ANALYTICS & AI',
    items: [
      { href: '/business/esg-analytics', label: 'ESG Analytics', icon: LineChart },
      { href: '/business/greenwash-scan', label: 'Greenwash Scan', icon: ScanSearch },
      { href: '/business/knowledge-graph', label: 'Knowledge Graph', icon: Network },
    ]
  },
  {
    title: 'REPORTS',
    items: [
      { href: '/business/gri-reports', label: 'GRI / ESG Reports', icon: FileText },
      { href: '/business/data-export', label: 'Data Export', icon: Download },
    ]
  },
  {
    title: 'SYSTEM',
    items: [
      { href: '/business/settings', label: 'Settings & APIs', icon: Settings },
    ]
  }
]

export default function Sidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  // Đóng sidebar khi đổi route (mobile)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Khóa scroll body khi sidebar mở trên mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
        className="lg:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-background border border-border shadow-sm hover:bg-secondary transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen z-50
          w-[85vw] max-w-xs lg:w-72
          bg-background border-r border-border/5 shadow-sm
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header with close button (mobile) */}
        <div className="p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="VietGreen Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-primary leading-tight">
                VietGreen
              </span>
              <span className="text-[10px] text-foreground/50 tracking-wider uppercase">
                Asean Intelligence
              </span>
            </div>
          </Link>

          {/* Close button - chỉ hiện trên mobile */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
            className="lg:hidden p-1.5 rounded-lg hover:bg-secondary transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input
              type="text"
              placeholder="Jump to screen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-14 py-2 text-sm bg-secondary/50 focus:outline-none shadow-sm transition-all rounded-lg"
            />
            <kbd className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] bg-background border border-border rounded text-foreground/50">
              Ctrl K
            </kbd>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-4' : ''}>
              {section.title && (
                <h3 className="px-3 mb-2 text-[10px] font-semibold text-foreground/40 uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group ${active
                            ? 'bg-primary text-primary-foreground font-medium shadow-sm'
                            : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                          }`}
                      >
                        <Icon size={16} className="flex-shrink-0" />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge && (
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${item.badgeColor || 'bg-secondary text-foreground/60'
                            }`}>
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Company Selector */}
        <div className="p-3 border-t border-border">
          <button
            onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#6aa34a] flex items-center justify-center flex-shrink-0">
              <Leaf size={16} className="text-white" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-semibold truncate">VinEco Mfg Corp</p>
              <p className="text-[10px] text-primary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Tier 1 Green Partner
              </p>
            </div>
            <ChevronsDownUp size={16} className="text-foreground/40 flex-shrink-0" />
          </button>
        </div>
      </aside>
    </>
  )
}
