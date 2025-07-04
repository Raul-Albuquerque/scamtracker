import { NextRequest, NextResponse } from "next/server"

export const TOKEN_KEY = "token"

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN_KEY)
  const protectedRoutes = ["/dashboard"]
  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname)

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
