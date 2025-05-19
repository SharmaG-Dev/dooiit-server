import { Prisma, Providers, Role, User } from "@prisma/client";
import { client } from "../../../config/Client";
import { HashPassword } from "./func";



export const createUser = async (data: Partial<User>) => {
    const hashPass = HashPassword({ password: data.password })

    const userInput: Prisma.UserCreateInput = {
        email: data.email,
        name: data.name,
        password: hashPass,
        role: data.role as Role,
        providerId: data?.providerId,
        providerType: data?.providerType as Providers,
    }

    const res = await client.user.create({ data: userInput })

    return res
}


export const UpdateUser = async (id: string, data: Partial<User>) => {
    const res = await client.user.update({
        where: {
            id: id
        },
        data: data
    })
    return res
}

export const getUser = async (id: string) => {
    const res = await client.user.findUnique({
        where: {
            id: id
        }
    })
    return res
}

export const getUsers = async () => {
    const res = await client.user.findMany()
    return res
}

export const findUser = async (data: { [key: string]: string }) => {
    const res = await client.user.findFirst({
        where: data
    })
    return res
}

export const deleteUser = async (id: string) => {
    const res = await client.user.delete({
        where: {
            id: id
        }
    })
    return res
}