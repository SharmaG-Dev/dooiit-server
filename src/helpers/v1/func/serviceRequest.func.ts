import { Prisma } from "@prisma/client";
import { client } from "../../../config/Client";
import { IGetServiceRequest, IServiceRequest } from "../../../types/v1/serviceRequest";



export const createServiceRequest = async (data: IServiceRequest) => {
    const serviceRequestInput: Prisma.ServiceRequestCreateInput = {
        message: data.message,
        requestedBy: {
            connect: { id: data.userId }
        },
        requestedTo: {
            connect: { id: data.providerId }
        }
    }
    const _res = await client.serviceRequest.create({ data: serviceRequestInput })
    return _res
}


export const UpdateServiceRequest = async (id: string, data: IServiceRequest) => {
    const _res = await client.serviceRequest.update({ where: { id }, data: data })
    return _res
}


export const getServiceRequests = async (data: IGetServiceRequest) => {
    const _res = await client.serviceRequest.findMany({
        where: { ...data },
        include: {
            requestedBy: true,
            requestedTo: true
        }
    })
    return _res
}

export const getSingleServiceRequest = async (id: string) => {
    const _res = await client.serviceRequest.findFirst({ where: { id } })
    return _res
}