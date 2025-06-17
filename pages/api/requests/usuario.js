// Consultas relacionadas a usuarios
import supabase from "../../../lib/db"; //importo la conexión a la base de datos
import { parse } from 'cookie';
import jwt from 'jsonwebtoken';
/**
 * Obtiene todos los usuarios
 * 
 * SELECT * FROM usuario;
 * @return {object|error}
 */
export async function getAllUsuarios(){

    try{
        const {data,error} = await supabase.from('usuario').select('*');
        if(error) throw error;
        return data;
    } catch(error){
        throw new Error('getAllUsuarios error al obtener los usuarios: ' + error.message);
    }
}

/**
 * Obtiene un usuario por su ID 
 * 
 * SELECT * FROM usuario WHERE idusuario = ?
 * @param {int} idusuario
 * @return {object|error}
 */
export async function getUsuarioById(idusuario) {

    try{
        const {data,error} = await supabase.from('usuario').select('*').eq('id',idusuario);
        if(error) throw error;
        return data;
    }catch(error){
        throw new Error('getUsuarioById error al obtener al usuario: ' + error.message);
    }
}

/**
 * Crea un nuevo usuario
 * 
 * INSERT INTO usuario (usmail,usnombre,uspass) VALUES (?,?,?)
 * @param {object} usuarioData 
 * @return {true|error}
 */
export async function createUsuario(usuarioData) {

    try{
        var valores = {
            usmail: usuarioData.usmail,
            usnombre: usuarioData.usnombre,
            uspass: usuarioData.uspass
        };
        const {error} = await supabase.from('usuario').insert(valores);
        if(error) throw error;
        return true; 
    }catch(error){
        throw new Error('createUsuario error al crear usuario: '+error.message);
    }
}

/**
 * Actualiza un usuario
 * 
 * UPDATE usuario SET ... WHERE idusuario = ?
 * @param {int} idusuario 
 * @param {object} usuarioData //objeto usuario completo. Con todas sus propiedades.
 * @return {true|error} 
 */
export async function updateUsuario(idusuario, usuarioData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(usuarioData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('usuario').update(keyValues).eq('id',idusuario);
        if(error) throw error;
        return true;    
    }catch(error){
        throw new Error('updateUsuario error al actualizar usuario: '+error.message);
    }
}

/**
 * Elimina (deshabilita) un usuario.
 * 
 * UPDATE usuario SET ushabilitado = 0 WHERE idusuario = ?
 * @param {int} idusuario
 * @return {true|error}
 */
export async function deleteUsuario(idusuario) {
    
    try{
        const {error} = await supabase.from('usuario').delete().eq('id',idusuario);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteUsuario error al eliminar usuario: "+error.message);
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