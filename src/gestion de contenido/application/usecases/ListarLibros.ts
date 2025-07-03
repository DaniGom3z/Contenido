import { LibroRepository } from '../../domain/repositories/LibroRepository';
import { Libro } from '../../domain/entities/Libro';

export class ListarLibros {
  constructor(private readonly libroRepo: LibroRepository) {}

  async execute(): Promise<Libro[]> {
    return await this.libroRepo.listar();
  }
}
