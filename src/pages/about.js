import React from "react"
import Head from 'next/head'
import Navbar from '../../component/Navbar'
import styles from "@component/styles/Home.module.css"
import Image from "next/image"

function ap() {
  return (
    <>


     <Head>
        <title>About Pulket</title>
        <meta name="description" content="Pulket (pulkit aggarwal)is a 3rd year Student at the Indian Institute of Information Technology Surat with a passion for Android development, designing, traveling, and writing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={styles.backgoundwhite}>
        <div className={styles.alig}>
          <div className={styles.aboutme}> About me</div>
          <div className={styles.aboutpagebackground}>
            <Image src={"/gpic.png"} height={190} width={190} className={styles.aboutmeimage} alt="pulket image" />

            <div className={styles.hey}><span style={{ color: '#E4E4E4' }}>i&apos;m  </span> <span style={{ color: '#FAC741' }}> &nbsp;Pulkit Aggarwal </span>
            </div>

            <p style={{ color: '#E4E4E4'}}>
              A 3rd year Student at the Indian Institute of Information Technology Surat with a passion for Android development, designing traveling, and writing. I love making tools and applications that solve real-world problems 2 years ago I started android development as a hobby, and I create tools and personalization apps to make people&apos;s digital lives easier on my Play Store developer page under the name &ldquo;Pulket&rdquo;.
              <br></br>
              Aside from this I love and enjoy traveling and writing  I share my experiences and insights in my blogs where write about travel and technology. Whether it&apos;s exploring new destinations or developing innovative apps, I&apos;m always looking for new ways to push myself and learn.
            </p>

            <div className={styles.smilediv}><Image src={"/smili.svg"} height={70} width={70} className={styles.aboutmseimage} alt="smiling face"/></div>

          </div>
        </div> 
      </div>
    </>
  )
}

export default ap
