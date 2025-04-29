import express from "express";
import { ProductoController } from "../controllers/ProductoController";

const router = express.Router();

router.post("/", ProductoController.crear);
router.put("/:id", ProductoController.modificar);
router.delete("/:id", ProductoController.eliminar);
router.get("/buscar", ProductoController.buscarPorNombre);
router.get("/filtrar", ProductoController.filtrarPorPrecio);

export default router;
