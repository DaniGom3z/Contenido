import { LibroRepository } from '../../domain/repositories/LibroRepository';
import { Libro } from '../../domain/entities/Libro';

export class BuscarLibroPorId {
  constructor(private readonly libroRepo: LibroRepository) {}

  async execute(id: number): Promise<Libro | null> {
    return await this.libroRepo.buscarPorId(id);
  }
}
