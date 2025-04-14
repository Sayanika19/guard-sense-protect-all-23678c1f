
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithInstagram, signInWithEmail, signUpWithEmail } from "@/lib/auth";
import { Facebook, Mail } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Auth() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleInstagramLogin = async () => {
    try {
      setError(null);
      await signInWithInstagram();
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to sign in with Facebook. Please try again.');
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setError(null);
      if (isSignUp) {
        await signUpWithEmail(values.email, values.password);
      } else {
        await signInWithEmail(values.email, values.password);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'Authentication failed. Please try again.');
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
            {isSignUp ? "Create an account" : "Sign in to your account"}
          </p>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Mail className="h-5 w-5 mr-2" />
              {isSignUp ? "Sign Up" : "Sign In"} with Email
            </Button>
          </form>
        </Form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <Button
          onClick={handleInstagramLogin}
          className="w-full flex items-center justify-center gap-2"
        >
          <Facebook className="h-5 w-5" />
          Continue with Facebook for Instagram
        </Button>

        <div className="text-center mt-4">
          <Button
            variant="link"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm"
          >
            {isSignUp
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </Button>
        </div>
      </div>
    </div>
  );
}
