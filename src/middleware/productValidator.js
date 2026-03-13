// Importacion de dependencias necesarias
import { body } from "express-validator";

// Funcion para validar los datos del producto
export const validateProduct = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

  body("price")
    .isNumeric()
    .withMessage("El precio debe ser un número"),

  body("stock")
    .optional()
    .isNumeric()
    .withMessage("El stock debe ser numérico")
];