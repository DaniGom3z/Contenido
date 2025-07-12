export class NumeroPaginas {
  private readonly valor: number;

  constructor(valor: number) {
    if (valor <= 0) {
      throw new Error('El número de páginas debe ser mayor a 0');
    }
    this.valor = valor;
  }

  get value(): number {
    return this.valor;
  }
} 