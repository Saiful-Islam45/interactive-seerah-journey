import Header from '@/components/layout/Header';
import WelcomeWidget from '@/components/widgets/WelcomeWidget';
import TimelineWidget from '@/components/widgets/TimelineWidget';
import MapWidget from '@/components/widgets/MapWidget';
import FamilyTreeWidget from '@/components/widgets/FamilyTreeWidget';
import AIAssistantWidget from '@/components/widgets/AIAssistantWidget';

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <Header />

      <div className="px-4 pb-6 md:px-6 md:pb-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">

          {/* Top Row: Welcome + Timeline */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
            <div className="xl:col-span-2">
              <WelcomeWidget />
            </div>
            <div className="xl:col-span-1">
              <TimelineWidget />
            </div>
          </div>

          {/* Bottom Row: Map, Family Tree, AI Assistant */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <MapWidget />
            <FamilyTreeWidget />
            {/* AI spans full width on md, normal on xl */}
            <div className="md:col-span-2 xl:col-span-1">
              <AIAssistantWidget />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
