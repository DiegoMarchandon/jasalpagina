// Consultas relacionadas a compras

import supabase from "../../../lib/db"; 

/**
 * Obtiene todas las compras
 * 
 * SELECT * FROM compra;
 * @return {object|error}
 */
export async function getAllCompras(){
    try{
        const {data,error} = await supabase.from('compra').select('*');
        console.log("Datos obtenidos: ",data);
        if(error){
            throw error;
        }
        return data;
    } catch(error){
        throw new Error('getAllCompras error al obtener las compras: ' + error.message);
    }
}

/**
 * Obtiene una compra por su ID 
 * 
 * SELECT * FROM compra WHERE idcompra = ?
 * @param {int} idcompra
 * @return {object|error}
 */
export async function getCompraById(idcompra) {

    try{
        const {data,error} = await supabase.from('compra').select('*').eq('id',idcompra);

        if(error){
            throw error;
        }

        return data;   
    }catch(error){
        throw new Error('getCompraById error al obtener la compra :' + error.message);
    }
}

/**
 * Crea una nueva compra
 * 
 * INSERT INTO compra (comprafecha) VALUES (?);
 * @param {object} comprafecha 
 * @return {true|error}
 */
export async function createCompra(comprafecha) {

    try{

        const {error} = await supabase.from('compra').insert({comprafecha:comprafecha})
        if(error)throw error;
        return true;
    }catch(error){
        throw new Error('createCompra error al crear compra: '+error.message);
    }
}

/**
 * Actualiza una compra
 * 
 * UPDATE compra SET ... WHERE idcompra = ?
 * @param {int} idcompra 
 * @param {object} compraData //objeto compra completo.
 * @return {true|error} 
 */
export async function updateCompra(idcompra, compraData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(compraData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('compra').update(keyValues).eq('id',idcompra);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('updateCompra error al actualizar compra: '+error.message);
    }
}

/**
 * Elimina una compra.
 * 
 * DELETE FROM compra WHERE idcompra = ?
 * @param {int} idcompra
 * @return {true|error}
 */
export async function deleteCompra(idcompra) {

    try{
        
        const {error} = await supabase.from('compra').delete().eq('id',idcompra);
        
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteCompra error al eliminar compra: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function compraHandler(req,res){
    res.status(200).json({ message: "¡Hola desde compra!", });
}