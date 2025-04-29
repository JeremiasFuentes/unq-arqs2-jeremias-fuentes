import { Vendedor } from "../../../domain/models/Vendedor";

describe("Vendedor", () => {
  it("debería crear un vendedor correctamente", () => {
    const vendedor = new Vendedor("1", "Tienda XYZ", "contacto@xyz.com", []);

    expect(vendedor.id).toBe("1");
    expect(vendedor.razonSocial).toBe("Tienda XYZ");
    expect(vendedor.email).toBe("contacto@xyz.com");
    expect(vendedor.productos).toEqual([]);
  });
});
