// Importacion de dependencias necesarias
import express from 'express';

// Importacion de archivos necesarios
import {
    createPreference,
    paymentWebhook,
} from '../controllers/payment.controller.js';

// Llamando a la activacion de las rutas
const router = express.Router();

// Creando la ruta del pago
router.post('/create-preference', createPreference);
router.post('/webhook', paymentWebhook);

// Exportando la ruta
export default router;