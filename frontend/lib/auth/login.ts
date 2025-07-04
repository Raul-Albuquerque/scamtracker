
import { loginUser } from "@/services/auth"
import { saveTokenOnCookies } from "@/actions/cookies"
import { UserLoginSchema } from "@/types/user"

export async function login (payload: UserLoginSchema) {
  const {access_token} = await loginUser(payload)
  await saveTokenOnCookies(access_token)
}