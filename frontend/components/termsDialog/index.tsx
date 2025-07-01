"use client"

import { useState } from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { termsOfUse } from "@/data/terms"

interface AlertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept: () => void
}

export function TermsDialog({
  open,
  onOpenChange,
  onAccept,
}: AlertDialogProps) {
  const [isTermChecked, setIsTermChecked] = useState(true)

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Termos de uso</AlertDialogTitle>
          <AlertDialogDescription>
            <p>{termsOfUse.greeting}</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Separator />
        <AlertDialogDescription className="max-h-[40vh] pb-4 overflow-y-auto">
          {termsOfUse.sections.map((section, index) => (
            <article key={index}>
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
                {section.heading}
              </h2>
              {section.content.map((content, index) => (
                <p className="mt-2" key={index}>
                  {content}
                </p>
              ))}
            </article>
          ))}
        </AlertDialogDescription>
        <Separator />
        <AlertDialogFooter className="flex sm:flex-col gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms-2"
              className="border-neutral-400"
              onCheckedChange={(checked) =>
                checked == true
                  ? setIsTermChecked(false)
                  : setIsTermChecked(true)
              }
            />
            <Label htmlFor="terms-2" className="gap-1 text-neutral-500">
              Aceito os Termos de Uso
            </Label>
          </div>
          <AlertDialogAction disabled={isTermChecked} onClick={onAccept}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
