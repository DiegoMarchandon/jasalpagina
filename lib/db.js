/* archivo para definir la conexión */
// import mysql2 from 'mysql2/promise';
import {createClient} from '@supabase/supabase-js';

// creo una conexión simple:
/* 
const pool = mysql2.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // vacío si es XAMPP por defecto
    database: process.env.DB_NAME,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10, //maximo 10 conexiones al mismo tiempo
    queueLimit: 0 // sin limite de consultas encoladas
}); */
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// export default pool;
export default supabase;
