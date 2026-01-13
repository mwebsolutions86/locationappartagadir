import { Router } from 'express';
import { supabase } from '../config/supabase';

const router = Router();

// GET /api/properties
// Récupère tous les appartements publiés
router.get('/', async (req, res) => {
  try {
    // Requête SQL via le SDK Supabase
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('is_published', true); // Seulement les visibles

    if (error) throw error;

    res.json(data);
  } catch (err: any) {
    console.error('Erreur récupération propriétés:', err.message);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des biens' });
  }
});

export default router;