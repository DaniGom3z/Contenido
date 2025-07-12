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
exports.CrearLibro = void 0;
const Libro_1 = require("../../domain/entities/Libro");
const TituloLibro_1 = require("../../domain/value-objects/TituloLibro");
const Categoria_1 = require("../../domain/value-objects/Categoria");
const NumeroPaginas_1 = require("../../domain/value-objects/NumeroPaginas");
const UrlLibro_1 = require("../../domain/value-objects/UrlLibro");
class CrearLibro {
    constructor(libroRepo, libroGeneroRepo) {
        this.libroRepo = libroRepo;
        this.libroGeneroRepo = libroGeneroRepo;
    }
    execute(idAutor, titulo, categoria, numPaginas, sinopsis, url, generos, urlPortada) {
        return __awaiter(this, void 0, void 0, function* () {
            const libro = new Libro_1.Libro(idAutor, new TituloLibro_1.TituloLibro(titulo), new Categoria_1.Categoria(categoria), new NumeroPaginas_1.NumeroPaginas(numPaginas), sinopsis, new UrlLibro_1.UrlLibro(url), urlPortada);
            const creado = yield this.libroRepo.crear(libro);
            yield this.libroGeneroRepo.asignarGeneros(creado.id, generos);
            return creado;
        });
    }
}
exports.CrearLibro = CrearLibro;
