
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { ComparePasswordTypes, GenerateTokenTypes, HashPasswordTypes } from '../../../types/v1/func'



config()



export const HashPassword = ({ password }: HashPasswordTypes) => {
    return crypto.createHash("md5").update(password).digest("hex")
}


export const ComparePassword = ({ hashPassword, password }: ComparePasswordTypes) => {
    return hashPassword === crypto.createHash("md5").update(password).digest('hex')
}


export const GenerateToken = ({ payload, expireIn = "30d" }: GenerateTokenTypes) => {
    return jwt.sign(payload, process.env.SECRET_KEY as string, { expiresIn: expireIn })
}

