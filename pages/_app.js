import '../styles/globals.css'
import Nav from "../layout/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav/>
      <Component {...pageProps} />
    </>
  ) 
  
}

export default MyApp
