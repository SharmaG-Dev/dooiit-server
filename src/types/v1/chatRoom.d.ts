import { ChatRoom } from "@prisma/client";



export interface IChatRoom extends Partial<ChatRoom> {
    customerId: string
    providerId: string
}