
import supabase from "../../../lib/db"; 

/**
 * Obtiene todas las comptaitem
 * 
 * SELECT * FROM compraitem;
 * @return {array}
 */
export async function getAllCompraItems(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.query('SELECT * FROM compraitem;');
        return resultado;
    } catch(error){
        throw new Error('getAllCompraItems error al obtener las compraitems: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene un compraitem por su ID 
 * 
 * SELECT * FROM compraitem WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @return {object}
 */
export async function getCompraItemById(idcompraitem) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM compraitem WHERE idcompraitem = ?'+[idcompraitem]);
        return resultado;
    }catch(error){
        throw new Error('getCompraItemById error al obtener la compraitem: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea una nueva compraitem
 * 
 * INSERT INTO compraitem (cicantidad,idcompra,idproducto) VALUES (?,?,?);
 * @param {object} compraitemData
 * @return {int}
 */
export async function createCompraItem(compraitemData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO compraitem (cicantidad,idcompra,idproducto) VALUES (?,?,?);';
        var valores = [
            compraitemData.cicantidad,
            compraitemData.idcompra,
            compraitemData.idproducto
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createCompraItem error al crear compraitem: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un compraitem
 * 
 * UPDATE compraitem SET ... WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @param {object} compraItemData //objeto compraitem completo.
 * @return {int} 
 */
export async function updateCompraItem(idcompraitem, compraDataItem) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE compraitem SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(compraDataItem)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idcompraitem);
        query += ' WHERE idcompraitem = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateCompraItem error al actualizar compraitem: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina una compraitem.
 * 
 * DELETE FROM compraitem WHERE idcompraitem = ?
 * @param {int} idcompraitem
 * @return {int}
 */
export async function deleteCompraItem(idcompraitem) {

    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'DELETE FROM compraitem WHERE idcompraitem = ?';
        const [resultado] = await connection.execute(query,[idcompraitem]);
        return resultado;
    }catch(error){
        throw new Error("deleteCompraItem error al eliminar compraitem: "+error.message);
    }finally{
        if(connection) connection.release();
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