"use client"

import { useState } from "react";
import { Form } from "../form"
import { TokenDialog } from "../tokenDialog"

export function MainContent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsDialogOpen(true)
  }

  return (
    <main className="container mx-auto px-4 py-6 max-w-2xl flex flex-col items-center justify-start">
      <Form onSubmitSuccess={handleFormSuccess} />
      <TokenDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </main>
  )
}
