/* en React las imágenes dentro de src no pueden ser accedidas directamente con rutas relativas. 
Se soluciona(recomienda) importar la imágen como módulo */
import JasalCaptura from '../../assets/JasalCaptura.png';
import "./styles.css";
function SobreMi(){

    return (
    <section className="sobre-mi">
        <div className="sobre-mi-container">
        <div className="sobre-mi-img">
            <img
            src={JasalCaptura} 
            alt="Artista"
            className="artista-img"
            />
        </div>
        <div className="sobre-mi-texto">
            <h2>Sobre mí</h2>
            <p>
            ¡Hola! Soy <span className="negrita">Nombre Artístico</span>, cantante y compositora apasionada por la música desde pequeña. Mi estilo fusiona lo clásico con lo contemporáneo, siempre buscando conectar con el alma de quienes escuchan.
            </p>
            <p>
            Con varios años de experiencia en escenarios nacionales e internacionales, cada canción que escribo nace de vivencias reales, emociones intensas y mucha dedicación. ¡Gracias por ser parte de este viaje musical!
            </p>
            <button>Escuchar mi música</button>
        </div>
        </div>
    </section>
    );
}
    export default SobreMi;
    