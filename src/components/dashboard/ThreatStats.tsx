
import { Shield, AlertTriangle, Ban, Clock } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <div className={`p-3 rounded-md ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}

export function ThreatStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <StatCard
        title="Total Threats Detected"
        value={124}
        icon={<Shield className="h-6 w-6 text-white" />}
        color="bg-teal"
      />
      <StatCard
        title="High Severity"
        value={18}
        icon={<AlertTriangle className="h-6 w-6 text-white" />}
        color="bg-coral"
      />
      <StatCard
        title="Blocked Users"
        value={7}
        icon={<Ban className="h-6 w-6 text-white" />}
        color="bg-navy"
      />
      <StatCard
        title="Last Detection"
        value="2m ago"
        icon={<Clock className="h-6 w-6 text-white" />}
        color="bg-gray-500"
      />
    </div>
  );
}
