
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function DemoDetector() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<null | { 
    score: number;
    category: string;
    severity: "safe" | "low" | "moderate" | "high";
  }>(null);
  const [loading, setLoading] = useState(false);

  const analyzeMessage = () => {
    if (!message.trim()) return;
    
    setLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      // Simple pattern matching for demo purposes
      const lowerMessage = message.toLowerCase();
      let score = 0;
      let category = "Safe";
      let severity: "safe" | "low" | "moderate" | "high" = "safe";
      
      // Very simple threat detection logic for demo
      const profanityList = ["fuck", "shit", "bitch", "ass", "damn", "bastard", "f*ck", "f**k", "b*tch"];
      const threatList = ["kill", "hurt", "attack", "punch", "find you", "coming for", "watch out"];
      
      // Check for explicit profanity
      for (const word of profanityList) {
        if (lowerMessage.includes(word)) {
          score += 0.3;
        }
      }
      
      // Check for threats
      for (const word of threatList) {
        if (lowerMessage.includes(word)) {
          score += 0.4;
        }
      }
      
      // Determine category and severity based on score
      if (score > 0.7) {
        category = "Direct Threat";
        severity = "high";
      } else if (score > 0.4) {
        category = "Potential Harassment";
        severity = "moderate";
      } else if (score > 0.2) {
        category = "Inappropriate Language";
        severity = "low";
      }
      
      // Cap the score at 1.0
      score = Math.min(score, 1.0);
      
      setResult({ score, category, severity });
      setLoading(false);
    }, 1500);
  };

  const getSeverityColor = (severity: "safe" | "low" | "moderate" | "high") => {
    switch (severity) {
      case "high": return "text-coral";
      case "moderate": return "text-orange-500";
      case "low": return "text-yellow-500";
      default: return "text-green-500";
    }
  };

  const getProgressColor = (score: number) => {
    if (score < 0.3) return "bg-green-500";
    if (score < 0.7) return "bg-yellow-500";
    return "bg-coral";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">AI Threat Detector Demo</h2>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Enter a message to analyze:
        </label>
        <Textarea
          id="message"
          placeholder="Type or paste a message to analyze..."
          className="min-h-[100px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <Button 
          onClick={analyzeMessage} 
          disabled={loading || !message.trim()} 
          className="bg-teal hover:bg-teal/90"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Message"
          )}
        </Button>
      </div>
      
      {result && (
        <div className={`p-4 rounded-md ${
          result.severity === "safe" ? "bg-green-50" :
          result.severity === "low" ? "bg-yellow-50" :
          result.severity === "moderate" ? "bg-orange-50" : "bg-red-50"
        }`}>
          <div className="flex items-center mb-4">
            {result.severity === "safe" ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <AlertCircle className={`h-5 w-5 mr-2 ${getSeverityColor(result.severity)}`} />
            )}
            <h3 className={`font-bold ${getSeverityColor(result.severity)}`}>
              {result.category}
            </h3>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Threat Score</span>
              <span className="font-medium">{(result.score * 100).toFixed(0)}%</span>
            </div>
            <Progress value={result.score * 100} className={`h-2 ${getProgressColor(result.score)}`} />
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            {result.severity === "safe" ? (
              "This message appears to be safe with no detected threats or abusive content."
            ) : result.severity === "low" ? (
              "This message contains some inappropriate language but no direct threats."
            ) : result.severity === "moderate" ? (
              "This message contains language that could be considered harassment or indirect threats."
            ) : (
              "This message contains explicit threatening language or direct abuse."
            )}
          </p>
        </div>
      )}
    </div>
  );
}
