import * as categoryService from "./category.service.js";
import { validateObjectId } from "./category.validator.js";

/**
 * 🔥 CREATE CATEGORY
 * POST /api/categories
 * - Body: { name, parentId?, description?, image?, sortOrder?, isFeatured?, keywords?, tags? }
 * - Response: { status: "success", data: { ...category } }
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

/**
 * 📦 GET CATEGORY LIST
 * GET /api/categories
 * - Query params: page, limit, search, parentId, status
 * - Response: { status: "success", data: [...], pagination: { page, limit, total } }
 * 
 */
export const getCategories = async (req, res, next) => {
  try {
    const result = await categoryService.getCategories(req.query);

    return res.status(200).json({
      status: "success",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 📋 GET CATEGORY DETAIL
 * GET /api/categories/:id
 * - Path params: id
 * - Response: { status: "success", data: { ...category } }
 */
export const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ✅ 1. Validate ID
    validateObjectId(id);

    // ✅ 2. Get category
    const category = await categoryService.getCategoryById(id);

    return res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 🌳 GET CHILDREN CATEGORIES
 * GET /api/categories/:id/children
 * - Path params: id (parent category ID)
 * - Response: { status: "success", data: [...children] }
 */
export const getChildrenCategories = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ✅ 1. Validate parent ID
    validateObjectId(id);

    // ✅ 2. Check if parent category exists
    await categoryService.getCategoryById(id);

    // ✅ 3. Get children categories
    const children = await categoryService.getChildrenCategories(id);

    return res.status(200).json({
      status: "success",
      data: children,
    });
  } catch (error) {
    next(error);
  }
};
