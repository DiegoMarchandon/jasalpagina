// Consultas relacionadas a usuarios
import supabase from "../../../lib/db"; //importo la conexión a la base de datos
import { parse } from 'cookie';
import jwt from 'jsonwebtoken';
/**
 * Obtiene todos los usuarios
 * 
 * SELECT * FROM usuario;
 * @return {array}
 */
export async function getAllUsuarios(){
    let connection;
    try{
        connection = await pool.getConnection(); //pido prestada del pool una conexión abierta
        // también podría hacer directamente pool.query() si no necesito hacer consultas en una misma conexión segura ni tampoco tener control
        const [getAllUsers] = await connection.query('SELECT * FROM usuario;');
        // hacer consulta SELECT * FROM usuario
        return getAllUsers;
    } catch(error){
        throw new Error('getAllUsuarios error al obtener los usuarios: ' + error.message);
    } finally {
        if(connection) connection.release(); //siempre liberamos (devolvemos) la conexión
    }
}

/**
 * Obtiene un usuario por su ID 
 * 
 * SELECT * FROM usuario WHERE idusuario = ?
 * @param {int} idusuario
 * @return {object}
 */
export async function getUsuarioById(idusuario) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM usuario WHERE idusuario = ?'+[idusuario]);
        return resultado;
    }catch(error){
        throw new Error('getUsuarioById error al obtener al usuario: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo usuario
 * 
 * INSERT INTO usuario (usmail,usnombre,uspass) VALUES (?,?,?)
 * @param {object} usuarioData 
 * @return {int}
 */
export async function createUsuario(usuarioData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO usuario (usmail,usnombre,uspass) VALUES (?,?,?);';
        var valores = [
            usuarioData.usmail,
            usuarioData.usnombre,
            usuarioData.uspass
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  //en los INSERT se puede usar el id para saber si se insertó 
    }catch(error){
        throw new Error('createUsuario error al crear usuario: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un usuario
 * 
 * UPDATE usuario SET ... WHERE idusuario = ?
 * @param {int} idusuario 
 * @param {object} usuarioData //objeto usuario completo. Con todas sus propiedades.
 * @return {int} 
 */
export async function updateUsuario(idusuario, usuarioData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE usuario SET ';
        var valueParts = [];
        var notUndefined = 0; //contador para almacenar los distintos a undefined (si hay más de uno, agrego comas)
      for(const [campo,valor] of Object.entries(usuarioData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idusuario);
        query += ' WHERE idusuario = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; //acá se usa esto para saber si se actualizó algo
    }catch(error){
        throw new Error('updateUsuario error al actualizar usuario: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina (deshabilita) un usuario.
 * 
 * UPDATE usuario SET ushabilitado = 0 WHERE idusuario = ?
 * @param {int} idusuario
 * @return {int}
 */
export async function deleteUsuario(idusuario) {
    // O solo actualizar ushabilitado a 0 (baja lógica)
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE usuario SET ushabilitado = 0 WHERE idusuario = ?';
        const [resultado] = await connection.execute(query,[idusuario]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteUsuario error al eliminar usuario: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}



// const JWT_SECRET = 'claveSecreta'; // 🔐 Usar variable de entorno en producción

export default function handler(req, res) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ usuario: decoded });
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}


/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
/* export default async function usuarioHandler(req,res){
    // res.status(200).json({ message: "¡Hola desde usuario!" });
    if(req.method === 'POST'){
        // createUsuario(req.body);
        const { usmail, usnombre, uspass } = req.body;

        if (!usmail || !usnombre || !uspass) {
            return res.status(400).json({ error: 'Faltan datos obligatorios' });
        }
        try{
            const nuevoId = await createUsuario(req.body);
            if(nuevoId){
                res.status(201).json({message: "usuario creado con éxito",id:nuevoId});
            }else{
                res.status(500).json({message: "no se pudo crear al usuario"});
            }
        }catch(error){
            console.log("+++");
            res.status(500).json({message: "Error del servidor",error:error.message});
        }
    } else res.status(405).json({message: "metodo no permitido"});
} */