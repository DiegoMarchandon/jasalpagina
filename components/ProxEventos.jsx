import styles from "./css/ProxEventos.module.css";
import React, {useState} from 'react';
// import Tachuela from '../public/assets/thumb-tack.png';
import Image from 'next/image';
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
          <Image src='/assets/thumb-tack.png' alt="tachuela logo" width={60} height={50} id="tachuela-img"/>
          <ul className={styles.eventosLista}>
            {datos.map((data, index) => (
              <li key={index}>
                <div className={styles.infoEventos}>
                  <span className={styles.fecha}>{data.fecha}</span>
                  <span className={styles.lugar}>{data.lugar}</span>
                </div>
                <div className={styles.direccionContainer}>
                  <a href={data.enlace} className={styles.enlacesInicio}>Comprar entradas</a>
                  <span className={styles.flechas}>
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