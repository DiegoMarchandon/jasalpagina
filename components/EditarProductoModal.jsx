import { useState } from 'react';
import styles from './css/EditarProductoModal.module.css';

const EditarProductoModal = ({ producto, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Editar Producto</h3>
        <p><strong>Nombre actual:</strong> {producto.nombre}</p>
        <p><strong>Precio actual:</strong> ${producto.precio}</p>
        <p><strong>Stock actual:</strong> {producto.stock}</p>
        <p>Dejá en blanco los campos que no quieras modificar.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nuevo nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type="number"
            name="precio"
            placeholder="Nuevo precio"
            value={formData.precio}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Nuevo stock"
            value={formData.stock}
            onChange={handleChange}
          />
          <div style={styles.buttons}>
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProductoModal;