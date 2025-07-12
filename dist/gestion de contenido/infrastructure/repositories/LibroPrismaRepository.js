"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroPrismaRepository = void 0;
const Libro_1 = require("../../domain/entities/Libro");
const client_1 = __importDefault(require("../prisma/client"));
const TituloLibro_1 = require("../../domain/value-objects/TituloLibro");
const Categoria_1 = require("../../domain/value-objects/Categoria");
const NumeroPaginas_1 = require("../../domain/value-objects/NumeroPaginas");
const UrlLibro_1 = require("../../domain/value-objects/UrlLibro");
class LibroPrismaRepository {
    crear(libro) {
        return __awaiter(this, void 0, void 0, function* () {
            const creado = yield client_1.default.libro.create({
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
            return new Libro_1.Libro(creado.idAutor, new TituloLibro_1.TituloLibro(creado.titulo), new Categoria_1.Categoria(creado.categoria), new NumeroPaginas_1.NumeroPaginas(creado.numPaginas), creado.sinopsis, new UrlLibro_1.UrlLibro(creado.url), creado.urlPortada, creado.id);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const libro = yield client_1.default.libro.findUnique({
                where: { id: id },
            });
            if (!libro)
                return null;
            return new Libro_1.Libro(libro.idAutor, new TituloLibro_1.TituloLibro(libro.titulo), new Categoria_1.Categoria(libro.categoria), new NumeroPaginas_1.NumeroPaginas(libro.numPaginas), libro.sinopsis, new UrlLibro_1.UrlLibro(libro.url), libro.urlPortada, libro.id);
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield client_1.default.libro.findMany();
            return libros.map((l) => new Libro_1.Libro(l.idAutor, new TituloLibro_1.TituloLibro(l.titulo), new Categoria_1.Categoria(l.categoria), new NumeroPaginas_1.NumeroPaginas(l.numPaginas), l.sinopsis, new UrlLibro_1.UrlLibro(l.url), l.urlPortada, l.id));
        });
    }
    buscarPorAutor(idAutor) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield client_1.default.libro.findMany({
                where: { id: idAutor },
            });
            return libros.map((l) => new Libro_1.Libro(l.idAutor, new TituloLibro_1.TituloLibro(l.titulo), new Categoria_1.Categoria(l.categoria), new NumeroPaginas_1.NumeroPaginas(l.numPaginas), l.sinopsis, new UrlLibro_1.UrlLibro(l.url), l.urlPortada, l.id));
        });
    }
    buscarPorGenero(nombreGenero) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield client_1.default.libro.findMany({
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
            return libros.map((l) => new Libro_1.Libro(l.idAutor, new TituloLibro_1.TituloLibro(l.titulo), new Categoria_1.Categoria(l.categoria), new NumeroPaginas_1.NumeroPaginas(l.numPaginas), l.sinopsis, new UrlLibro_1.UrlLibro(l.url), l.urlPortada, l.id));
        });
    }
}
exports.LibroPrismaRepository = LibroPrismaRepository;
