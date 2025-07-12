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
exports.CrearGenero = void 0;
const Genero_1 = require("../../domain/entities/Genero");
const NombreGenero_1 = require("../../domain/value-objects/NombreGenero");
class CrearGenero {
    constructor(generoRepo) {
        this.generoRepo = generoRepo;
    }
    execute(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const existente = yield this.generoRepo.buscarPorNombre(nombre);
            if (existente)
                throw new Error('Ya existe un género con ese nombre');
            const genero = new Genero_1.Genero(undefined, new NombreGenero_1.NombreGenero(nombre));
            return yield this.generoRepo.crear(genero);
        });
    }
}
exports.CrearGenero = CrearGenero;
