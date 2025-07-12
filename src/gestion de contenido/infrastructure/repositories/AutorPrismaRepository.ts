import { Autor } from '../../domain/entities/Autor';
import { AutorRepository } from '../../domain/repositories/AutorRepository';
import prisma from '../prisma/client';
import { NombreAutor } from '../../domain/value-objects/NombreAutor';

export class AutorPrismaRepository implements AutorRepository {
  async crear(autor: Autor): Promise<Autor> {
    const creado = await prisma.autor.create({
      data: {
        id : autor.id,
        nombre: autor.nombre.value,
        biografia: autor.biografia,
      },
    });

    return new Autor(creado.id, new NombreAutor(creado.nombre), creado.biografia || '');
  }

  async buscarPorId(id: number): Promise<Autor | null> {
    const autor = await prisma.autor.findUnique({ where: { id: id } });
    if (!autor) return null;
    return new Autor(autor.id, new NombreAutor(autor.nombre), autor.biografia || '');
  }

  async listar(): Promise<Autor[]> {
    const autores = await prisma.autor.findMany();
    return autores.map(a => new Autor(a.id, new NombreAutor(a.nombre), a.biografia || ''));
  }
}
