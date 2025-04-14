
import { Header } from "@/components/dashboard/Header";
import { ThreatStats } from "@/components/dashboard/ThreatStats";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { MessagesTable } from "@/components/dashboard/MessagesTable";
import { DemoDetector } from "@/components/dashboard/DemoDetector";
import { PlatformStats } from "@/components/dashboard/PlatformStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Header />
        <ThreatStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <AlertsPanel />
          </div>
          <div className="lg:col-span-1">
            <DemoDetector />
          </div>
        </div>
        
        <div className="mb-6">
          <PlatformStats />
        </div>
        
        <MessagesTable />
      </div>
    </div>
  );
};

export default Index;
