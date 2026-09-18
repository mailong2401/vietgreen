'use client'

import {
  Search,
  Bell,
  Calendar,
  TrendingDown,
  Sparkles,
  Info,
  Award,
  Zap,
  Droplets,
  Factory,
  ChevronRight,
  ChevronDown,
  FileText,
  BarChart3,
  DollarSign
} from 'lucide-react'

export default function BusinessDashboardPage() {
  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Top Navigation Bar */}
      <header className="bg-[#c0edd4] sticky top-0 z-30">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-foreground/50">Environment</span>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground/50">Emissions</span>
            <span className="text-foreground/30">/</span>
            <span className="text-foreground font-medium">Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-secondary transition-all">
              <Search size={18} className="text-foreground/60" />
            </button>
            <button className="p-2 rounded-full hover:bg-secondary transition-all relative">
              <Bell size={18} className="text-foreground/60" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-secondary transition-all">
              <Calendar size={18} className="text-foreground/60" />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-secondary transition-all text-sm">
              <span className="text-base">🇻🇳</span>
              <span className="text-foreground/70">VN</span>
            </button>

            <div className="flex items-center gap-2 pl-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-[#6aa34a] flex items-center justify-center text-white text-xs font-semibold">
                VM
              </div>
              <div className="hidden lg:block">
                <p className="text-xs font-semibold leading-tight">Nguyen Van Minh</p>
                <p className="text-[10px] text-foreground/50 leading-tight">VinEco Mfg Corp</p>
              </div>
              <ChevronDown size={14} className="text-foreground/40" />
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6 bg-[#C0EDD4]">
        {/* Header with badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            📅 Q2 2026 AUDIT READY
          </span>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-semibold flex items-center gap-1">
            <Sparkles size={12} />
            NEW: SPONSOR MODE & 5 NEW CERTIFICATIONS
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-background rounded-3xl p-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 size={24} className="text-primary" />
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                  Executive Sustainability &<br />
                  Green Production Dashboard
                </h1>
              </div>
              <p className="text-sm text-foreground/60 mb-4 max-w-2xl">
                Báo cáo tổng hợp dữ liệu sản xuất xanh toàn công ty — tích hợp ESG metrics, carbon footprint,
                và Vietnam National Green Standards (VNGS) score across regional supply hubs.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-right">
                <p className="text-xs text-foreground/50">Q2 2026</p>
                <p className="text-sm font-semibold">Year-to-Date</p>
              </div>
              <button className="px-4 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all flex items-center gap-2">
                <FileText size={16} />
                Xuất Báo Cáo ESG
              </button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* VGPI Score */}
          <div className="bg-background rounded-3xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-foreground/50">CHỈ SỐ QUỐC GIA (VGPI)</span>
              <span className="text-[10px] px-2 py-0.5 bg-red-500/10 text-red-500 rounded-full font-semibold">
                +4.2%
              </span>
            </div>
            <p className="text-4xl font-bold mb-2">82.4</p>
            <div className="flex items-center gap-1 text-xs mb-3">
              <Award size={12} className="text-primary" />
              <span className="text-foreground/60">Top 15% Toàn quốc</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '82.4%' }}></div>
            </div>
          </div>

          {/* Total CO2 */}
          <div className="bg-background rounded-3xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-foreground/50">TỔNG PHÁT THẢI CO2e</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full font-semibold">
                ✓ Đạt Target
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-4xl font-bold">1,420.8</p>
              <span className="text-sm text-foreground/50">tCO2e</span>
            </div>
            <div className="flex items-center gap-1 text-xs mb-3">
              <TrendingDown size={12} className="text-green-500" />
              <span className="text-green-500">-4.2% YoY</span>
              <span className="text-foreground/40">• Reduction 2026</span>
            </div>
          </div>

          {/* Suppliers */}
          <div className="bg-background rounded-3xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-foreground/50">NHÀ CUNG CẤP XANH</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full font-semibold">
                +12 mới
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-4xl font-bold">124</p>
              <span className="text-sm text-foreground/50">/ 180 total</span>
            </div>
            <div className="flex items-center gap-1 text-xs mb-3">
              <span className="text-foreground/60">43.7% of total suppliers</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-primary bg-primary/10 rounded-full px-2 py-1 w-fit">
              <Info size={10} />
              <span>Top 5 in Advanced Materials</span>
            </div>
          </div>

          {/* ESG Score */}
          <div className="bg-background rounded-3xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-foreground/50">ĐIỂM ESG</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full font-semibold">
                Low Risk
              </span>
            </div>
            <p className="text-4xl font-bold mb-2">96.4</p>
            <div className="space-y-1 text-[10px]">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/60">Top 5% toàn cầu</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/60">+2.1% YoY increase</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-foreground/60">100% VNGB compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Chart */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emissions Chart */}
            <div className="bg-background rounded-3xl p-6">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
                <div>
                  <h2 className="text-lg font-bold mb-1">Xu hướng Giảm Phát thải & Hiệu quả Năng lượng</h2>
                  <p className="text-xs text-foreground/50 max-w-md">
                    Dữ liệu 6 quý gần nhất minh chứng cho thấy sự tối ưu hóa CO2 trên toàn hệ thống qua các sáng kiến năng lượng tái tạo và circular economy.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-primary"></span>
                    <span className="text-foreground/60">Carbon Intensity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-orange-400"></span>
                    <span className="text-foreground/60">Renewable %</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-64 mb-4">
                <svg viewBox="0 0 600 240" className="w-full h-full">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line
                      key={i}
                      x1="40"
                      y1={20 + i * 40}
                      x2="580"
                      y2={20 + i * 40}
                      stroke="currentColor"
                      className="text-border"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {['100', '80', '60', '40', '20', '0'].map((label, i) => (
                    <text
                      key={i}
                      x="30"
                      y={24 + i * 40}
                      textAnchor="end"
                      className="fill-foreground/40 text-[10px]"
                    >
                      {label}
                    </text>
                  ))}

                  <defs>
                    <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgb(152, 195, 121)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(152, 195, 121)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M 60 50 L 160 70 L 260 90 L 360 110 L 460 130 L 560 145 L 560 220 L 60 220 Z"
                    fill="url(#carbonGradient)"
                  />
                  <path
                    d="M 60 50 L 160 70 L 260 90 L 360 110 L 460 130 L 560 145"
                    fill="none"
                    stroke="rgb(152, 195, 121)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 60 100 L 160 105 L 260 115 L 360 120 L 460 125 L 560 128"
                    fill="none"
                    stroke="rgb(251, 146, 60)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />

                  {[
                    { x: 60, y: 50 },
                    { x: 160, y: 70 },
                    { x: 260, y: 90 },
                    { x: 360, y: 110 },
                    { x: 460, y: 130 },
                    { x: 560, y: 145 }
                  ].map((point, i) => (
                    <circle key={i} cx={point.x} cy={point.y} r="4" fill="rgb(152, 195, 121)" />
                  ))}

                  <rect x="510" y="130" width="60" height="20" rx="10" fill="rgb(152, 195, 121)" />
                  <text x="540" y="144" textAnchor="middle" className="fill-white text-[10px] font-bold">
                    -32.4%
                  </text>

                  {['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'].map((label, i) => (
                    <text
                      key={i}
                      x={60 + i * 100}
                      y="235"
                      textAnchor="middle"
                      className="fill-foreground/40 text-[10px]"
                    >
                      {label} {i < 4 ? "'25" : "'26"}
                    </text>
                  ))}
                </svg>
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50">Năng lượng tái tạo</p>
                    <p className="text-sm font-bold">2.84 GWh <span className="text-[10px] text-green-500">+14%</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Droplets size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50">Nước tái sử dụng</p>
                    <p className="text-sm font-bold">76.3% <span className="text-[10px]">Compliant</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <DollarSign size={14} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50">Tiết kiệm chi phí</p>
                    <p className="text-sm font-bold">$310,640 <span className="text-[10px] text-green-500">Saved</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility Table */}
            <div className="bg-background rounded-3xl overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <h2 className="text-lg font-bold mb-1">Ma trận Năng lực Xanh theo Cơ sở Sản xuất</h2>
                    <p className="text-xs text-foreground/50">
                      Chi tiết theo cơ sở — Xem bên cho tất cả 12 cơ sở toàn quốc.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-secondary text-xs rounded-full hover:bg-secondary/80 transition-all flex items-center gap-1">
                      <span>CBU Mới ISO</span>
                      <ChevronDown size={12} />
                    </button>
                    <button className="px-3 py-1.5 bg-primary text-primary-foreground text-xs rounded-full hover:opacity-90 transition-all">
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr className="text-[10px] text-foreground/50 uppercase tracking-wider">
                      <th className="text-left px-6 py-3 font-semibold">Cơ sở</th>
                      <th className="text-left px-3 py-3 font-semibold">CO2e (tCO2e)</th>
                      <th className="text-left px-3 py-3 font-semibold">Năng lượng (MWh)</th>
                      <th className="text-left px-3 py-3 font-semibold">Nước (m³)</th>
                      <th className="text-left px-3 py-3 font-semibold">Chất thải</th>
                      <th className="text-left px-3 py-3 font-semibold">Chứng nhận</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Nhà máy Công nghệ sinh học Dung Quất', location: 'Quảng Ngãi', co2: 248.5, energy: 481.2, water: 12.4, waste: 94.1, cert: 'ISO 14064' },
                      { name: 'Nhà máy Bắc Ninh Precision', location: 'Bắc Ninh', co2: 182.3, energy: 320.8, water: 8.7, waste: 88.4, cert: 'ISO 14001' },
                      { name: 'Nhà máy Cần Biên Long An', location: 'Long An', co2: 156.4, energy: 275.6, water: 6.9, waste: 91.2, cert: 'ISO 14001' },
                      { name: 'Nhà máy Nội Bài Green Hub', location: 'Hà Nội', co2: 98.2, energy: 188.4, water: 4.2, waste: 96.8, cert: 'ISO 14064, ISO 14001' },
                    ].map((facility, index) => (
                      <tr key={index} className="hover:bg-secondary/30 transition-all">
                        <td className="px-6 py-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Factory size={14} className="text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium leading-tight">{facility.name}</p>
                              <p className="text-[10px] text-foreground/40 mt-0.5">{facility.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4">
                          <p className="text-sm font-semibold">{facility.co2}</p>
                          <p className="text-[10px] text-green-500">-8.2%</p>
                        </td>
                        <td className="px-3 py-4">
                          <p className="text-sm">{facility.energy}</p>
                          <p className="text-[10px] text-green-500">-3.4%</p>
                        </td>
                        <td className="px-3 py-4">
                          <p className="text-sm">{facility.water}</p>
                          <p className="text-[10px] text-foreground/40">stabilized</p>
                        </td>
                        <td className="px-3 py-4">
                          <p className="text-sm font-semibold text-primary">{facility.waste}</p>
                          <p className="text-[10px] text-foreground/40">Compliant</p>
                        </td>
                        <td className="px-3 py-4">
                          <span className="text-[10px] px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {facility.cert}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Knowledge Update */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" />
                  <h3 className="font-bold text-sm">Kiến thức Mới!</h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-primary text-primary-foreground rounded-full font-semibold">
                  KNOWLEDGE
                </span>
              </div>

              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span className="text-foreground/70">
                    <strong className="text-foreground">EU CBAM chính thức</strong> áp dụng từ 01/2026 — tất cả sản phẩm xuất khẩu EU cần Green Product Passport.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span className="text-foreground/70">
                    Sản phẩm của bạn đã <strong className="text-foreground">đạt chuẩn</strong> (A+ passport). Ready for EU exports.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span className="text-foreground/70">
                    CBAM sẽ ảnh hưởng đến <strong className="text-red-500">6/10 doanh nghiệp</strong> xuất khẩu thép và xi măng tại VN.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span className="text-foreground/70">
                    Bạn nên có <strong className="text-foreground">chứng nhận ISO 14064</strong> để tránh rủi ro pháp lý khi CBAM chính thức.
                  </span>
                </li>
              </ul>

              <button className="mt-4 text-xs text-primary hover:underline flex items-center gap-1 font-medium">
                Xem tất cả kiến thức mới <ChevronRight size={12} />
              </button>
            </div>

            {/* Sustainability Report */}
            <div className="bg-background rounded-3xl p-5">
              <h3 className="font-bold text-sm mb-4">Đồng Hành Sinh Thái</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <p className="text-xs text-foreground/70">
                    <strong className="text-foreground">Vietnam Green Network</strong> đã chấp nhận cấp xanh và/hoặc đánh giá lại 3 tháng tới đây.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <p className="text-xs text-foreground/70">
                    <strong className="text-foreground">VinEco là 1/5 những "Green Leader"</strong> — chuẩn bị cho CBAM passport.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <p className="text-xs text-foreground/70">
                    <strong className="text-foreground">CEO Nguyễn Đức Mạnh</strong> được xét duyệt là 1 trong 10 Green Leaders toàn quốc 2026.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <p className="text-xs text-foreground/70">
                    <strong className="text-foreground">29/05/2026:</strong> VNForest sẽ tổ chức sự kiện Green Production Day 2026 tại TP.HCM.
                  </p>
                </div>
              </div>
            </div>

            {/* Green City Card */}
            <div className="bg-gradient-to-br from-primary to-[#6aa34a] rounded-3xl p-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/40 rounded-full"></div>
                <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/40 rounded-full"></div>
              </div>

              <div className="relative">
                <p className="text-[10px] opacity-80 mb-1">KHU CÔNG NGHIỆP SINH THÁI</p>
                <h3 className="text-lg font-bold mb-2">Green Industrial Zone</h3>
                <p className="text-xs opacity-90 mb-4">
                  VinEco Mfg Corp — Nhà máy Dung Quất đạt chứng nhận Green Industrial Zone 2026
                </p>
                <button className="px-4 py-2 bg-white text-primary rounded-full text-xs font-semibold hover:bg-white/90 transition-all flex items-center gap-1.5">
                  <Award size={14} />
                  ✅ 2026 Green City Award — Top 3
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
