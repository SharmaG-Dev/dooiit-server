
import express from 'express'
import { HandleLogin, HandleSignup, isEmailAlreadyExists } from '../../helpers/v1/controllers/auth.controllers'


const router = express.Router()

router.route('/').get(isEmailAlreadyExists)
router.route('/signup').post(HandleSignup)
router.route('/login').post(HandleLogin)


export default router