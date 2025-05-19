import { Request, Response } from "express"
import { errorResponse, failResponse, successResponse } from "../func/response"
import { createUser, findUser } from "../func/user.func"
import { ComparePassword, GenerateToken } from "../func/func"



export const isEmailAlreadyExists = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const _user = await findUser({ email: email as string })
        if (_user) return failResponse(res, 409, { isAvaliable: false }, "Email Already Exists")
        return successResponse(res, 200, { isAvaliable: true }, "Email Avaliable")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}

export const HandleSignup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const _userExists = await findUser({ email })
        if (_userExists) return failResponse(res, 409, { isAvaliable: false }, "Email Already Exists")
        const _user = await createUser({ name, email, password })
        return successResponse(res, 201, _user, "User Created Successfully")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}

export const HandleLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const _user = await findUser({ email })
        if (!_user) return failResponse(res, 404, { isAvaliable: false }, "User Not Found")
        const isValidPassword = ComparePassword({ hashPassword: _user.password, password })
        if (!isValidPassword) return failResponse(res, 401, { isAvaliable: false }, "Invalid Password")
        const token = await GenerateToken({ payload: { email: _user.email, name: _user.name, role: _user.role, provider: _user.providerType, iat: Date.now(), exp: Date.now() + 1000 * 60 * 60 * 24 * 30, sub: _user.id } })
        return successResponse(res, 200, { token: token }, "Login Successful")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}
