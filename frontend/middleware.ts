import { jwtVerify } from "jose"
import { NextRequest, NextResponse } from "next/server"
import { deleteTokenOnCookies } from "./actions/cookies"

const SECRET = new TextEncoder().encode(process.env.NEXT_PUBLIC_AUTH_SECRET_KEY!)
export const TOKEN_KEY = "token"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY)
  const protectedRoutes = ["/dashboard"]
  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname)

  if (isProtectedRoute && !token  || !token?.value) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  try {
    await jwtVerify(token.value, SECRET)
    return NextResponse.next()

  } catch (err) {
    console.error("Token inválido:", err)
    deleteTokenOnCookies()
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
