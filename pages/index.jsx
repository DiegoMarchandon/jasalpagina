import Header from '../components/Header';
import FormContacto from '../components/FormContacto';
import ProxEventos from '../components/ProxEventos';
import styles from '../styles/Inicio.module.css'; // ✅ Usando CSS Modules

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.siteInicio}> 
        <ProxEventos />
        <div className={styles.reproformContainer}>
          <div className={styles.reproductor}>
            <iframe style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/5p4HoLoWZTHuNysEqoFnX7?utm_source=generator&theme=5"
              title="Reproductor de música de Jasal en Spotify"
              width="60%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
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