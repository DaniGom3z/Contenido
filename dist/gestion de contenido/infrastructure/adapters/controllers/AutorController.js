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
exports.AutorController = void 0;
class AutorController {
    constructor(crearAutor, listarAutores) {
        this.crearAutor = crearAutor;
        this.listarAutores = listarAutores;
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, biografia } = req.body;
                const nuevo = yield this.crearAutor.execute(nombre, biografia);
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
                const autores = yield this.listarAutores.execute();
                res.status(200).json(autores);
            }
            catch (error) {
                res.status(500).json({ error: 'Error al listar autores' });
            }
        });
    }
}
exports.AutorController = AutorController;
