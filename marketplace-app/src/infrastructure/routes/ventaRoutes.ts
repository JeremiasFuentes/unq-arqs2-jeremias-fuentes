import express from "express";
import { VentaController } from "../controllers/VentaController";

const router = express.Router();

router.post("/", VentaController.procesar);

export default router;
