import express from "express";
import { createCategory } from "./category.controller.js";

const router = express.Router();

// 🔥 Create category
router.post("/", createCategory);

export default router;