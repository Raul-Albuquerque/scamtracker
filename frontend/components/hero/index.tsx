"use client"

import { useState } from "react";
import { Form } from "../form"
import { TokenDialog } from "../tokenDialog"
import Image from "next/image";
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
})

export function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsDialogOpen(true)
  }

  return (
    <>
      <main className="container flex flex-col items-start justify-start h-dvh">
        <div className={`bg-neutral-50 py-4 px-6 mt-20 max-w-xl rounded-2xl ${quicksand.className}`}>
          <h2 className="scroll-m-20 text-5xl font-bold tracking-tight">
            Link Rastreável em Segundos
          </h2>
          <h4 className="scroll-m-20 text-xl font-light tracking-tight py-2">
            Crie seu nome de usuário, gere o token e tenha acesso a
            informações de quem clicou no seu link.
          </h4>
          <Form onSubmitSuccess={handleFormSuccess} />
        </div>
        <TokenDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        <div className="z-[-2] w-100">
          <div className="bubble"></div>
          <div className="detail-left"></div>
        </div>
        <div className="logo-hero-detail bg-white rounded-full p-4">
          <Image
            className=""
            src="/static/images/logo-sm.svg"
            alt="" width={120} height={120} />
        </div>
      </main>
    </>
  )
}
