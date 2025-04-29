import { Producto } from "../models/Producto";

export class VentaService {
    static verificarStock(producto: Producto, cantidad: number): void {
      if (cantidad <= 0) {
        throw new Error("La cantidad debe ser mayor que cero.");
      }
      if (producto.stock < cantidad) {
        throw new Error("Stock insuficiente para completar la venta.");
      }
    }
  
    static descontarStock(producto: Producto, cantidad: number): Producto {
      this.verificarStock(producto, cantidad);
      producto.stock -= cantidad;
      return producto;
    }
  }
  