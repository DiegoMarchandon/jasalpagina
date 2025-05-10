// Un API route es un archivo que exporta una función que maneja peticiones (req, res).
import connection from "../../../lib/db";
/* 
Este archivo:
Recibirá datos enviados por el formulario.
Conectará a la base de datos usando mysql2.
Insertará (o leerá) datos en la tabla Contacto.

*/

// función para traer un contacto por su id
export async function getContactoById(){
    // 1. Escribir una consulta SQL SELECT que busque un contacto donde idcontacto sea igual a id recibido
  // 2. Ejecutar esa consulta usando pool.query o pool.execute
  // 3. Retornar el resultado (normalmente un array de objetos)
}

// función para crear (insertar) un nuevo contacto
// export async function crearC