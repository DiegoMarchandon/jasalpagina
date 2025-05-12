import pool from "../../../lib/db"; 

/**
 * Obtiene todas los imagenes del producto
 * 
 * SELECT * FROM imagen;
 * @return {array}
 */
export async function getAllImagenes(){
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.query('SELECT * FROM imagen;');
        return resultado;
    } catch(error){
        throw new Error('getAllImagenes error al obtener las imagenes: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
}

/**
 * Obtiene la imagen por su ID 
 * 
 * SELECT * FROM imagen WHERE idimagen = ?
 * @param {int} idimagen
 * @return {object}
 */
export async function getImagenById(idimagen) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM imagen WHERE idimagen = ?'+[idimagen]);
        return resultado;
    }catch(error){
        throw new Error('getImagenById error al obtener la imagen :' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea una nueva imagen
 * 
 * INSERT INTO imagen (idproducto,imagen_url) VALUES (?,?);
 * @param {object} imagenData
 * @return {int}
 */
export async function createImagen(imagenData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO imagen (idproducto,imagen_url) VALUES (?,?);';
        var valores = [
            imagenData.idproducto,
            imagenData.imagen_url
        ];
        const [resultado] = await connection.execute(consulta,[valores]);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createImagen error al crear imagen: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza una imagen
 * 
 * UPDATE imagen SET ... WHERE idimagen = ?
 * @param {int} idimagen
 * @param {object} imagenData 
 * @return {int} 
 */
export async function updateImagen(idimagen, imagenData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE imagen SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(imagenData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idimagen);
        query += ' WHERE idimagen = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateImagen error al actualizar imagen: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina una imagen.
 * 
 * DELETE FROM imagen WHERE idimagen = ?
 * @param {int} idimagen
 * @return {int}
 */
export async function deleteImagen(idimagen) {
    let connection;
    try{
        connection = await pool.getConnection();
        query = 'DELETE FROM imagen WHERE idimagen = ?';
        const [resultado] = await connection.execute(query,[idimagen]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteImagen error al eliminar imagen: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}