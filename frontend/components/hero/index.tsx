"use client"

import { useState } from "react"
import Image from "next/image"
import { Quicksand } from "next/font/google"

import { TokenDialog } from "@/components/tokenDialog"
import { Form } from "@/components/form"
import { TermsDialog } from "@/components/termsDialog"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
})

export function Hero() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isTokenOpen, setIsTokenOpen] = useState(false)

  const handleFormSuccess = () => {
    setIsTermsOpen(true)
  }

  const handleTermsAccepted = () => {
    setIsTermsOpen(false)
    setIsTokenOpen(true)
  }

  return (
    <>
      <main className="container flex flex-col px-3 items-center md:items-start justify-start h-dvh">
        <div
          className={`bg-neutral-50 py-6 text-center md:text-start md:py-4 mt-20 max-w-xl rounded-2xl ${quicksand.className}`}
        >
          <h2 className="scroll-m-20 text-4xl md:text-5xl font-bold tracking-tight">
            Link Rastreável em Segundos
          </h2>
          <h4 className="scroll-m-20 text-lg md:text-xl font-light tracking-tight py-2">
            Informe um username, gere seu token e acompanhe quem clicou no seu
            link.
          </h4>
          <Form onSubmitSuccess={handleFormSuccess} />
        </div>
        <div className="z-[-2] w-100">
          <div className="bubble"></div>
          <div className="detail-left"></div>
        </div>
        <div className="hidden 2xl:block logo-hero-detail bg-white rounded-full p-4">
          <Image
            className=""
            src="/static/images/logo-sm.svg"
            alt="scamtracker logo com fundo branco"
            width={120}
            height={120}
          />
        </div>
        <TermsDialog
          open={isTermsOpen}
          onOpenChange={setIsTermsOpen}
          onAccept={handleTermsAccepted}
        />
        <TokenDialog open={isTokenOpen} onOpenChange={setIsTokenOpen} />
      </main>
    </>
  )
}
