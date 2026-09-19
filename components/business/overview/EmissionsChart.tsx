import { Zap, Droplets, DollarSign } from 'lucide-react';

export default function EmissionsChart() {
  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-bold text-gray-900">
              Xu Hướng Giảm Phát Thải & Chuyển Dịch Xanh
            </h2>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-semibold rounded-full uppercase tracking-wider">
              Scope 1+2 MoM
            </span>
          </div>
          <p className="text-xs text-gray-500">
            So sánh phát thải thực tế (tCO₂e) so với ngưỡng mục tiêu Net-Zero năm 2026
          </p>
        </div>

        {/* Legend & Badge */}
        <div className="flex items-center gap-4 text-xs shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#005A36]"></span>
            <span className="text-gray-600 font-medium">Thực tế</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-gray-400 border-t-2 border-dashed border-gray-400"></span>
            <span className="text-gray-500">Lộ trình chuẩn</span>
          </div>
          <span className="px-2 py-1 bg-[#e0f2e9] text-[#005A36] text-[10px] font-semibold rounded">
            Năng Lượng Sạch: 41.5%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64 mb-6">
        <svg viewBox="0 0 800 240" className="w-full h-full" preserveAspectRatio="none">
          {/* Grid Lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="40"
              y1={20 + i * 50}
              x2="780"
              y2={20 + i * 50}
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Y-Axis Labels */}
          {['2.0k', '1.6k', '1.2k', '0.8k', ''].map((label, i) => (
            <text
              key={i}
              x="30"
              y={24 + i * 50}
              textAnchor="end"
              className="fill-gray-400 text-[10px] font-medium"
            >
              {label}
            </text>
          ))}

          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#005A36" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#005A36" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path
            d="M 60 30 L 200 50 L 360 90 L 520 120 L 680 140 L 780 150 L 780 220 L 60 220 Z"
            fill="url(#areaGradient)"
          />

          {/* Dashed Target Line */}
          <path
            d="M 60 30 L 200 50 L 360 90 L 520 120 L 680 140 L 780 150"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Solid Actual Line */}
          <path
            d="M 60 30 L 200 55 L 360 95 L 520 125 L 680 145 L 780 155"
            fill="none"
            stroke="#005A36"
            strokeWidth="2.5"
          />

          {/* Trend Line (Clean Energy) */}
          <path
            d="M 60 180 L 780 120"
            fill="none"
            stroke="#005A36"
            strokeWidth="2"
          />

          {/* Data Points & Labels */}
          {/* Point 1 */}
          <circle cx="200" cy="55" r="5" fill="white" stroke="#005A36" strokeWidth="2" />
          <text x="200" y="45" textAnchor="middle" className="fill-[#005A36] text-[11px] font-bold">
            1,610 t
          </text>

          {/* Point 2 */}
          <circle cx="520" cy="125" r="5" fill="white" stroke="#005A36" strokeWidth="2" />
          <text x="520" y="115" textAnchor="middle" className="fill-[#005A36] text-[11px] font-bold">
            1,480 t
          </text>

          {/* Point 3 */}
          <circle cx="780" cy="155" r="5" fill="#005A36" />
          <text x="780" y="145" textAnchor="end" className="fill-[#005A36] text-[11px] font-bold">
            1,420.8 tCO₂e
          </text>

          {/* X-Axis Labels */}
          {['T1 / 26', 'T2 / 26', 'T3 / 26', 'T4 / 26', 'T5 / 26', 'Hiện tại'].map((label, i) => (
            <text
              key={i}
              x={60 + i * 144}
              y="235"
              textAnchor={i === 5 ? 'end' : 'middle'}
              className={`text-[10px] ${i === 5 ? 'fill-[#005A36] font-bold' : 'fill-gray-400'}`}
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Stat 1 */}
        <div className="flex items-center gap-3 bg-[#e0f2e9] rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
            <Zap size={16} className="text-[#005A36]" />
          </div>
          <div>
            <p className="text-[11px] text-gray-600 font-medium mb-0.5">Điện Mặt Trời Tự Dùng</p>
            <p className="text-sm font-bold text-gray-900">
              2.84 GWh <span className="text-[11px] text-[#005A36]">+14%</span>
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-3 bg-[#e0f2e9] rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
            <Droplets size={16} className="text-[#005A36]" />
          </div>
          <div>
            <p className="text-[11px] text-gray-600 font-medium mb-0.5">Tỉ Lệ Tuần Hoàn Nước</p>
            <p className="text-sm font-bold text-gray-900">
              76.2% <span className="text-[11px] text-gray-600">Closed-loop</span>
            </p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-3 bg-[#e0f2e9] rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
            <DollarSign size={16} className="text-[#005A36]" />
          </div>
          <div>
            <p className="text-[11px] text-gray-600 font-medium mb-0.5">Chi Phí Tối Ưu Tránh Được</p>
            <p className="text-sm font-bold text-gray-900">
              $38,640 <span className="text-[11px] text-[#005A36]">Saved</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
