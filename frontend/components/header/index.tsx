"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Quicksand } from "next/font/google"
import { AlignJustify, BookAlert, Github, Home } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import { LoginDialog } from "@/components/dialogs/loginDialog"
import { useIsMobile } from "@/hooks/use-mobile"
import { checkTokenOnCookies } from "@/actions/cookies"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
})

type HeaderProps = {
  page: "home" | "terms"
}

export function Header({ page }: HeaderProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const isMobile = useIsMobile()
  const router = useRouter()

  async function loginHandler() {
    const isUserAuth = await checkTokenOnCookies()
    if (isUserAuth) {
      router.push("/dashboard")
    } else {
      setIsDialogOpen(true)
    }
  }

  return (
    <div className="bg-transparent flex items-center justify-center">
      <header className="container mx-auto py-2 px-4 md:py-6 flex items-center justify-between">
        {isMobile && page === "home" ? (
          <Link href={"/"}>
            <Image
              src={"/static/images/logo.svg"}
              alt="Scamtracker logo branca"
              width={160}
              height={24}
            />
          </Link>
        ) : (
          <Link href={"/"}>
            <Image
              src={"/static/images/logo-black.svg"}
              alt="Scamtracker logo preta"
              width={160}
              height={24}
            />
          </Link>
        )}

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className={`bg-neutral-50 text-neutral-800 ${
                  page === "terms" ? "bg-neutral-800 text-neutral-50" : ""
                }`}
              >
                <AlignJustify size="icon" className="sm:hidden" />
                <span className="sr-only">Abrir e fechar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-x:">
              <nav className="grid gap-4 text-md font-medium">
                <Link
                  href={"/"}
                  className="flex my-4 mx-4 border-b-1 pb-4 border-neutral-200"
                >
                  <Image
                    src={"/static/images/logo-black.svg"}
                    alt="Scamtracker logo"
                    width={140}
                    height={16}
                  />
                  <DialogTitle className="sr-only">Logo</DialogTitle>
                </Link>
                <Link
                  href={"/"}
                  className="flex mt-2 mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Home size="icon" className="w-6 h-6" />
                  <span className="">Início</span>
                </Link>
                <Link
                  href={"https://github.com/Raul-Albuquerque/scamtracker"}
                  className="flex mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Github size="icon" className="w-6 h-6" />
                  <span className="">Repositório do Projeto</span>
                </Link>
                <Link
                  href={"https://github.com/Raul-Albuquerque/scamtracker"}
                  className="flex mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <BookAlert size="icon" className="w-6 h-6" />
                  <span className="">Termos de Uso</span>
                </Link>
                <Link href={""} className="mx-4 text-center">
                  <Button
                    className={`${quicksand.className} bg-linear-to-r from-amber-600 to-violet-800 font-semibold text-neutral-50 hover:bg-linear-to-l max-w-80 px-20 cursor-pointer py-6 text-base`}
                    onClick={() => loginHandler()}
                  >
                    Acessar Painel
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-5">
          <Link
            href={"/terms"}
            className="flex justify-start items-center gap-5 text-muted-foreground hover:text-foreground"
          >
            <span
              className={`text-sm font-medium ${
                page === "terms"
                  ? "text-neutral-500 hover:text-neutral-900"
                  : "text-neutral-100 hover:text-neutral-700"
              }`}
            >
              Termos de Uso
            </span>
          </Link>
          <Link
            href={"https://github.com/Raul-Albuquerque/scamtracker"}
            className="flex justify-start items-center gap-5 text-muted-foreground hover:text-foreground"
          >
            <Github
              size="icon"
              className={`w-5 h-5 ${
                page === "terms"
                  ? "text-neutral-500 hover:text-neutral-900"
                  : "text-neutral-100 hover:text-neutral-700"
              } `}
            />
            <span className="sr-only">Repositório Github</span>
          </Link>
          <Link
            href={""}
            className="text-muted-foreground hover:text-foreground"
          >
            <Button
              className=" bg-neutral-50 text-neutral-700 font-medium hover:bg-neutral-700 hover:text-neutral-50 cursor-pointer"
              variant={page === "terms" ? "outline" : "default"}
              onClick={() => loginHandler()}
            >
              Acessar Painel
            </Button>
          </Link>
        </div>
      </header>
      <LoginDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
