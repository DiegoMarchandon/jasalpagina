import './styles.css';
import React, {useState} from 'react';
import Header from '../../components/Header.jsx';
import FormContacto from '../../components/FormContacto';
import ProxEventos from '../../components/ProxEventos';
function Inicio() {

  return (
    <div>
      <Header />
      <div className="site-inicio">
        {/* <div className="inicio-content">
          <h1>Bienvenido a mi página</h1>
          <p>Escribo para quienes se enamoran rápido y se olvidan lento 🥀🪞</p>
          <a href="#Contacto" className="inicio-btn">Contáctame</a>
        </div> */}
        <ProxEventos />
        {/* <Tocadiscos /> */}
        {/* spotify */}
        <div className='reproform-container'>
          <div className="reproductor">
            <iframe style={{borderRadius:"12"}} 
              src="https://open.spotify.com/embed/artist/5p4HoLoWZTHuNysEqoFnX7?utm_source=generator&theme=5" 
              title="Reproductor de música de Jasal en Spotify"
              width="60%" 
              height="352" 
              frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
            <FormContacto />
        </div>
      </div>
    </div>
  );
}
  export default Inicio;
  