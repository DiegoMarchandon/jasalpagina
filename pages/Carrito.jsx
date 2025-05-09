import styles from '../styles/Carrito.module.css';
import { Pencil, Trash2 } from 'lucide-react'; 
import {useState,useEffect} from 'react';

function Carrito() {
    const [carritoElements, setCarritoElements] = useState([]);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    if (typeof window !== 'undefined') {
      const itemsAlmacenados = localStorage.getItem('itemsCarrito');
      setCarritoElements(itemsAlmacenados ? JSON.parse(itemsAlmacenados) : []);
    }
  }, []); // Solo se ejecuta una vez al montar el componente
    const carritoKeys = Object.keys(carritoElements);
    const carritoValues = Object.values(carritoElements);

    return (
        <div className={styles.carritoContainer}>
            <h2 className={styles.carritoTitle}>🛒 Carrito de compras</h2>
            {
                carritoKeys.length > 0 ? (
                    <>
                    {
                        carritoValues.map((elem, index) => (
                            <div key={index} className={styles.carritoItem}>
                                <h3>{elem.titulo}</h3>
                                <p><strong>Cantidad:</strong> {elem.cantidad}</p>
                                <p><strong>Precio unitario:</strong> ${elem.precio}</p>
                                <p><strong>Total:</strong> ${elem.precio * elem.cantidad}</p>
                                <button className={styles.carritoButtons}> <Pencil/> </button>
                                <button className={styles.carritoButtons}> <Trash2/> </button>
                            </div>
                        ))
                    }
                    <button className={styles.aceptarCarrito}>Confirmar compra</button>
                    </>
                ) : (
                    <p className={styles.carritoEmpty}>No hay productos en el carrito.</p>
                )
            }
        </div>
    );
}

export default Carrito;
