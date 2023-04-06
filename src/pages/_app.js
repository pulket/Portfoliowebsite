import '@component/styles/globals.css'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../../component/Navbar'
import Footer from '../../component/footer'
import 'bootstrap/dist/css/bootstrap.css'
import fire from '../firebase/fire'

export default function App({ Component, pageProps }) {
  

  return <>
  <Navbar/>
 
  <Component {...pageProps} />
  <Footer/>
  
  </>
}
