// Importacion de archivos necesarios
import Order from '../models/Order.models.js';
import asyncHandler from '../middleware/asyncHandler.js';

// Funcion para mis compras
export const getMyOrders = asyncHandler(async (req, res) => {

  const orders = await Order.find({
    user: req.user.userId
  });

  res.json(orders);

});

// Funcion para crear las ordenes
export const createOrders = asyncHandler(async (req, res) => {

    // Creamos la orden asociada al usuario autenticado
    const order = await Order.create({
        ...req.body,
        user: req.user.userId
    });

    // La respuesta
    res.status(201).json(order);
});


// Funcion para obtener todas las ordenes
export const getOrders = asyncHandler(async (req, res) => {
    /*
        try {
        // Filtramos todas las ordenes
        const orders = await Order.find();

        // Mostramos las ordenes
        res.json(orders);
    } catch(error) {
        // Mostramos este mensaje si ocurre un error
        res.status(500).json({
            message: 'Error al obtener todas las ordenes'
        });
    }
    */

    const orders = await Order.find({
        user: req.user.userId
    }).populate("items.productId");

    res.json(orders);
});


// Funcion para obtener las ordenes por ID
export const getOrderById = asyncHandler(async (req, res) => {

    // Filtramos las ordenes por ID
    const order = await Order.findById(req.params.id)
        .populate("items.productId");

    // Buscamos si el ID de la orden existe
    if (!order) {
        return res.status(404).json({
            message: 'El ID de la orden no fue encontrado'
        });
    }

    // Verificamos que la orden pertenezca al usuario autenticado
    if (order.user.toString() !== req.user.userId) {
        return res.status(401).json({
            message: 'No autorizado para ver esta orden'
        });
    }

    // Si el ID se encontro lo mostramos
    res.json(order);

    /*
    try {
        // Filtramos las ordenes por ID
        const order = await Order.findByIs( req.params.id );

        // Buscamos si el ID de la orden existe
        if( !order ) {
            return res.status(404).json({
                message: 'El ID de la orden no fue encontrado'
            });
        }

        // Si el ID se encontro lo mostramos
        res.json(order);
    } catch(error) {
        // Mostramos este mensaje si ocurre un error
        res.status(500).json({
            message: 'Error al obtener todas las ordenes'
        });
    }
    */
});