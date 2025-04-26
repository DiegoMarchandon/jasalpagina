function Carrito() {
    const carritoElements = JSON.parse(localStorage.getItem('itemsCarrito'));


    const carritoKeys = Object.keys(carritoElements);
    const carritoValues = Object.values(carritoElements);

    return (
        <div>
            <h2>Carrito de compras</h2>
            {
                carritoKeys.length > 0 ? (
                    carritoValues.map((elem, index) => (
                        <div key={index}>
                            <h3>{elem.titulo}</h3>
                            <p>Cantidad: {elem.cantidad}</p>
                            <p>Precio: ${elem.precio}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en el carrito.</p>
                )
            }
        </div>
    );
}
export default Carrito;