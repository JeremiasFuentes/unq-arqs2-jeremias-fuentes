import { Usuario } from "../../../domain/models/Usuario";

describe("Usuario", () => {
  it("debería crear un usuario correctamente", () => {
    const usuario = new Usuario("1", "Juan", "Pérez", "juan@example.com");

    expect(usuario.id).toBe("1");
    expect(usuario.nombre).toBe("Juan");
    expect(usuario.apellido).toBe("Pérez");
    expect(usuario.email).toBe("juan@example.com");
  });
});
