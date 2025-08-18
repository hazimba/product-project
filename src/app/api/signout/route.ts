import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Sign out error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Optionally, you can redirect to a specific page after sign out
    return NextResponse.redirect(
      new URL("/login", process.env.NEXT_PUBLIC_BASE_URL!)
    );
  } catch (error) {
    console.error("Unexpected error during sign out:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
