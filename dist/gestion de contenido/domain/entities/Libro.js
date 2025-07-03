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
        if (!titulo || titulo.trim().length < 3) {
            throw new Error('El título del libro debe tener al menos 3 caracteres');
        }
        if (!categoria) {
            throw new Error('La categoría es obligatoria');
        }
        if (numPaginas <= 0) {
            throw new Error('El número de páginas debe ser mayor a 0');
        }
        if (!url) {
            throw new Error('La URL del contenido es requerida');
        }
    }
}
exports.Libro = Libro;
