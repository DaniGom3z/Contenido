import { Libro } from '../entities/Libro';

export interface LibroRepository {
  crear(libro: Libro): Promise<Libro>;
  buscarPorId(id: number): Promise<Libro | null>;
  listar(): Promise<Libro[]>;
  buscarPorAutor(idAutor: number): Promise<Libro[]>;
  buscarPorGenero(nombreGenero: string): Promise<Libro[]>;
}
