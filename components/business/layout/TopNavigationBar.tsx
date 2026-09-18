import {
  Bell,
  ShieldCheck,
  User,
  BrainCircuit,
  Upload,
  Plus,
  BarChart3,
} from 'lucide-react';

export default function TopNavigationBar() {
  return (
    <header className="bg-background sticky top-0 z-30 w-full shadow-sm border-b border-border/20">
      <div className="flex items-center justify-between px-6 py-2.5">
        {/* Left Section: Breadcrumbs & Benchmark */}
        <div className="flex items-center gap-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-foreground/50">VietGreen</span>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground/50">Overview</span>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground font-semibold">Executive Dashboard</span>
          </div>

          {/* Benchmark Box */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#e0f2e9] rounded-md border border-[#c8e6d9]">
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

        {/* Right Section: Actions & User Profile */}
        <div className="flex items-center gap-3">
          {/* Add Product Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Plus size={16} className="text-gray-500" />
            Add Product
          </button>

          {/* Scan Claim Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <ShieldCheck size={16} className="text-[#005A36]" />
            Scan Claim
          </button>

          {/* Export ESG Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#005A36] text-white rounded-md text-sm font-medium hover:bg-[#004a2c] transition-colors">
            <Upload size={16} />
            Export ESG
          </button>

          {/* Green AI Button */}
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#e0f2e9] rounded-md text-sm font-medium text-gray-700 hover:bg-[#d0ebd9] transition-colors">
            <BrainCircuit size={16} className="text-[#005A36]" />
            Green AI
            <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-gray-200 text-gray-500 font-sans">
              Ctrl+J
            </span>
          </button>

          {/* Notification Bell */}
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition-all relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#ecfef3]"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 pl-2">
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
  );
}
