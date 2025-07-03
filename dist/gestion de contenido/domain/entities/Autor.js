"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(id, nombre, biografia) {
        this.id = id;
        this.nombre = nombre;
        this.biografia = biografia;
        if (!nombre || nombre.trim().length < 3) {
            throw new Error('El nombre del autor debe tener al menos 3 caracteres');
        }
    }
}
exports.Autor = Autor;
