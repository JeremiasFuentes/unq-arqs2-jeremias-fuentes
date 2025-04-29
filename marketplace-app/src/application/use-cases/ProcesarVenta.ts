import { ProductoRepository } from "../../domain/repositories/ProductoRepository";
import { Producto } from "../../domain/models/Producto";

export class ProcesarVenta {
  constructor(private productoRepo: ProductoRepository) {}

  async ejecutar(productoId: string, cantidad: number): Promise<Producto> {
    const producto = await this.productoRepo.buscarPorId(productoId);
    if (!producto) throw new Error("Producto no encontrado");
    if (producto.stock < cantidad) throw new Error("Stock insuficiente");

    producto.stock -= cantidad;
    return await this.productoRepo.modificar(producto);
  }
}