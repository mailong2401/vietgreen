import HeroHeader from '@/components/business/overview/HeroHeader';
import KpiCards from '@/components/business/overview/KpiCards';
import EmissionsChart from '@/components/business/overview/EmissionsChart';
import FacilityTable from '@/components/business/overview/FacilityTable';
import KnowledgeUpdate from '@/components/business/overview/KnowledgeUpdate';
import SustainabilityReport from '@/components/business/overview/SustainabilityReport';

export default function BusinessDashboardPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-secondary/20">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-[#ecfef3]">
        {/* Hero Header */}
        <HeroHeader />

        {/* KPI Cards */}
        <KpiCards />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Chart & Table */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 min-w-0">
            <EmissionsChart />
            <FacilityTable />
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6 min-w-0">
            <KnowledgeUpdate />
            <SustainabilityReport />
          </div>
        </div>
      </div>
    </div>
  );
}
