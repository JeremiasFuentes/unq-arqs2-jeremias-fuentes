import { Request, Response } from "express";
import { MongoProductoRepository } from "../persistence/repositories/MongoProductoRepository";
import { ProcesarVenta } from "../../application/use-cases/ProcesarVenta";

const repo = new MongoProductoRepository();
const procesarVentaUC = new ProcesarVenta(repo);

export class VentaController {
  static async procesar(req: Request, res: Response) {
    const { productoId, cantidad } = req.body;
    try {
      const productoActualizado = await procesarVentaUC.ejecutar(productoId, Number(cantidad));
      res.json(productoActualizado);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
