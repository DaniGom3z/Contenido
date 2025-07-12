"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(idAutor, titulo, categoria, numPaginas, sinopsis, url, urlPortada, id) {
        this.idAutor = idAutor;
        this.titulo = titulo;
        this.categoria = categoria;
        this.numPaginas = numPaginas;
        this.sinopsis = sinopsis;
        this.url = url;
        this.urlPortada = urlPortada;
        this.id = id;
    }
}
exports.Libro = Libro;
