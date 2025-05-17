// pages/api/productos/update.js

import { updateProducto } from '../producto';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { idproducto, data } = req.body;
    try {
      const result = await updateProducto(idproducto, data);
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
