
import { Router } from 'express';
import * as userController from '../controller/user';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/users', authenticateToken, userController.getUsers);
router.put('/users/:id', authenticateToken, userController.updateUser);
router.delete('/users/:id', authenticateToken, userController.deleteUser);

export default router;