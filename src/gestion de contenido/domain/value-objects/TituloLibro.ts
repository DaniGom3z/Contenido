export class TituloLibro {
  private readonly valor: string;

  constructor(valor: string) {
    if (!valor || valor.trim().length < 3) {
      throw new Error('El título del libro debe tener al menos 3 caracteres');
    }
    this.valor = valor;
  }

  get value(): string {
    return this.valor;
  }
} 