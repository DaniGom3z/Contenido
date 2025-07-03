export class LibroGenero {
  constructor(
    public readonly idLibro: number,
    public readonly idGenero: number
  ) {
    if (idLibro <= 0 || idGenero <= 0) {
      throw new Error('IDs inválidos en LibroGenero');
    }
  }
}
