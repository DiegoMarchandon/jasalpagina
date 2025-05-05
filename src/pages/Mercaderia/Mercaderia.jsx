import './Mercaderia.css';
import {useState, useEffect, useRef} from 'react';
import {merchEstelario, merchJasal} from '../../services/services.js';
// import flecha from '../../../src/assets/right-arrow.png';
import Card from '../../components/Card.jsx';

function Mercaderia(){

    const [seccionMerch,setSeccionMerch] = useState('estelario');

    // funciones para alternar entre la mercaderia de jasal y la de estelario
    /* const toEstelarioMerch = () => {

    }
    const toJasalMerch = () => {

    } */
    let mercaderiaSeleccionada = seccionMerch === 'estelario' ? merchEstelario : merchJasal;

    return (

        <div id= "merch-container">
            <div id='merch-options-container'>
            <h1 id='merch-main-title'>mi mercadería</h1>
                <button className={seccionMerch === 'estelario' ? 'merchSeleccionada' : 'merchNoSeleccionada'} id='estelarioButton' onClick={() => setSeccionMerch('estelario')}>Estelario </button>
                <button className={seccionMerch === 'jasal' ? 'merchSeleccionada' : 'merchNoSeleccionada'} id='jasalButton' onClick={() => setSeccionMerch('jasal')}>Jasal</button>
            </div>
            <div id="panel-merch-container">
                
            </div>
            <div id='cards-container'>
            {/* aplico renderizado condicional: */}
                {(
                    // en JSX, cualquier lógica de renderizado dinámica (o código JS) debe ir entre {}
                    mercaderiaSeleccionada.map((item,index,StorageMerch) => (
                        <Card 
                            item={item}
                            index={index}
                            StorageMerch = {mercaderiaSeleccionada}
                        />
                    ))
                )}
            </div>
        </div>

    );
}

export default Mercaderia;