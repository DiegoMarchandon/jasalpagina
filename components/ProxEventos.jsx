import "./css/ProxEventos.css";
import React, {useState} from 'react';
import Tachuela from '../src/assets/thumb-tack.png';

function ProxEventos(){
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
    }
  ]);

  return (
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
  );

}

export default ProxEventos;