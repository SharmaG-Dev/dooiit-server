import { Queries } from "@prisma/client";



export interface IQueries extends Partial<Queries> {
    message: string
    contractId:string
    queriedById:string
}