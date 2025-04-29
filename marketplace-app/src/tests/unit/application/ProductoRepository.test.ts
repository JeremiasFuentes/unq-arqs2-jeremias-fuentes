import { MongoProductoRepository } from "../../../infrastructure/persistence/repositories/MongoProductoRepository";
import { Producto } from "../../../domain/models/Producto";

describe("ProductoRepository - Buscar por Nombre", () => {
  const mockRepo = {
    buscarPorNombre: jest.fn()
  };

  it("debería devolver productos que coincidan con el nombre", async () => {
    const productosEsperados: Producto[] = [
      new Producto("1", "Mouse Gamer", "Mouse óptico", 3000, 10, "vendedor123"),
      new Producto("2", "Mouse Inalámbrico", "Mouse bluetooth", 3500, 5, "vendedor456"),
    ];

    mockRepo.buscarPorNombre.mockResolvedValue(productosEsperados);

    const repo = mockRepo as any;

    const resultado = await repo.buscarPorNombre("Mouse");

    expect(repo.buscarPorNombre).toHaveBeenCalledWith("Mouse");
    expect(resultado.length).toBe(2);
    expect(resultado[0].nombre).toContain("Mouse");
    expect(resultado[1].nombre).toContain("Mouse");
  });
});

describe("ProductoRepository - Filtrar por Precio", () => {
    const mockRepo = {
      filtrarPorPrecio: jest.fn()
    };
  
    it("debería devolver productos dentro del rango de precio especificado", async () => {
      const productosEsperados: Producto[] = [
        new Producto("1", "Teclado Mecánico", "Teclado RGB", 5000, 8, "vendedor321"),
        new Producto("2", "Monitor 24 pulgadas", "Monitor HD", 7500, 4, "vendedor654"),
      ];
  
      mockRepo.filtrarPorPrecio.mockResolvedValue(productosEsperados);
  
      const repo = mockRepo as any;
  
      const resultado = await repo.filtrarPorPrecio(4000, 8000);
  
      expect(repo.filtrarPorPrecio).toHaveBeenCalledWith(4000, 8000);
      expect(resultado.length).toBe(2);
      expect(resultado[0].precio).toBeGreaterThanOrEqual(4000);
      expect(resultado[1].precio).toBeLessThanOrEqual(8000);
    });
  });
  