"use server"

import { cookies } from "next/headers"
import { TOKEN_KEY } from "@/middleware"

export async function saveTokenOnCookies(token: string) {
  const cookieStore = await cookies()
  cookieStore.set({
    name: TOKEN_KEY,
    value: token,
    httpOnly: true,
    path: "/"
  })
}

export async function deleteTokenOnCookies() {
  const cookiesData = await cookies()
  cookiesData.delete(TOKEN_KEY)
}

export async function checkTokenOnCookies() {
  const cookiesData = await cookies()
  const token = cookiesData.get(TOKEN_KEY)
  return Boolean(token?.value)
}

// export async function getUserFromToken