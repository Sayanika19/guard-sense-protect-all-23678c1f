
import { supabase } from "@/integrations/supabase/client";

export async function signInWithInstagram() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: 'instagram_basic,instagram_content_publish', // Instagram-specific scopes through Facebook OAuth
    },
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
