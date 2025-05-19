import { Response } from 'express'
import { Error, Fail, Success } from '../../../types/v1/response'


export const successResponse = (
    res: Response,
    statusCode = 200,
    data: Record<string, unknown>,
    message = ''
): void => {
    if (process.env.NODE_ENV === 'development') console.log(data)

    const response: Success = {
        success: true,
        error: false,
        data: data,
        message: message,
    }

    res.status(statusCode).json(response)
}

export const errorResponse = (
    res: Response,
    statusCode = 500,
    data: Record<string, unknown>,
    message = 'Server error!'
): void => {
    if (process.env.NODE_ENV === 'development') console.log(data)

    const errorRes: Error = {
        success: false,
        error: true,
        errorData: data,
        message: message,
    }
    res.status(statusCode).json(errorRes)
}

export const failResponse = (
    res: Response,
    statusCode = 400,
    data: Record<string, unknown> | null | undefined,
    message: string
): void => {
    if (process.env.NODE_ENV === 'development') console.log(data)

    const failRes: Fail = {
        success: false,
        error: false,
        data: data,
        message: message,
    }

    res.status(statusCode).json(failRes)
}