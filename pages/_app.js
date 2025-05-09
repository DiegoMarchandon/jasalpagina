// import '../styles/global.css';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  console.log("pageProps: ");
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;