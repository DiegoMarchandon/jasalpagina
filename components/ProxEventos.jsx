import styles from "./css/ProxEventos.module.css";
import React, {useEffect, useState} from 'react';
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

  const eventosBD = async() => {
    try{
      const response = await fetch('/api/requests/evento',{
        method: 'GET',
      });

      if(!response.ok){
        throw new Error('error al obtener los eventos: '+response.status);
      }

      const data = await response.json();
      console.log('Eventos obtenidos: ', data.eventos);
      return data.eventos;

    }catch(error){
      console.error('detalle del error: ',error);
      throw new Error(`Error en eventosBD: ${error.message}`);
    }

  }

  useEffect(() => {
    const cargarEventos = async () => {
      const eventos = await eventosBD();
      // setEventos(Eventos)
      console.log(eventos);
      setDatos(eventos);
    };

    cargarEventos();

  },[]);


  return (
    <section className={styles.eventos}>
          <h2>Próximos Eventos!</h2>
          <Image src='/assets/thumb-tack.png' alt="tachuela logo" width={60} height={50} className={styles.tachuelaImg} priority={true}/>
          <ul className={styles.eventosLista}>
            {datos.map((data, index) => (
              <li key={index}>
                <div className={styles.infoEventos}>
                  <span className={styles.lugar}>{data.eventolugar}</span>
                  <span className={styles.fecha}>{data.eventofecha}</span>
                </div>
                <div className={styles.direccionContainer}>
                  <a href={data.eventourl} className={styles.enlacesInicio}>Comprar entradas</a>
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