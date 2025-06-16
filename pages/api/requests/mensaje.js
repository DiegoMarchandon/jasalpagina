// Consultas relacionadas a mensajes
import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los mensajes
 * 
 * SELECT * FROM mensaje;
 * @return {array}
 */
export async function getAllMensajes(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        
        const [respuesta] = await connection.query('SELECT * FROM mensaje;');

        return respuesta;
    } catch(error){
        throw new Error('getAllMensajes error al obtener los mensajes: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene un mensaje por su ID 
 * 
 * SELECT * FROM mensaje WHERE idmensaje = ?
 * @param {int} idmensaje
 * @return {object}
 */
export async function getMensajeById(idmensaje) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM mensaje WHERE idmensaje = ?'+[idmensaje]);
        return resultado;
    }catch(error){
        throw new Error('getMensajeById error al obtener al mensaje: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo mensaje
 * 
 * INSERT INTO mensaje (asunto,email,idusuario,mensajecontacto,nombre) VALUES (?,?,?)
 * @param {object} mensajeData 
 * @return {int}
 */
export async function createMensaje(mensajeData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO mensaje (asunto,email,idusuario,mensajecontacto,nombre) VALUES (?,?,?,?,?);';
        var valores = [
            mensajeData.asunto,
            mensajeData.email,
            mensajeData.idusuario,
            mensajeData.mensaje,
            mensajeData.nombre
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createMensaje error al crear mensaje: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un mensaje
 * 
 * UPDATE mensaje SET ... WHERE idmensaje = ?
 * @param {int} idmensaje 
 * @param {object} mensajeData 
 * @return {int} 
 */
export async function updateMensaje(idmensaje, mensajeData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE mensaje SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(mensajeData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idmensaje);
        query += ' WHERE idmensaje = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateMensaje error al actualizar mensaje: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina  un mensaje.
 * 
 * DELETE FROM mensaje WHERE idmensaje = ?
 * @param {int} idmensaje
 * @return {int}
 */
export async function deleteMensaje(idmensaje) {

    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'DELETE FROM mensaje WHERE idmensaje = ?';
        const [resultado] = await connection.execute(query,[idmensaje]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteMensaje error al eliminar mensaje: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function mensajeHandler(req,res){
    res.status(200).json({ message: "¡Hola desde mensaje!" });
}