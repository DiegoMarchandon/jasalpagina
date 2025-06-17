// Consultas relacionadas a mensajes
import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los mensajes
 * 
 * SELECT * FROM mensaje;
 * @return {object|error}
 */
export async function getAllMensajes(){

    try{
        const {data,error} = await supabase.from('mensaje').select('*');
        if(error) throw error;
        return data;
    } catch(error){
        throw new Error('getAllMensajes error al obtener los mensajes: ' + error.message);
    }
}

/**
 * Obtiene un mensaje por su ID 
 * 
 * SELECT * FROM mensaje WHERE idmensaje = ?
 * @param {int} idmensaje
 * @return {object|error}
 */
export async function getMensajeById(idmensaje) {

    try{
        const {data,error} = await supabase.from('mensaje').select('*').eq('id',idmensaje);

        if(error) throw error;

        return data;   
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
 * @return {true|error}
 */
export async function createMensaje(mensajeData) {

    try{
        var valores = {
            asunto:mensajeData.asunto,
            email:mensajeData.email,
            idusuario:mensajeData.idusuario,
            mensaje:mensajeData.mensaje,
            nombre:mensajeData.nombre
        };
        const {error} = await supabase.from('mensaje').insert(valores);
        if(error) throw error;
        return true;  
    }catch(error){
        throw new Error('createMensaje error al crear mensaje: '+error.message);
    }
}

/**
 * Actualiza un mensaje
 * 
 * UPDATE mensaje SET ... WHERE idmensaje = ?
 * @param {int} idmensaje 
 * @param {object} mensajeData 
 * @return {true|error} 
 */
export async function updateMensaje(idmensaje, mensajeData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(mensajeData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('mensaje').update(keyValues).eq('id',idmensaje);
        if(error) throw error;
        return true; 
    }catch(error){
        throw new Error('updateMensaje error al actualizar mensaje: '+error.message);
    }
}

/**
 * Elimina  un mensaje.
 * 
 * DELETE FROM mensaje WHERE idmensaje = ?
 * @param {int} idmensaje
 * @return {true|error}
 */
export async function deleteMensaje(idmensaje) {

    try{
        
        const {error} = await supabase.from('mensaje').delete().eq('id',idmensaje);
        
        if(error) throw error;
        return true;
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