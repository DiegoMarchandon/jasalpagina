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
        return JSON.parse(localStorage.getItem('itemsCarrito'));
    });

    // actualización automática: cada vez que carritoItems cambie, este useEffect guarda los datos actualizados en el localStorage
    useEffect(() => {
        localStorage.setItem('itemsCarrito', JSON.stringify(carritoItems));
    }, [carritoItems]);
    

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

        const cantidadSelec = Number(inputRefs.current[index]?.value) || 0; //obtengo el valor ingresado
        
        if(cantidadSelec > 0){
            // Obtener el carrito actual desde localStorage (y parsearlo si existe)
            const carritoActual = JSON.parse(localStorage.getItem('itemsCarrito'));
            
            // carritoActual = {}
            // localStorage.getItem('itemsCarrito') = {}
            // typeof(carritoActual) = object
            // typeof(inputRefs) = object
            
            // Agregar el nuevo item al carrito formateado
            const itemFormateado = {
                id: item.id,
                titulo: item.title,
                precio: item.price,
                cantidad: cantidadSelec
            };

            const cantKeys = Object.keys(carritoActual).length;
            console.log("cantKeys: ", cantKeys);
            // si continúa siendo un objeto vacío (sin elementos) pusheo el primero:
            if(cantKeys === 0){
                carritoActual[0] = itemFormateado;
                // localStorage.setItem('itemsCarrito',)
            }else{ //si ya tiene elementos, realizo una comparación por si el usuario agrega más elementos del mismo producto
                const itemExistente = Object.values(carritoActual).find((producto) => producto.id === item.id);
                if (itemExistente) {
                    itemExistente.cantidad += Number(cantidadSelec); // Actualizar cantidad del ítem existente
                } else {
                    carritoActual[cantKeys] = itemFormateado; // Agregar nuevo ítem
                }
            }
            
            console.log("carrito actual: ",carritoActual)
            // const nuevoCarrito = [...carritoActual];
        
            
            // Actualizar el estado
            setCarritoItems(carritoActual);
            
            // Guardar el carrito actualizado en localStorage
            localStorage.setItem('itemsCarrito', JSON.stringify(carritoActual));
        
            console.log("Ítem agregado al carrito:", itemFormateado,". Nuevo local storage: ",carritoActual);
        }else{
            alert("ingrese una cantidad válida");
        }
    }

    return (

        <div id= "merch-container">
            <h1 id='merch-main-title'>mi mercadería</h1>
            <div id="panel-merch-container">
                
            </div>
            <div id='cards-container'>
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
                                <input type="number" name="inputCantidad" className="inputCantidad" min="0" max={item.cantidades} ref={(valor) => inputRefs.current[index] = valor}/>
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