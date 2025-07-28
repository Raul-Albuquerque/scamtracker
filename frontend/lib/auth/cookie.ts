export const TOKEN_KEY = "token"

export const cookieTokenOptions = {
  name: TOKEN_KEY,
  path: "/",
  httpOnly: true,
}

export function clearTokenCookie() {
  return {
    ...cookieTokenOptions,
    value: "",
    expires: new Date(0),
  }
}
