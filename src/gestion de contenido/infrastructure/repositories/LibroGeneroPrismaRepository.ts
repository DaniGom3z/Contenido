import { LibroGeneroRepository } from '../../domain/repositories/LibroGeneroRepository';
import prisma from '../prisma/client';

export class LibroGeneroPrismaRepository implements LibroGeneroRepository {
  async asignarGeneros(idLibro: number, generos: string[]): Promise<void> {
    const generosDB = await prisma.genero.findMany({
      where: { nombre: { in: generos } },
    });

    const data = generosDB.map(genero => ({
      idLibro: idLibro,   // corregido
      idGenero: genero.id // corregido
    }));

    await prisma.libroGenero.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async obtenerGenerosDeLibro(idLibro: number): Promise<string[]> {
    const relaciones = await prisma.libroGenero.findMany({
      where: { idLibro },
      include: { genero: true },
    });

    return relaciones.map(r => r.genero.nombre);
  }
}
