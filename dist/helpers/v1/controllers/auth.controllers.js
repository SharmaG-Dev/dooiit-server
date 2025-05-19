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
exports.HandleLogin = exports.HandleSignup = exports.isEmailAlreadyExists = void 0;
var response_1 = require("../func/response");
var user_func_1 = require("../func/user.func");
var func_1 = require("../func/func");
var isEmailAlreadyExists = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, _user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                return [4 /*yield*/, (0, user_func_1.findUser)({ email: email })];
            case 1:
                _user = _a.sent();
                if (_user)
                    return [2 /*return*/, (0, response_1.failResponse)(res, 409, { isAvaliable: false }, "Email Already Exists")];
                return [2 /*return*/, (0, response_1.successResponse)(res, 200, { isAvaliable: true }, "Email Avaliable")];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, (0, response_1.errorResponse)(res, 500, error_1, error_1.message)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.isEmailAlreadyExists = isEmailAlreadyExists;
var HandleSignup = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, _userExists, _user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                return [4 /*yield*/, (0, user_func_1.findUser)({ email: email })];
            case 1:
                _userExists = _b.sent();
                if (_userExists)
                    return [2 /*return*/, (0, response_1.failResponse)(res, 409, { isAvaliable: false }, "Email Already Exists")];
                return [4 /*yield*/, (0, user_func_1.createUser)({ name: name_1, email: email, password: password })];
            case 2:
                _user = _b.sent();
                return [2 /*return*/, (0, response_1.successResponse)(res, 201, _user, "User Created Successfully")];
            case 3:
                error_2 = _b.sent();
                return [2 /*return*/, (0, response_1.errorResponse)(res, 500, error_2, error_2.message)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.HandleSignup = HandleSignup;
var HandleLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, _user, isValidPassword, token, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, (0, user_func_1.findUser)({ email: email })];
            case 1:
                _user = _b.sent();
                if (!_user)
                    return [2 /*return*/, (0, response_1.failResponse)(res, 404, { isAvaliable: false }, "User Not Found")];
                isValidPassword = (0, func_1.ComparePassword)({ hashPassword: _user.password, password: password });
                if (!isValidPassword)
                    return [2 /*return*/, (0, response_1.failResponse)(res, 401, { isAvaliable: false }, "Invalid Password")];
                return [4 /*yield*/, (0, func_1.GenerateToken)({ payload: { email: _user.email, name: _user.name, role: _user.role, provider: _user.providerType, iat: Date.now(), exp: Date.now() + 1000 * 60 * 60 * 24 * 30, sub: _user.id } })];
            case 2:
                token = _b.sent();
                return [2 /*return*/, (0, response_1.successResponse)(res, 200, { token: token }, "Login Successful")];
            case 3:
                error_3 = _b.sent();
                return [2 /*return*/, (0, response_1.errorResponse)(res, 500, error_3, error_3.message)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.HandleLogin = HandleLogin;
//# sourceMappingURL=auth.controllers.js.map