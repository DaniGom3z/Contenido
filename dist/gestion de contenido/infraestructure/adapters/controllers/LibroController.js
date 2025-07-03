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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroController = void 0;
class LibroController {
    constructor(crearLibro, listarLibros, buscarPorId, listarLibrosPorGenero) {
        this.crearLibro = crearLibro;
        this.listarLibros = listarLibros;
        this.buscarPorId = buscarPorId;
        this.listarLibrosPorGenero = listarLibrosPorGenero;
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idAutor, titulo, categoria, numPaginas, sinopsis, url, generos, urlPortada } = req.body;
                const nuevo = yield this.crearLibro.execute(Number(idAutor), titulo, categoria, Number(numPaginas), sinopsis, url, generos, urlPortada);
                res.status(201).json(nuevo);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libros = yield this.listarLibros.execute();
                res.status(200).json(libros);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al listar libros' });
            }
        });
    }
    obtenerPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const libro = yield this.buscarPorId.execute(id);
                if (!libro) {
                    res.status(404).json({ error: 'Libro no encontrado' });
                    return;
                }
                res.status(200).json(libro);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    librosPorGenero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const genero = req.params.genero;
                const libros = yield this.listarLibrosPorGenero.execute(genero);
                res.status(200).json(libros);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.LibroController = LibroController;
