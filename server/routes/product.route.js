import { Router } from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} from "../controller/product.controller.js";

const router = Router();

// Create a product
router.post("/", createProduct);

// Update a product
router.put("/:id", updateProduct);

// Get all products
router.get("/", getAllProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Delete a product
router.delete("/:id", deleteProduct);

export default router;