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
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"
import Link from "next/link"

interface FormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TokenDialog({ open, onOpenChange }: FormDialogProps) {

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
                <Label htmlFor="username" className="text-neutral-500">
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
                <Label htmlFor="token" className="text-neutral-500">
                  Token:
                </Label>
                <Input
                  id="token"
                  className="text-neutral-600 font-medium"
                  defaultValue="jasjdakdh728"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-1 justify-start gap-2 mt-2">
              <Label htmlFor="url" className="text-neutral-500">
                URL:
              </Label>
              <Input
                id="url"
                className="text-neutral-600 font-medium"
                defaultValue="https://dominio.com/content?target=jasjdakdh728"
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