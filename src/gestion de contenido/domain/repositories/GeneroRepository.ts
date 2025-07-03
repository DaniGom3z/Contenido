import { Genero } from '../entities/Genero';

export interface GeneroRepository {
  crear(genero: Genero): Promise<Genero>;
  buscarPorNombre(nombre: string): Promise<Genero | null>;
  listar(): Promise<Genero[]>;
}
