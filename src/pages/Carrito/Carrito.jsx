import './Carrito.css';

function Carrito() {
    const carritoElements = JSON.parse(localStorage.getItem('itemsCarrito')) || [];

    const carritoKeys = Object.keys(carritoElements);
    const carritoValues = Object.values(carritoElements);

    return (
        <div className="carrito-container">
            <h2 className="carrito-title">🛒 Carrito de compras</h2>
            {
                carritoKeys.length > 0 ? (
                    <>
                    {
                        carritoValues.map((elem, index) => (
                            <div key={index} className="carrito-item">
                                <h3>{elem.titulo}</h3>
                                <p><strong>Cantidad:</strong> {elem.cantidad}</p>
                                <p><strong>Precio unitario:</strong> ${elem.precio}</p>
                                <p><strong>Total:</strong> ${elem.precio * elem.cantidad}</p>
                            </div>
                        ))
                    }
                    <button id='aceptarCarrito'>comprar</button>
                    </>
                ) : (
                    <p className="carrito-empty">No hay productos en el carrito.</p>
                )
            }
        </div>
    );
}

export default Carrito;
