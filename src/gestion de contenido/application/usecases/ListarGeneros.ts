import { GeneroRepository } from '../../domain/repositories/GeneroRepository';
import { Genero } from '../../domain/entities/Genero';

export class ListarGeneros {
  constructor(private readonly generoRepo: GeneroRepository) {}

  async execute(): Promise<Genero[]> {
    return await this.generoRepo.listar();
  }
}
