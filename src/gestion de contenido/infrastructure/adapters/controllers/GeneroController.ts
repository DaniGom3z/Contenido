import { Request, Response } from 'express';
import { CrearGenero } from '../../../application/usecases/CrearGenero';
import { ListarGeneros } from '../../../application/usecases/ListarGeneros'; 

export class GeneroController {
  constructor(
    private readonly crearGenero: CrearGenero,
    private readonly listarGeneros: ListarGeneros
  ) {}

  async crear(req: Request, res: Response): Promise<void> {
    try {
      const { nombre } = req.body;
      const nuevo = await this.crearGenero.execute(nombre);
      res.status(201).json(nuevo);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const generos = await this.listarGeneros.execute();
      res.status(200).json(generos);
    } catch (error: any) {
      res.status(500).json({ error: 'Error al listar géneros' });
    }
  }
}
