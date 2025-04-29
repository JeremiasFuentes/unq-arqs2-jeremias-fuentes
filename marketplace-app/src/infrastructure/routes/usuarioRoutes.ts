import express from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const router = express.Router();

router.post("/", UsuarioController.crear);
router.put("/:id", UsuarioController.modificar);
router.delete("/:id", UsuarioController.eliminar);

export default router;
