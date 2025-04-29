import { ProcesarVenta } from "../../../application/use-cases/ProcesarVenta";
import { Producto } from "../../../domain/models/Producto";

describe("ProcesarVenta", () => {
  const mockRepo = {
    buscarPorId: jest.fn(),
    modificar: jest.fn()
  };

  it("debería procesar una venta exitosamente", async () => {
    const producto = new Producto("1", "Mouse", "Mouse gamer", 3000, 10, "vendedor123");
    mockRepo.buscarPorId.mockResolvedValue(producto);
    mockRepo.modificar = jest.fn((producto) => producto);
    const procesarVenta = new ProcesarVenta(mockRepo as any);

    const actualizado = await procesarVenta.ejecutar("1", 2);

    expect(mockRepo.buscarPorId).toHaveBeenCalledWith("1");
    expect(mockRepo.modificar).toHaveBeenCalled();
    expect(actualizado.stock).toBe(8);
  });

  it("debería lanzar error si el producto no existe", async () => {
    mockRepo.buscarPorId.mockResolvedValue(null);
    const procesarVenta = new ProcesarVenta(mockRepo as any);

    await expect(procesarVenta.ejecutar("99", 2)).rejects.toThrow("Producto no encontrado");
  });
});
