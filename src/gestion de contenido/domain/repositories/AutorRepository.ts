import { Autor } from '../entities/Autor';

export interface AutorRepository {
  crear(autor: Autor): Promise<Autor>;
  buscarPorId(id: number): Promise<Autor | null>;
  listar(): Promise<Autor[]>;
}
