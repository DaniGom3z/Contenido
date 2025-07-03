import { LibroRepository } from '../../domain/repositories/LibroRepository';
import { Libro } from '../../domain/entities/Libro';

export class ListarLibrosPorAutor {
  constructor(private readonly libroRepo: LibroRepository) {}

  async execute(idAutor: number): Promise<Libro[]> {
    return await this.libroRepo.buscarPorAutor(idAutor);
  }
}
