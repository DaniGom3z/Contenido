import { Genero } from '../../domain/entities/Genero';
import { GeneroRepository } from '../../domain/repositories/GeneroRepository';
import { NombreGenero } from '../../domain/value-objects/NombreGenero';

export class CrearGenero {
  constructor(private readonly generoRepo: GeneroRepository) {}

  async execute(nombre: string): Promise<Genero> {
    const existente = await this.generoRepo.buscarPorNombre(nombre);
    if (existente) throw new Error('Ya existe un género con ese nombre');

    const genero = new Genero(undefined, new NombreGenero(nombre));
    return await this.generoRepo.crear(genero);
  }
}
