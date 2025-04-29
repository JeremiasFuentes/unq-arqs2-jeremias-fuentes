import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  stock: Number,
  vendedorId: String,
});

export const ProductoModel = mongoose.model("Producto", ProductoSchema);