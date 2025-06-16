import { Profile } from "@prisma/client";



export interface IProfile extends Partial<Profile> {
    userId: string
}