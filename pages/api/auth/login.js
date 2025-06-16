import supabase from "../../../lib/db";
import {serialize} from 'cookie';
import jwt from 'jsonwebtoken';

// const JWT_SECRET = 'claveSecreta'; // 🔐 Usá una variable de entorno en producción

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

        // genero JWT 
        const token = jwt.sign(
            {
                id:usuario.idusuario, usnombre: usuario.usnombre},
                process.env.JWT_SECRET,
                {expiresIn: '1h'}
        );
        // envío el token en una cookie HttpOnly
        res.setHeader(
            'Set-Cookie',
            serialize('token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/',
            })
        );

        // evitamos enviar la contraseña en la respuesta
        const { uspass: _, ...usuarioSinPassword}=usuario;

        

        return res.status(200).json({ message: 'Login exitoso', usuario });
    } catch (err) {
        return res.status(500).json({ error: 'Error en login: ' + err.message });
    }
}
