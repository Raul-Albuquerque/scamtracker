export interface UserCreateSchema {
  username: string
}

export interface UserLoginSchema extends UserCreateSchema {
  token: string
}

export interface UserLoginResponse {
  access_token: string
  token_type: string
}

export interface UserSchema {
  id: number,
  username: string,
  token: string,
  shortened_url: string,
  original_url: string,
  creation_date: number,
  expiration_date: number
}

export interface UserCreateResponse {
  data: UserSchema
  message: string
}

