// funciones utilitarias (relacionadas con la lógica de presentación) que hacen fetch 
  // a endpoints del backend y son llamadas en el frontend (intermediarias)
  // de esta manera, la lógica de mysql2 se ejecuta en el servidor (node.js) 
  // y me evito conflictos al ejecutar funciones del back que llaman a dependencias 
  // que no existen en el front.

export const showItems = async(tabla) => {
    try{
      const response = await fetch(`/api/requests/endpoints/${tabla}`,{
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

export const actualizarProducto = async(idproducto,producto) => {
    try{
      const response = await fetch(`/api/requests/producto`,{
        method: 'PUT',
      });

      if(!response.ok){
        throw new Error('error al actualizar el producto con id '+idproducto+':'+response.status);
      }
    
    }catch(error){
      throw new Error('Error en actualizarProducto: '+ error.message);
    }
}

/* 
Lamentablemente, no es posible llamar directamente 
a una función del backend como updateProducto desde 
el frontend sin configurar un endpoint.

updateProducto seguramente usa mysql2, lo cual:
Solo se puede ejecutar en Node.js (servidor).
No funciona en el navegador, porque requiere módulos 
de bajo nivel (net, tls, etc.) que no existen en el entorno del navegador.

El frontend (React, Next.js, etc.) solo puede comunicarse con el backend 
por medio de solicitudes/peticiones HTTP fetch, axios o WebSockets. Por eso necesitás un endpoint (una función API) que actúe como puente.
*/