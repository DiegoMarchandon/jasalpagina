// Consultas relacionadas a productos

import pool from "../../../lib/db"; 

/**
 * Obtiene todos los productos
 * 
 * SELECT * FROM producto;
 * @return {array}
 */
export async function getAllProductos(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.query('SELECT * FROM producto;');
        return resultado;
    } catch(error){
        throw new Error('getAllProductos error al obtener los productos: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene un producto por su ID 
 * 
 * SELECT * FROM producto WHERE idproducto = ?
 * @param {int} idproducto
 * @return {object}
 */
export async function getProductoById(idproducto) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM producto WHERE idproducto = ?'+[idproducto]);
        return resultado;
    }catch(error){
        throw new Error('getProductoById error al obtener el producto: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo producto
 * 
 * INSERT INTO producto (detalleprod,nombreprod,origenprod,precioprod,stockprod) VALUES (?,?,?,?,?);
 * @param {object} productoData
 * @return {int}
 */
export async function createProducto(productoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO producto (detalleprod,nombreprod,origenprod,precioprod,stockprod) VALUES (?,?,?,?,?);';
        var valores = [
            productoData.detalleprod,
            productoData.nombreprod,
            productoData.origenprod,
            productoData.precioprod,
            productoData.stockprod
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createProducto error al crear producto: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un producto
 * 
 * UPDATE producto SET ... WHERE idproducto = ?
 * @param {int} idproducto 
 * @param {object} productoData //objeto producto completo. Con todas sus propiedades.
 * @return {int} 
 */
export async function updateProducto(idproducto, productoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE producto SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(productoData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idproducto);
        query += ' WHERE idproducto = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateProducto error al actualizar producto: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina un producto.
 * 
 * DELETE FROM producto WHERE idproducto = ?
 * @param {int} idproducto
 * @return {int}
 */
export async function deleteProducto(idproducto) {
    let connection;
    try{
        connection = await pool.getConnection();
        query = 'DELETE FROM producto WHERE idproducto = ?';
        const [resultado] = await connection.execute(query,[idproducto]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteProducto error al eliminar producto: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}