import { NombreGenero } from '../value-objects/NombreGenero';

export class Genero {
  constructor(
    public readonly id: number | undefined,
    public readonly nombre: NombreGenero
  ) {}
}
