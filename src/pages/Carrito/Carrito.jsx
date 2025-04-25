function Carrito(){
    
    const carritoElements = JSON.parse(localStorage.getItem('itemsCarrito'));
    console.log(carritoElements);
    return(
        <div>
            {
            carritoElements.map((elem,index) => (
                <div>
                    <h1>{elem.titulo}</h1>
                </div>
            ))
            }
        </div>
    );
}

export default Carrito;