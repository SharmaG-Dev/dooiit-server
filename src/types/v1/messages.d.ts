import { Messages } from "@prisma/client";



export interface IMessages extends Partial<Messages> {
    sendedById: string
    isAdmin?: boolean
    message: string
    chatId: string
}