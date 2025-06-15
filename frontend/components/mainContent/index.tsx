import { Form } from "../form"
import { CustomDialog } from "../dialog"

export function MainContent() {
  return (
    <main className="container mx-auto px-4 py-6 max-w-2xl flex flex-col items-center justify-start">
      <Form />
      <CustomDialog />
    </main>
  )
}
