import { deleteTokenOnCookies } from "@/actions/cookies"

export async function logout (){
  const logout = await deleteTokenOnCookies()
}