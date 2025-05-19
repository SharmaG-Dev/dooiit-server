export interface Response {
    success: boolean
    error: boolean
    message: string
}

export interface Success extends Response {
    data: Record<string, unknown>
}

export interface Error extends Response {
    errorData: Record<string, unknown>
}

export interface Fail extends Response {
    data: Record<string, unknown> | null | undefined
}