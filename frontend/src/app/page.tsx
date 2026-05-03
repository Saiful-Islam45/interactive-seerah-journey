import Header from '@/components/layout/Header';
import WelcomeWidget from '@/components/widgets/WelcomeWidget';
import TimelineWidget from '@/components/widgets/TimelineWidget';
import MapWidget from '@/components/widgets/MapWidget';
import FamilyTreeWidget from '@/components/widgets/FamilyTreeWidget';
import AIAssistantWidget from '@/components/widgets/AIAssistantWidget';

export default function Home() {
  return (
    <div className="w-full pb-10">
      <Header />
      
      <div className="p-4 pt-0 md:p-8 md:pt-0">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
          
          {/* Top Row: Welcome (spanning 2 cols on large screens) + Timeline */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <WelcomeWidget />
            </div>
            <div className="xl:col-span-1">
              <TimelineWidget />
            </div>
          </div>

          {/* Bottom Row: Map, Family Tree, AI Assistant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <MapWidget />
            <FamilyTreeWidget />
            <AIAssistantWidget />
          </div>
          
        </div>
      </div>
    </div>
  );
}
