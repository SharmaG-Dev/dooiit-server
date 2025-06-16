import { Request, Response } from "express";
import { errorResponse, failResponse, successResponse } from "../func/response";
import { createUser, findUser, UpdateUser } from "../func/user.func";


export const handleCreateUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body
        const _userExists = await findUser({ email })
        if (_userExists) return failResponse(res, 409, null, "Email Already Exists")
        const _createUser = await createUser({ name, email, password })
        return successResponse(res, 201, _createUser, "User Created Successfully")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}

export const handleUpdateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const data = req.body
        const _updateUser = await UpdateUser(id, data)
        return successResponse(res, 200, _updateUser, "User Updated Successfully")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}

export const handleGetUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const _user = await findUser({ id })
        if (!_user) return failResponse(res, 404, null, "User Not Found")
    } catch (error: any) {
        return errorResponse(res, 500, error, error.message)
    }
}
