// Importacion de dependencias necesarias
import express from 'express';

// Importaciones de archivos necesarios
import { registerUser, loginUser } from '../controllers/auth.controller.js';

// Llamando a las rutas
const router = express.Router();

// Ruta para el registro y el login
router.post("/register", registerUser);
router.post("/login", loginUser);

// Exportando las rutas
export default router;