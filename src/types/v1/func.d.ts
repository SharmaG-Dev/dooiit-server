

export interface HashPasswordTypes {
    password: string
}

export interface ComparePasswordTypes {
    hashPassword: string
    password: string
}

export interface TokenPayload {
    sub: string,
    email: string,
    name: string,
    provider?: string,
    role?: string,
    iat: number,
    exp: number
}

export interface GenerateTokenTypes {
    payload: TokenPayload
    expireIn?: any
}