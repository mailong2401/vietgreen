import { CheckCircle, ShieldCheck, Recycle, QrCode } from 'lucide-react';

export default function SustainabilityReport() {
  const activities = [
    {
      icon: <CheckCircle size={16} className="text-[#005A36]" />,
      title: 'Vừa xác minh:',
      highlight: 'Chứng chỉ FSC chuỗi hành trình lô hàng xuất khẩu sang EU.',
      time: '10 phút trước',
      tag: 'Đồng bộ từ SGS Vietnam',
    },
    {
      icon: <ShieldCheck size={16} className="text-[#005A36]" />,
      title: 'Hệ thống AI quét nhãn hàng EcoBottle V2:',
      highlight: 'Đạt điểm an toàn xanh 94% theo ISO 14021.',
      time: '42 phút trước',
      tag: 'Zero Greenwashing Risk',
    },
    {
      icon: <Recycle size={16} className="text-[#005A36]" />,
      title: 'Bộ TN&MT cập nhật dự thảo quy chuẩn kỹ thuật định mức phát thải nước ngành dệt may & nhựa.',
      time: '3 giờ trước',
      tag: 'Chính sách Quốc gia',
    },
    {
      icon: <QrCode size={16} className="text-[#005A36]" />,
      title: 'Tạo mới 45,000 Digital Product Passports cho thị trường bán lẻ ASEAN.',
      time: 'Hôm nay 08:30',
      tag: 'Lô sản xuất BD-2026-04',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-base text-gray-900">Dòng Hoạt Động Hệ Sinh Thái</h3>
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
      </div>

      {/* Timeline */}
      <div className="relative space-y-5">
        {/* Vertical Line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200"></div>

        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-[#e0f2e9] flex items-center justify-center shrink-0 z-10 border-2 border-white">
              {activity.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-800 leading-relaxed mb-1">
                {activity.title}{' '}
                {activity.highlight && (
                  <strong className="font-semibold text-[#005A36]">{activity.highlight}</strong>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-500">
                <span>{activity.time}</span>
                <span className="text-gray-300">•</span>
                <span className="font-medium text-gray-600">{activity.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Image Card */}
      <div className="mt-6 relative rounded-xl overflow-hidden h-32 group">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
          alt="Mô Hình Nhà máy Trung hòa Carbon Bình Dương"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 p-4">
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 block">
            Cơ sở Tiêu biểu
          </span>
          <h4 className="text-sm font-bold text-white leading-tight">
            Mô Hình Nhà máy Trung hòa Carbon Bình Dương
          </h4>
        </div>
      </div>
    </div>
  );
}
