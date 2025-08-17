// src/app/page.tsx
import { redirect } from "next/navigation";
// import { getSession } from "@/lib/auth"; // your auth helper

export default async function Home() {
  // const session = await getSession();
  const session = null;
  if (!session) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
