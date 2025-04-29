import { Producto } from "../../../domain/models/Producto";

describe("Producto", () => {
  it("debería crear un producto correctamente", () => {
    const producto = new Producto("1", "Mouse", "Mouse inalámbrico", 1500, 10, "vendedor123");
    
    expect(producto.id).toBe("1");
    expect(producto.nombre).toBe("Mouse");
    expect(producto.precio).toBe(1500);
    expect(producto.stock).toBe(10);
    expect(producto.vendedorId).toBe("vendedor123");
  });
});
