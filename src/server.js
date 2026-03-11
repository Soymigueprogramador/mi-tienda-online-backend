// Importacion de dependencias
import dotenv from 'dotenv';

// Importacion de archivos necesarios
import app from './app.js'
import connectBD from "./config/bd.js"

connectBD();
dotenv.config();

// Llamando a dotenv
dotenv.config();

// Asignando el puerto
const PORT = process.env.PORT || 3000;

// Levantando el puerto
app.listen(PORT, () => {
    // mENSAJE QUE SE MOSTRARA CUANDO EL PUERTO ESTE LEVANTADO
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});