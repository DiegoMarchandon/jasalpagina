import { useState, useEffect } from 'react';
import styles from './css/EditarProductoModal.module.css';
import { getAllCategories } from '../pages/api/requests/utils';

const EditarProductoModal = ({ producto, onClose, onSubmit }) => {
    
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await getAllCategories();
        setCategorias(data);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };

    fetchCategorias();
  }, []);
    
  const [formData, setFormData] = useState({
    detalleprod: undefined,
    nombreprod: undefined,
    origenprod: undefined,
    precioprod: undefined,
    stockprod: undefined,
    categoriaprod: undefined,
    prodhabilitado: undefined
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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Editar Producto</h3>
        <p><strong>Nombre actual:</strong> {producto.nombreprod}</p>
        <p><strong>Precio actual:</strong> ${producto.precioprod}</p>
        <p><strong>Stock actual:</strong> {producto.stockprod}</p>
        <p><strong>detalle actual:</strong> ${producto.detalleprod}</p>
        <p><strong>origen actual:</strong> {producto.origenprod}</p>
        <p>Dejá en blanco los campos que no quieras modificar.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nuevo nombre"
            value={formData.nombreprod}
            onChange={handleChange}
          />
          <input
            type="number"
            name="precio"
            placeholder="Nuevo precio"
            value={formData.precioprod}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stock"
            placeholder="Nuevo stock"
            value={formData.stockprod}
            onChange={handleChange}
          />
          <label>
            <input
                type="radio"
                name="prodhabilitado"
                value="1"
                checked={formData.prodhabilitado === "1" || formData.prodhabilitado === 1}
                onChange={handleChange}
            />
            Habilitado
            </label>

            <label>
            <input
                type="radio"
                name="prodhabilitado"
                value="0"
                checked={formData.prodhabilitado === "0" || formData.prodhabilitado === 0}
                onChange={handleChange}
            />
            Deshabilitado
            </label>
          <input
            type="radio"
            name="prodhabilitado"
            placeholder="Nuevo habilitacion"
            value={formData.prodhabilitado}
            onChange={handleChange}
          />
          <select name="categoriaprod" value={formData.categoriaprod} onChange={handleChange}>
                <option value="">categoria actual</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>
                    {categoria}
                    </option>
                ))}
          </select>
          <select name="origen">
            {
                producto.origenprod === "jasal" ? (
                    <>
                        <option value="jasal">jasal</option>
                        <option value="estelario">estelario</option>
                    </>
                ): (
                    <>
                        <option value="estelario">estelario</option>
                        <option value="jasal">jasal</option>
                    </>
                )}
          </select>

          <div className={styles.buttons}>
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarProductoModal;