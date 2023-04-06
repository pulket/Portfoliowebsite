import React from 'react'
import styles from '@component/styles/Home.module.css'
import Image from 'next/image'
import { SiGmail } from "react-icons/si";


const contact = () => {
  return (
    <div className={styles.backgoundwhite}>
    <div className={styles.alig}>
       <div className={styles.aboutme}> Contact Me!</div>
       <div className={styles.aboutpagebackground}>
       
      
         <div className={styles.cantw}> Say hey!  I can’t wait to work with you.<span></span>
         
         </div>

         <p>
           
         </p>
         <button className={styles.email}>
            <i ><div className=' mx-2'><SiGmail/>  &nbsp;Pulket94@gmail.com</div></i>
            </button>

         <div className={styles.smilediv}><Image src={"/smili.svg"} height={70} width={70} alt='smile' className={styles.aboutmseimage}/></div>
         


       </div>

     </div> 

   </div>
  )
}

export default contact