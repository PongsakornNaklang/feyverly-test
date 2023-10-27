import { Router } from "express";
import { createBanner, deleteBanner, getBanner, getBannerById, updateBanner } from "../controller/banner";

const router = Router();

router.get("/banner", getBanner);
router.get("/banner/:id", getBannerById);
router.post("/banner", createBanner);
router.put("/banner/:id", updateBanner);
router.delete("/banner/:id", deleteBanner);

export default router;