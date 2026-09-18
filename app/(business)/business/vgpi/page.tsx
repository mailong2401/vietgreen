'use client'

import {
  Leaf,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  Zap,
  Droplets,
  Factory,
  Recycle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export default function VGPIPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-foreground/50 mb-2">
          <span>Green Production</span>
          <span>/</span>
          <span className="text-foreground">VGPI Index</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">VGPI Index</h1>
        <p className="text-foreground/60">
          Vietnam Green Production Index - Chỉ số Sản xuất Xanh
        </p>
      </div>

      {/* Score Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-gradient-to-br from-primary to-[#6aa34a] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm opacity-90">Điểm VGPI</span>
            <Award size={20} />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-bold">82.4</span>
            <span className="text-lg opacity-70">/100</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp size={16} />
            <span>+5.2% so với quý trước</span>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Xếp hạng: Top 15% ngành
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-primary" />
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <ArrowUpRight size={14} /> +3.1%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">85.2</p>
            <p className="text-xs text-foreground/50">Năng lượng</p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Droplets size={20} className="text-blue-500" />
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <ArrowUpRight size={14} /> +2.4%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">78.9</p>
            <p className="text-xs text-foreground/50">Nước</p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Factory size={20} className="text-orange-500" />
              </div>
              <span className="text-xs text-red-500 flex items-center gap-1">
                <ArrowDownRight size={14} /> -1.2%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">79.5</p>
            <p className="text-xs text-foreground/50">Khí thải</p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Recycle size={20} className="text-green-500" />
              </div>
              <span className="text-xs text-green-500 flex items-center gap-1">
                <ArrowUpRight size={14} /> +8.7%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">86.1</p>
            <p className="text-xs text-foreground/50">Tuần hoàn</p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-background border border-border rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target size={20} className="text-primary" />
          Mục tiêu VGPI 2025
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-foreground/70">Điểm hiện tại</span>
              <span className="font-semibold">82.4 / 90.0</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-[#6aa34a] rounded-full transition-all duration-1000"
                style={{ width: '91.5%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
