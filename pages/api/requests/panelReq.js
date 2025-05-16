// import connection from "../../../lib/db";

export const showItems = async(tabla) => {
    try{
      const response = await fetch(`/api/requests/${tabla}`,{
        method: 'GET',
      });

      if(!response.ok){
        throw new Error('error al obtener los elementos de la tabla: '+response.status);
      }

      const data = await response.json();
      console.log('elementos obtenidos: ', data);
      return data;

    }catch(error){
      throw new Error('Error en showItems: ', error);
    }

  }