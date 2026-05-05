import * as categoryService from "./category.service.js";

/**
 * 🔥 CREATE CATEGORY
 * POST /api/categories
 */
export const createCategory = async (req, res, next) => {
  try {
    const category = await categoryService.createCategory(req.body);

    return res.status(201).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    next(error); // chuyển sang error middleware
  }
};