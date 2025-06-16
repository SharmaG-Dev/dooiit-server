import { Prisma } from "@prisma/client";
import { client } from "../../../config/Client";
import { IQueries } from "../../../types/v1/queries";



export const createQueries = async (data: IQueries) => {
    const _queriesInput: Prisma.QueriesCreateInput = {
        message: data.message,
        queriedBy: {
            connect: {
                id: data.queriedById
            }
        },
        contract: {
            connect: {
                id: data.contractId
            }
        }
    }
    const _res = await client.queries.create({ data: _queriesInput })
    return _res
}


export const UpdateQuery = async (id: string, data: IQueries) => {
    const _res = await client.queries.update({ where: { id }, data: data })
    return _res
}

export const getQueries = async () => {
    const _res = await client.queries.findMany({ include: { contract: true, queriedBy: true } })
    return _res
}

export const getSingleQuery = async (id: string) => {
    const _res = await client.queries.findFirst({ where: { id }, include: { contract: true, queriedBy: true } })
    return _res
}


export const getQuerisByContract = async (contractId: string) => {
    const _res = await client.queries.findMany({ where: { contractId }, include: { contract: true, queriedBy: true } })
    return _res
}

export const deleteQuery = async (id: string) => {
    const _res = await client.queries.delete({ where: { id } })
    return _res
}