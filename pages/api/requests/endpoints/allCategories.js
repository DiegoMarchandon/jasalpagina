// pages/api/productos/update.js
// import { updateProducto } from '../producto';
import supabase from "../../../../lib/db"; 

export default async function handler(req,res) {
    
    let connection;
    try{
        connection = await pool.getConnection(); 
        const resultado = await connection.query(`SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'producto' AND COLUMN_NAME = 'categoriaprod' AND TABLE_SCHEMA = 'bd_jasal';`);
        const enumStr = resultado[0][0]?.COLUMN_TYPE;  // accedés al string
        // console.log("Resultado completo[0]:", resultado[0][0]);
        const cleaned = enumStr.replace(/^enum\(|\)$/g, '');
        const valores = cleaned.split("','").map(valor => valor.replace(/^'|'$/g, ''));

        res.status(200).json(valores);
    } catch(error){
        throw new Error('handler allCategories error al obtener los productos: ' + error.message);
    } finally {
        if(connection) connection.release(); 
    }
  
}