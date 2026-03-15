// Importacion de dependencias necesarias
import express from 'express';

// Importacion de archivos necesarios
import {
    createOrders,
    getOrders,
    getOrderById,
    getMyOrders,
} from '../controllers/order.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

// Llamando a las rutas
const router = express.Router();

// Definiendo las rutas
router.post('/', authMiddleware, createOrders);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.get("/my-orders", authMiddleware, getMyOrders);

// exportando las rutas
export default router;