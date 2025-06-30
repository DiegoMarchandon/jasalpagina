import Header from '../components/Header';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import FormContacto from '../components/FormContacto';
import ProxEventos from '../components/ProxEventos';
import styles from '../styles/Inicio.module.css'; // ✅ Usando CSS Modules
import supabase from '../lib/db';

export default function Home() {
  console.log("hola desde index.jsx");
  console.log("NEXT_PUBLIC_SUPABASE_URL:",process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:",process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  
  const userInfo = async() => {
    const { data: { session }, error } = await supabase.auth.getSession(); // Obtén la sesión actual
        if (error || !session) {
            console.log("naranjas"); // Limpia el estado si no hay sesión
        } else {
            console.log(session); // Actualiza el estado con el usuario autenticado
        }
  }
  userInfo();
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