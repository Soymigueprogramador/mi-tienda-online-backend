// Importacion de dependencias necesarias
import mongoose from "mongoose";

// Creando el esquema
const orderSchema = new mongoose.Schema(
  {
    // Usuario que realizó la orden
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },

        name: {
          type: String,
          required: true
        },

        price: {
          type: Number,
          required: true
        },

        quantity: {
          type: Number,
          required: true
        }
      }
    ],

    total: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending"
    },

    paymentId: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// Creando el modelo
const Order = mongoose.model("Order", orderSchema);

// Exportando el modelo
export default Order;