import { Vendedor } from "../models/Vendedor";

export interface VendedorRepository {
  crear(vendedor: Vendedor): Promise<Vendedor>;
  modificar(vendedor: Vendedor): Promise<Vendedor>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Vendedor | null>;
}