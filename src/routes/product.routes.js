// Importacion de dependencias necesarias
import express from "express";

// Importacion de controladores
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";
import validateRequest from '../validators/validate.request.js';
import { validateProduct } from '../middleware/productValidator.js';

// Crear router
const router = express.Router();


// CRUD de productos

// Obtener todos los productos
router.get(
  "/",
  validateProduct,
  validateRequest,
  getProducts
);

// Obtener un producto por ID
router.get("/:id", getProductById);

// Crear un producto
router.post("/", createProduct);

// Actualizar un producto
router.put("/:id", updateProduct);

// Eliminar un producto
router.delete("/:id", deleteProduct);


// Exportar router
export default router;