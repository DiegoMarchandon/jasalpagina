/* en React las imágenes dentro de src no pueden ser accedidas directamente con rutas relativas. 
Se soluciona(recomienda) importar la imágen como módulo */
import React, {useState} from 'react';
import Image from 'next/image';
// import JasalCaptura from '../../assets/IMG_6547.jpeg';
// import JasalFoto1 from '../../assets/JasalCaptura.png';
// import JasalMainPic from '../../assets/jasalSobreMiSeccion.jpg';
// import JasalFirma from '../../assets/JasalFuente.png';
import styles from "../styles/SobreMi.module.css";

function SobreMi(){
    const [seccion,setSeccion] = useState('sobreMi');
    
    return (
        <div className={styles.sobreMiBackground}>
            <nav className={styles.navSecciones}>
                <button onClick={() => setSeccion('sobreMi')}>sobre mi</button>
                <span style={{fontSize:"30px",marginBottom:"5px"}}>&nbsp;|&nbsp;</span>
                <button onClick={() => setSeccion('notasPrensa')}>notas de prensa</button>
            </nav>
            {/* aplico renderizado condicional: */}
            
            {seccion === 'notasPrensa' && (
                <section className='notasPrensa'>
                    <p>acá van a ir las notas de prensa</p>
                </section>
            )}
            {seccion === 'sobreMi' && (    
            <section className="sobreMi">
                
                    <div className="sobreMiContainer">  
                        <div className='sobreMiTitleContainer'>
                            <h2 className='sobreMiTitle'>Sobre mí</h2>
                            <Image src='/assets/jasalSobreMiSeccion.jpg' alt="jasal foto principal" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                        </div>

                        <div className="sobreMiSections">
                            <div className = 'sobreMiCard'>
                                <h3 className='wikiTitles'>Javiera Sandoval</h3>
                                <div className="fotoWikiContainer">
                                    <Image src='/assets/IMG_6547.jpeg' alt="captura de jasal"/>
                                </div>
                                <h4 className='wikiTitles'>Información personal</h4>
                                <table>
                                    <tr>
                                        <th className="subtitlesWiki">Nombre de nacimiento</th>
                                        <td>Javiera Paz Sandoval Albornoz</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Nombre artístico</th>
                                        <td>Jasal</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Nacimiento</th>
                                        <td>27 de Julio de 1998 <br />Renca, Santiago de Chile</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Nacionalidad</th>
                                        <td>Chilena</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Lengua materna</th>
                                        <td>Español</td>
                                    </tr>
                                </table>
                                <h4 className='wikiTitles'>Familia</h4>
                                {/* datos familia */}
                                <table>
                                    <tr>
                                        <th className="subtitlesWiki">Hijos</th>
                                        <td>1 (Potoco)</td>
                                    </tr>
                                </table>
                                <h4 className='wikiTitles'>Educación</h4>
                                {/* datos educación */}
                                <table>
                                    <tr>
                                        <th className="subtitlesWiki">Educada en</th>
                                        <td> (...)</td>
                                    </tr>
                                </table>
                                <h4 className='wikiTitles'>Información profesional</h4>
                                {/* datos info profesional */}
                                <table>
                                    <tr>
                                        <th className="subtitlesWiki">Ocupación</th>
                                        <td>(...)</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Años activa</th>
                                        <td>2020</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Géneros</th>
                                        <td>Indie, Folk, Gypsy Jazz, Pop</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Instrumento</th>
                                        <td>Voz, Guitarra acústica, ukelele y teclado (...)</td>
                                    </tr>
                                    <tr>
                                        <th className="subtitlesWiki">Distinciones</th>
                                        <td>(...)</td>
                                    </tr>
                                </table>
                                <h4 className='wikiTitles'>Firma</h4>
                                <div className='firmaContainer'>
                                    <Image src='/assets/JasalFuente.png' alt="JasalFuente" className="firmaImg" />
                                </div>
                            </div>
                            <div className='sobreMiSection'>
                                <div className="sobreMiImg">
                                    <Image src='/assets/JasalCaptura.png' alt="Artista" className="artistaImg"/> 
                                    {/* <p>hola</p>    */}
                                </div>
                                <p className="sobreMiTexto">
                                    <span className="negrita">Jasal</span> es una artista de indie pop con una visión emotiva y nostálgica. 
                                    Con 27 años, ha estado rodeada de música desde su infancia. 
                                    Inspirada por artistas como Rex Orange County, Dayglow y Eloise, ha desarrollado un sonido que combina lo vintage 
                                    y lo melancólico con la belleza de la naturaleza.
                                </p>
                            </div>
                            
                            <div className='sobreMiSection'>
                                <p className="sobreMiTexto">
                                    En su trayectoria musical, Jasal ha tenido varios logros destacados. 
                                    En 2020 fue una de las ganadoras del concurso Scottie Scott de la SCD, con su primera canción publicada Mijita, ¿cuándo va a pololear?. 
                                    Esta victoria la catapultó a la escena musical nacional y le dio la oportunidad de compartir su talento con una audiencia más amplia.
                                </p>
                            </div>
                        
                            <div className='sobreMiSection'>
                                <p className="sobreMiTexto">
                                    En 2023 participó en el programa The Voice Chile, donde tuvo el honor de ser guiada por el reconocido coach Beto Cuevas. 
                                    Esta experiencia le permitió mostrar su talento a nivel nacional y conectar con una nueva audiencia. 
                                    Ese mismo año, realizó una gira por Argentina, donde compartió su música y energía en vivo con un público diverso, fortaleciendo así su conexión con oyentes de distintas latitudes.
                                </p>
                            </div>
                            
                            <div className='sobreMiSection'>
                                <p className="sobreMiTexto">    
                                    Actualmente, Jasal se encuentra preparando el lanzamiento de su primer EP, Adiós Vacaciones, 
                                    una obra que plasma la nostalgia de un amor de verano, el deseo de escapar de la rutina y la belleza de lo simple. 
                                    Con sonidos envolventes y letras sinceras, este proyecto promete ser un refugio emocional para quienes lo escuchen.
                                </p>
                            </div>
                            
                            <div className='sobreMiSection'> 
                                <p className='sobreMiTexto'>
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
    