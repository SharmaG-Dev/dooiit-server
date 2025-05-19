"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateToken = exports.ComparePassword = exports.HashPassword = void 0;
var crypto_1 = __importDefault(require("crypto"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var HashPassword = function (_a) {
    var password = _a.password;
    return crypto_1.default.createHash("md5").update(password).digest("hex");
};
exports.HashPassword = HashPassword;
var ComparePassword = function (_a) {
    var hashPassword = _a.hashPassword, password = _a.password;
    return hashPassword === crypto_1.default.createHash("md5").update(password).digest('hex');
};
exports.ComparePassword = ComparePassword;
var GenerateToken = function (_a) {
    var payload = _a.payload, _b = _a.expireIn, expireIn = _b === void 0 ? "30d" : _b;
    return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: expireIn });
};
exports.GenerateToken = GenerateToken;
//# sourceMappingURL=func.js.map