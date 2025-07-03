export interface LibroGeneroRepository {
  asignarGeneros(idLibro: number, generos: string[]): Promise<void>;
  obtenerGenerosDeLibro(idLibro: number): Promise<string[]>;
}
