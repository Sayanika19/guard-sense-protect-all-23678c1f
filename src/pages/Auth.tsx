
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signInWithInstagram } from "@/lib/auth";
import { Facebook } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

export default function Auth() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleInstagramLogin = async () => {
    try {
      setError(null);
      await signInWithInstagram();
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to InstaGuard
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in with your Facebook account to access Instagram
          </p>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Button
          onClick={handleInstagramLogin}
          className="w-full flex items-center justify-center gap-2"
        >
          <Facebook className="h-5 w-5" />
          Continue with Facebook for Instagram
        </Button>
      </div>
    </div>
  );
}
