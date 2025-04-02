import { Router } from "express";
import { createVendor } from "../controllers/vendorControllers.js";

const router = Router()
router.post('/vendor', createVendor)

export default router