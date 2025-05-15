/* en React las imágenes dentro de src no pueden ser accedidas directamente con rutas relativas. 
Se soluciona(recomienda) importar la imágen como módulo */
import React, {useState} from 'react';
import Image from 'next/image';
// import JasalCaptura from '../../assets/IMG_6547.jpeg';
// import JasalFoto1 from '../../assets/JasalCaptura.png';
// import JasalMainPic from '../../assets/jasalSobreMiSeccion.jpg';
// import JasalFirma from '../../assets/JasalFuente.png';
import styles from "../styles/sobreMi.module.css";

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
                <section className={styles.notasPrensa}>
                    <p>acá van a ir las notas de prensa</p>
                </section>
            )}
            {seccion === 'sobreMi' && (    
            <section className={styles.sobreMi}>
                
                    <div className={styles.sobreMiContainer}>  
                        <div className={styles.sobreMiTitleContainer}>
                            <h2 className={styles.sobreMiTitle}>Sobre mí</h2>
                            <Image src="/assets/jasalSobreMiSeccion.jpg" alt="jasal foto principal" width={200} height={300} priority sizes="100vw" style={{ width: "100%", height: "auto", objectFit: "cover", filter: "brightness(50%)", transform: "translateY(-47%)"}}/>
                        </div>

                        <div className={styles.sobreMiSections}>
                            <div className = {styles.sobreMiWiki}>
                                <h3 className={styles.wikiTitles}>Javiera Sandoval</h3>
                                <div className={styles.fotoWikiContainer}>
                                    {/* imagen que no carga */}
                                    <Image src='/assets/IMG_6547.jpeg' alt="captura de jasal" sizes="100vw" width={200} height={300} style={{width: "60%", height: '100%', objectFit: 'cover',filter: 'brightness(60%)' }} />
                                </div>
                                <h4 className={styles.wikiTitles}>Información personal</h4>
                                <table>
                                    <tbody>

                                        <tr>
                                            <th className={styles.subtitlesWiki}>Nombre de nacimiento</th>
                                            <td>Javiera Paz Sandoval Albornoz</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Nombre artístico</th>
                                            <td>Jasal</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Nacimiento</th>
                                            <td>27 de Julio de 1998 <br />Renca, Santiago de Chile</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Nacionalidad</th>
                                            <td>Chilena</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Lengua materna</th>
                                            <td>Español</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className={styles.wikiTitles}>Familia</h4>
                                {/* datos familia */}
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Hijos</th>
                                            <td>1 (Potoco)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className={styles.wikiTitles}>Educación</h4>
                                {/* datos educación */}
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Educada en</th>
                                            <td> (...)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className={styles.wikiTitles}>Información profesional</h4>
                                {/* datos info profesional */}
                                <table>
                                    <tbody>

                                        <tr>
                                            <th className={styles.subtitlesWiki}>Ocupación</th>
                                            <td>(...)</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Años activa</th>
                                            <td>2020</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Géneros</th>
                                            <td>Indie, Folk, Gypsy Jazz, Pop</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Instrumento</th>
                                            <td>Voz, Guitarra acústica, ukelele y teclado (...)</td>
                                        </tr>
                                        <tr>
                                            <th className={styles.subtitlesWiki}>Distinciones</th>
                                            <td>(...)</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h4 className={styles.wikiTitles}>Firma</h4>
                                <div className={styles.firmaContainer}>
                                    <Image src='/assets/JasalFuente.png' alt="JasalFuente" sizes="100vw" /* className={styles.firmaImg} */ style={{width:'170px',height:'auto'}} width={0} height={0}/>
                                </div>
                            </div>
                            <div className={styles.sobreMiSection}>
                                <div className={styles.sobreMiImgContainer}>
                                    <Image src='/assets/JasalCaptura.png' alt="Artista" className={styles.artistaImg} width={200} height={200}/> 
                                    {/* <p>hola</p>    */}
                                </div>
                                <p className={styles.sobreMiTexto}>
                                    <span className={styles.negrita}>Jasal</span> es una artista de indie pop con una visión emotiva y nostálgica. 
                                    Con 27 años, ha estado rodeada de música desde su infancia. 
                                    Inspirada por artistas como Rex Orange County, Dayglow y Eloise, ha desarrollado un sonido que combina lo vintage 
                                    y lo melancólico con la belleza de la naturaleza.
                                </p>
                            </div>
                            
                            <div className={styles.sobreMiSection}>
                                <p className={styles.sobreMiTexto}>
                                    En su trayectoria musical, Jasal ha tenido varios logros destacados. 
                                    En 2020 fue una de las ganadoras del concurso Scottie Scott de la SCD, con su primera canción publicada Mijita, ¿cuándo va a pololear?. 
                                    Esta victoria la catapultó a la escena musical nacional y le dio la oportunidad de compartir su talento con una audiencia más amplia.
                                </p>
                            </div>
                        
                            <div className={styles.sobreMiSection}>
                                <p className={styles.sobreMiTexto}>
                                    En 2023 participó en el programa The Voice Chile, donde tuvo el honor de ser guiada por el reconocido coach Beto Cuevas. 
                                    Esta experiencia le permitió mostrar su talento a nivel nacional y conectar con una nueva audiencia. 
                                    Ese mismo año, realizó una gira por Argentina, donde compartió su música y energía en vivo con un público diverso, fortaleciendo así su conexión con oyentes de distintas latitudes.
                                </p>
                            </div>
                            
                            <div className={styles.sobreMiSection}>
                                <p className={styles.sobreMiTexto}>    
                                    Actualmente, Jasal se encuentra preparando el lanzamiento de su primer EP, Adiós Vacaciones, 
                                    una obra que plasma la nostalgia de un amor de verano, el deseo de escapar de la rutina y la belleza de lo simple. 
                                    Con sonidos envolventes y letras sinceras, este proyecto promete ser un refugio emocional para quienes lo escuchen.
                                </p>
                            </div>
                            
                            <div className={styles.sobreMiSection}> 
                                <p className={styles.sobreMiTexto}>
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
    