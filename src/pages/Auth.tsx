
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { signInWithInstagram } from "@/lib/auth";
import { Instagram } from "lucide-react";

export default function Auth() {
  const navigate = useNavigate();

  const handleInstagramLogin = async () => {
    try {
      await signInWithInstagram();
    } catch (error) {
      console.error('Error:', error);
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
            Please sign in with your Instagram account
          </p>
        </div>
        <Button
          onClick={handleInstagramLogin}
          className="w-full flex items-center justify-center gap-2"
        >
          <Instagram className="h-5 w-5" />
          Continue with Instagram
        </Button>
      </div>
    </div>
  );
}
