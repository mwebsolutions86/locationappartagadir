import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import propertiesRoutes from './routes/properties'; // <--- IMPORT

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API Immobilier Agadir - Online 🚀' });
});

app.use('/api/properties', propertiesRoutes); // <--- BRANCHEMENT

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur Back-end démarré sur le port ${PORT}`);
});