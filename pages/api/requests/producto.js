// Consultas relacionadas a productos

import supabase from "../../../lib/db"; 

/**
 * Obtiene todos los productos
 * 
 * SELECT * FROM producto;
 * @return {object|error}
 */
export async function getAllProductos(){

    try{
      const {data,error} = await supabase.from('producto').select('*');
      if(error) throw error;
      return data;
    } catch(error){
        throw new Error('getAllProductos error al obtener los productos: ' + error.message);
    }
}

/**
 * Obtiene un producto por su ID 
 * 
 * SELECT * FROM producto WHERE idproducto = ?
 * @param {int} idproducto
 * @return {object|error}
 */
export async function getProductoById(idproducto) {

    try{
      const {data,error} = await supabase.from('producto').select('*').eq('id',idproducto);

      if(error) throw error;

      return data;
    }catch(error){
        throw new Error('getProductoById error al obtener el producto: ' + error.message);
    }
}

/**
 * Crea un nuevo producto
 * 
 * INSERT INTO producto (detalleprod,nombreprod,origenprod,precioprod,stockprod) VALUES (?,?,?,?,?);
 * @param {object} productoData
 * @return {true|error}
 */
export async function createProducto(productoData) {
    try{

        var valores = {
            detalleprod: productoData.detalleprod,
            nombreprod: productoData.nombreprod,
            origenprod: productoData.origenprod,
            precioprod: productoData.precioprod,
            stockprod: productoData.stockprod
        };
        const {error} = await supabase.from('producto').insert(valores);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error('createProducto error al crear producto: '+error.message);
    }
}

/**
 * Actualiza un producto
 * 
 * UPDATE producto SET ... WHERE idproducto = ?
 * @param {int} idproducto 
 * @param {object} productoData //objeto producto completo. Con todas sus propiedades.
 * @return {true|error} 
 */
export async function updateProducto(idproducto, productoData) {

    try{
      var keyValues = {};
      for(const[key,value] of Object.entries(productoData)){
          if(value !== "" && value !== null && value !== undefined) keyValues[key] = value; 
      }

      if(Object.keys(keyValues).length === 0) throw new Error("No hay datos válidos para actualizar");

      const {error} = await supabase.from('producto').update(keyValues).eq('id',idproducto);
      if(error) throw error;
      return true; 
    }catch(error){
        throw new Error('updateProducto error al actualizar producto: '+error.message);
    }
}

/**
 * Elimina un producto.
 * 
 * DELETE FROM producto WHERE idproducto = ?
 * @param {int} idproducto
 * @return {true|error}
 */
export async function deleteProducto(idproducto) {

    try{
      const {error} = await supabase.from('producto').delete().eq('id',idproducto);
        if(error) throw error;
        return true;
    }catch(error){
        throw new Error("deleteProducto error al eliminar producto: "+error.message);
    }
}

/**
 * función encargada de manejar los requests(GET, POST, etc.)
 * req: request. Datos que llegan del cliente.
 * res: response. Respuesta que voy a devolver.
 */
// pages/api/requests/producto.js
export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { idproducto, ...productoData } = req.body;
    try {
      const result = await updateProducto(idproducto, productoData);
      res.status(200).json({ message: 'Producto actualizado', updated: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
