import { Usuario } from "../../domain/models/Usuario";
import { UsuarioRepository } from "../../domain/repositories/UsuarioRepository";
import { v4 as uuidv4 } from "uuid";

export class CrearUsuario {
  constructor(private usuarioRepo: UsuarioRepository) {}

  async ejecutar(nombre: string, apellido: string, email: string): Promise<Usuario> {
    const nuevoUsuario = new Usuario(uuidv4(), nombre, apellido, email);
    return await this.usuarioRepo.crear(nuevoUsuario);
  }
}