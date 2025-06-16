"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.listTransactions = exports.getTransactionById = exports.createTransaction = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createTransaction(data) {
    return prisma.transactions.create({
        data: {
            transactionId: data.transactionId,
            amount: data.amount,
            paymentType: data.paymentType,
            paidById: data.paidById,
            contractId: data.contractId,
            transactionsInfo: data.transactionsInfo,
            status: data.status ?? undefined,
            refundId: data.refundId ?? null
        }
    });
}
exports.createTransaction = createTransaction;
async function getTransactionById(id) {
    return prisma.transactions.findUnique({ where: { id } });
}
exports.getTransactionById = getTransactionById;
async function listTransactions(filter) {
    const whereClause = {};
    if (filter?.status)
        whereClause.status = filter.status;
    if (filter?.paidById)
        whereClause.paidById = filter.paidById;
    return prisma.transactions.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" }
    });
}
exports.listTransactions = listTransactions;
async function updateTransaction(id, updates) {
    return prisma.transactions.update({
        where: { id },
        data: {
            transactionId: updates.transactionId,
            amount: updates.amount,
            paymentType: updates.paymentType,
            transactionsInfo: updates.transactionsInfo,
            status: updates.status,
            refundId: updates.refundId ?? undefined
        }
    });
}
exports.updateTransaction = updateTransaction;
async function deleteTransaction(id) {
    return prisma.transactions.delete({ where: { id } });
}
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=transactions.func.js.map