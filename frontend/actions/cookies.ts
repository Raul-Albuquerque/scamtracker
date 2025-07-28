"use server"

import { cookies } from "next/headers"
import { cookieTokenOptions, clearTokenCookie } from "@/lib/auth/cookie"

export async function saveTokenOnCookies(token: string) {
  const cookieStore = await cookies()
  cookieStore.set({
    ...cookieTokenOptions,
    value: token,
  })
}

export async function deleteTokenOnCookies() {
  const cookieStore = await cookies()
  cookieStore.set(clearTokenCookie())
}

export async function checkTokenOnCookies() {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieTokenOptions.name)
  return Boolean(token?.value)
}
