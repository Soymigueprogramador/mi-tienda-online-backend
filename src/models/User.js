// iMPORTACION DE DEPENDENCIAS NECESARIAS
import mongoose from "mongoose";

// Creando es esquema
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

// Creando el modelo de usuario
const User = mongoose.model('User', userSchema);

export default User;