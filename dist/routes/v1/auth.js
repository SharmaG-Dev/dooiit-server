"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../../helpers/v1/controllers/auth.controllers");
const router = express_1.default.Router();
router.route('/').get(auth_controllers_1.isEmailAlreadyExists);
router.route('/signup').post(auth_controllers_1.HandleSignup);
router.route('/login').post(auth_controllers_1.HandleLogin);
exports.default = router;
//# sourceMappingURL=auth.js.map