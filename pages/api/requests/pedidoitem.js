import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los pedidoitems
 * 
 * SELECT * FROM pedidoitem;
 * @return {array}
 */
export async function getAllpedidoItems(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        
        const [respuesta] = await connection.query('SELECT * FROM pedidoitem;');

        return respuesta;
    } catch(error){
        throw new Error('getAllpedidoItems error al obtener los pedidoitems: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene un pedidoitem por su ID 
 * 
 * SELECT * FROM pedidoitem WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @return {object}
 */
export async function getPedidoItemById(idpedidoitem) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM pedidoitem WHERE idpedidoitem = ?'+[idpedidoitem]);
        return resultado;
    }catch(error){
        throw new Error('getPedidoItemById error al obtener el pedidoitem: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo pedido
 * 
 * INSERT INTO pedidoitem (cantidad,idpedido,idproducto) VALUES (?,?,?)
 * @param {object} pedidoItemData 
 * @return {int}
 */
export async function createPedidoItem(pedidoItemData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO pedidoitem (cantidad,idpedido,idproducto) VALUES (?,?,?);';
        var valores = [
            pedidoItemData.cantidad,
            pedidoItemData.idpedido,
            pedidoItemData.idproducto
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createPedidoItem error al crear pedidoitem: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un pedidoitem
 * 
 * UPDATE pedidoitem SET ... WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @param {object} pedidoItemData 
 * @return {int} 
 */
export async function updatePedidoItem(idpedidoitem, pedidoItemData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE pedidoitem SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(pedidoItemData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idpedidoitem);
        query += ' WHERE idpedidoitem = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updatePedidoItem error al actualizar pedidoitem: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina un pedidoitem.
 * 
 * DELETE FROM pedidoitem WHERE idpedidoitem = ?
 * @param {int} idpedidoitem
 * @return {int}
 */
export async function deletePedidoItem(idpedidoitem) {

    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'DELETE FROM pedidoitem WHERE idpedidoitem = ?';
        const [resultado] = await connection.execute(query,[idpedidoitem]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deletePedidoItem error al eliminar pedidoitem: "+error.message);
    }finally{
        if(connection) connection.release();
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