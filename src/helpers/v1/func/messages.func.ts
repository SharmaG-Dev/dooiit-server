import { client } from "../../../config/Client";
import { IMessages } from "../../../types/v1/messages";



export const createMessage = async (data: IMessages) => {
    const _res = await client.messages.create({ data })
    return _res
}

export const getMessages = async (chatId: string) => {
    const _res = await client.messages.findMany({ where: { chatId }, include: { chat: true, sendedBy: true } })
    return _res
}


