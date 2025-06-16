// Consultas relacionadas a compras

import supabase from "../../../lib/db"; 

/**
 * Obtiene todas las compras
 * 
 * SELECT * FROM compra;
 * @return {array}
 */
export async function getAllCompras(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.query('SELECT * FROM compra;');
        return resultado;
    } catch(error){
        throw new Error('getAllCompras error al obtener las compras: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene una compra por su ID 
 * 
 * SELECT * FROM compra WHERE idcompra = ?
 * @param {int} idcompra
 * @return {object}
 */
export async function getCompraById(idcompra) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM compra WHERE idcompra = ?'+[idcompra]);
        return resultado;
    }catch(error){
        throw new Error('getCompraById error al obtener la compra :' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea una nueva compra
 * 
 * INSERT INTO compra (comprafecha) VALUES (?);
 * @param {object} comprafecha 
 * @return {int}
 */
export async function createCompra(comprafecha) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO compra (comprafecha) VALUES (?);';
        const [resultado] = await connection.execute(consulta,[comprafecha]);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createCompra error al crear compra: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza una compra
 * 
 * UPDATE compra SET ... WHERE idcompra = ?
 * @param {int} idcompra 
 * @param {object} compraData //objeto compra completo.
 * @return {int} 
 */
export async function updateCompra(idcompra, compraData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE compra SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(compraData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idcompra);
        query += ' WHERE idcompra = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateCompra error al actualizar compra: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina una compra.
 * 
 * DELETE FROM compra WHERE idcompra = ?
 * @param {int} idcompra
 * @return {int}
 */
export async function deleteCompra(idcompra) {

    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'DELETE FROM compra WHERE idcompra = ?';
        const [resultado] = await connection.execute(query,[idcompra]);
        return resultado;
    }catch(error){
        throw new Error("deleteCompra error al eliminar compra: "+error.message);
    }finally{
        if(connection) connection.release();
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