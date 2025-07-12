export class UrlLibro {
  private readonly valor: string;

  constructor(valor: string) {
    if (!valor || valor.trim().length === 0) {
      throw new Error('La URL del contenido es requerida');
    }
    this.valor = valor;
  }

  get value(): string {
    return this.valor;
  }
} 