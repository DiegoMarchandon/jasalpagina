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
            <p>
                <span className="negrita">Jasal</span> es una artista de indie pop con una visión emotiva y nostálgica. 
                Con 27 años, ha estado rodeada de música desde su infancia. 
                Inspirada por artistas como Rex Orange County, Dayglow y Eloise, ha desarrollado un sonido que combina lo vintage 
                y lo melancólico con la belleza de la naturaleza.
            </p>
        </div>
        <div className="sobre-mi-texto">
            <h2>Sobre mí</h2>
            <p>
                
                <p>
                    En su trayectoria musical, Jasal ha tenido varios logros destacados. En 2020 fue una de las ganadoras del concurso Scottie Scott de la SCD, con su primera canción publicada Mijita, ¿cuándo va a pololear?. Esta victoria la catapultó a la escena musical nacional y le dio la oportunidad de compartir su talento con una audiencia más amplia.
                    En 2023 participó en el programa The Voice Chile, donde tuvo el honor de ser guiada por el reconocido coach Beto Cuevas. Esta experiencia le permitió mostrar su talento a nivel nacional y conectar con una nueva audiencia. Ese mismo año, realizó una gira por Argentina, donde compartió su música y energía en vivo con un público diverso, fortaleciendo así su conexión con oyentes de distintas latitudes.
                    Actualmente, Jasal se encuentra preparando el lanzamiento de su primer EP, Adiós Vacaciones, una obra que plasma la nostalgia de un amor de verano, el deseo de escapar de la rutina y la belleza de lo simple. Con sonidos envolventes y letras sinceras, este proyecto promete ser un refugio emocional para quienes lo escuchen.
                    Jasal continúa consolidando su identidad artística, apostando por la honestidad emocional, la conexión con la naturaleza y una estética sonora que invita a recordar, soñar y volver a sentir.
                </p>
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
    