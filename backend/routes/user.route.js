import express from 'express'
import { adminLogin, loginUser, logout, registerUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',logout)
router.post('/admin',adminLogin)

export default router