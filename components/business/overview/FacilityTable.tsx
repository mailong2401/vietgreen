import { Factory, ChevronDown, FileText, SlidersHorizontal, ArrowRight, CheckCircle } from 'lucide-react';

export default function FacilityTable() {
  const facilities = [
    {
      code: 'BD',
      name: 'Nhà máy Công nghệ cao Bình Dương',
      location: 'Zero Waste to Landfill',
      co2: '1.42M đơn vị',
      energy: '14.2 kWh/sp',
      energyChange: '-8%',
      water: 92,
      cleanEnergy: 'Solar 62%',
      vgpi: 88.5,
      status: 'Kiểu Mẫu',
    },
    {
      code: 'BN',
      name: 'Nhà máy Bắc Ninh Precision',
      location: 'Linh kiện điện tử & đóng gói sinh thái',
      co2: '980k đơn vị',
      energy: '18.6 kWh/sp',
      energyChange: null,
      water: 74,
      cleanEnergy: 'NLTT 38%',
      vgpi: 81.2,
      status: 'Đạt Tiêu Chuẩn',
    },
    {
      code: 'LA',
      name: 'Nhà máy Chế Biến Long An',
      location: 'Cần tối ưu khung giờ cao điểm',
      co2: '1.15M đơn vị',
      energy: '22.1 kWh/sp',
      energyChange: '+3%',
      water: 68,
      cleanEnergy: 'Solar 24%',
      vgpi: 77.8,
      status: 'Theo Dõi Gắt Gạo',
    },
    {
      code: 'DN',
      name: 'Nhà máy Đà Nẵng Green Hub',
      location: 'Bao bì tự hủy & vật liệu sinh học',
      co2: '640k đơn vị',
      energy: '16.4 kWh/sp',
      energyChange: null,
      water: 85,
      cleanEnergy: 'Biomass 45%',
      vgpi: 83.0,
      status: 'Đạt Tiêu Chuẩn',
    },
  ];

  const getStatusColor = (status: string) => {
    if (status === 'Kiểu Mẫu') return 'bg-[#005A36] text-white';
    if (status === 'Đạt Tiêu Chuẩn') return 'bg-emerald-100 text-emerald-700';
    if (status === 'Theo Dõi Gắt Gạo') return 'bg-gray-100 text-gray-600';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-lg font-bold mb-1 text-gray-900">Ma Trận Năng Lực Xanh Từng Cơ Sở Sản Xuất</h2>
            <p className="text-xs text-gray-500">
              Đo lường thời gian thực theo tiêu chí VGPI (ISO 14064, ISO 50001, Circularity)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-[#e0f2e9] text-[#005A36] text-xs font-medium rounded-md hover:bg-[#d0ebd9] transition-all flex items-center gap-1.5">
              <SlidersHorizontal size={14} />
              Bộ lọc chỉ số
            </button>
            <button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-md hover:bg-gray-50 transition-all flex items-center gap-1.5">
              <FileText size={14} />
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#e0f2e9]">
            <tr className="text-[10px] text-[#005A36] uppercase tracking-wider font-semibold">
              <th className="text-left px-6 py-3">Cơ sở sản xuất</th>
              <th className="text-left px-3 py-3">Sản lượng Q2</th>
              <th className="text-left px-3 py-3">Cường độ năng lượng</th>
              <th className="text-left px-3 py-3">Tái sử dụng nước</th>
              <th className="text-left px-3 py-3">Năng lượng xanh</th>
              <th className="text-left px-3 py-3">Chỉ số VGPI</th>
              <th className="text-left px-3 py-3">Tình trạng</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {facilities.map((facility, index) => (
              <tr key={index} className="hover:bg-gray-50/50 transition-all">
                {/* Facility Name */}
                <td className="px-6 py-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#e0f2e9] flex items-center justify-center flex-shrink-0 text-[#005A36] font-bold text-xs">
                      {facility.code}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-tight mb-0.5">{facility.name}</p>
                      <p className={`text-[10px] ${facility.location.includes('tối ưu') ? 'text-red-500' : 'text-gray-500'}`}>
                        {facility.location}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Output */}
                <td className="px-3 py-4">
                  <p className="text-sm font-medium text-gray-900">{facility.co2}</p>
                </td>

                {/* Energy Intensity */}
                <td className="px-3 py-4">
                  <p className="text-sm text-gray-900">{facility.energy}</p>
                  {facility.energyChange && (
                    <p className={`text-[10px] ${facility.energyChange.startsWith('+') ? 'text-red-500' : 'text-emerald-600'}`}>
                      ({facility.energyChange})
                    </p>
                  )}
                </td>

                {/* Water Reuse */}
                <td className="px-3 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#005A36] rounded-full" style={{ width: `${facility.water}%` }}></div>
                    </div>
                    <span className="text-xs font-medium text-gray-700">{facility.water}%</span>
                  </div>
                </td>

                {/* Clean Energy */}
                <td className="px-3 py-4">
                  <span className="text-xs font-semibold text-[#005A36] bg-[#e0f2e9] px-2 py-1 rounded">
                    {facility.cleanEnergy}
                  </span>
                </td>

                {/* VGPI Score */}
                <td className="px-3 py-4">
                  <span className="text-sm font-bold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-full">
                    {facility.vgpi}
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 py-4">
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1 w-fit ${getStatusColor(facility.status)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                    {facility.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-[#e0f2e9] px-6 py-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-[#005A36]" />
          <p className="text-xs text-gray-700">
            <strong className="font-semibold">100%</strong> các nhà máy đã tích hợp cảm biến IoT quan trắc khí thải CEMS truyền dữ liệu về Sở TN&MT địa phương.
          </p>
        </div>
        <button className="text-xs font-semibold text-[#005A36] hover:underline flex items-center gap-1">
          Xem nhật ký kiểm toán IoT
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
