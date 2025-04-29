import { Vendedor } from "../../../domain/models/Vendedor";
import { VendedorRepository } from "../../../domain/repositories/VendedorRepository";
import { VendedorModel } from "../models/VendedorSchema";

export class MongoVendedorRepository implements VendedorRepository {
  async crear(vendedor: Vendedor): Promise<Vendedor> {
    await VendedorModel.create(vendedor);
    return vendedor;
  }

  async modificar(vendedor: Vendedor): Promise<Vendedor> {
    await VendedorModel.findByIdAndUpdate(vendedor.id, vendedor);
    return vendedor;
  }

  async eliminar(id: string): Promise<void> {
    await VendedorModel.findByIdAndDelete(id);
  }

  async buscarPorId(id: string): Promise<Vendedor | null> {
    return await VendedorModel.findById(id).lean() as Vendedor;
  }
}
