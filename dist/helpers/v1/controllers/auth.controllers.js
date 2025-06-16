"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleLogin = exports.HandleSignup = exports.isEmailAlreadyExists = void 0;
const response_1 = require("../func/response");
const user_func_1 = require("../func/user.func");
const func_1 = require("../func/func");
const isEmailAlreadyExists = async (req, res) => {
    try {
        const { email } = req.query;
        const _user = await (0, user_func_1.findUser)({ email: email });
        if (_user)
            return (0, response_1.failResponse)(res, 409, { isAvaliable: false }, "Email Already Exists");
        return (0, response_1.successResponse)(res, 200, { isAvaliable: true }, "Email Avaliable");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.isEmailAlreadyExists = isEmailAlreadyExists;
const HandleSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const _userExists = await (0, user_func_1.findUser)({ email });
        if (_userExists)
            return (0, response_1.failResponse)(res, 409, { isAvaliable: false }, "Email Already Exists");
        const _user = await (0, user_func_1.createUser)({ name, email, password });
        return (0, response_1.successResponse)(res, 201, _user, "User Created Successfully");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.HandleSignup = HandleSignup;
const HandleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const _user = await (0, user_func_1.findUser)({ email });
        if (!_user)
            return (0, response_1.failResponse)(res, 404, { isAvaliable: false }, "User Not Found");
        const isValidPassword = (0, func_1.ComparePassword)({ hashPassword: _user.password, password });
        if (!isValidPassword)
            return (0, response_1.failResponse)(res, 401, { isAvaliable: false }, "Invalid Password");
        const token = await (0, func_1.GenerateToken)({ payload: { email: _user.email, name: _user.name, role: _user.role, provider: _user.providerType, iat: Date.now(), exp: Date.now() + 1000 * 60 * 60 * 24 * 30, sub: _user.id } });
        return (0, response_1.successResponse)(res, 200, { token: token }, "Login Successful");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.HandleLogin = HandleLogin;
//# sourceMappingURL=auth.controllers.js.map