import { Libro } from "../../domain/entities/Libro";
import { LibroRepository } from "../../domain/repositories/LibroRepository";
import prisma from "../prisma/client";
import { TituloLibro } from '../../domain/value-objects/TituloLibro';
import { Categoria } from '../../domain/value-objects/Categoria';
import { NumeroPaginas } from '../../domain/value-objects/NumeroPaginas';
import { UrlLibro } from '../../domain/value-objects/UrlLibro';

export class LibroPrismaRepository implements LibroRepository {
  async crear(libro: Libro): Promise<Libro> {
    const creado = await prisma.libro.create({
      data: {
        idAutor: libro.idAutor,
        titulo: libro.titulo.value,
        categoria: libro.categoria.value,
        numPaginas: libro.numPaginas.value,
        sinopsis: libro.sinopsis,
        url: libro.url.value,
        urlPortada: libro.urlPortada,
      },
    });

    return new Libro(
      creado.idAutor,
      new TituloLibro(creado.titulo),
      new Categoria(creado.categoria),
      new NumeroPaginas(creado.numPaginas),
      creado.sinopsis,
      new UrlLibro(creado.url),
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
      new TituloLibro(libro.titulo),
      new Categoria(libro.categoria),
      new NumeroPaginas(libro.numPaginas),
      libro.sinopsis,
      new UrlLibro(libro.url),
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
          new TituloLibro(l.titulo),
          new Categoria(l.categoria),
          new NumeroPaginas(l.numPaginas),
          l.sinopsis,
          new UrlLibro(l.url),
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
          new TituloLibro(l.titulo),
          new Categoria(l.categoria),
          new NumeroPaginas(l.numPaginas),
          l.sinopsis,
          new UrlLibro(l.url),
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
          new TituloLibro(l.titulo),
          new Categoria(l.categoria),
          new NumeroPaginas(l.numPaginas),
          l.sinopsis,
          new UrlLibro(l.url),
          l.urlPortada,
          l.id
        )
    );
  }
}
