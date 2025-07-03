import { AutorRepository } from '../../domain/repositories/AutorRepository';
import { Autor } from '../../domain/entities/Autor';

export class ListarAutores {
  constructor(private readonly autorRepo: AutorRepository) {}

  async execute(): Promise<Autor[]> {
    return await this.autorRepo.listar();
  }
}
