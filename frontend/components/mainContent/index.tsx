import { Form } from "../form"
import { CustomDialog } from "../dialog"
import { CustomSideBar } from "../sidebar"
import { Sidebar } from "lucide-react"

export type Props = {
  page: "home" | "dashboard"
}

export function MainContent({ page }: Props) {
  return (
    <main className="container mx-auto px-4 py-6 max-w-2xl flex flex-col items-center justify-start">
      {page === "home" ? (
        <>
          <Form />
          <CustomDialog />
        </>
      ) : (
        <>
          <CustomSideBar />
        </>
      )}
    </main>
  )
}
