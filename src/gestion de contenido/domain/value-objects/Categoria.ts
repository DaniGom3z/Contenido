export class Categoria {
  private readonly valor: string;

  constructor(valor: string) {
    if (!valor || valor.trim().length === 0) {
      throw new Error('La categoría es obligatoria');
    }
    this.valor = valor;
  }

  get value(): string {
    return this.valor;
  }
} 