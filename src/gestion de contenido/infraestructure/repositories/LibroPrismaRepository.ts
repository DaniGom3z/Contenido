import { Libro } from "../../domain/entities/Libro";
import { LibroRepository } from "../../domain/repositories/LibroRepository";
import prisma from "../prisma/client";

export class LibroPrismaRepository implements LibroRepository {
  async crear(libro: Libro): Promise<Libro> {
    const creado = await prisma.libro.create({
      data: {
        idAutor: libro.idAutor,
        titulo: libro.titulo,
        categoria: libro.categoria,
        numPaginas: libro.numPaginas,
        sinopsis: libro.sinopsis,
        url: libro.url,
        urlPortada: libro.urlPortada,
      },
    });

    return new Libro(
      creado.idAutor,
      creado.titulo,
      creado.categoria,
      creado.numPaginas,
      creado.sinopsis,
      creado.url,
      creado.urlPortada,
      creado.id
    );
  }

  async buscarPorId(id: number): Promise<Libro | null> {
    const libro = await prisma.libro.findUnique({
      where: { id: id },
    });

    if (!libro) return null;

    return new Libro(
      libro.idAutor,
      libro.titulo,
      libro.categoria,
      libro.numPaginas,
      libro.sinopsis,
      libro.url,
      libro.urlPortada,
      libro.id
    );
  }

  async listar(): Promise<Libro[]> {
    const libros = await prisma.libro.findMany();
    return libros.map(
      (l) =>
        new Libro(
          l.idAutor,
          l.titulo,
          l.categoria,
          l.numPaginas,
          l.sinopsis,
          l.url,
          l.urlPortada,
          l.id
        )
    );
  }

  async buscarPorAutor(idAutor: number): Promise<Libro[]> {
    const libros = await prisma.libro.findMany({
      where: { id: idAutor },
    });

    return libros.map(
      (l) =>
        new Libro(
          l.idAutor,
          l.titulo,
          l.categoria,
          l.numPaginas,
          l.sinopsis,
          l.url,
          l.urlPortada,
          l.id
        )
    );
  }

  async buscarPorGenero(nombreGenero: string): Promise<Libro[]> {
    const libros = await prisma.libro.findMany({
      where: {
        generos: {
          some: {
            genero: {
              nombre: nombreGenero,
            },
          },
        },
      },
      include: {
        generos: true,
      },
    });

    return libros.map(
      (l) =>
        new Libro(
          l.idAutor,
          l.titulo,
          l.categoria,
          l.numPaginas,
          l.sinopsis,
          l.url,
          l.urlPortada,
          l.id
        )
    );
  }
}
