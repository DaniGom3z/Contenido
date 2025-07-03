"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genero = void 0;
class Genero {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        if (!nombre || nombre.trim().length < 3) {
            throw new Error('El nombre del género debe tener al menos 3 caracteres');
        }
    }
}
exports.Genero = Genero;
