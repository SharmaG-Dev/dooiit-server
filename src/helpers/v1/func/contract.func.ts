import { Prisma } from "@prisma/client";
import { IContract, IGetContract } from "../../../types/v1/contract";
import { client } from "../../../config/Client";



export const createContract = async (data: IContract) => {
    const _contractInput: Prisma.ContractCreateInput = {
        customer: {
            connect: { id: data.customerId }
        },
        provider: {
            connect: { id: data.providerId }
        },
        contractDetails: data.contractDetails,
        amount: data.amount,
        upload: data.upload,
        deadline: data.deadline,
        paidAmount: data.paidAmount,
        balanceAmount: data.balanceAmount
    }
    const _res = await client.contract.create({ data: _contractInput, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } })
    return _res
}


export const getContract = async (data: IGetContract) => {
    const _res = await client.contract.findMany({ where: data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } })
    return _res

}

export const getSingleContract = async (data: IGetContract) => {
    const _res = await client.contract.findFirst({ where: data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } })
    return _res
}



export const UpdateContract = async (id: string, data: IContract) => {
    const _res = await client.contract.update({ where: { id }, data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } })
    return _res
}

export const deleteContract = async (id: string) => {
    const _res = await client.contract.delete({ where: { id } })
    return _res
}