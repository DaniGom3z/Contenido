"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreAutor = void 0;
class NombreAutor {
    constructor(valor) {
        if (!valor || valor.trim().length < 3) {
            throw new Error('El nombre del autor debe tener al menos 3 caracteres');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.NombreAutor = NombreAutor;
