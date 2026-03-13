// Importacion de archivos necesarios
import mercadopago from '../config/mercadopago.js';
import dotenv from 'dotenv';

dotenv.config();

// Importacion de archivos necesarios
import Order from '../models/Order.models.js'

// Funcion para crear las preferencias del pago
export const createPreference = async (req, res) => {
    try {
        // Necesita un cuerpo donde mostrar las prteferencias
        const { items } = req.body;

        /*
            Este objeto de preferencias mostrara:
            Titulo del producto
            Precio del producto
            Cantidad del producto
        */
        const preference = {
            // Usamos un map para mostrar los items del producto
            items: items.map(item => ({
                title: item.name,
                unit_price: item.price,
                quantity: item.quantity,
            })),

            metadata: {
                orderId: orderId
            },

            notification_url: `${process.env.BACKEND_URL}/api/payments/webhook`
        };

        // Mostramos la respuesta de la iteracion
        const res = await mercadopago.preferences.create(preference);

        // El ID de la respuesta
        res.json({
            id: res.body.id
        });
    } catch (error) {
        // Mostramos este mensaje en caso de error
        console.error(error);
        res.status(500).json({
            message: 'Error al crear la preferencia'
        });
    }
};

// Funcion para crear el webhook
export const paymentWebhook = async (req, res) => {

    try {

        if( req.query.type !== 'payment' ) {
            res.sendStatus(200);
        };

        const paymentId = req.query["data.id"];

        if (!paymentId) {
            return res.sendStatus(200);
        }

        const payment = await mercadopago.payment.findById(paymentId);

        const { orderId } = payment.body.metadata.orderId;

        if (payment.body.status === "approved") {

            await Order.findByIdAndUpdate(orderId, {
                status: "paid",
                paymentId: paymentId
            });

            console.log("Orden actualizada como pagada");

        }

        res.sendStatus(200);

    } catch (error) {

        console.error(error);

        res.sendStatus(500);

    }

};