import { api } from "./api"
import { UserCreateSchema, UserCreateResponse, UserLoginSchema, UserLoginResponse } from "@/types/user"

export async function createUser(data: UserCreateSchema): Promise<UserCreateResponse> {
  try {
    const response = await api.post<UserCreateResponse>("/url/create", data)
    return response.data
  } catch (error: any) {
    throw new Error(error?.response?.data?.detail || "Erro desconhecido ao criar URL!")
  }
}

export async function loginUser(data: UserLoginSchema): Promise<UserLoginResponse> {
  try {
    const response = await api.post<UserLoginResponse>("/auth", data)
    return response.data
  } catch (error: any) {
    console.error("🔴 Erro completo:", error?.response?.data || error)
    throw new Error(error?.response?.data?.detail || "Não foi possível efetuar login!")
  }
}