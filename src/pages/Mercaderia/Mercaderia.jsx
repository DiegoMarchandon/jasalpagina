import './Mercaderia.css';
import {merch} from '../../services/services.js';
import flecha from '../../../src/assets/right-arrow.png';

function Mercaderia(){
    return (
  
        <div>
                <h1 id='merch-main-title'>mi mercadería</h1>
            <div className='merch-container'>
                {
                // en JSX, cualquier lógica de renderizado dinámica (o código JS) debe ir entre {}
                merch.map(item => (
                    <div key={item.id} className="merch-item">
                        <div className='images-container'>
                  
                            <button className='prev item-button' style={{transform:'rotate(180deg)'}}><img src={flecha} alt="flecha logo" /></button>
                            <img className='item-image' src={item.images[0]} alt={item.alt} />
                            <button className='next item-button'><img src={flecha} alt="flecha logo" /></button>
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