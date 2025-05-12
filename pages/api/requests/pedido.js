import pool from "../../../lib/db"; 

/**
 * Obtiene todos los pedidos
 * 
 * SELECT * FROM pedido;
 * @return {array}
 */
export async function getAllPedidos(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        
        const [respuesta] = await connection.query('SELECT * FROM pedido;');

        return respuesta;
    } catch(error){
        throw new Error('getAllPedidos error al obtener los pedidos: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene un pedido por su ID 
 * 
 * SELECT * FROM pedido WHERE idpedido = ?
 * @param {int} idpedido
 * @return {object}
 */
export async function getPedidoById(idpedido) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM pedido WHERE idpedido = ?'+[idpedido]);
        return resultado;
    }catch(error){
        throw new Error('getPedidoById error al obtener el pedido: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo pedido
 * 
 * INSERT INTO pedido (estadoPedido,idusuario) VALUES (?,?);
 * @param {object} pedidoData 
 * @return {int}
 */
export async function createPedido(pedidoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO pedido (estadoPedido,idusuario) VALUES (?,?);';
        var valores = [
            pedidoData.estadoPedido,
            pedidoData.idusuario
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createPedido error al crear pedido: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un pedido
 * 
 * UPDATE pedido SET ... WHERE idpedido = ?
 * @param {int} idpedido
 * @param {object} pedidoData 
 * @return {int} 
 */
export async function updatePedido(idpedido, pedidoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE pedido SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(pedidoData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idpedido);
        query += ' WHERE idpedido = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updatePedido error al actualizar pedido: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina  un pedido.
 * 
 * DELETE FROM pedido WHERE idpedido = ?
 * @param {int} idpedido
 * @return {int}
 */
export async function deletePedido(idpedido) {

    let connection;
    try{
        connection = await pool.getConnection();
        query = 'DELETE FROM pedido WHERE idpedido = ?';
        const [resultado] = await connection.execute(query,[idpedido]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deletePedido error al eliminar pedido: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}