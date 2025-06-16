"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleServiceRequest = exports.getServiceRequests = exports.UpdateServiceRequest = exports.createServiceRequest = void 0;
const Client_1 = require("../../../config/Client");
const createServiceRequest = async (data) => {
    const serviceRequestInput = {
        message: data.message,
        requestedBy: {
            connect: { id: data.userId }
        },
        requestedTo: {
            connect: { id: data.providerId }
        }
    };
    const _res = await Client_1.client.serviceRequest.create({ data: serviceRequestInput });
    return _res;
};
exports.createServiceRequest = createServiceRequest;
const UpdateServiceRequest = async (id, data) => {
    const _res = await Client_1.client.serviceRequest.update({ where: { id }, data: data });
    return _res;
};
exports.UpdateServiceRequest = UpdateServiceRequest;
const getServiceRequests = async (data) => {
    const _res = await Client_1.client.serviceRequest.findMany({
        where: { ...data },
        include: {
            requestedBy: true,
            requestedTo: true
        }
    });
    return _res;
};
exports.getServiceRequests = getServiceRequests;
const getSingleServiceRequest = async (id) => {
    const _res = await Client_1.client.serviceRequest.findFirst({ where: { id } });
    return _res;
};
exports.getSingleServiceRequest = getSingleServiceRequest;
//# sourceMappingURL=serviceRequest.func.js.map