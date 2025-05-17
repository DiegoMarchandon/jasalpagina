// pages/api/productos/update.js
import { updateProducto } from '../requests/producto';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { idproducto, data } = req.body;

  try {
    const affectedRows = await updateProducto(idproducto, data);
    res.status(200).json({ success: true, affectedRows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}