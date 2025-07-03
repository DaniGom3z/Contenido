import { Router } from 'express';
import { LibroController } from '../controllers/LibroController'; 
import { CrearLibro } from '../../../application/usecases/CrearLibro'; 
import { ListarLibros } from '../../../application/usecases/ListarLibros'; 
import { BuscarLibroPorId } from '../../../application/usecases/BuscarLibroPorId';
import { ListarLibrosPorGenero } from '../../../application/usecases/ListarLibrosPorGenero';
import { LibroPrismaRepository } from '../../repositories/LibroPrismaRepository';
import { LibroGeneroPrismaRepository } from '../../repositories/LibroGeneroPrismaRepository';

import { GeneroController } from '../controllers/GeneroController'; 
import { CrearGenero } from '../../../application/usecases/CrearGenero'; 
import { GeneroPrismaRepository } from '../../repositories/GeneroPrismaRepository'; 
import { ListarGeneros } from '../../../application/usecases/ListarGeneros'; 

import { AutorController } from '../controllers/AutorController';
import { CrearAutor } from '../../../application/usecases/CrearAutor'; 
import { ListarAutores } from '../../../application/usecases/ListarAutores'; 
import { AutorPrismaRepository } from '../../repositories/AutorPrismaRepository'; 

const router = Router();

// Repositories
const libroRepo = new LibroPrismaRepository();
const generoRepo = new GeneroPrismaRepository();
const libroGeneroRepo = new LibroGeneroPrismaRepository();
const autorRepo = new AutorPrismaRepository();

// UseCases
const crearLibro = new CrearLibro(libroRepo, libroGeneroRepo);
const listarLibros = new ListarLibros(libroRepo);
const buscarLibroPorId = new BuscarLibroPorId(libroRepo);
const listarLibrosPorGenero = new ListarLibrosPorGenero(libroRepo);

const crearGenero = new CrearGenero(generoRepo);
const listarGeneros = new ListarGeneros(generoRepo);

const crearAutor = new CrearAutor(autorRepo);
const listarAutores = new ListarAutores(autorRepo);

// Controllers
const libroController = new LibroController(crearLibro, listarLibros, buscarLibroPorId, listarLibrosPorGenero);
const generoController = new GeneroController(crearGenero, listarGeneros);
const autorController = new AutorController(crearAutor, listarAutores);

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

export default router;
