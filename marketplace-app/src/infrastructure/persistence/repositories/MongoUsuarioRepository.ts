import { Usuario } from "../../../domain/models/Usuario";
import { UsuarioRepository } from "../../../domain/repositories/UsuarioRepository";
import { UsuarioModel } from "../models/UsuarioSchema";

export class MongoUsuarioRepository implements UsuarioRepository {
  async crear(usuario: Usuario): Promise<Usuario> {
    await UsuarioModel.create(usuario);
    return usuario;
  }

  async modificar(usuario: Usuario): Promise<Usuario> {
    await UsuarioModel.findByIdAndUpdate(usuario.id, usuario);
    return usuario;
  }

  async eliminar(id: string): Promise<void> {
    await UsuarioModel.findByIdAndDelete(id);
  }

  async buscarPorId(id: string): Promise<Usuario | null> {
    return await UsuarioModel.findById(id).lean() as Usuario;
  }
}
