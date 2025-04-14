
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Instagram, MessageCircle, AlertTriangle } from "lucide-react";

const data = [
  {
    name: 'Mon',
    comments: 12,
    dms: 19,
    threats: 4,
  },
  {
    name: 'Tue',
    comments: 15,
    dms: 25,
    threats: 7,
  },
  {
    name: 'Wed',
    comments: 23,
    dms: 31,
    threats: 9,
  },
  {
    name: 'Thu',
    comments: 18,
    dms: 24,
    threats: 6,
  },
  {
    name: 'Fri',
    comments: 25,
    dms: 37,
    threats: 12,
  },
  {
    name: 'Sat',
    comments: 14,
    dms: 22,
    threats: 5,
  },
  {
    name: 'Sun',
    comments: 8,
    dms: 15,
    threats: 2,
  },
];

export function PlatformStats() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Instagram className="h-5 w-5 text-teal" />
        <h2 className="text-lg font-bold">Platform Activity</h2>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
            barSize={15}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="comments" name="Comments" fill="#2CA6A4" />
            <Bar dataKey="dms" name="Direct Messages" fill="#0A2342" />
            <Bar dataKey="threats" name="Threats Detected" fill="#FF6B6B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-teal rounded"></div>
          <span className="text-xs text-gray-500">Comments</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-navy rounded"></div>
          <span className="text-xs text-gray-500">Direct Messages</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-coral rounded"></div>
          <span className="text-xs text-gray-500">Threats Detected</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <MessageCircle className="h-5 w-5 text-teal" />
          </div>
          <p className="text-gray-500 text-xs">Comments</p>
          <p className="text-lg font-bold">115</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Instagram className="h-5 w-5 text-navy" />
          </div>
          <p className="text-gray-500 text-xs">DMs</p>
          <p className="text-lg font-bold">173</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <AlertTriangle className="h-5 w-5 text-coral" />
          </div>
          <p className="text-gray-500 text-xs">Threats</p>
          <p className="text-lg font-bold">45</p>
        </div>
      </div>
    </div>
  );
}
