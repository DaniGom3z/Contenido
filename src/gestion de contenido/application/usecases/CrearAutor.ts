import { Autor } from '../../domain/entities/Autor';
import { AutorRepository } from '../../domain/repositories/AutorRepository';
import { NombreAutor } from '../../domain/value-objects/NombreAutor';

export class CrearAutor {
  constructor(private readonly autorRepo: AutorRepository) {}

  async execute(nombre: string, biografia: string): Promise<Autor> {
    const autor = new Autor(undefined, new NombreAutor(nombre), biografia);
    return await this.autorRepo.crear(autor);
  }
}
