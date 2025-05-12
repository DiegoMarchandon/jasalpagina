// Consultas relacionadas a usuarios
import pool from "../../../lib/db"; //importo la conexión a la base de datos

/**
 * Obtiene todos los usuarios
 * 
 * SELECT * FROM usuario;
 * @return {array}
 */
export async function getAllUsuarios(){
    let connection;
    try{
        connection = await pool.getConnection(); //pido prestada del pool una conexión abierta
        // también podría hacer directamente pool.query() si no necesito hacer consultas en una misma conexión segura ni tampoco tener control
        const [getAllUsers] = await connection.query('SELECT * FROM usuario;');
        // hacer consulta SELECT * FROM usuario
        return getAllUsers;
    } catch(error){
        throw new Error('getAllUsuarios error al obtener los usuarios: ' + error.message);
    } finally {
        if(connection) connection.release(); //siempre liberamos (devolvemos) la conexión
    }
}

/**
 * Obtiene un usuario por su ID 
 * 
 * SELECT * FROM usuario WHERE idusuario = ?
 * @param {int} idusuario
 * @return {object}
 */
export async function getUsuarioById(idusuario) {
    let connection;
    try{
        connection = await pool.getConnection(); 
        const [resultado] = await connection.execute('SELECT * FROM usuario WHERE idusuario = ?'+[idusuario]);
        return resultado;
    }catch(error){
        throw new Error('getUsuarioById error al obtener al usuario: ' + error.message);
    }finally{
        if(connection) connection.release();
    }
}
/**
 * Crea un nuevo usuario
 * 
 * INSERT INTO usuario (usmail,usnombre,uspass) VALUES (?,?,?)
 * @param {object} usuarioData 
 * @return {int}
 */
export async function createUsuario(usuarioData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var consulta = 'INSERT INTO usuario (usmail,usnombre,uspass) VALUES (?,?,?)';
        var valores = [
            usuarioData.usmail,
            usuarioData.usnombre,
            usuarioData.uspass
        ];
        const [resultado] = await connection.execute(consulta,valores);
        return resultado.insertId;  //en los INSERT se puede usar el id para saber si se insertó 
    }catch(error){
        throw new Error('createUsuario error al crear usuario: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Actualiza un usuario
 * 
 * UPDATE usuario SET ... WHERE idusuario = ?
 * @param {int} idusuario 
 * @param {object} usuarioData //objeto usuario completo. Con todas sus propiedades.
 * @return {int} 
 */
export async function updateUsuario(idusuario, usuarioData) {
    let connection;
    try{
        connection = await pool.getConnection();
        var query = 'UPDATE usuario SET ';
        var valueParts = [];
        var notUndefined = 0; //contador para almacenar los distintos a undefined (si hay más de uno, agrego comas)
      for(const [campo,valor] of Object.entries(usuarioData)){
          if(valor !== undefined){
            notUndefined++;
            if(notUndefined > 1){
              query += ", ";
            }
              query += `${campo} = ?`;
            valueParts.push(valor);
          }
        }
      valueParts.push(idusuario);
        query += ' WHERE idusuario = ? ;';
        const [resultado] = await connection.execute(query, valueParts);
        return resultado.affectedRows; //acá se usa esto para saber si se actualizó algo
    }catch(error){
        throw new Error('updateUsuario error al actualizar usuario: '+error.message);
    }finally{
        if(connection) connection.release();
    }
}

/**
 * Elimina (deshabilita) un usuario.
 * 
 * UPDATE usuario SET ushabilitado = 0 WHERE idusuario = ?
 * @param {int} idusuario
 * @return {int}
 */
export async function deleteUsuario(idusuario) {
    // O solo actualizar ushabilitado a 0 (baja lógica)
    let connection;
    try{
        connection = await pool.getConnection();
        query = 'UPDATE usuario SET ushabilitado = 0 WHERE idusuario = ?';
        const [resultado] = await connection.execute(query,[idusuario]);
        return resultado.affectedRows;
    }catch(error){
        throw new Error("deleteUsuario error al eliminar usuario: "+error.message);
    }finally{
        if(connection) connection.release();
    }
}