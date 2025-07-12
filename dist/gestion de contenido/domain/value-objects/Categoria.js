"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(valor) {
        if (!valor || valor.trim().length === 0) {
            throw new Error('La categoría es obligatoria');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.Categoria = Categoria;
