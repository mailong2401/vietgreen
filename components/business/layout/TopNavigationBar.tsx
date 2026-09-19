'use client'

import {
  Bell,
  ShieldCheck,
  User,
  BrainCircuit,
  Upload,
  Plus,
  BarChart3,
  Menu,
  MoreHorizontal,
} from 'lucide-react'
import { useState } from 'react'

interface TopNavigationBarProps {
  onMenuClick?: () => void
}

export default function TopNavigationBar({ onMenuClick }: TopNavigationBarProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-30 w-full shadow-sm border-b border-border/20">
      <div className="flex items-center justify-between gap-2 px-3 sm:px-6 py-2.5">
        {/* Left Section */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Hamburger - chỉ hiện trên mobile */}
          <button
            onClick={onMenuClick}
            aria-label="Open sidebar"
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          >
            <Menu size={20} className="text-gray-700" />
          </button>

          {/* Breadcrumbs - ẩn trên mobile */}
          <div className="hidden md:flex items-center gap-1.5 text-sm">
            <span className="text-foreground/50">VietGreen</span>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground/50">Overview</span>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground font-semibold">Executive Dashboard</span>
          </div>

          {/* Mobile title */}
          <span className="md:hidden text-sm font-semibold text-foreground truncate">
            Executive Dashboard
          </span>

          {/* Benchmark Box - ẩn trên mobile nhỏ */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-[#e0f2e9] rounded-md border border-[#c8e6d9]">
            <BarChart3 size={16} className="text-[#005A36]" />
            <span className="text-sm text-gray-600 font-medium">
              Benchmark: <span className="text-gray-900 font-bold">68.2</span>
            </span>
            <div className="w-px h-4 bg-gray-300 mx-1"></div>
            <span className="text-sm text-gray-600 font-medium">
              Your VGPI: <span className="text-[#005A36] font-bold">82.4</span>
            </span>
            <span className="text-xs font-semibold text-[#005A36] bg-[#c8e6d9] px-1.5 py-0.5 rounded">
              +14.2
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Plus size={16} className="text-gray-500" />
              Add Product
            </button>

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <ShieldCheck size={16} className="text-[#005A36]" />
              Scan Claim
            </button>

            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#005A36] text-white rounded-md text-sm font-medium hover:bg-[#004a2c] transition-colors">
              <Upload size={16} />
              Export ESG
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#e0f2e9] rounded-md text-sm font-medium text-gray-700 hover:bg-[#d0ebd9] transition-colors">
              <BrainCircuit size={16} className="text-[#005A36]" />
              Green AI
              <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 font-sans">
                Ctrl+J
              </span>
            </button>
          </div>

          {/* Mobile: nút Export ESG thu gọn (chỉ icon) */}
          <button
            aria-label="Export ESG"
            className="md:hidden p-1.5 rounded-md bg-[#005A36] text-white hover:bg-[#004a2c] transition-colors"
          >
            <Upload size={18} />
          </button>

          {/* Mobile: menu "..." cho các action khác */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              aria-label="More actions"
              className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <MoreHorizontal size={20} className="text-gray-600" />
            </button>

            {isMoreOpen && (
              <>
                {/* Backdrop để đóng menu */}
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsMoreOpen(false)}
                  aria-hidden="true"
                />
                <div className="absolute right-0 top-full mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <Plus size={16} className="text-gray-500" />
                    Add Product
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <ShieldCheck size={16} className="text-[#005A36]" />
                    Scan Claim
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                    <BrainCircuit size={16} className="text-[#005A36]" />
                    Green AI
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Notification Bell */}
          <button
            aria-label="Notifications"
            className="p-1.5 rounded-full hover:bg-gray-100 transition-all relative shrink-0"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#005A36] flex items-center justify-center text-white text-xs font-semibold">
              <User size={16} />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold leading-tight text-foreground">Mai Duong Long</p>
              <p className="text-[11px] text-gray-500 leading-tight">Chief Sustainability Officer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
