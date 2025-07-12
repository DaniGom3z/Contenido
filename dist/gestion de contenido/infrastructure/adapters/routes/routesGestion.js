"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroController_1 = require("../controllers/LibroController");
const CrearLibro_1 = require("../../../application/usecases/CrearLibro");
const ListarLibros_1 = require("../../../application/usecases/ListarLibros");
const BuscarLibroPorId_1 = require("../../../application/usecases/BuscarLibroPorId");
const ListarLibrosPorGenero_1 = require("../../../application/usecases/ListarLibrosPorGenero");
const LibroPrismaRepository_1 = require("../../repositories/LibroPrismaRepository");
const LibroGeneroPrismaRepository_1 = require("../../repositories/LibroGeneroPrismaRepository");
const GeneroController_1 = require("../controllers/GeneroController");
const CrearGenero_1 = require("../../../application/usecases/CrearGenero");
const GeneroPrismaRepository_1 = require("../../repositories/GeneroPrismaRepository");
const ListarGeneros_1 = require("../../../application/usecases/ListarGeneros");
const AutorController_1 = require("../controllers/AutorController");
const CrearAutor_1 = require("../../../application/usecases/CrearAutor");
const ListarAutores_1 = require("../../../application/usecases/ListarAutores");
const AutorPrismaRepository_1 = require("../../repositories/AutorPrismaRepository");
const router = (0, express_1.Router)();
// Repositories
const libroRepo = new LibroPrismaRepository_1.LibroPrismaRepository();
const generoRepo = new GeneroPrismaRepository_1.GeneroPrismaRepository();
const libroGeneroRepo = new LibroGeneroPrismaRepository_1.LibroGeneroPrismaRepository();
const autorRepo = new AutorPrismaRepository_1.AutorPrismaRepository();
// UseCases
const crearLibro = new CrearLibro_1.CrearLibro(libroRepo, libroGeneroRepo);
const listarLibros = new ListarLibros_1.ListarLibros(libroRepo);
const buscarLibroPorId = new BuscarLibroPorId_1.BuscarLibroPorId(libroRepo);
const listarLibrosPorGenero = new ListarLibrosPorGenero_1.ListarLibrosPorGenero(libroRepo);
const crearGenero = new CrearGenero_1.CrearGenero(generoRepo);
const listarGeneros = new ListarGeneros_1.ListarGeneros(generoRepo);
const crearAutor = new CrearAutor_1.CrearAutor(autorRepo);
const listarAutores = new ListarAutores_1.ListarAutores(autorRepo);
// Controllers
const libroController = new LibroController_1.LibroController(crearLibro, listarLibros, buscarLibroPorId, listarLibrosPorGenero);
const generoController = new GeneroController_1.GeneroController(crearGenero, listarGeneros);
const autorController = new AutorController_1.AutorController(crearAutor, listarAutores);
// Rutas Libros
router.post('/libros', (req, res) => libroController.crear(req, res));
router.get('/libros', (req, res) => libroController.listar(req, res));
router.get('/libros/:id', (req, res) => libroController.obtenerPorId(req, res));
router.get('/libros/genero/:genero', (req, res) => libroController.librosPorGenero(req, res));
// Rutas Géneros
router.post('/generos', (req, res) => generoController.crear(req, res));
router.get('/generos', (req, res) => generoController.listar(req, res));
// Rutas Autores
router.post('/autores', (req, res) => autorController.crear(req, res));
router.get('/autores', (req, res) => autorController.listar(req, res));
exports.default = router;
