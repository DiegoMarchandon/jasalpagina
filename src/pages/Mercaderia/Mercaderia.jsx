import './Mercaderia.css';
import {merch} from '../../services/services.js';

function Mercaderia(){
    return (
        <div className='merch-container'>
            <h1 id='merch-main-title'>mi mercadería</h1>
            {
            // en JSX, cualquier lógica de renderizado dinámica (o código JS) debe ir entre {}
            merch.map(item => (
                <div key={item.id} className="merch-item">
                    <img className='item-image' src={item.images[0]} alt={item.alt} />
                    <h2 className='item-text item-title'>{item.title}</h2>
                    <p className='item-text item-price'>Precio: ${item.price}</p>
                    <p className='item-text item-description'>{item.description}</p>
                </div>
            ))
            }
        </div>
    // <h1>Bienvenido a la mercaderia de la artista</h1>
    );
}

export default Mercaderia;