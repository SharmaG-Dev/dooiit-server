import { Contract } from "@prisma/client";

export interface IContract extends Partial<Contract> {
    customerId: string;
    providerId: string;
    contractDetails: string;
    amount: number;
    upload: string;
    deadline: Date;
    paidAmount: number;
    balanceAmount: number;
}


export interface IGetContract {
    [key: string]: any
}