import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'
import Nav from "../layout/Nav";
import Footer from '../layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav/>
      <Component {...pageProps} />
      <ToastContainer/>
      <Footer/>
    </>
  ) 
  
}

export default MyApp
