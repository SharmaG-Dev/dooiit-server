"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRefund = exports.updateRefund = exports.listRefunds = exports.getRefundById = exports.createRefund = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function createRefund(data) {
    return __awaiter(this, void 0, void 0, function () {
        var connectArray;
        var _a;
        return __generator(this, function (_b) {
            connectArray = data.refundedTransactions
                ? data.refundedTransactions.map(function (txId) { return ({ id: txId }); })
                : undefined;
            return [2 /*return*/, prisma.refunds.create({
                    data: {
                        transactionId: data.transactionId,
                        amount: data.amount,
                        refundedTransactions: connectArray ? { connect: connectArray } : undefined,
                        transactionsInfo: data.transactionsInfo,
                        status: (_a = data.status) !== null && _a !== void 0 ? _a : undefined,
                        refundedToId: data.refundedToId
                    }
                })];
        });
    });
}
exports.createRefund = createRefund;
function getRefundById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, prisma.refunds.findUnique({ where: { id: id } })];
        });
    });
}
exports.getRefundById = getRefundById;
function listRefunds(filter) {
    return __awaiter(this, void 0, void 0, function () {
        var whereClause;
        return __generator(this, function (_a) {
            whereClause = {};
            if (filter === null || filter === void 0 ? void 0 : filter.status)
                whereClause.status = filter.status;
            if (filter === null || filter === void 0 ? void 0 : filter.refundedToId)
                whereClause.refundedToId = filter.refundedToId;
            return [2 /*return*/, prisma.refunds.findMany({
                    where: whereClause,
                    orderBy: { createdAt: "desc" }
                })];
        });
    });
}
exports.listRefunds = listRefunds;
function updateRefund(id, updates) {
    return __awaiter(this, void 0, void 0, function () {
        var setArray;
        return __generator(this, function (_a) {
            setArray = updates.refundedTransactions
                ? updates.refundedTransactions.map(function (txId) { return ({ id: txId }); })
                : undefined;
            return [2 /*return*/, prisma.refunds.update({
                    where: { id: id },
                    data: {
                        transactionId: updates.transactionId,
                        amount: updates.amount,
                        refundedTransactions: setArray ? { set: setArray } : undefined,
                        transactionsInfo: updates.transactionsInfo,
                        status: updates.status
                    }
                })];
        });
    });
}
exports.updateRefund = updateRefund;
function deleteRefund(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, prisma.refunds.delete({ where: { id: id } })];
        });
    });
}
exports.deleteRefund = deleteRefund;
//# sourceMappingURL=refunds.func.js.map