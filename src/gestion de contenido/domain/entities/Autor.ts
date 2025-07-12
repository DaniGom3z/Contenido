import { NombreAutor } from '../value-objects/NombreAutor';

export class Autor {
  constructor(
    public readonly id: number | undefined,
    public readonly nombre: NombreAutor,
    public readonly biografia?: string
  ) {}
}
