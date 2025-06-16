"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failResponse = exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, statusCode = 200, data, message = '') => {
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    const response = {
        success: true,
        error: false,
        data: data,
        message: message,
    };
    res.status(statusCode).json(response);
};
exports.successResponse = successResponse;
const errorResponse = (res, statusCode = 500, data, message = 'Server error!') => {
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    const errorRes = {
        success: false,
        error: true,
        errorData: data,
        message: message,
    };
    res.status(statusCode).json(errorRes);
};
exports.errorResponse = errorResponse;
const failResponse = (res, statusCode = 400, data, message) => {
    if (process.env.NODE_ENV === 'development')
        console.log(data);
    const failRes = {
        success: false,
        error: false,
        data: data,
        message: message,
    };
    res.status(statusCode).json(failRes);
};
exports.failResponse = failResponse;
//# sourceMappingURL=response.js.map