import { Autor } from '../../domain/entities/Autor';
import { AutorRepository } from '../../domain/repositories/AutorRepository';
import prisma from '../prisma/client';

export class AutorPrismaRepository implements AutorRepository {
  async crear(autor: Autor): Promise<Autor> {
    const creado = await prisma.autor.create({
      data: {
        id : autor.id,
        nombre: autor.nombre,
        biografia: autor.biografia,
      },
    });

    return new Autor(creado.id, creado.nombre, creado.biografia || '');
  }

  async buscarPorId(id: number): Promise<Autor | null> {
    const autor = await prisma.autor.findUnique({ where: { id: id } });
    if (!autor) return null;
    return new Autor(autor.id, autor.nombre, autor.biografia || '');
  }

  async listar(): Promise<Autor[]> {
    const autores = await prisma.autor.findMany();
    return autores.map(a => new Autor(a.id, a.nombre, a.biografia || ''));
  }
}
