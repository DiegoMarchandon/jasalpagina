import styles from '../styles/Mercaderia.module.css';
import {useState} from 'react';
import {merchEstelario, merchJasal} from '../src/services/services.js';
// import flecha from '../../../public/assets/right-arrow.png';
import Card from '../components/Card.jsx';

function Mercaderia(){

    const [seccionMerch,setSeccionMerch] = useState('estelarioMerch');

    // funciones para alternar entre la mercaderia de jasal y la de estelario
    /* const toEstelarioMerch = () => {

    }
    const toJasalMerch = () => {

    } */
    let mercaderiaSeleccionada = seccionMerch === 'estelarioMerch' ? merchEstelario : merchJasal;

    return (
        <div className={styles.merchContainer}>
            <div className={styles.merchOptionsContainer}>
                <h1 className={styles.merchMainTitle}>mi mercadería</h1>
                <button 
                    className={seccionMerch === 'estelarioMerch' ? `${styles.merchSeleccionada} ${styles.bordeDerecho} ${styles.estelarioButton}` : `${styles.merchNoSeleccionada} ${styles.estelarioButton}`}  
                    onClick={() => setSeccionMerch('estelarioMerch')}
                >
                    Estelario
                </button>
                <button 
                    className={seccionMerch === 'jasalMerch' ? `${styles.merchSeleccionada} ${styles.bordeIzquierdo} ${styles.jasalButton}` : `${styles.merchNoSeleccionada} ${styles.jasalButton}`} 
                    onClick={() => setSeccionMerch('jasalMerch')}
                >
                    Jasal
                </button>
            </div>
            <div className={styles.panelMerchContainer}>
                <h2 className={styles.panelTitle}>filtrar por:</h2>
                <div className={seccionMerch === 'estelarioMerch' ? `${styles.filtrosMostrados} ${styles.estelarioItems}` : `${styles.filtrosOcultos} ${styles.estelarioItems}`}>
                    <p>marca páginas</p>
                    <p>anillos bordados</p>
                    <p>posa vasos</p>
                    <p>pines</p>
                    <p>aritos (quirúrgicos y tejidos a crochet)</p>
                    <p>bufandas</p>
                </div>
                <div className={seccionMerch === 'jasalMerch' ? `${styles.filtrosMostrados} ${styles.jasalItems}` : `${styles.filtrosOcultos} ${styles.jasalItems}`}>
                    <p>poleras</p>
                    <p>tazas/vasos</p>
                    <p>stickers</p>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {/* aplico renderizado condicional: */}
                {mercaderiaSeleccionada.map((item, index, StorageMerch) => (
                    <Card 
                        key={index}
                        item={item}
                        index={index}
                        StorageMerch={mercaderiaSeleccionada}
                    />
                ))}
            </div>
        </div>
    );
    
}

export default Mercaderia;