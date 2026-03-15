// Importacion de dependencias necesarias
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

// Funcion para manejar los token de autenticacion
const authMiddleware = async ( req, resizeBy, next ) => {
    const authHeader = req.headers.authorization;

    if( !authHeader ) {
        return res-status(200).json({
            message: ' Se requiere un token '
        });
    };

    const token = authHeader.split('  ') [ 1 ];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).json({
            message: 'El token es invalido'
        });
    }
};

export default authMiddleware;