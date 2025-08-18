import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { title, subtitle, email, password } = await request.json();

  try {
    const { data, error } = await supabase
      .from("pagedata")
      .insert([{ title, subtitle, email, password }])
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json(data[0], { status: 201 });
  } catch (error) {
    console.error("Error inserting page data:", error);
    return NextResponse.json(
      { error: "Failed to insert page data" },
      { status: 500 }
    );
  }
}
