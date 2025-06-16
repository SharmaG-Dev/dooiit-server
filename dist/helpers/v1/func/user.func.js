"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.findUser = exports.getUsers = exports.getUser = exports.UpdateUser = exports.createUser = void 0;
const Client_1 = require("../../../config/Client");
const func_1 = require("./func");
const createUser = async (data) => {
    const hashPass = (0, func_1.HashPassword)({ password: data.password });
    const userInput = {
        email: data.email,
        name: data.name,
        password: hashPass,
        role: data.role,
        providerId: data?.providerId,
        providerType: data?.providerType,
    };
    const res = await Client_1.client.user.create({ data: userInput });
    return res;
};
exports.createUser = createUser;
const UpdateUser = async (id, data) => {
    const res = await Client_1.client.user.update({
        where: {
            id: id
        },
        data: data
    });
    return res;
};
exports.UpdateUser = UpdateUser;
const getUser = async (id) => {
    const res = await Client_1.client.user.findUnique({
        where: {
            id: id
        }
    });
    return res;
};
exports.getUser = getUser;
const getUsers = async () => {
    const res = await Client_1.client.user.findMany();
    return res;
};
exports.getUsers = getUsers;
const findUser = async (data) => {
    const res = await Client_1.client.user.findFirst({
        where: data
    });
    return res;
};
exports.findUser = findUser;
const deleteUser = async (id) => {
    const res = await Client_1.client.user.delete({
        where: {
            id: id
        }
    });
    return res;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.func.js.map