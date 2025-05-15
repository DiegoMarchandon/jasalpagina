// import '../styles/global.css';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';

function App({ Component, pageProps }) {
  // console.log("pageProps: ");
  return (
    <AuthProvider>
      {/* <Header /> */}
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;