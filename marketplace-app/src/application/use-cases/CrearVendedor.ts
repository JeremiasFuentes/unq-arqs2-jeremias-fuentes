import { Vendedor } from "../../domain/models/Vendedor";
import { VendedorRepository } from "../../domain/repositories/VendedorRepository";
import { v4 as uuidv4 } from "uuid";

export class CrearVendedor {
  constructor(private vendedorRepo: VendedorRepository) {}

  async ejecutar(razonSocial: string, email: string): Promise<Vendedor> {
    const nuevoVendedor = new Vendedor(uuidv4(), razonSocial, email);
    return await this.vendedorRepo.crear(nuevoVendedor);
  }
}