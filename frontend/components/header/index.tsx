"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Activity, AlignJustify, BookAlert, ChartColumnBig, Github, Home, SquareActivity } from "lucide-react"
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { LoginDialog } from "../loginDialog"


export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="bg-neutral-900">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/static/images/logo.svg"} alt="Scamtracker logo" width={160} height={24} />
        </Link>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-neutral-800">
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
                  <Image src={"/static/images/logo-black.svg"} alt="Scamtracker logo" width={140} height={16} />
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
                <Link
                  href={""}
                  className="mx-4 text-center"
                >
                  <Button
                    className="bg-violet-700 text-neutral-50 hover:bg-neutral-50 hover:text-violet-500 max-w-80 px-20 cursor-pointer py-6 text-base"
                    onClick={() => setIsDialogOpen(true)}
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
            <span className="text-sm font-medium text-neutral-100 hover:text-violet-500">Termos de Uso</span>
          </Link>
          <Link
            href={"https://github.com/Raul-Albuquerque/scamtracker"}
            className="flex justify-start items-center gap-5 text-muted-foreground hover:text-foreground"
          >
            <Github size="icon" className="w-5 h-5 text-neutral-100 hover:text-violet-500" />
            <span className="sr-only">Repositório Github</span>
          </Link>
          <Link
            href={""}
            className="text-muted-foreground hover:text-foreground"
          >
            <Button
              className=" bg-neutral-50 text-neutral-700 font-medium hover:bg-violet-700 hover:text-neutral-50 cursor-pointer"
              onClick={() => setIsDialogOpen(true)}
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
