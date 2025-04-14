
import { CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Message {
  id: string;
  username: string;
  content: string;
  platform: "dm" | "comment";
  detectionScore: number;
  status: "safe" | "flagged" | "blocked";
  timestamp: string;
}

const analyzedMessages: Message[] = [
  {
    id: "1",
    username: "fan_123",
    content: "Love your new content! Keep it up!",
    platform: "comment",
    detectionScore: 0.03,
    status: "safe",
    timestamp: "Today, 11:23 AM",
  },
  {
    id: "2",
    username: "angry_user123",
    content: "I'm going to f**k you up if you don't respond!",
    platform: "dm",
    detectionScore: 0.92,
    status: "flagged",
    timestamp: "Today, 10:45 AM",
  },
  {
    id: "3",
    username: "troll_master99",
    content: "you're such a worthless b**ch, nobody likes your content",
    platform: "comment",
    detectionScore: 0.89,
    status: "flagged",
    timestamp: "Today, 10:32 AM",
  },
  {
    id: "4",
    username: "regular_follower",
    content: "When are you releasing your next tutorial?",
    platform: "dm",
    detectionScore: 0.02,
    status: "safe",
    timestamp: "Today, 10:15 AM",
  },
  {
    id: "5",
    username: "hater_2024",
    content: "ur content is trash, get a real job loser",
    platform: "comment",
    detectionScore: 0.67,
    status: "flagged",
    timestamp: "Today, 09:56 AM",
  },
  {
    id: "6",
    username: "supportive_fan",
    content: "This is incredible work! You're so talented!",
    platform: "comment",
    detectionScore: 0.01,
    status: "safe",
    timestamp: "Today, 09:45 AM",
  },
  {
    id: "7",
    username: "random_follower",
    content: "I know where you live, I saw you at the coffee shop yesterday",
    platform: "dm",
    detectionScore: 0.95,
    status: "blocked",
    timestamp: "Today, 09:30 AM",
  },
];

export function MessagesTable() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Recently Analyzed Messages</h2>
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Source</TableHead>
              <TableHead className="text-center">Threat Score</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analyzedMessages.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="font-medium">@{message.username}</TableCell>
                <TableCell className="max-w-xs truncate">{message.content}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {message.platform === "dm" ? "Direct Message" : "Comment"}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center">
                    <div className={`w-12 h-2 rounded-full ${getScoreColor(message.detectionScore)}`}></div>
                    <span className="ml-2 text-xs">{(message.detectionScore * 100).toFixed(0)}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {message.status === "safe" ? (
                    <CheckCircle className="h-5 w-5 text-green-500 inline-block" />
                  ) : message.status === "flagged" ? (
                    <Badge className="bg-coral">Flagged</Badge>
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 inline-block" />
                  )}
                </TableCell>
                <TableCell className="text-right text-sm text-gray-500">
                  {message.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function getScoreColor(score: number): string {
  if (score < 0.3) return "bg-green-500";
  if (score < 0.7) return "bg-yellow-500";
  return "bg-coral";
}
