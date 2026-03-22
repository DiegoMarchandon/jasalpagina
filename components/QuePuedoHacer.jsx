import Link from 'next/link';
import styles from './css/QuePuedoHacer.module.css';

const features = [
  {
    emoji: '🎵',
    titulo: 'Escucha mi música',
    descripcion: 'Encuentra mis canciones en Spotify y disfruta de mi música.',
    href: 'https://open.spotify.com/intl-es/artist/5p4HoLoWZTHuNysEqoFnX7',
    externo: true,
  },
  {
    emoji: '🛒',
    titulo: 'Compra merch',
    descripcion: 'Explora las colecciones Estelario y Jasal en la tienda.',
    href: '/Mercaderia',
    externo: false,
  },
  {
    emoji: '📸',
    titulo: 'Visita la galería',
    descripcion: 'Revisa fotos y momentos especiales de mi carrera.',
    href: '/Galeria',
    externo: false,
  },
  {
    emoji: '📅',
    titulo: 'Próximos eventos',
    descripcion: 'Consulta las fechas de mis próximos shows y conciertos.',
    href: '/#eventos',
    externo: false,
  },
  {
    emoji: '📖',
    titulo: 'Conóceme',
    descripcion: 'Lee mi historia, logros y trayectoria artística.',
    href: '/SobreMi',
    externo: false,
  },
  {
    emoji: '✉️',
    titulo: 'Contáctame',
    descripcion: 'Escríbeme directamente usando el formulario de contacto.',
    href: '/#contacto',
    externo: false,
  },
];

function QuePuedoHacer() {
  return (
    <section className={styles.section} id="que-puedo-hacer">
      <h2 className={styles.titulo}>¿Qué puedo hacer aquí?</h2>
      <div className={styles.grid}>
        {features.map((feature, index) =>
          feature.externo ? (
            <a
              key={index}
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={styles.emoji}>{feature.emoji}</span>
              <h3 className={styles.cardTitulo}>{feature.titulo}</h3>
              <p className={styles.cardDescripcion}>{feature.descripcion}</p>
            </a>
          ) : (
            <Link key={index} href={feature.href} className={styles.card}>
              <span className={styles.emoji}>{feature.emoji}</span>
              <h3 className={styles.cardTitulo}>{feature.titulo}</h3>
              <p className={styles.cardDescripcion}>{feature.descripcion}</p>
            </Link>
          )
        )}
      </div>
    </section>
  );
}

export default QuePuedoHacer;
