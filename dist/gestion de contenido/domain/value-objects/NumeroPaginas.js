"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroPaginas = void 0;
class NumeroPaginas {
    constructor(valor) {
        if (valor <= 0) {
            throw new Error('El número de páginas debe ser mayor a 0');
        }
        this.valor = valor;
    }
    get value() {
        return this.valor;
    }
}
exports.NumeroPaginas = NumeroPaginas;
