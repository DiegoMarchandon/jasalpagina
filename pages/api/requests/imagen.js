import supabase from "../../../lib/db"; 

/**
 * Obtiene todas los imagenes del producto
 * 
 * SELECT * FROM imagen;
 * @return {object|error}
 */
export async function getAllImagenes(){

    try{
        const {data,error} = await supabase.from('imagen').select('*');
        if(error) throw error;
        return data;
    } catch(error){
        throw new Error('getAllImagenes error al obtener las imagenes: ' + error.message);
    }
}

/**
 * Obtiene la imagen por su ID 
 * 
 * SELECT * FROM imagen WHERE idimagen = ?
 * @param {int} idimagen
 * @return {object|error}
 */
export async function getImagenById(idimagen) {
    try{
        const {data,error} = await supabase.from('imagen').select('*').eq('id',idimagen);
        if(error) throw error;
        return data;
    }catch(error){
        throw new Error('getImagenById error al obtener la imagen :' + error.message);
    }
}

/**
 * Crea una nueva imagen
 * 
 * INSERT INTO imagen (idimagen,imagen_url) VALUES (?,?);
 * @param {object} imagenData
 * @return {true|error}
 */
export async function createImagen(imagenData) {

    try{
        
        var valores = {
            idimagen: imagenData.idimagen,
            imagen_url: imagenData.imagen_url
        };
        const {error} = await supabase.from('imagen').insert(valores);
        if(error) throw error;
        return true;  
    }catch(error){
        throw new Error('createImagen error al crear imagen: '+error.message);
    }
}

/**
 * Actualiza una imagen
 * 
 * UPDATE imagen SET ... WHERE idimagen = ?
 * @param {int} idimagen
 * @param {object} imagenData 
 * @return {true|error} 
 */
export async function updateImagen(idimagen, imagenData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(imagenData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('imagen').update(keyValues).eq('id',idimagen);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('updateImagen error al actualizar imagen: '+error.message);
    }
}

/**
 * Elimina una imagen.
 * 
 * DELETE FROM imagen WHERE idimagen = ?
 * @param {int} idimagen
 * @return {true|error}
 */
export async function deleteImagen(idimagen) {

    try{
        const {error} = await supabase.from('imagen').delete().eq('id',idimagen);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteImagen error al eliminar imagen: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function imagenHandler(req,res){
    res.status(200).json({ message: "¡Hola desde imagen!" });
}