// Importacion de dependencias necesarias
import { MercadoPagoConfig, mercadopago } from "mercadopago";
import dotenv from 'dotenv';

// Llamando a la activacion de las variables de entorno
dotenv.config();

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
});

export default mercadopago;