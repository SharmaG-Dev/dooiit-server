"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const client_1 = require("@prisma/client");
exports.client = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});
//# sourceMappingURL=Client.js.map