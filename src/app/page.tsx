'use client'
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    redirect(`/matches`)
  }, [])

  return (
    <p>Football News - Homepage</p>
  );
}
