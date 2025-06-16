"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRefund = exports.updateRefund = exports.listRefunds = exports.getRefundById = exports.createRefund = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createRefund(data) {
    const connectArray = data.refundedTransactions
        ? data.refundedTransactions.map((txId) => ({ id: txId }))
        : undefined;
    return prisma.refunds.create({
        data: {
            transactionId: data.transactionId,
            amount: data.amount,
            refundedTransactions: connectArray ? { connect: connectArray } : undefined,
            transactionsInfo: data.transactionsInfo,
            status: data.status ?? undefined,
            refundedToId: data.refundedToId
        }
    });
}
exports.createRefund = createRefund;
async function getRefundById(id) {
    return prisma.refunds.findUnique({ where: { id } });
}
exports.getRefundById = getRefundById;
async function listRefunds(filter) {
    const whereClause = {};
    if (filter?.status)
        whereClause.status = filter.status;
    if (filter?.refundedToId)
        whereClause.refundedToId = filter.refundedToId;
    return prisma.refunds.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" }
    });
}
exports.listRefunds = listRefunds;
async function updateRefund(id, updates) {
    const setArray = updates.refundedTransactions
        ? updates.refundedTransactions.map((txId) => ({ id: txId }))
        : undefined;
    return prisma.refunds.update({
        where: { id },
        data: {
            transactionId: updates.transactionId,
            amount: updates.amount,
            refundedTransactions: setArray ? { set: setArray } : undefined,
            transactionsInfo: updates.transactionsInfo,
            status: updates.status
        }
    });
}
exports.updateRefund = updateRefund;
async function deleteRefund(id) {
    return prisma.refunds.delete({ where: { id } });
}
exports.deleteRefund = deleteRefund;
//# sourceMappingURL=refunds.func.js.map