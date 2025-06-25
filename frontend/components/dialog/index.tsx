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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Access } from "@/types/access"

import { downloadCredencials } from "@/functions/downloadCredencials"
import { Separator } from "../ui/separator"

interface FormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HomeDialog({ open, onOpenChange }: FormDialogProps) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro</DialogTitle>
          <DialogDescription>
            Cadastro realizado com sucesso!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="grid gap-4 py-2">
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
        <Separator />
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            onClick={() => downloadCredencials({
              username: "raul",
              token: "jasjdakdh728",
              url: "https://dominio.com/content?target=jasjdakdh728",
              url_param: "?target=jasjdakdh728"
            })}>
            Baixar Credenciais
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}