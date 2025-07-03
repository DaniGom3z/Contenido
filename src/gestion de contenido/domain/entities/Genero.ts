export class Genero {
  constructor(
    public readonly id: number | undefined,
    public readonly nombre: string
  ) {
    if (!nombre || nombre.trim().length < 3) {
      throw new Error('El nombre del género debe tener al menos 3 caracteres');
    }
  }
}
