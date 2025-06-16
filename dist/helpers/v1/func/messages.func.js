"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.createMessage = void 0;
const Client_1 = require("../../../config/Client");
const createMessage = async (data) => {
    const _res = await Client_1.client.messages.create({ data });
    return _res;
};
exports.createMessage = createMessage;
const getMessages = async (chatId) => {
    const _res = await Client_1.client.messages.findMany({ where: { chatId }, include: { chat: true, sendedBy: true } });
    return _res;
};
exports.getMessages = getMessages;
//# sourceMappingURL=messages.func.js.map