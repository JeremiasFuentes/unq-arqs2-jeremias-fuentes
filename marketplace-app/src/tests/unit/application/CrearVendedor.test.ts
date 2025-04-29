import { CrearVendedor } from "../../../application/use-cases/CrearVendedor";

describe("CrearVendedor", () => {
  const mockRepo = {
    crear: jest.fn((vendedor) => vendedor)
  };

  it("debería crear un vendedor correctamente", async () => {
    const crearVendedor = new CrearVendedor(mockRepo as any);
    
    const result = await crearVendedor.ejecutar(
      "Tienda ABC",
      "contacto@abc.com"
    );

    expect(mockRepo.crear).toHaveBeenCalled();
    expect(result.razonSocial).toBe("Tienda ABC");
    expect(result.email).toBe("contacto@abc.com");
  });
});
