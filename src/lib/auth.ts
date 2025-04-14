
import { supabase } from "@/integrations/supabase/client";

export async function signInWithInstagram() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'instagram',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
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
