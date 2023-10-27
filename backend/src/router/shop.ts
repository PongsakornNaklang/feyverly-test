import { Router } from 'express';
import { getShop, getShopById, createShop, updateShop, deleteShop } from '../controller/shop';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get("/shop", authenticateToken, getShop);
router.get("/shop/:id", getShopById);
router.post("/shop", authenticateToken, createShop);
router.put("/shop/:id", authenticateToken, updateShop);
router.delete("/shop/:id", authenticateToken, deleteShop);

export default router;