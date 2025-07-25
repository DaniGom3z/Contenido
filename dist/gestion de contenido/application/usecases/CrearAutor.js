"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearAutor = void 0;
const Autor_1 = require("../../domain/entities/Autor");
const NombreAutor_1 = require("../../domain/value-objects/NombreAutor");
class CrearAutor {
    constructor(autorRepo) {
        this.autorRepo = autorRepo;
    }
    execute(nombre, biografia) {
        return __awaiter(this, void 0, void 0, function* () {
            const autor = new Autor_1.Autor(undefined, new NombreAutor_1.NombreAutor(nombre), biografia);
            return yield this.autorRepo.crear(autor);
        });
    }
}
exports.CrearAutor = CrearAutor;
