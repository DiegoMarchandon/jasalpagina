import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los pedidoitems
 * 
 * SELECT * FROM pedidoitem;
 * @return {object|error}
 */
export async function getAllpedidoItems(){

    try{
        const {data,error} = await supabase.from('pedidoitem').select('*');
        if(error) throw error;
        return data;
    } catch(error){
        throw new Error('getAllpedidoItems error al obtener los pedidoitems: ' + error.message);
    }
}

/**
 * Obtiene un pedidoitem por su ID 
 * 
 * SELECT * FROM pedidoitem WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @return {object|error}
 */
export async function getPedidoItemById(idpedidoitem) {

    try{
        const {data,error} = await supabase.from('pedidoitem').select('*').eq('id',idpedidoitem);

        if(error) throw error;

        return data;
    }catch(error){
        throw new Error('getPedidoItemById error al obtener el pedidoitem: ' + error.message);
    }
}

/**
 * Crea un nuevo pedidoitem
 * 
 * INSERT INTO pedidoitem (cantidad,idpedido,idproducto) VALUES (?,?,?)
 * @param {object} pedidoItemData 
 * @return {true|error}
 */
export async function createPedidoItem(pedidoItemData) {

    try{
        var valores = {
            cantidad: pedidoItemData.cantidad,
            idpedido: pedidoItemData.idpedido,
            idproducto: pedidoItemData.idproducto
        };
        const {error} = await supabase.from('pedidoitem').insert(valores);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('createPedidoItem error al crear pedidoitem: '+error.message);
    }
}

/**
 * Actualiza un pedidoitem
 * 
 * UPDATE pedidoitem SET ... WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @param {object} pedidoItemData 
 * @return {true|error} 
 */
export async function updatePedidoItem(idpedidoitem, pedidoItemData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(pedidoItemData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('pedidoitem').update(keyValues).eq('id',idpedidoitem);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('updatePedidoItem error al actualizar pedidoitem: '+error.message);
    }
}

/**
 * Elimina un pedidoitem.
 * 
 * DELETE FROM pedidoitem WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @return {true|error}
 */
export async function deletePedidoItem(idpedidoitem) {

    try{
        const {error} = await supabase.from('pedidoitem').delete().eq('id',idpedidoitem);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deletePedidoItem error al eliminar pedidoitem: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function pedidoItemHandler(req,res){
    res.status(200).json({ message: "¡Hola desde pedidoitem!" });
}