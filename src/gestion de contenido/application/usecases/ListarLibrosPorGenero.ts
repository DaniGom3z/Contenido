import { LibroRepository } from '../../domain/repositories/LibroRepository';
import { Libro } from '../../domain/entities/Libro';

export class ListarLibrosPorGenero {
  constructor(private readonly libroRepo: LibroRepository) {}

  async execute(nombreGenero: string): Promise<Libro[]> {
    return await this.libroRepo.buscarPorGenero(nombreGenero);
  }
}
