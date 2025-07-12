import { Libro } from '../../domain/entities/Libro';
import { LibroRepository } from '../../domain/repositories/LibroRepository';
import { LibroGeneroRepository } from '../../domain/repositories/LibroGeneroRepository';
import { TituloLibro } from '../../domain/value-objects/TituloLibro';
import { Categoria } from '../../domain/value-objects/Categoria';
import { NumeroPaginas } from '../../domain/value-objects/NumeroPaginas';
import { UrlLibro } from '../../domain/value-objects/UrlLibro';

export class CrearLibro {
  constructor(
    private readonly libroRepo: LibroRepository,
    private readonly libroGeneroRepo: LibroGeneroRepository
  ) {}

  async execute(
    idAutor: number,
    titulo: string,
    categoria: string,
    numPaginas: number,
    sinopsis: string,
    url: string,
    generos: string[],
    urlPortada: string
  ): Promise<Libro> {
    const libro = new Libro(
      idAutor,
      new TituloLibro(titulo),
      new Categoria(categoria),
      new NumeroPaginas(numPaginas),
      sinopsis,
      new UrlLibro(url),
      urlPortada
    );
    const creado = await this.libroRepo.crear(libro);
    await this.libroGeneroRepo.asignarGeneros(creado.id!, generos);
    return creado;
  }
}
