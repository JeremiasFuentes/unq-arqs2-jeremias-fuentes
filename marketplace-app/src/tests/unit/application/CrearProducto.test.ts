import { CrearProducto } from "../../../application/use-cases/CrearProducto";
import { Producto } from "../../../domain/models/Producto";

describe("CrearProducto", () => {
    let mockRepo: any;
    let crearProducto: CrearProducto;
  
    beforeEach(() => {
      mockRepo = {
        crear: jest.fn((producto) => producto) // ✅ SIEMPRE reseteamos antes de cada test
      };
      crearProducto = new CrearProducto(mockRepo);
    });
  
    it("debería crear un producto correctamente", async () => {
      const result = await crearProducto.ejecutar(
        "Teclado",
        "Teclado mecánico",
        4500,
        15,
        "vendedor123"
      );
  
      expect(mockRepo.crear).toHaveBeenCalled();
      expect(result.nombre).toBe("Teclado");
      expect(result.precio).toBe(4500);
    });
  });