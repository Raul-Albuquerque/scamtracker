import { createUser } from "@/services/auth"
import {  UserCreatePayload } from "@/types/user"


export async function signUp (payload: UserCreatePayload) {
  const { data } = await createUser(payload)
  return data
} 