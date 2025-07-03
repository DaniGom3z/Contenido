import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './gestion de contenido/infraestructure/adapters/routes/routesGestion';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
