"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, AlertCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BANKS } from "@/constants/banks"
import { downloadCredencials } from "@/functions/downloadCredencials"
import { UserSchema } from "@/types/user"

interface FormDialogProps {
  open: boolean
  data: UserSchema | null
  onOpenChange: (open: boolean) => void
}

export function TokenDialog({ open, onOpenChange, data }: FormDialogProps) {
  const [showToken, setShowToken] = useState(false)
  const [selectedBank, setSelectedBank] = useState("inter")
  const [isCredencialsSaved, setIsCredencialsSaved] = useState(false)
  const bankList = Object.entries(BANKS)

  if (!data) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>
            Username registrado com sucesso!
          </DialogDescription>
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>As credenciais são exibidas apenas uma vez.</AlertTitle>
            <AlertDescription>
              <p>
                Certifique-se de salvá-las em um local seguro — não será
                possível acessá-las novamente mais tarde.
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
                  defaultValue=""
                  value={data.username}
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
                    defaultValue=""
                    value={data.token}
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
              <Label className="text-neutral-500">Layout da página demo:</Label>
              <Select
                value={selectedBank}
                onValueChange={(value) => setSelectedBank(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione o Layout Demo" />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  {bankList.map(([key, bank]) => (
                    <SelectItem
                      className="capitalize"
                      key={key}
                      value={bank.name}
                    >
                      {`Banco ${bank.name}`}
                    </SelectItem>
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
                value={`${data.original_url}?page=${selectedBank}&target=${data.token}`}
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
                value={`?target=${data.token}`}
                readOnly
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start mt-4">
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() => {
              setIsCredencialsSaved(true)
              downloadCredencials({
                username: data.username,
                token: data.token,
                url: `${data.original_url}?page=${selectedBank}&target=${data.token}`,
                url_param: `?target=${data.token}`,
              })
            }}
          >
            Baixar Credenciais
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="cursor-pointer"
            disabled={!isCredencialsSaved}
          >
            <Link href={"/dashboard"}>Acessar Painel</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
