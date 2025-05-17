// pages/api/requests/[tabla].js
import { getAllUsuarios } from "../usuario";
import { getAllPedidos } from "../pedido";
import { getAllCompras } from "../compra";
import { getAllEventos } from "../evento";
import { getAllProductos } from "../producto";
import { getAllMensajes } from "../mensaje";

const tablaToFunctionMap = {
  compra: getAllCompras,
  usuario: getAllUsuarios,
  pedido: getAllPedidos,
  evento: getAllEventos,
  producto: getAllProductos,
  mensaje: getAllMensajes
};

export default async function handler(req, res) {
  const { tabla } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const getAllFunction = tablaToFunctionMap[tabla];

  if (!getAllFunction) {
    return res.status(400).json({ message: `No hay función definida para la tabla "${tabla}"` });
  }

  try {
    const data = await getAllFunction();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: `Error al obtener datos de ${tabla}: ${error.message}` });
  }
}
