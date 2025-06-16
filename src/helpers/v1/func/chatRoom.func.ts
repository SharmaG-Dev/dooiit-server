import { client } from "../../../config/Client"
import { IChatRoom } from "../../../types/v1/chatRoom"



export const createChatRoom = async (data: IChatRoom) => {
    const _res = await client.chatRoom.create({ data })
    return _res
}

export const getChatRoom = async (id: string) => {
    const _res = await client.chatRoom.findUnique({ where: { id }, include: { _count: true, customer: true, Messages: true, provider: true } })
    return _res

}

export const getChatRooms = async () => {
    const _res = await client.chatRoom.findMany({ include: { _count: true, customer: true, Messages: true, provider: true } })
    return _res
}
