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
class LibroPrismaRepository {
    crear(libro) {
        return __awaiter(this, void 0, void 0, function* () {
            const creado = yield client_1.default.libro.create({
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
            return new Libro_1.Libro(creado.idAutor, creado.titulo, creado.categoria, creado.numPaginas, creado.sinopsis, creado.url, creado.urlPortada, creado.id);
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const libro = yield client_1.default.libro.findUnique({
                where: { id: id },
            });
            if (!libro)
                return null;
            return new Libro_1.Libro(libro.idAutor, libro.titulo, libro.categoria, libro.numPaginas, libro.sinopsis, libro.url, libro.urlPortada, libro.id);
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield client_1.default.libro.findMany();
            return libros.map((l) => new Libro_1.Libro(l.idAutor, l.titulo, l.categoria, l.numPaginas, l.sinopsis, l.url, l.urlPortada, l.id));
        });
    }
    buscarPorAutor(idAutor) {
        return __awaiter(this, void 0, void 0, function* () {
            const libros = yield client_1.default.libro.findMany({
                where: { id: idAutor },
            });
            return libros.map((l) => new Libro_1.Libro(l.idAutor, l.titulo, l.categoria, l.numPaginas, l.sinopsis, l.url, l.urlPortada, l.id));
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
            return libros.map((l) => new Libro_1.Libro(l.idAutor, l.titulo, l.categoria, l.numPaginas, l.sinopsis, l.url, l.urlPortada, l.id));
        });
    }
}
exports.LibroPrismaRepository = LibroPrismaRepository;
