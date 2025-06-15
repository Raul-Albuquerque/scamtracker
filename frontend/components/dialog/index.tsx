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

export const CustomDialog = () => {

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Gerar Token</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Registro</DialogTitle>
            <DialogDescription>
              Seu username foi registrado com sucesso!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <div className="w-100 grid flex-1 gap-2 mt-3">
              <Label htmlFor="token" className="">
                Seu Token:
              </Label>
              <Input
                id="token"
                defaultValue="jasjdakdh728"
                readOnly
              />
            </div>
            <div className="w-100 grid flex-1 gap-2 mt-3">
              <Label htmlFor="token" className="">
                Sua URL:
              </Label>
              <Input
                id="token"
                defaultValue="https://dominio.com/content?target=jasjdakdh728"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}