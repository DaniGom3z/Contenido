import { Request, Response } from 'express';
import { CrearLibro } from '../../../application/usecases/CrearLibro'; 
import { ListarLibros } from '../../../application/usecases/ListarLibros'; 
import { BuscarLibroPorId } from '../../../application/usecases/BuscarLibroPorId'; 
import { ListarLibrosPorGenero } from '../../../application/usecases/ListarLibrosPorGenero';

export class LibroController {
  constructor(
    private readonly crearLibro: CrearLibro,
    private readonly listarLibros: ListarLibros,
    private readonly buscarPorId: BuscarLibroPorId,
    private readonly listarLibrosPorGenero: ListarLibrosPorGenero
  ) {}

  async crear(req: Request, res: Response): Promise<void> {
    try {
      const { idAutor, titulo, categoria, numPaginas, sinopsis, url, generos,urlPortada } = req.body;

      const nuevo = await this.crearLibro.execute(
        Number(idAutor),
        titulo,
        categoria,
        Number(numPaginas),
        sinopsis,
        url,
        generos,
        urlPortada
      );

      res.status(201).json(nuevo);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const libros = await this.listarLibros.execute();
      res.status(200).json(libros);
    } catch (error: any) {
      res.status(500).json({ error: 'Error al listar libros' });
    }
  }

  async obtenerPorId(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const libro = await this.buscarPorId.execute(id);
      if (!libro) {
        res.status(404).json({ error: 'Libro no encontrado' });
        return;
      }
      res.status(200).json(libro);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async librosPorGenero(req: Request, res: Response): Promise<void> {
  try {
    const genero = req.params.genero;
    const libros = await this.listarLibrosPorGenero.execute(genero);
    res.status(200).json(libros);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

}
