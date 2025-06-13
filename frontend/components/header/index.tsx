import Image from "next/image"
import Link from "next/link"

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Activity, AlignJustify, ChartColumnBig, Github, Home, SquareActivity } from "lucide-react"
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog"


export const Header = () => {
  return (
    <div className="bg-neutral-900">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Image src={"/static/images/logo.svg"} alt="Scamtracker logo" width={160} height={24} />

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
                  href={"#"}
                  className="flex my-4 mx-4 border-b-1 pb-4 border-neutral-200"
                >
                  <Image src={"/static/images/logo-black.svg"} alt="Scamtracker logo" width={140} height={16} />
                  <DialogTitle className="sr-only">Logo</DialogTitle>
                </Link>
                <Link
                  href={"#"}
                  className="flex mt-2 mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Home size="icon" className="w-6 h-6" />
                  <span className="">Início</span>
                </Link>
                <Link
                  href={"#"}
                  className="flex mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ChartColumnBig size="icon" className="w-6 h-6" />
                  <span className="">Dashboard</span>
                </Link>
                <Link
                  href={"#"}
                  className="flex mx-4 justify-start items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <SquareActivity size="icon" className="w-6 h-6" />
                  <span className="">Histórico de Acessos</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex items-center justify-end gap-5">
          <Link
            href={"#"}
            className="flex justify-start items-center gap-5 text-muted-foreground hover:text-foreground"
          >
            <Github size="icon" className="w-5 h-5 text-neutral-100" />
            <span className="sr-only">Repositório Github</span>
          </Link>
          <Link
            href={"#"}
            className="text-muted-foreground hover:text-foreground"
          >
            <Button className="bg-neutral-50 text-neutral-950 hover:bg-neutral-800 hover:text-neutral-50 cursor-pointer">
              Acessar painel
            </Button>
          </Link>
        </div>
      </header>
    </div>
  )
}
