import Link from "next/link"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface AlertDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DisclaimerDialog({ open, onOpenChange }: AlertDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Aviso Legal</AlertDialogTitle>
          <AlertDialogDescription>
            Este é um projeto pessoal com fins educativos e de portfólio, criado
            para demonstrar conceitos técnicos e auxiliar no combate aos golpes
            de engenharia social.
          </AlertDialogDescription>
          <AlertDialogDescription>
            <strong className="font-semibold">
              É estritamente proibido utilizar esta ferramenta para aplicar
              golpes
            </strong>
            , extorquir ou induzir terceiros ao erro.{" "}
            <strong className="font-semibold">
              O autor NÃO se responsabiliza
            </strong>{" "}
            por usos indevidos feitos por terceiros.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex sm:justify-between items-center">
          <Link
            href={"/terms"}
            className="text-blue-800 font-semibold hover:text-neutral-600 text-sm"
          >
            Termos de uso
          </Link>
          <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
