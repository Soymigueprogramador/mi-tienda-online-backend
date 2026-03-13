// Importacion de dependencias
import express from 'express';
import cors from 'cors';
import helmet from "helmet";


// Creando el app express.
const app = express();
import productRouter from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';
//import paymentRoutes from './routes/payment.routes.js';
import errorHandler from './middleware/errorHandler.js';

/* ==============================
   Middlewares
============================== */

app.use(helmet());
app.use(cors());
app.use(express.json());

/* ==============================
   Routes
============================== */

app.get('/', (req, res) => {
    res.json({
        message: "Backend de Mi Tienda Online funcionando 🚀"
    });
});

// Manejador de errores
app.use(errorHandler);

// API de los productos
app.use('/api/products', productRouter);
app.use("/api/orders", orderRoutes);
//app.use("/api/payments", paymentRoutes);

export default app;