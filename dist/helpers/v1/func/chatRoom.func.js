"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatRooms = exports.getChatRoom = exports.createChatRoom = void 0;
const Client_1 = require("../../../config/Client");
const createChatRoom = async (data) => {
    const _res = await Client_1.client.chatRoom.create({ data });
    return _res;
};
exports.createChatRoom = createChatRoom;
const getChatRoom = async (id) => {
    const _res = await Client_1.client.chatRoom.findUnique({ where: { id }, include: { _count: true, customer: true, Messages: true, provider: true } });
    return _res;
};
exports.getChatRoom = getChatRoom;
const getChatRooms = async () => {
    const _res = await Client_1.client.chatRoom.findMany({ include: { _count: true, customer: true, Messages: true, provider: true } });
    return _res;
};
exports.getChatRooms = getChatRooms;
//# sourceMappingURL=chatRoom.func.js.map