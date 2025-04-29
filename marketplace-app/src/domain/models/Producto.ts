export class Producto {
    constructor(
      public readonly id: string,
      public nombre: string,
      public descripcion: string,
      public precio: number,
      public stock: number,
      public vendedorId: string
    ) {}
  }