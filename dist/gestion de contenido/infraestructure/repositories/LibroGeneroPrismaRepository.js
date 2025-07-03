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
exports.LibroGeneroPrismaRepository = void 0;
const client_1 = __importDefault(require("../prisma/client"));
class LibroGeneroPrismaRepository {
    asignarGeneros(idLibro, generos) {
        return __awaiter(this, void 0, void 0, function* () {
            const generosDB = yield client_1.default.genero.findMany({
                where: { nombre: { in: generos } },
            });
            const data = generosDB.map(genero => ({
                idLibro: idLibro, // corregido
                idGenero: genero.id // corregido
            }));
            yield client_1.default.libroGenero.createMany({
                data,
                skipDuplicates: true,
            });
        });
    }
    obtenerGenerosDeLibro(idLibro) {
        return __awaiter(this, void 0, void 0, function* () {
            const relaciones = yield client_1.default.libroGenero.findMany({
                where: { idLibro },
                include: { genero: true },
            });
            return relaciones.map(r => r.genero.nombre);
        });
    }
}
exports.LibroGeneroPrismaRepository = LibroGeneroPrismaRepository;
