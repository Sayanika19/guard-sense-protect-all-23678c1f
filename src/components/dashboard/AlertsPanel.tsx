
import { AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Alert {
  id: string;
  username: string;
  message: string;
  severity: "low" | "moderate" | "high";
  time: string;
}

const recentAlerts: Alert[] = [
  {
    id: "1",
    username: "angry_user123",
    message: "I'm going to f**k you up if you don't respond!",
    severity: "high",
    time: "5 minutes ago",
  },
  {
    id: "2",
    username: "troll_master99",
    message: "you're such a worthless b**ch, nobody likes your content",
    severity: "high",
    time: "17 minutes ago",
  },
  {
    id: "3",
    username: "hater_2024",
    message: "ur content is trash, get a real job loser",
    severity: "moderate",
    time: "43 minutes ago",
  },
  {
    id: "4",
    username: "random_follower",
    message: "I know where you live, I saw you at the coffee shop yesterday",
    severity: "high",
    time: "1 hour ago",
  },
];

export function AlertsPanel() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-coral" />
          Recent Threat Alerts
        </h2>
        <Button variant="outline" size="sm" className="text-xs">
          View All <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      
      <div className="space-y-4">
        {recentAlerts.map((alert) => (
          <div key={alert.id} className="border-l-4 border-coral p-3 bg-red-50 rounded-r-md">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">@{alert.username}</h4>
              <Badge className={
                alert.severity === "high" ? "bg-coral" :
                alert.severity === "moderate" ? "bg-orange-400" : "bg-yellow-400"
              }>
                {alert.severity} severity
              </Badge>
            </div>
            <p className="text-sm text-gray-700 mb-2">"{alert.message}"</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{alert.time}</span>
              <div className="space-x-2">
                <Button variant="ghost" size="sm" className="h-7 text-xs hover:bg-red-100 hover:text-coral">Ignore</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs hover:bg-red-100 hover:text-coral">Report</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs hover:bg-red-100 hover:text-coral">Block</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
