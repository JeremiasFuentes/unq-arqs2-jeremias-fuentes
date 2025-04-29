import { Request, Response } from "express";
import { CrearProducto } from "../../application/use-cases/CrearProducto";
import { MongoProductoRepository } from "../persistence/repositories/MongoProductoRepository";
import { Producto } from "../../domain/models/Producto";

const repo = new MongoProductoRepository();
const crearProductoUC = new CrearProducto(repo);

export class ProductoController {
  static async crear(req: Request, res: Response) {
    const { nombre, descripcion, precio, stock, vendedorId } = req.body;
    try {
      const producto = await crearProductoUC.ejecutar(nombre, descripcion, precio, stock, vendedorId);
      res.status(201).json(producto);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async modificar(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, vendedorId } = req.body;
    try {
      const producto = new Producto(id, nombre, descripcion, precio, stock, vendedorId);
      await repo.modificar(producto);
      res.status(200).json(producto);
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

  static async buscarPorNombre(req: Request, res: Response) {
    try {
      const productos = await repo.buscarPorNombre(req.query.nombre as string);
      res.json(productos);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async filtrarPorPrecio(req: Request, res: Response) {
    try {
      const min = req.query.min ? Number(req.query.min) : undefined;
      const max = req.query.max ? Number(req.query.max) : undefined;
      const productos = await repo.filtrarPorPrecio(min, max);
      res.json(productos);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
