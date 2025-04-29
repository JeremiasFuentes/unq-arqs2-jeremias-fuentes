import { Producto } from "../../domain/models/Producto";
import { ProductoRepository } from "../../domain/repositories/ProductoRepository";
import { v4 as uuidv4 } from "uuid";

export class CrearProducto {
  constructor(private productoRepo: ProductoRepository) {}

  async ejecutar(nombre: string, descripcion: string, precio: number, stock: number, vendedorId: string): Promise<Producto> {
    const producto = new Producto(uuidv4(), nombre, descripcion, precio, stock, vendedorId);
    return await this.productoRepo.crear(producto);
  }
}