
import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-navy text-white rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-teal rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M6.5 14.5c0-5.05 4.34-8.5 8.5-8.5"></path>
            <path d="M15 6v2"></path>
            <path d="M15 10a2 2 0 0 0-2-2H6.5c-4 0-4 8 0 8H13a2 2 0 0 0 2-2v-4z"></path>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold">InstaGuard</h1>
          <p className="text-xs text-gray-300">AI-Powered Threat Detection</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" className="border-gray-600 text-white hover:bg-teal hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" className="border-gray-600 text-white hover:bg-teal hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Admin</span>
          <Button variant="outline" size="icon" className="border-gray-600 rounded-full overflow-hidden">
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
}
