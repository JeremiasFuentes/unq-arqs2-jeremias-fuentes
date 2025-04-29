import { Producto } from "../../../domain/models/Producto";
import { VentaService } from "../../../domain/services/VentaService";

describe("VentaService", () => {
  it("debería descontar stock correctamente si hay suficiente", () => {
    const producto = new Producto("1", "Mouse", "Mouse inalámbrico", 1500, 10, "vendedor123");
    
    const actualizado = VentaService.descontarStock(producto, 3);

    expect(actualizado.stock).toBe(7);
  });

  it("debería lanzar error si no hay stock suficiente", () => {
    const producto = new Producto("1", "Mouse", "Mouse inalámbrico", 1500, 2, "vendedor123");

    expect(() => {
      VentaService.descontarStock(producto, 5);
    }).toThrow("Stock insuficiente para completar la venta.");
  });

  it("debería permitir vender exactamente todo el stock", () => {
    const producto = new Producto("2", "Teclado", "Teclado mecánico", 3000, 5, "vendedor456");
    
    const actualizado = VentaService.descontarStock(producto, 5);

    expect(actualizado.stock).toBe(0); // Stock en cero
  });

  it("debería lanzar error si se intenta vender 0 unidades", () => {
    const producto = new Producto("3", "Monitor", "Monitor 24 pulgadas", 25000, 10, "vendedor789");
  
    expect(() => {
      VentaService.descontarStock(producto, 0);
    }).toThrow("La cantidad debe ser mayor que cero.");
  });

  it("debería lanzar error si el producto tiene stock negativo", () => {
    const producto = new Producto("4", "Gabinete", "Gabinete gamer", 8000, -5, "vendedor321");

    expect(() => {
      VentaService.verificarStock(producto, 1);
    }).toThrow("Stock insuficiente para completar la venta.");
  });
});
