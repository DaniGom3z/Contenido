export class NombreGenero {
  private readonly valor: string;

  constructor(valor: string) {
    if (!valor || valor.trim().length < 3) {
      throw new Error('El nombre del género debe tener al menos 3 caracteres');
    }
    this.valor = valor;
  }

  get value(): string {
    return this.valor;
  }
} 