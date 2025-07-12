import { Request, Response } from 'express';
import { CrearAutor } from '../../../application/usecases/CrearAutor'; 
import { ListarAutores } from '../../../application/usecases/ListarAutores'; 

export class AutorController {
  constructor(
    private readonly crearAutor: CrearAutor,
    private readonly listarAutores: ListarAutores
  ) {}

  async crear(req: Request, res: Response): Promise<void> {
    try {
      const { nombre, biografia } = req.body;
      const nuevo = await this.crearAutor.execute(nombre, biografia);
      res.status(201).json(nuevo);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const autores = await this.listarAutores.execute();
      res.status(200).json(autores);
    } catch (error: any) {
      res.status(500).json({ error: 'Error al listar autores' });
    }
  }
}
