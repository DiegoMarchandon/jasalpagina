// import pool from "../../../lib/db";
// import { updateProducto } from "./producto";
export const showItems = async(tabla) => {
    try{
      const response = await fetch(`/api/requests/dinamic/${tabla}`,{
        method: 'GET',
      });

      if(!response.ok){
        throw new Error('error al obtener los elementos de la tabla: '+response.status);
      }

      const data = await response.json();
      console.log('elementos obtenidos: ', [data]);
      // console.log("1er elem: ", [data][0].usuario)
      return data;

    }catch(error){
      throw new Error('Error en showItems: '+ error.message);
    }

  }

  