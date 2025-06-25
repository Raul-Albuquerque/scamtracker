import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormProps = {
  onSubmitSuccess: () => void
}

export function Form({ onSubmitSuccess }: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmitSuccess()
  }

  return (
    <form className="flex flex-col max-w-lg items-center justify-start gap-4 px-4 py-4 w-100" onSubmit={handleSubmit}>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="email">Username:</Label>
        <Input type="email" id="username" placeholder="Digite seu username" className="border border-neutral-400" />
      </div>
      <Button type="submit">Gerar token</Button>
    </form>
  )
}
