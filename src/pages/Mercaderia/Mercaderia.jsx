import './Mercaderia.css';
import {useState, useEffect} from 'react';
import {merch} from '../../services/services.js';
import flecha from '../../../src/assets/right-arrow.png';

function Mercaderia(){

    // useState para reflejar cuál es la imagen actual de cada item.
        // creo un nuevo arreglo con la longitud de la cantidad de items
        // a ese arreglo, inicializo sus elementos en 0 con fill() para hacer referencia a la imagen inicial
    const [arrPics, setArrPics] = useState(new Array(merch.length).fill(0));

    /* merch.map((item,index) => {
        console.log("cantidad de fotos del item: nro ",index,":",item.images.length);
        console.log("cantidad de items:",merch.length);
    }); */

    // funciones para modificar el indice de la imagen correspondiente:
    function prevIMGHandler(index){
        const actualArr = [...arrPics];
        actualArr[index] = (arrPics[index]-1 + merch[index].images.length) % merch[index].images.length;
        setArrPics(actualArr);
        
        console.log("prev IMG",index);
        return actualArr;
    }
    function nextIMGHandler(index){
        const actualArr = [...arrPics];
        actualArr[index] = (arrPics[index]+1) % merch[index].images.length;
        setArrPics(actualArr);
        console.log("next IMG",index);
        return actualArr;
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
                        <h2 className='item-text item-title'>{item.title}</h2>
                        <p className='item-text item-price'>Precio: ${item.price}</p>
                        <p className='item-text item-description'>{item.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    // <h1>Bienvenido a la mercaderia de la artista</h1>
    );
}

export default Mercaderia;