
import React from 'react'
import Navbar from '../../component/Navbar'
import styles from '@component/styles/Home.module.css'
import Image from 'next/image'

function ap() {
  return (
    <>

      <div className={styles.backgoundwhite}>
       <div className={styles.alig}>
          <div className={styles.aboutme}> About me</div>
          <div className={styles.aboutpagebackground}>
            <Image src={"/gpic.png"} height={190} width={190} className={styles.aboutmeimage} />


            <div className={styles.hey}><span style={{ color: '#80868A' }}>i'm  </span> &nbsp; Pulkit Aggarwal <span></span>
            </div>

            <p>
              A 3rd year Student at the Indian Institute of Information Technology Surat with a passion for Android development, designing traveling, and writing. I love making tools and applications that solve real-world problems 2 years ago I started android development as a hobby, and I create tools and personalization apps to make people's digital lives easier on my Play Store developer page under the name "Pulket."
              <br></br>
              Aside from this I love and enjoy traveling and writing  I share my experiences and insights in my blogs where write about travel and technology. Whether it's exploring new destinations or developing innovative apps, I'm always looking for new ways to push myself and learn.
            </p>

            <div className={styles.smilediv}><Image src={"/smili.svg"} height={70} width={70} className={styles.aboutmseimage}/></div>


          </div>

        </div> 

      </div>


    </>
  )
}

export default ap