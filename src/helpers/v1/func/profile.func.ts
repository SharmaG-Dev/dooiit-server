import { client } from "../../../config/Client";
import { IProfile } from "../../../types/v1/profile";



export const createProfile = async (data: IProfile) => {
    const _profile = await client.profile.create({
        data: {
            user: {
                connect: { id: data.userId }
            }
        }
    })
    return _profile
}

export const UpdateProfile = async (id: string, data: IProfile) => {
    const _res = await client.profile.update({
        where: {
            id: id
        },
        data: data
    })
    return _res
}

export const getProfile = async (id: string) => {
    const _res = await client.profile.findUnique({
        where: {
            id: id
        }
    })
    return _res
}


export const getProfiles = async () => {
    const _res = await client.profile.findMany()
    return _res
}