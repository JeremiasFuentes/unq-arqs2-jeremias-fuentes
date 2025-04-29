import mongoose from "mongoose";

const VendedorSchema = new mongoose.Schema({
  razonSocial: String,
  email: String,
  productosIds: [String],
});

export const VendedorModel = mongoose.model("Vendedor", VendedorSchema);