import { ServiceRequest } from "@prisma/client"



export interface IServiceRequest extends Partial<ServiceRequest> {
    message: string
    userId: string
    providerId: string
}


export interface IGetServiceRequest {
    requestedById?: string
    requestedToId?: string
}