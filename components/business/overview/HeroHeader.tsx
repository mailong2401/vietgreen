import { FileText, ChevronDown } from 'lucide-react';

export default function HeroHeader() {
  return (
    <div className="bg-background p-4 sm:p-6 shadow-sm border border-secondary rounded-2xl">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 sm:gap-6">
        {/* Left Section */}
        <div className="flex-1 max-w-4xl min-w-0">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-2.5 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[10px] sm:text-xs font-semibold rounded uppercase tracking-wider">
              Q2 2026 Audit Ready
            </span>
            <span className="text-xs sm:text-sm text-foreground/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] shrink-0"></span>
              Live Synced: MONRE & ASEAN Taxonomy
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-2 sm:mb-3">
            Executive Sustainability & Green Production Dashboard
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-foreground/60 max-w-3xl">
            Real-time intelligence connecting enterprise operations, environmental footprint, and Vietnam National
            Green Standards (VQPI/VGCI) across regional supply loops.
          </p>
        </div>

        {/* Right Section (Controls) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 shrink-0 w-full xl:w-auto">
          {/* Time Filter Pills */}
          <div className="flex items-center bg-[#F3F4F6] rounded-md p-1 border border-gray-200 overflow-x-auto">
            <button className="px-3 py-1.5 bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium rounded shadow-sm whitespace-nowrap">
              Q2 2026
            </button>
            <button className="px-3 py-1.5 text-foreground/70 hover:text-foreground text-xs font-medium rounded whitespace-nowrap">
              Year-to-Date
            </button>
            <button className="px-3 py-1.5 text-foreground/70 hover:text-foreground text-xs font-medium rounded whitespace-nowrap">
              30 Days
            </button>
          </div>

          {/* Region Dropdown */}
          <button className="flex items-center justify-between gap-2 px-3 py-2 bg-background border border-gray-200 rounded-md text-xs font-medium text-foreground/80 hover:bg-gray-50 transition-colors w-full sm:w-auto sm:min-w-[200px]">
            <span className="truncate">
              Tất cả 4 nhà máy: Bình Dương, Bắc Ninh, Long An, Đà Nẵng
            </span>
            <ChevronDown size={14} className="text-foreground/50 shrink-0" />
          </button>

          {/* Export Button */}
          <button className="px-4 py-2 bg-[#005A36] text-white rounded-md text-sm font-medium hover:bg-[#004a2c] transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <FileText size={16} />
            Tải Báo Cáo ESG
          </button>
        </div>
      </div>
    </div>
  );
}
