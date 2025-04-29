import { Usuario } from "../models/Usuario";

export interface UsuarioRepository {
  crear(usuario: Usuario): Promise<Usuario>;
  modificar(usuario: Usuario): Promise<Usuario>;
  eliminar(id: string): Promise<void>;
  buscarPorId(id: string): Promise<Usuario | null>;
}
