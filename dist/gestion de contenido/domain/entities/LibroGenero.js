"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroGenero = void 0;
class LibroGenero {
    constructor(idLibro, idGenero) {
        this.idLibro = idLibro;
        this.idGenero = idGenero;
        if (idLibro <= 0 || idGenero <= 0) {
            throw new Error('IDs inválidos en LibroGenero');
        }
    }
}
exports.LibroGenero = LibroGenero;
