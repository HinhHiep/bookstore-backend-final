import express from "express";
import categoryRoutes from "../modules/category/category.route.js";
import bookRoutes from "../modules/book/book.route.js";
import promotionRoutes from "../modules/promotion/promotion.route.js";
import reviewRoutes from "../modules/review/review.route.js";

const router = express.Router();

// 🔥 mount route
router.use("/categories", categoryRoutes);
router.use("/books", bookRoutes);
router.use("/promotions", promotionRoutes);
router.use("/reviews", reviewRoutes);


export default router;