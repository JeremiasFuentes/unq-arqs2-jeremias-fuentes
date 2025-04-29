import { Request, Response } from "express";
import { CrearUsuario } from "../../application/use-cases/CrearUsuario";
import { MongoUsuarioRepository } from "../persistence/repositories/MongoUsuarioRepository";
import { Usuario } from "../../domain/models/Usuario";

const repo = new MongoUsuarioRepository();
const crearUsuarioUC = new CrearUsuario(repo);

export class UsuarioController {
  static async crear(req: Request, res: Response) {
    const { nombre, apellido, email } = req.body;
    try {
      const usuario = await crearUsuarioUC.ejecutar(nombre, apellido, email);
      res.status(201).json(usuario);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async modificar(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;
    try {
      const usuario = new Usuario(id, nombre, apellido, email);
      await repo.modificar(usuario);
      res.status(200).json(usuario);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      await repo.eliminar(req.params.id);
      res.status(204).send();
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }
}
