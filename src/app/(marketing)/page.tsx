"use client";
import { useEffect } from "react";
import Home from "./home/Home";

export default function LandingPage() {
  useEffect(() => {
    console.log("Fetching user data...");
    fetch("https://api.example.com/user")
      .then((r) => r.json())
      .then((data) => console.log("User data:", data));
  }, []);
  return <Home />;
}
