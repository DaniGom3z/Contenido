"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreGenero = void 0;
class NombreGenero {
    constructor(valor) {
        if (!valor || valor.trim().length < 3) {
            throw new Error('El nombre del género debe tener al menos 3 caracteres');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.NombreGenero = NombreGenero;
