/* en React las imágenes dentro de src no pueden ser accedidas directamente con rutas relativas. 
Se soluciona(recomienda) importar la imágen como módulo */
import React, {useState} from 'react';
import JasalCaptura from '../../assets/IMG_6547.jpeg';
import JasalFoto1 from '../../assets/JasalCaptura.png';
import JasalMainPic from '../../assets/jasalSobreMiSeccion.jpg';
import JasalFirma from '../../assets/JasalFuente.png';
import "./styles.css";


function SobreMi(){
    const [seccion,setSeccion] = useState('sobre-mi');
    
    return (
        <div className="sobre-mi-background">
            <nav className='nav-secciones'>
                <button onClick={() => setSeccion('sobre-mi')}>sobre mi</button>
                <span style={{fontSize:"30px",marginBottom:"5px"}}>&nbsp;|&nbsp;</span>
                <button onClick={() => setSeccion('notas-prensa')}>notas de prensa</button>
            </nav>
            {/* aplico renderizado condicional: */}
            
            {seccion === 'notas-prensa' && (
                <section className='notas-prensa'>
                    <p>acá van a ir las notas de prensa</p>
                </section>
            )}
            {seccion === 'sobre-mi' && (    
            <section className="sobre-mi">
                
                    <div className="sobre-mi-container">  
                        <div id='sobre-mi-title-container'>
                            <h2 id='sobre-mi-title'>Sobre mí</h2>
                            <img src={JasalMainPic} alt="jasal foto principal" />
                        </div>

                        <div className="sobre-mi-sections">
                            <div className = 'sobre-mi-card'>
                                <h3 className='wiki-titles'>Javiera Sandoval</h3>
                                <div id="foto-wiki-container">
                                    <img src={JasalCaptura} alt="captura de jasal"/>
                                </div>
                                <h4 className='wiki-titles'>Información personal</h4>
                                <table>
                                    <tr>
                                        <th className="subtitles-wiki">Nombre de nacimiento</th>
                                        <td>Javiera Paz Sandoval Albornoz</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Nombre artístico</th>
                                        <td>Jasal</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Nacimiento</th>
                                        <td>27 de Julio de 1998 <br />Renca, Santiago de Chile</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Nacionalidad</th>
                                        <td>Chilena</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Lengua materna</th>
                                        <td>Español</td>
                                    </tr>
                                </table>
                                <h4 className='wiki-titles'>Familia</h4>
                                {/* datos familia */}
                                <table>
                                    <tr>
                                        <th className="subtitles-wiki">Hijos</th>
                                        <td>1 (Potoco)</td>
                                    </tr>
                                </table>
                                <h4 className='wiki-titles'>Educación</h4>
                                {/* datos educación */}
                                <table>
                                    <tr>
                                        <th className="subtitles-wiki">Educada en</th>
                                        <td> (...)</td>
                                    </tr>
                                </table>
                                <h4 className='wiki-titles'>Información profesional</h4>
                                {/* datos info profesional */}
                                <table>
                                    <tr>
                                        <th className="subtitles-wiki">Ocupación</th>
                                        <td>(...)</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Años activa</th>
                                        <td>2020</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Géneros</th>
                                        <td>Indie, Folk, Gypsy Jazz, Pop</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Instrumento</th>
                                        <td>Voz, Guitarra acústica, ukelele y teclado (...)</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitles-wiki">Distinciones</th>
                                        <td>(...)</td>
                                    </tr>
                                </table>
                                <h4 className='wiki-titles'>Firma</h4>
                                <div id='firma-container'>
                                    <img src={JasalFirma} alt="JasalFuente" id="firma-img" />
                                </div>
                            </div>
                            <div className='sobre-mi-section'>
                                <div className="sobre-mi-img">
                                    <img src={JasalFoto1} alt="Artista" className="artista-img"/> 
                                    {/* <p>hola</p>    */}
                                </div>
                                <p className="sobre-mi-texto">
                                    <span className="negrita">Jasal</span> es una artista de indie pop con una visión emotiva y nostálgica. 
                                    Con 27 años, ha estado rodeada de música desde su infancia. 
                                    Inspirada por artistas como Rex Orange County, Dayglow y Eloise, ha desarrollado un sonido que combina lo vintage 
                                    y lo melancólico con la belleza de la naturaleza.
                                </p>
                            </div>
                            
                            <div className='sobre-mi-section'>
                                <p className="sobre-mi-texto">
                                    En su trayectoria musical, Jasal ha tenido varios logros destacados. 
                                    En 2020 fue una de las ganadoras del concurso Scottie Scott de la SCD, con su primera canción publicada Mijita, ¿cuándo va a pololear?. 
                                    Esta victoria la catapultó a la escena musical nacional y le dio la oportunidad de compartir su talento con una audiencia más amplia.
                                </p>
                            </div>
                        
                            <div className='sobre-mi-section'>
                                <p className="sobre-mi-texto">
                                    En 2023 participó en el programa The Voice Chile, donde tuvo el honor de ser guiada por el reconocido coach Beto Cuevas. 
                                    Esta experiencia le permitió mostrar su talento a nivel nacional y conectar con una nueva audiencia. 
                                    Ese mismo año, realizó una gira por Argentina, donde compartió su música y energía en vivo con un público diverso, fortaleciendo así su conexión con oyentes de distintas latitudes.
                                </p>
                            </div>
                            
                            <div className='sobre-mi-section'>
                                <p className="sobre-mi-texto">    
                                    Actualmente, Jasal se encuentra preparando el lanzamiento de su primer EP, Adiós Vacaciones, 
                                    una obra que plasma la nostalgia de un amor de verano, el deseo de escapar de la rutina y la belleza de lo simple. 
                                    Con sonidos envolventes y letras sinceras, este proyecto promete ser un refugio emocional para quienes lo escuchen.
                                </p>
                            </div>
                            
                            <div className='sobre-mi-section'> 
                                <p className='sobre-mi-texto'>
                                    Jasal continúa consolidando su identidad artística, apostando por la honestidad emocional, la conexión con la naturaleza y una estética sonora que invita a recordar, soñar y volver a sentir.
                                </p>
                            </div>
                        </div>
                    
                    </div>

                    {/* <button>Escuchar mi música</button> */}
            </section>
            )}
        </div>
    );
}
    export default SobreMi;
    