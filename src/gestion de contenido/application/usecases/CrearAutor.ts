import { Autor } from '../../domain/entities/Autor';
import { AutorRepository } from '../../domain/repositories/AutorRepository';

export class CrearAutor {
  constructor(private readonly autorRepo: AutorRepository) {}

  async execute(nombre: string, biografia: string): Promise<Autor> {
    const autor = new Autor(undefined,nombre, biografia);
    return await this.autorRepo.crear(autor);
  }
}
