import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateStatus,
  cancelOrder,
  refundOrder,
} from "./order.controller.js";

import { protect } from "../../common/middlewares/auth.middleware.js";
import { authorize } from "../../common/middlewares/role.middleware.js";

const router = express.Router();

// 🔥 create (guest + user)
router.post("/", createOrder);

// 🔐 user
router.get("/my", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.post("/:id/cancel", protect, cancelOrder);

// 🔐 admin
router.patch("/:id/status", protect, authorize("admin"), updateStatus);
router.post("/:id/refund", protect, authorize("admin"), refundOrder);

export default router;































