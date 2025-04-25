import './Mercaderia.css';
import {useState, useEffect, useRef} from 'react';
import {merch} from '../../services/services.js';
import flecha from '../../../src/assets/right-arrow.png';

function Mercaderia(){

    // utilizo useRef para almacenar referencia al input
    const inputRefs = useRef([]);
    
    // useState para reflejar cuál es la imagen actual de cada item.
        // creo un nuevo arreglo con la longitud de la cantidad de items
        // a ese arreglo, inicializo sus elementos en 0 con fill() para hacer referencia a la imagen inicial
    const [arrPics, setArrPics] = useState(new Array(merch.length).fill(0));

    // necesito una variable de estado para que, cada vez que cambie su valor, el efecto se dispare.
    const [carritoItems, setCarritoItems] = useState(() => {
        return JSON.parse(localStorage.getItem('itemsCarrito')) || [];
    });
    // funciones para modificar el indice de la imagen correspondiente:
    function prevIMGHandler(index){
        const actualArr = [...arrPics];
        actualArr[index] = (arrPics[index]-1 + merch[index].images.length) % merch[index].images.length;
        setArrPics(actualArr);
        
        // console.log("prev IMG",index);
        return actualArr;
    }
    function nextIMGHandler(index){
        const actualArr = [...arrPics];
        actualArr[index] = (arrPics[index]+1) % merch[index].images.length;
        setArrPics(actualArr);
        // console.log("next IMG",index);
        return actualArr;
    }

    // obtener el carrito actual desde localStorage (y parsearlo si existe)
    function agregarAlCarrito(item,index) {
        // Obtener el carrito actual desde localStorage (y parsearlo si existe)
        const carritoActual = JSON.parse(localStorage.getItem('itemsCarrito')) || [];
    
        // console.log(carritoActual);

        const cantidadSelec = Number(inputRefs.current[index]?.value) || 0; //obtengo el valor ingresado

        if(cantidadSelec > 0){

            const itemExistente = carritoActual.find((producto) => producto.id === item.id);
            
            // Agregar el nuevo item al carrito formateado
            const itemFormateado = {
                id: item.id,
                titulo: item.title,
                precio: item.price,
                cantidad: cantidadSelec
            };

            if (itemExistente) {
                itemExistente.cantidad += Number(cantidadSelec); // Actualizar cantidad del ítem existente
            } else {
                carritoActual.push(itemFormateado); // Agregar nuevo ítem
            }
            const nuevoCarrito = [...carritoActual];
        
            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('itemsCarrito', JSON.stringify(nuevoCarrito));
        
            // Actualizar el estado
            setCarritoItems(nuevoCarrito);
        
            console.log("Ítem agregado al carrito:", itemFormateado,". Nuevo local storage: ",nuevoCarrito);
        }else{
            alert("ingrese una cantidad válida");
        }
    }

    return (

        <div>
            <h1 id='merch-main-title'>mi mercadería</h1>
            <div className='merch-container'>
                {
                // en JSX, cualquier lógica de renderizado dinámica (o código JS) debe ir entre {}
                merch.map((item,index) => (
                    <div key={item.id} className="merch-item">

                        <div className='images-container'>
                            <button className='prev item-button' onClick={() => prevIMGHandler(index)} style={{transform:'rotate(180deg)'}}><img src={flecha} alt="flecha logo" /></button>
                            <img className='item-image' src={item.images[arrPics[index]]} alt={item.alt} />
                            <button className='next item-button' onClick={() => nextIMGHandler(index)}><img src={flecha} alt="flecha logo" /></button>
                        </div>
                        <div className='item-text-container'>
                            <h3 className='item-title'>{item.title}</h3>
                            <p className='item-price'>Precio: ${item.price}</p>
                            <p className='item-description'>{item.description}</p>
                            <p className='item-cantidad'>Cantidad: ({item.cantidades} unidades disponibles)</p>
                            <div>
                                <input type="number" name="inputCantidad" className="inputCantidad" min="0" max={item.cantidades} />
                                <button onClick={() => agregarAlCarrito(item,index)}>Agregar al carrito</button>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

    );
}

export default Mercaderia;