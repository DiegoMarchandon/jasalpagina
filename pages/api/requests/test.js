import mysql2 from 'mysql2/promise';

async function testConnection() {
    try {
        const connection = await mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: '', // si estás en XAMPP
            database: process.env.DB_NAME,
            // port: 3306
        });

        console.log('✅ Conexión exitosa');
        await connection.end();
    } catch (error) {
        console.error('❌ Error en la conexión:', error.message);
    }
}

testConnection();