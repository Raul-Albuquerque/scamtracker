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
import { Checkbox } from "../ui/checkbox"
import { banks } from "@/constants/banks"

interface FormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TokenDialog({ open, onOpenChange }: FormDialogProps) {
  const [showToken, setShowToken] = useState(false)
  const [selectedBank, setSelectedBank] = useState("inter")
  const [isTermChecked, setIsTermChecked] = useState(true)
  const bankList = Object.entries(banks)

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
                  className="text-neutral-600 font-medium text-sm"
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
                    className="text-neutral-600 font-medium pr-10 text-sm"
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
              <Select value={selectedBank} onValueChange={(value) => setSelectedBank(value)}>
                <SelectTrigger className="md:w-100">
                  <SelectValue placeholder="Selecione o Layout Demo" />
                </SelectTrigger>
                <SelectContent>
                  {bankList.map(([key, bank]) => (
                    <SelectItem className="capitalize" key={key} value={bank.name}>{bank.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label htmlFor="url" className="text-neutral-500">
                URL:
              </Label>
              <Input
                id="url"
                className="text-neutral-600 font-medium text-sm"
                value={`https://dominio.com/demo?page=${selectedBank}&target=jasjdakdh728`}
                readOnly
              />
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label htmlFor="urlParam" className="text-neutral-500">
                Parâmetro de URL:
              </Label>
              <Input
                id="urlParam"
                className="text-neutral-600 font-medium text-sm"
                defaultValue="?target=jasjdakdh728"
                readOnly
              />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <Checkbox
                id="terms-2"
                className="border-neutral-400"
                onCheckedChange={(checked) => checked == true ? setIsTermChecked(false) : setIsTermChecked(true)}
              />
              <Label htmlFor="terms-2" className="gap-1">
                <span className="text-neutral-500">Aceito os</span>
                <Link href={"/terms"} target="_blank" className="text-blue-500 font-semibold hover:text-neutral-700 text-sm">
                  Termos de Uso
                </Link>
              </Label>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start mt-4">
          <Button
            type="button"
            className="cursor-pointer"
            disabled={isTermChecked}
            onClick={() => downloadCredencials({
              username: "raul",
              token: "jasjdakdh728",
              url: `https://dominio.com/demo=${selectedBank}?page=&target=jasjdakdh728`,
              url_param: "?target=jasjdakdh728"
            })}>
            Baixar Credenciais
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="cursor-pointer"
            disabled={isTermChecked}
          >
            <Link href={"/dashboard"}>Acessar Painel</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}