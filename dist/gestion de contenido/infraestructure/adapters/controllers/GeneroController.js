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
exports.GeneroController = void 0;
class GeneroController {
    constructor(crearGenero, listarGeneros) {
        this.crearGenero = crearGenero;
        this.listarGeneros = listarGeneros;
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre } = req.body;
                const nuevo = yield this.crearGenero.execute(nombre);
                res.status(201).json(nuevo);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const generos = yield this.listarGeneros.execute();
                res.status(200).json(generos);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al listar géneros' });
            }
        });
    }
}
exports.GeneroController = GeneroController;
