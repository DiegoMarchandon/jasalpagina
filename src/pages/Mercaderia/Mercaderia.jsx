import './Mercaderia.css';
import {useState, useEffect, useRef} from 'react';
import {merchEstelario, merchJasal} from '../../services/services.js';
// import flecha from '../../../src/assets/right-arrow.png';
import Card from '../../components/Card.jsx';

function Mercaderia(){

    const [seccionMerch,setSeccionMerch] = useState('estelarioMerch');

    // funciones para alternar entre la mercaderia de jasal y la de estelario
    /* const toEstelarioMerch = () => {

    }
    const toJasalMerch = () => {

    } */
    let mercaderiaSeleccionada = seccionMerch === 'estelarioMerch' ? merchEstelario : merchJasal;

    return (

        <div id= "merch-container">
            <div id='merch-options-container'>
                <h1 id='merch-main-title'>mi mercadería</h1>
                <button className={seccionMerch === 'estelarioMerch' ? 'merchSeleccionada borde-derecho' : 'merchNoSeleccionada'} id='estelarioButton' onClick={() => setSeccionMerch('estelarioMerch')}>Estelario </button>
                <button className={seccionMerch === 'jasalMerch' ? 'merchSeleccionada borde-izquierdo' : 'merchNoSeleccionada'} id='jasalButton' onClick={() => setSeccionMerch('jasalMerch')}>Jasal</button>
            </div>
            <div id="panel-merch-container">
                <h2 id='panel-title'>filtrar por:</h2>
                <div className={seccionMerch === 'estelarioMerch' ? 'filtrosMostrados' : 'filtrosOcultos'} id='estelarioItems'>
                    <p>marca páginas</p>
                    <p>anillos bordados</p>
                    <p>posa vasos</p>
                    <p>pines</p>
                    <p>aritos (quirúrgicos y tejidos a crochet)</p>
                    <p>bufandas</p>
                </div>
                <div className={seccionMerch === 'jasalMerch' ? 'filtrosMostrados' : 'filtrosOcultos'} id='jasalItems'>
                    <p>poleras</p>
                    <p>tazas/vasos</p>
                    <p>stickers</p>
                </div>
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