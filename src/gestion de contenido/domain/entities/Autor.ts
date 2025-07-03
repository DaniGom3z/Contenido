export class Autor {
  constructor(
    public readonly id: number | undefined,
    public readonly nombre: string,
    public readonly biografia?: string
  ) {
    if (!nombre || nombre.trim().length < 3) {
      throw new Error('El nombre del autor debe tener al menos 3 caracteres');
    }
  }
}
