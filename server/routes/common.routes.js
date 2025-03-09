import express from 'express'
import router from './owner.auth.routes';
import { login, logout } from '../controllers/common.controller';

const router = express.Router();

router.post('/signin', login)
router.post('/logout', logout)

export default router;