export class Libro {
  public readonly id?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(
    
    public readonly idAutor: number,
    public readonly titulo: string,
    public readonly categoria: string,
    public readonly numPaginas: number,
    public readonly sinopsis: string,
    public readonly url: string,
    public readonly urlPortada: string,
    id?: number
  ) {
    this.id = id;
    if (!titulo || titulo.trim().length < 3) {
      throw new Error('El título del libro debe tener al menos 3 caracteres');
    }
    if (!categoria) {
      throw new Error('La categoría es obligatoria');
    }
    if (numPaginas <= 0) {
      throw new Error('El número de páginas debe ser mayor a 0');
    }
    if (!url) {
      throw new Error('La URL del contenido es requerida');
    }
  }
}
