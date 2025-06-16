"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuery = exports.getQuerisByContract = exports.getSingleQuery = exports.getQueries = exports.UpdateQuery = exports.createQueries = void 0;
const Client_1 = require("../../../config/Client");
const createQueries = async (data) => {
    const _queriesInput = {
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
    };
    const _res = await Client_1.client.queries.create({ data: _queriesInput });
    return _res;
};
exports.createQueries = createQueries;
const UpdateQuery = async (id, data) => {
    const _res = await Client_1.client.queries.update({ where: { id }, data: data });
    return _res;
};
exports.UpdateQuery = UpdateQuery;
const getQueries = async () => {
    const _res = await Client_1.client.queries.findMany({ include: { contract: true, queriedBy: true } });
    return _res;
};
exports.getQueries = getQueries;
const getSingleQuery = async (id) => {
    const _res = await Client_1.client.queries.findFirst({ where: { id }, include: { contract: true, queriedBy: true } });
    return _res;
};
exports.getSingleQuery = getSingleQuery;
const getQuerisByContract = async (contractId) => {
    const _res = await Client_1.client.queries.findMany({ where: { contractId }, include: { contract: true, queriedBy: true } });
    return _res;
};
exports.getQuerisByContract = getQuerisByContract;
const deleteQuery = async (id) => {
    const _res = await Client_1.client.queries.delete({ where: { id } });
    return _res;
};
exports.deleteQuery = deleteQuery;
//# sourceMappingURL=queries.func.js.map