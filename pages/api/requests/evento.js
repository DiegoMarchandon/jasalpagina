// consultas relacionadas a eventos
import pool from "../../../lib/db"; 

/**
 * Obtiene todas las compras
 * 
 * SELECT * FROM evento;
 * @return {array}
 */
export async function getAllEventos(){
    let connection;
    try{
        connection = await pool.getConnection(); //pido prestada del pool una conexión abierta
        // también podría hacer directamente pool.query() si no necesito hacer consultas en una misma conexión segura ni tampoco tener control
        const [resultado] = await connection.query('SELECT * FROM evento;');
        return resultado;
    } catch(error){
        throw new Error('getAllEventos error al obtener los eventos:' + error.message);
    } finally {
        if(connection) connection.release(); //siempre liberamos (devolvemos) la conexión
    }
}

/**
 * Obtiene un evento por su ID 
 * 
 * SELECT * FROM evento WHERE idevento = ?
 * @param {int} idevento
 * @return {object}
 */
export async function getEventoById(idevento) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM evento WHERE idevento = ?'+[idevento]);
        return resultado;
    }catch(error){
        throw new Error('getEventoById error al obtener el evento:' + error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Crea un nuevo evento
 * 
 * INSERT INTO evento (eventofecha, eventolugar, eventourl) VALUES (?,?,?);
 * @param {object} idevento
 * @return {int}
 */
export async function createEvento(eventoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var valores = [
            eventoData.eventofecha,
            eventoData.eventolugar,
            eventoData.eventourl
        ];
        var consulta = 'INSERT INTO evento (eventofecha, eventolugar, eventourl) VALUES (?,?,?);';
        const [resultado] = await connection.execute(consulta,[valores]);
        return resultado.insertId;  
    }catch(error){
        throw new Error('createCompra error al crear compra: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un evento
 * 
 * UPDATE evento SET ... WHERE idevento = ?
 * @param {int} idevento
 * @param {object} eventoData 
 * @return {int} 
 */
export async function updateEvento(idevento, eventoData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE evento SET ';
        var valueParts = [];
        var notUndefined = 0; 
      for(const [campo,valor] of Object.entries(eventoData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idevento);
        query += ' WHERE idevento = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; 
    }catch(error){
        throw new Error('updateEvento error al actualizar evento: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina un evento.
 * 
 * DELETE FROM evento WHERE idevento = ?
 * @param {int} idevento
 * @return {int}
 */
export async function deleteEvento(idevento) {
    let connection;
    try{
        connection = await pool.getConnection();
        query = 'DELETE FROM evento WHERE idevento = ?';
        const [resultado] = await connection.execute(query,[idevento]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteEvento error al eliminar evento: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}