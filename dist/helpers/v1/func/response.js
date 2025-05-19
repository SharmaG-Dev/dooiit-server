"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failResponse = exports.errorResponse = exports.successResponse = void 0;
var successResponse = function (res, statusCode, data, message) {
    if (statusCode === void 0) { statusCode = 200; }
    if (message === void 0) { message = ''; }
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    var response = {
        success: true,
        error: false,
        data: data,
        message: message,
    };
    res.status(statusCode).json(response);
};
exports.successResponse = successResponse;
var errorResponse = function (res, statusCode, data, message) {
    if (statusCode === void 0) { statusCode = 500; }
    if (message === void 0) { message = 'Server error!'; }
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    var errorRes = {
        success: false,
        error: true,
        errorData: data,
        message: message,
    };
    res.status(statusCode).json(errorRes);
};
exports.errorResponse = errorResponse;
var failResponse = function (res, statusCode, data, message) {
    if (statusCode === void 0) { statusCode = 400; }
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    var failRes = {
        success: false,
        error: false,
        data: data,
        message: message,
    };
    res.status(statusCode).json(failRes);
};
exports.failResponse = failResponse;
//# sourceMappingURL=response.js.map