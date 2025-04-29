import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
});

export const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);