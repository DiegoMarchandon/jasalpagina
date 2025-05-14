import pool from "../../../lib/db";

export default async function loginHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { usnombre, uspass } = req.body;

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute(
            'SELECT * FROM usuario WHERE usnombre = ?',
            [usnombre]
        );
        connection.release();

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const usuario = rows[0];

        if (usuario.uspass !== uspass) {  // ⚠️ En producción, usar hash y bcrypt
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        return res.status(200).json({ message: 'Login exitoso', usuario });
    } catch (err) {
        return res.status(500).json({ error: 'Error en login: ' + err.message });
    }
}
