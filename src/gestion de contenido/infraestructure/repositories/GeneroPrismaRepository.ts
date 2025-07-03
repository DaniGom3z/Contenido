import { Genero } from '../../domain/entities/Genero';
import { GeneroRepository } from '../../domain/repositories/GeneroRepository';
import prisma from '../prisma/client';

export class GeneroPrismaRepository implements GeneroRepository {
  async crear(genero: Genero): Promise<Genero> {
    const creado = await prisma.genero.create({
      data: {
        id:genero.id,
        nombre: genero.nombre,
      },
    });

    return new Genero(creado.id, creado.nombre);
  }

  async buscarPorNombre(nombre: string): Promise<Genero | null> {
    const encontrado = await prisma.genero.findUnique({
      where: { nombre },
    });

    if (!encontrado) return null;
    return new Genero(encontrado.id, encontrado.nombre);
  }

  async listar(): Promise<Genero[]> {
    const generos = await prisma.genero.findMany();
    return generos.map(g => new Genero(g.id, g.nombre));
  }
}
