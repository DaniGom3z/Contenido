"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TituloLibro = void 0;
class TituloLibro {
    constructor(valor) {
        if (!valor || valor.trim().length < 3) {
            throw new Error('El título del libro debe tener al menos 3 caracteres');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.TituloLibro = TituloLibro;
