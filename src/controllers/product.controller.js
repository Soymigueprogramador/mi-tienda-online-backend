// Importacion del modelo
import Product from "../models/Product.models.js";
import asyncHandler from '../middleware/asyncHandler.js';


// Obtener todos los productos
export const getProducts = asyncHandler(async (req, res) => {
  /*
    try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los productos",
      error: error.message
    });
  }
  */

  const products = await Product.find();

  res.json(products);
});


// Crear un nuevo producto
export const createProduct = asyncHandler(async (req, res) => {

  const product = new Product(req.body);

  const savedProduct = await product.save();

  res.status(201).json(savedProduct);

  /*
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el producto",
      error: error.message
    });
  }
  */

});


// Obtener un producto por ID
export const getProductById = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }

  res.json(product);

  /*
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener el producto",
      error: error.message
    });
  }
  */

});


// Actualizar un producto
export const updateProduct = asyncHandler(async (req, res) => {

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }

  res.json(product);

  /*
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el producto",
      error: error.message
    });
  }
  */

});


// Eliminar un producto
export const deleteProduct = asyncHandler(async (req, res) => {

  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }

  res.json({
    message: "Producto eliminado correctamente"
  });

  /*
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    res.json({
      message: "Producto eliminado correctamente"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el producto",
      error: error.message
    });
  }
  */

});