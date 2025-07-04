"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, {
      message: "Seu username precisa ter entre 3 e 20 caracteres.",
    })
    .max(20, {
      message: "Seu username precisa ter entre 3 e 20 caracteres.",
    }),
})

type FormProps = {
  onSubmitSuccess: (username: string) => void
}

export function SignUpForm({ onSubmitSuccess }: FormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    onSubmitSuccess(values.username)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="grid w-full max-w-sm items-center gap-2">
              <FormLabel className="text-base">Username:</FormLabel>
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
        <Button
          type="submit"
          className="bg-linear-to-r from-amber-600 to-violet-800 hover:bg-linear-to-l font-semibold text-base p-6"
        >
          Gerar Token
        </Button>
      </form>
    </Form>
  )
}
