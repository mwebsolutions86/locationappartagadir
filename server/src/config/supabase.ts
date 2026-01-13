import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('❌ ERREUR CRITIQUE : Les variables SUPABASE_URL ou SUPABASE_SERVICE_KEY manquent dans le fichier .env');
}

// Le client Supabase côté serveur a les pleins pouvoirs (Service Role)
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🔌 Client Supabase initialisé');