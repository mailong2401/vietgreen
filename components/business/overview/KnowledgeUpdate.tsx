import { BrainCircuit, Lightbulb, AlertTriangle, Sparkles, CheckCircle } from 'lucide-react';

export default function KnowledgeUpdate() {
  return (
    <div className="bg-background shadow-sm border border-secondary rounded-2xl p-5 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#dcfce7] flex items-center justify-center">
            <BrainCircuit size={18} className="text-[#005A36]" />
          </div>
          <h3 className="font-bold text-base text-gray-900">Khuyến Nghị Green AI</h3>
        </div>
        <span className="text-[10px] px-2 py-1 bg-[#005A36] text-white rounded-md font-semibold uppercase tracking-wider">
          Algorithmic
        </span>
      </div>

      <div className="space-y-3">
        {/* Item 1: Optimization */}
        <div className="bg-[#e0f2e9] rounded-xl p-3 border border-[#c8e6d9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <Lightbulb size={16} className="text-[#005A36]" />
            </div>
            <div>
              <p className="text-xs text-gray-800 leading-relaxed mb-2">
                Tối ưu hóa ca sản xuất <strong className="font-semibold">Nhà máy Long An</strong> sang khung giờ điện mặt trời cực đại (10h-14h) để giảm thêm <strong className="font-semibold">4.2 tấn CO₂e/tuần.</strong>
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 bg-[#c8e6d9] text-[#005A36] font-semibold rounded">Áp dụng lịch điều phối tự động</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Ước tính tiết kiệm: <strong className="text-gray-900">$2,400</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2: Warning */}
        <div className="bg-[#fef2f2] rounded-xl p-3 border border-[#fecaca]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <AlertTriangle size={16} className="text-red-500" />
            </div>
            <div>
              <p className="text-xs text-gray-800 leading-relaxed mb-2">
                <strong className="font-semibold">2 dòng sản phẩm Bio-Package</strong> cần cập nhật chứng từ tái chế trước ngày <strong className="font-semibold">15/07/2026</strong> để duy trì Green Product Passport.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 bg-[#fecaca] text-red-700 font-semibold rounded">Bổ sung tài liệu FSC / PCR</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">Hạn chót: <strong className="text-red-600">18 ngày</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3: Opportunity */}
        <div className="bg-[#e0f2e9] rounded-xl p-3 border border-[#c8e6d9]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <Sparkles size={16} className="text-[#005A36]" />
            </div>
            <div>
              <p className="text-xs text-gray-800 leading-relaxed mb-2">
                Đề xuất đăng ký chứng chỉ năng lượng tái tạo <strong className="font-semibold">I-REC</strong> cho <strong className="font-semibold">1.2 MWh</strong> dư thừa tại tổ hợp Bình Dương.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 bg-[#c8e6d9] text-[#005A36] font-semibold rounded">Kích hoạt hồ sơ phát hành I-REC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <button className="w-full mt-4 py-2.5 bg-[#e0f2e9] hover:bg-[#d0ebd9] border border-[#c8e6d9] rounded-xl text-xs font-semibold text-[#005A36] flex items-center justify-center gap-2 transition-colors">
        <CheckCircle size={16} />
        Yêu cầu AI phân tích rủi ro chuyên sâu
      </button>
    </div>
  );
}
