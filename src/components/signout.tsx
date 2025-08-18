"use client";
import { Button } from "antd";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation"; // Use next/navigation for client-side navigation

const SignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/signout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("Sign out successful");
      router.push("/login"); // Redirect to login page
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOut;
