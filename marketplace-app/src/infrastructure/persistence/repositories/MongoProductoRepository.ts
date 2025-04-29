import { Producto } from "../../../domain/models/Producto";
import { ProductoRepository } from "../../../domain/repositories/ProductoRepository";
import { ProductoModel } from "../models/ProductoSchema";

export class MongoProductoRepository implements ProductoRepository {
  async crear(producto: Producto): Promise<Producto> {
    await ProductoModel.create(producto);
    return producto;
  }

  async modificar(producto: Producto): Promise<Producto> {
    await ProductoModel.findByIdAndUpdate(producto.id, producto);
    return producto;
  }

  async eliminar(id: string): Promise<void> {
    await ProductoModel.findByIdAndDelete(id);
  }

  async buscarPorId(id: string): Promise<Producto | null> {
    return await ProductoModel.findById(id).lean() as Producto;
  }

  async buscarPorNombre(nombre: string): Promise<Producto[]> {
    return await ProductoModel.find({ nombre: new RegExp(nombre, "i") }).lean() as Producto[];
  }

  async buscarPorCategoria(_categoria: string): Promise<Producto[]> {
    return []; // Placeholder: falta categoría en el modelo
  }

  async filtrarPorPrecio(min?: number, max?: number): Promise<Producto[]> {
    const query: any = {};
    if (min !== undefined) query.precio = { ...query.precio, $gte: min };
    if (max !== undefined) query.precio = { ...query.precio, $lte: max };
    return await ProductoModel.find(query).lean() as Producto[];
  }
}