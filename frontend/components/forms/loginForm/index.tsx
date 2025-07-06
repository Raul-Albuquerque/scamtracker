"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login } from "@/lib/auth/login"

const loginFormSchema = z.object({
  loginUsername: z
    .string()
    .trim()
    .min(3, {
      message: "Seu username precisa ter entre 3 e 20 caracteres.",
    })
    .max(20, {
      message: "Seu username precisa ter entre 3 e 20 caracteres.",
    }),
  loginUserToken: z.string().trim(),
})
// interface FormDialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

export function LoginForm() {
  const [showToken, setShowToken] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      loginUsername: "",
      loginUserToken: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      await login({
        username: values.loginUsername,
        token: values.loginUserToken,
      })
      router.push("/dashboard")
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro inesperado"
      console.error(errorMessage)

      form.setError("loginUserToken", {
        type: "manual",
        message: "Usuário ou token inválido",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id="login-form"
        className="space-y-6 mt-2"
      >
        <FormField
          control={form.control}
          name="loginUsername"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center gap-2">
              <FormLabel className="text-sm">Username:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu username"
                  className="border border-neutral-400 bg-neutral-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="loginUserToken"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center gap-2">
              <FormLabel className="text-sm">Token de Acesso:</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Digite seu token"
                    type={showToken ? "text" : "password"}
                    className="border border-neutral-400 bg-neutral-100"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => setShowToken(!showToken)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 cursor-pointer"
                    aria-label={showToken ? "Esconder token" : "Mostrar token"}
                  >
                    {showToken ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
