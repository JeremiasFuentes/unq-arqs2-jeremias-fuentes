import express from "express";
import usuarioRoutes from "./infrastructure/routes/usuarioRoutes";
import vendedorRoutes from "./infrastructure/routes/vendedorRoutes";
import productoRoutes from "./infrastructure/routes/productoRoutes";
import ventaRoutes from "./infrastructure/routes/ventaRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/vendedores", vendedorRoutes);
app.use("/productos", productoRoutes);
app.use("/ventas", ventaRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI || "").then(() => {
  console.log("Conectado a MongoDB");
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}).catch(err => {
  console.error("Error de conexión a MongoDB", err);
});
