"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateToken = exports.ComparePassword = exports.HashPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const HashPassword = ({ password }) => {
    return crypto_1.default.createHash("md5").update(password).digest("hex");
};
exports.HashPassword = HashPassword;
const ComparePassword = ({ hashPassword, password }) => {
    return hashPassword === crypto_1.default.createHash("md5").update(password).digest('hex');
};
exports.ComparePassword = ComparePassword;
const GenerateToken = ({ payload, expireIn = "30d" }) => {
    return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: expireIn });
};
exports.GenerateToken = GenerateToken;
//# sourceMappingURL=func.js.map