import express from "express";
import { VendedorController } from "../controllers/VendedorController";

const router = express.Router();

router.post("/", VendedorController.crear);
router.put("/:id", VendedorController.modificar);
router.delete("/:id", VendedorController.eliminar);

export default router;
