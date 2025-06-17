import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los pedidos
 * 
 * SELECT * FROM pedido;
 * @return {object|error}
 */
export async function getAllPedidos(){

    try{
        const {data,error} = await supabase.from('pedido').select('*');
        if(error) throw error;
        return data;
    } catch(error){
        throw new Error('getAllPedidos error al obtener los pedidos: ' + error.message);
    } 
}

/**
 * Obtiene un pedido por su ID 
 * 
 * SELECT * FROM pedido WHERE idpedido = ?
 * @param {int} idpedido
 * @return {object|error}
 */
export async function getPedidoById(idpedido) {

    try{
        const {data,error} = await supabase.from('pedido').select('*').eq('id',idpedido);
        if(error) throw error;
        return data;
    }catch(error){
        throw new Error('getPedidoById error al obtener el pedido: ' + error.message);
    }
}

/**
 * Crea un nuevo pedido
 * 
 * INSERT INTO pedido (estadoPedido,idusuario) VALUES (?,?);
 * @param {object} pedidoData 
 * @return {true|error}
 */
export async function createPedido(pedidoData) {

    try{
        var valores = {
            estadoPedido: pedidoData.estadoPedido,
            idusuario: pedidoData.idusuario
        };
        const {error} = await supabase.from('pedido').insert(valores);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('createPedido error al crear pedido: '+error.message);
    }
}

/**
 * Actualiza un pedido
 * 
 * UPDATE pedido SET ... WHERE idpedido = ?
 * @param {int} idpedido
 * @param {object} pedidoData 
 * @return {true|error} 
 */
export async function updatePedido(idpedido, pedidoData) {

    try{
        var keyValues = {};
        for(const[key,value] of Object.entries(pedidoData)){
            if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
        }

        if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

        const {error} = await supabase.from('pedido').update(keyValues).eq('id',idpedido);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('updatePedido error al actualizar pedido: '+error.message);
    }
}

/**
 * Elimina  un pedido.
 * 
 * DELETE FROM pedido WHERE idpedido = ?
 * @param {int} idpedido
 * @return {true|error}
 */
export async function deletePedido(idpedido) {
    try{
        const {error} = await supabase.from('pedido').delete().eq('id',idpedido);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deletePedido error al eliminar pedido: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
export default function pedidoHandler(req,res){
    res.status(200).json({ message: "¡Hola desde pedido!" });
}