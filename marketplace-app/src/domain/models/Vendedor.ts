import { Producto } from "./Producto";

export class Vendedor {
  constructor(
    public readonly id: string,
    public razonSocial: string,
    public email: string,
    public productos: Producto[] = []
  ) {}
}