import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormProps = {
  onSubmitSuccess: () => void
}

export function Form({ onSubmitSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitSuccess()
  }

  return (
    <form
      className="flex flex-col max-w-lg items-center justify-start gap-3 py-4 w-100"
      onSubmit={handleSubmit}
    >
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="email" className="text-base">
          Username:
        </Label>
        <Input
          type="email"
          id="username"
          placeholder="Digite seu username"
          className="border border-neutral-400 bg-neutral-100"
        />
      </div>
      <Button
        type="submit"
        className="bg-linear-to-r from-amber-600 to-violet-800 hover:bg-linear-to-l font-semibold text-base p-6"
      >
        Gerar Token
      </Button>
    </form>
  )
}
