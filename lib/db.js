/* archivo para definir la conexión */
import mysql2 from 'mysql2';

// creo una conexión simple:

const connection = mysql2.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // vacío si es XAMPP por defecto
    database: process.env.DB_NAME
});

export default connection;