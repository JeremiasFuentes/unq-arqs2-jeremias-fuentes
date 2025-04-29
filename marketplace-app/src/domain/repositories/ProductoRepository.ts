import { Producto } from "../models/Producto";

export interface ProductoRepository {
  crear(producto: Producto): Promise<Producto>;
  modificar(producto: Producto): Promise<Producto>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Producto | null>;
  buscarPorNombre(nombre: string): Promise<Producto[]>;
  buscarPorCategoria(categoria: string): Promise<Producto[]>; // opcional si hay categoría
  filtrarPorPrecio(min?: number, max?: number): Promise<Producto[]>;
}