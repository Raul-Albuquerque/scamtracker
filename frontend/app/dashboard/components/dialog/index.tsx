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
import Image from "next/image"
import { GoogleMaps } from "../map"
import { Separator } from "@/components/ui/separator"


interface ItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DashboardDialog({ open, onOpenChange }: ItemDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Detalhes</DialogTitle>
          <DialogDescription>
            IP: <span>192.168.1.19</span>
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2 text-sm">
            <h5 className="font-semibold text-neutral-700 mb-1">Dispositivo</h5>
            <div className="grid grid-cols-2 justify-start gap-2">
              <h6 className="text-neutral-500">Sistema Operacional:</h6>
              <span className="text-neutral-600 font-medium">Android 12</span>
            </div>
            <div className="grid grid-cols-2 justify-start gap-2 ">
              <h6 className="text-neutral-500">Navegador:</h6>
              <span className="text-neutral-600 font-medium">Opera Mobile</span>
            </div>
            <div className="grid grid-cols-2 justify-start gap-2">
              <h6 className="text-neutral-500">Fabricante:</h6>
              <span className="text-neutral-600 font-medium">Apple</span>
            </div>
            <div className="grid grid-cols-2 justify-start gap-2">
              <h6 className="text-neutral-500">Tipo:</h6>
              <span className="text-neutral-600 font-medium">Desktop</span>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2 text-sm">
            <h5 className="font-semibold text-neutral-700 mb-1">Localização</h5>
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-start justify-start gap-2">
                <h6 className="text-neutral-500">Cidade:</h6>
                <span className="text-neutral-600 font-medium">Mumbai</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h6 className="text-neutral-500">Estado:</h6>
                <span className="text-neutral-600 font-medium">MH</span>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h6 className="text-neutral-500">País:</h6>
                <div className="flex gap-1 items-center text-neutral-600 font-medium">
                  <span>🇮🇳</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4 text-sm">
          <h5 className="font-semibold text-neutral-700 mb-1">Google Maps</h5>
          <GoogleMaps lat={19.0760} lng={72.8777} />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}