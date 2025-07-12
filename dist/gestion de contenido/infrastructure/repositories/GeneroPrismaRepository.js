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
exports.GeneroPrismaRepository = void 0;
const Genero_1 = require("../../domain/entities/Genero");
const client_1 = __importDefault(require("../prisma/client"));
const NombreGenero_1 = require("../../domain/value-objects/NombreGenero");
class GeneroPrismaRepository {
    crear(genero) {
        return __awaiter(this, void 0, void 0, function* () {
            const creado = yield client_1.default.genero.create({
                data: {
                    id: genero.id,
                    nombre: genero.nombre.value,
                },
            });
            return new Genero_1.Genero(creado.id, new NombreGenero_1.NombreGenero(creado.nombre));
        });
    }
    buscarPorNombre(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            const encontrado = yield client_1.default.genero.findUnique({
                where: { nombre },
            });
            if (!encontrado)
                return null;
            return new Genero_1.Genero(encontrado.id, new NombreGenero_1.NombreGenero(encontrado.nombre));
        });
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const generos = yield client_1.default.genero.findMany();
            return generos.map(g => new Genero_1.Genero(g.id, new NombreGenero_1.NombreGenero(g.nombre)));
        });
    }
}
exports.GeneroPrismaRepository = GeneroPrismaRepository;
