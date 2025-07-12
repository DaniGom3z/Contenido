"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlLibro = void 0;
class UrlLibro {
    constructor(valor) {
        if (!valor || valor.trim().length === 0) {
            throw new Error('La URL del contenido es requerida');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.UrlLibro = UrlLibro;
