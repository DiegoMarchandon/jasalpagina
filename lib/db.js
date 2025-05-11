/* archivo para definir la conexión */
import mysql2 from 'mysql2/promise';

// creo una conexión simple:

const pool = mysql2.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // vacío si es XAMPP por defecto
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, //maximo 10 conexiones al mismo tiempo
    queueLimit: 0 // sin limite de consultas encoladas
});

export default pool;