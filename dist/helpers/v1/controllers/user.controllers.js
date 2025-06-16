"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetUser = exports.handleUpdateUser = exports.handleCreateUser = void 0;
const response_1 = require("../func/response");
const user_func_1 = require("../func/user.func");
const handleCreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const _userExists = await (0, user_func_1.findUser)({ email });
        if (_userExists)
            return (0, response_1.failResponse)(res, 409, null, "Email Already Exists");
        const _createUser = await (0, user_func_1.createUser)({ name, email, password });
        return (0, response_1.successResponse)(res, 201, _createUser, "User Created Successfully");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.handleCreateUser = handleCreateUser;
const handleUpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const _updateUser = await (0, user_func_1.UpdateUser)(id, data);
        return (0, response_1.successResponse)(res, 200, _updateUser, "User Updated Successfully");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.handleUpdateUser = handleUpdateUser;
const handleGetUser = async (req, res) => {
    try {
        const id = req.params.id;
        const _user = await (0, user_func_1.findUser)({ id });
        if (!_user)
            return (0, response_1.failResponse)(res, 404, null, "User Not Found");
    }
    catch (error) {
        return (0, response_1.errorResponse)(res, 500, error, error.message);
    }
};
exports.handleGetUser = handleGetUser;
//# sourceMappingURL=user.controllers.js.map