import './styles.css';
import Tachuela from '../../assets/thumb-tack.png';
import React, {useState} from 'react';
function Inicio() {

  // lógica de mi función:
  const [datos, setDatos] = useState([
    {
      fecha: "20 Mar 2025",
      lugar: "Teatro Gran Rex, Buenos Aires",
      enlace: "#enlace1"
    },
    {
      fecha: "27 Mar 2025",
      lugar: "Sala Zitarrosa, Montevideo",
      enlace: "#enlace2"
    },
    {
      fecha: "5 Abr 2025",
      lugar: "Niceto Club, Buenos Aires",
      enlace: "#enlace3"
    }]);

  return (
    <div className="site-inicio">
      <div className="inicio-content">
        <h1>Bienvenido a mi página</h1>
        <p>Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
        <a href="#Contacto" className="inicio-btn">Contáctame</a>
      </div>
      {/* spotify */}
      <div>
      <iframe style={{ borderRadius: "12px", margin:"10px" }} 
        src="https://open.spotify.com/embed/track/2KrnN2pSnBdqpUwDla280S?utm_source=generator" 
        width="100%" height="352" allowFullScreen = ""
        title="Reproductor de música de Spotify"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
      <iframe style={{ borderRadius: "12px", margin:"10px" }}  
        src="https://open.spotify.com/embed/track/75AJjnenUQz2AbhbhIfQ3d?utm_source=generator" 
        width="100%" height="352" allowfullscreen="" 
        title="Reproductor de música de Spotify"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">  
      </iframe>
      <iframe style={{ borderRadius: "12px", margin:"10px" }} 
        src="https://open.spotify.com/embed/track/6fTQVC2o7CWweKQC1xoEEI?utm_source=generator" 
        width="100%" height="352" allowfullscreen="" 
        title="Reproductor de música de Spotify" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
      </div>
      <section id="eventos">
        <h2>Próximos Eventos!</h2>
        <img src={Tachuela} alt="tachuela logo" id="tachuela-img"/>
        <ul className="eventos-lista">
          {datos.map((data, index) => (
            <li key={index}>
              <div className='info-eventos'>
                <span className="fecha">{data.fecha}</span>
                <span className="lugar">{data.lugar}</span>
              </div>
              <div className='direccion-container'>
                <a href={data.enlace} className="enlaces-inicio">Comprar entradas</a>
                <span className="flechas">
                  <span>&gt;</span>
                  <span>&gt;</span>
                  <span>&gt;</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
  export default Inicio;
  