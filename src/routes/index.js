import express from "express";
import categoryRoutes from "../modules/category/category.route.js";

const router = express.Router();

// 🔥 mount route
router.use("/categories", categoryRoutes);

export default router;