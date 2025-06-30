"use client"
import { useEffect, useState } from "react";
import { DisclaimerDialog } from "@/components/disclaimerDialog";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    setShowDisclaimer(true)
  }, [])

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <Hero />
      </div >
      <DisclaimerDialog open={showDisclaimer} onOpenChange={setShowDisclaimer} />
    </>
  );
}
