"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContract = exports.UpdateContract = exports.getSingleContract = exports.getContract = exports.createContract = void 0;
const Client_1 = require("../../../config/Client");
const createContract = async (data) => {
    const _contractInput = {
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
    };
    const _res = await Client_1.client.contract.create({ data: _contractInput, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } });
    return _res;
};
exports.createContract = createContract;
const getContract = async (data) => {
    const _res = await Client_1.client.contract.findMany({ where: data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } });
    return _res;
};
exports.getContract = getContract;
const getSingleContract = async (data) => {
    const _res = await Client_1.client.contract.findFirst({ where: data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } });
    return _res;
};
exports.getSingleContract = getSingleContract;
const UpdateContract = async (id, data) => {
    const _res = await Client_1.client.contract.update({ where: { id }, data, include: { _count: true, customer: true, provider: true, Queries: true, Transactions: true } });
    return _res;
};
exports.UpdateContract = UpdateContract;
const deleteContract = async (id) => {
    const _res = await Client_1.client.contract.delete({ where: { id } });
    return _res;
};
exports.deleteContract = deleteContract;
//# sourceMappingURL=contract.func.js.map