
import supabase from "../../../lib/db"; 

/**
 * Obtiene todas las comptaitem
 * 
 * SELECT * FROM compraitem;
 * @return {object|error}
 */
export async function getAllCompraItems(){

    try{
        const {data,error} = await supabase.from('compraitem').select('*');
        if(error) throw error;
        
        return data;
    } catch(error){
        throw new Error('getAllCompraItems error al obtener las compraitems: ' + error.message);
    }
}

/**
 * Obtiene un compraitem por su ID 
 * 
 * SELECT * FROM compraitem WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @return {object|error}
 */
export async function getCompraItemById(idcompraitem) {

    try{
        const {data,error} = await supabase.from('compraitem').select('*').eq('id',idcompraitem);
        if(error)throw error;
        return data;   
    }catch(error){
        throw new Error('getCompraItemById error al obtener la compraitem: ' + error.message);
    }
}

/**
 * Crea una nueva compraitem
 * 
 * INSERT INTO compraitem (cicantidad,idcompra,idproducto) VALUES (?,?,?);
 * @param {object} compraitemData
 * @return {true|error}
 */
export async function createCompraItem(compraitemData) {

    try{
        var valores = {
            cicantidad:compraitemData.cicantidad,
            idcompra:compraitemData.idcompra,
            idproducto:compraitemData.idproducto
        };
        const {error} = await supabase.from('compraitem').insert(valores);
        
        if(error)throw error;
        return true;
    }catch(error){
        throw new Error('createCompraItem error al crear compraitem: '+error.message);
    }
}

/**
 * Actualiza un compraitem
 * 
 * UPDATE compraitem SET ... WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @param {object} compraItemData //objeto compraitem completo.
 * @return {true|error} 
 */
export async function updateCompraItem(idcompraitem, compraDataItem) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(compraDataItem)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('compraitem').update(keyValues).eq('id',idcompraitem);
        if(error) throw error;
        return true; 
    }catch(error){
        throw new Error('updateCompraItem error al actualizar compraitem: '+error.message);
    }
}

/**
 * Elimina una compraitem.
 * 
 * DELETE FROM compraitem WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @return {true|error}
 */
export async function deleteCompraItem(idcompraitem) {

    try{
        const {error} = await supabase.from('compraitem').delete().eq('id',idcompraitem);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteCompraItem error al eliminar compraitem: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function compraItemHandler(req,res){
    res.status(200).json({ message: "¡Hola desde compraitem!" });
}