// Importacion de dependencias necesarias
import mongoose from "mongoose";

// Creando el esquema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    image: {
      type: String
    },

    stock: {
      type: Number,
      default: 0
    },

    category: {
      type: String
    },

    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Creando el modelo
const Product = mongoose.model("Product", productSchema);

// Exportando el modelo de producto
export default Product;