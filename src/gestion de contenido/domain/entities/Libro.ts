import { TituloLibro } from '../value-objects/TituloLibro';
import { Categoria } from '../value-objects/Categoria';
import { NumeroPaginas } from '../value-objects/NumeroPaginas';
import { UrlLibro } from '../value-objects/UrlLibro';

export class Libro {
  public readonly id?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(
    public readonly idAutor: number,
    public readonly titulo: TituloLibro,
    public readonly categoria: Categoria,
    public readonly numPaginas: NumeroPaginas,
    public readonly sinopsis: string,
    public readonly url: UrlLibro,
    public readonly urlPortada: string,
    id?: number
  ) {
    this.id = id;
  }
}
