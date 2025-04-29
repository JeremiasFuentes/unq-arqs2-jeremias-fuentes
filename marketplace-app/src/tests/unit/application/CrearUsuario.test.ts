import { CrearUsuario } from "../../../application/use-cases/CrearUsuario";

describe("CrearUsuario", () => {
  const mockRepo = {
    crear: jest.fn((usuario) => usuario)
  };

  it("debería crear un usuario correctamente", async () => {
    const crearUsuario = new CrearUsuario(mockRepo as any);
    
    const result = await crearUsuario.ejecutar(
      "María",
      "Gómez",
      "maria@example.com"
    );

    expect(mockRepo.crear).toHaveBeenCalled();
    expect(result.nombre).toBe("María");
    expect(result.apellido).toBe("Gómez");
  });
});
