// Importacion de dependencias necesarias
import express from 'express';

// Importacion de archivos necesarios
import {
    createOrders,
    getOrders,
    getOrderById
} from '../controllers/order.controller.js';

// Llamando a las rutas
const router = express.Router();

// Definiendo las rutas
router.post('/', createOrders);
router.get('/', getOrders);
router.get('/:id', getOrderById);

// exportando las rutas
export default router;