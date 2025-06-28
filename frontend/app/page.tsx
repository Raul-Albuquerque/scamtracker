"use client"
import { useEffect, useState } from "react";
import { DisclaimerDialog } from "@/components/disclaimerDialog";
import { Header } from "@/components/header";
import { MainContent } from "@/components/mainContent";

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    setShowDisclaimer(true)
  }, [])

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <MainContent />
      </div >
      <DisclaimerDialog open={showDisclaimer} onOpenChange={setShowDisclaimer} />
    </>
  );
}
