import { Request, Response } from "express";
import { CrearVendedor } from "../../application/use-cases/CrearVendedor";
import { MongoVendedorRepository } from "../persistence/repositories/MongoVendedorRepository";
import { Vendedor } from "../../domain/models/Vendedor";

const repo = new MongoVendedorRepository();
const crearVendedorUC = new CrearVendedor(repo);

export class VendedorController {
  static async crear(req: Request, res: Response) {
    const { razonSocial, email } = req.body;
    try {
      const vendedor = await crearVendedorUC.ejecutar(razonSocial, email);
      res.status(201).json(vendedor);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async modificar(req: Request, res: Response) {
    const { id } = req.params;
    const { razonSocial, email, productosIds } = req.body;
    try {
      const vendedor = new Vendedor(id, razonSocial, email, productosIds);
      await repo.modificar(vendedor);
      res.status(200).json(vendedor);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      await repo.eliminar(req.params.id);
      res.status(204).send();
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
