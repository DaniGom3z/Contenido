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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutorPrismaRepository = void 0;
const Autor_1 = require("../../domain/entities/Autor");
const client_1 = __importDefault(require("../prisma/client"));
class AutorPrismaRepository {
    crear(autor) {
        return __awaiter(this, void 0, void 0, function* () {
            const creado = yield client_1.default.autor.create({
                data: {
                    id: autor.id,
                    nombre: autor.nombre,
                    biografia: autor.biografia,
                },
            });
            return new Autor_1.Autor(creado.id, creado.nombre, creado.biografia || '');
        });
    }
    buscarPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const autor = yield client_1.default.autor.findUnique({ where: { id: id } });
            if (!autor)
                return null;
            return new Autor_1.Autor(autor.id, autor.nombre, autor.biografia || '');
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const autores = yield client_1.default.autor.findMany();
            return autores.map(a => new Autor_1.Autor(a.id, a.nombre, a.biografia || ''));
        });
    }
}
exports.AutorPrismaRepository = AutorPrismaRepository;
