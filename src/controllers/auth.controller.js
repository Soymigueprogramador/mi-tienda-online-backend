// Importacion de dependencias necesarias
import bcrypt from "bcryptjs";
import jwr from 'jsonwebtoken';

// Importacion de archivos necesarios
import User from '../models/User.js';

// Funcion para crear el registro del usuario
export const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        // 🔧 BUSCAR USUARIO EXISTENTE
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: 'El usuario ya está registrado, ahora tenés que iniciar sesión'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'Usuario creado con éxito'
        });

    } catch (error) {

        console.error(error); // 👈 IMPORTANTE

        res.status(500).json({
            message: 'Error al crear el registro del usuario'
        });
    }
};

// Funcion para crear el login
export const loginUser = async (req, res) => {
    try {
        // Datos necesarios para el login
        const { email, password } = req.body;

        // Filtramos los usuarios por su email
        const user = await User.findOne({ email });

        // Si el usuario ingresa datos incorrectos le mostramos este mensaje
        if (!user) {
            return res.status(204).json({
                message: 'Email o password incorrecto'
            });
        };

        // Comparamos que las credenciales sean las correctas
        const isMatch = await bcrypt.compare(password, user.password);

        // Si el usuario ingresa datos incorrectos le mostramos este mensaje
        if (!isMatch) {
            return res.status(204).json({
                message: 'Email o password incorrecto'
            });
        };

        // Validaciones
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            token
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error con el login'
        });
    }
};