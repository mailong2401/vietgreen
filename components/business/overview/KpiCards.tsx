'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Award,
  TrendingUp,
  TrendingDown,
  Leaf,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

// --- Custom Hook: Đếm số từ 0 đến giá trị đích ---
function useCountUp(end: number, duration: number = 1500, start: number = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(start + (end - start) * easeOut);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return { count, ref };
}

// --- Icon Map: Ánh xạ string key sang Component ---
const ICON_MAP = {
  award: Award,
  leaf: Leaf,
  shield: ShieldCheck,
} as const;

type IconKey = keyof typeof ICON_MAP;

// --- Data Configuration ---
const KPI_DATA = [
  {
    id: 'vgpi',
    label: 'CHỈ SỐ QUỐC GIA (VGPI)',
    iconKey: 'award' as IconKey, // ✅ Dùng string key thay vì component
    value: 82.4,
    suffix: '/ 100',
    valueColor: 'text-gray-900',
    trend: {
      type: 'up' as const,
      text: '+5.2 so với Q1',
      color: 'text-emerald-600',
    },
    meta: 'Mục tiêu: 80.0',
    progress: 82.4,
    footerLeft: 'Hạng Xuất Sắc: Top 12%',
    footerRight: 'Chuẩn ngành 68.0',
    footerRightColor: 'text-red-500',
  },
  {
    id: 'co2',
    label: 'TỔNG PHÁT THẢI SCOPE 1 & 2',
    iconText: 'CO₂e', // ✅ Dùng text cho trường hợp đặc biệt
    value: 1420.8,
    suffix: 'tCO₂e',
    valueColor: 'text-gray-900',
    trend: {
      type: 'down' as const,
      text: '-18.5% cùng kỳ',
      color: 'text-emerald-600',
    },
    meta: '-322 tCO₂e Solar',
    progress: 88,
    footerLeft: 'Tiến độ Net Zero 2026',
    footerRight: '88% Milestone',
    footerRightColor: 'text-[#005A36]',
  },
  {
    id: 'products',
    label: 'SẢN PHẨM ĐẠT CHUẨN XANH',
    iconKey: 'leaf' as IconKey,
    value: 124,
    suffix: '/ 148 mã',
    valueColor: 'text-gray-900',
    trend: null,
    meta: '83.7% danh mục',
    metaRight: '+18 Passport mới',
    metaRightColor: 'text-[#005A36]',
    progress: 83.7,
    footerLeft: 'Cấp QR Hộ Chiếu Sinh Thái',
    footerRight: 'Tăng +12.1%',
    footerRightColor: 'text-[#005A36]',
  },
  {
    id: 'risk',
    label: 'MỨC RỦI RO GREENWASHING',
    iconKey: 'shield' as IconKey,
    value: 96.4,
    suffix: null,
    valueColor: 'text-gray-900',
    badge: 'Low Risk',
    badgeColor: 'text-emerald-600 bg-emerald-50',
    trend: {
      type: 'check' as const,
      text: '0 cảnh báo vi phạm',
      color: 'text-emerald-600',
    },
    meta: '1 Gộp ý nhận',
    metaColor: 'text-red-500 bg-red-50',
    progress: 96.4,
    footerLeft: 'EU CBAM & CSRD Readiness',
    footerRight: '100% Validated',
    footerRightColor: 'text-[#005A36]',
  },
];

// --- Sub-Component: KpiCard ---
function KpiCard({ data, index }: { data: typeof KPI_DATA[0]; index: number }) {
  const numericValue = typeof data.value === 'number' ? data.value : 0;
  const { count, ref } = useCountUp(numericValue, 1500 + index * 200);

  // ✅ Lấy component từ ICON_MAP dựa trên iconKey
  const IconComponent = 'iconKey' in data ? ICON_MAP[data.iconKey as IconKey] : null;

  const displayValue =
    data.id === 'co2'
      ? count.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
      : count.toFixed(1);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {data.label}
          </span>
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
            {/* ✅ Render component hoặc text tùy theo data */}
            {IconComponent ? (
              <IconComponent size={16} className="text-emerald-600" />
            ) : (
              <span className="text-emerald-600 text-[10px] font-bold">
                {'iconText' in data ? data.iconText : null}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span ref={ref} className={`text-4xl font-bold ${data.valueColor} tabular-nums block`}>
            {displayValue}
          </span>
          {data.suffix && <span className="text-sm text-gray-400">{data.suffix}</span>}
          {data.badge && (
            <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${data.badgeColor}`}>
              {data.badge}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs mb-3">
          <div className={`flex items-center gap-1 font-medium ${data.trend?.color || 'text-gray-500'}`}>
            {data.trend?.type === 'up' && <TrendingUp size={14} />}
            {data.trend?.type === 'down' && <TrendingDown size={14} />}
            {data.trend?.type === 'check' && <CheckCircle size={14} />}
            <span>{data.trend?.text || data.meta}</span>
          </div>
          {data.trend && (
            <span
              className={
                data.metaColor ? `font-medium px-1.5 py-0.5 rounded ${data.metaColor}` : 'text-gray-500'
              }
            >
              {data.meta}
            </span>
          )}
          {!data.trend && data.metaRight && (
            <span className={`font-medium ${data.metaRightColor}`}>{data.metaRight}</span>
          )}
        </div>
      </div>

      <div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-[#005A36] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-gray-500">{data.footerLeft}</span>
          <span className={`font-medium ${data.footerRightColor}`}>{data.footerRight}</span>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {KPI_DATA.map((kpi, index) => (
        <KpiCard key={kpi.id} data={kpi} index={index} />
      ))}
    </div>
  );
}
