import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link'
import { SiGmail } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{ color:'#E5E9E9'}}>

      
      <Head>
        <title>Pulket</title>
        <meta name="description" content="Pulket, App developer, designer, Pulkit aggarwal, playstore apps of pulket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      
   
      
      <div className={styles.backgoundwhiteindex}>

      <div className={styles.navbarbottombox}>
         
         <div className={styles.mainindexdiv}>
         

         <div>
         <div className={styles.smilediv}><Image src={"/ex.png"} height={20} width={20}  alt='pulket smile emoji'/></div>
        
         <div className={styles.hey}>
          
            <span style={{ color: '#f3f3f3' }}>Hey! I am  </span>  <span style={{ color: '#FAC741' }}>&nbsp;Pulket</span> 
             <br/><span style={{ color: '#f3f3f3' }}>A  Developer Who <br/> designs, Writes <br/>and Travel..</span>
            </div>

            <p style={{ color: '#FAC741',fontSize:24 ,marginTop:20, fontWeight:700}}> Lets build something Amazing!</p>

            <button className={styles.email}>
            <i ><div className=' mx-2'><SiGmail/>  &nbsp;Pulket94@gmail.com</div></i>
            </button>
         </div>

         <div className={styles.indeximage}>
         <div className={styles.smilediv}><Image src={"/star.png"} height={40} width={40} className={styles.aboutmseimage}/></div>
         <Image src={"/gpic.png"} height={350} width={350}  alt='pulket image'/>
         </div>
         </div>

      </div>



      
        
      <div class="container my-5 px-5">
        <h2  style={{ color: '#f3f3f3',fontSize:72 ,marginTop:20, fontWeight:700, justifyContent:"center"}}>OutLine</h2>
        
        <div class="main-timeline">
        
                                {/* <!-- start experience section--> */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month" >Application</span>
                                            <span class="year">2021</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h4 class="title"style={{ color: '#FAC741'}}>DirectChat</h4>
                                        <p class="description" style={{ color: '#f3f3f3'}}>
                                        Find the need of a app that can message to someone without saving his number. so made DirectChat with more than 100k downloads on playstore
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- end experience section-->
        
                                <!-- start experience section--> */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month">Designing</span>
                                            <span class="year">2021</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title" style={{ color: '#FAC741'}}>Internship in Graphic Design</h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        Did an intership in Graphic Designing in Exam Lounge(an Indian edTech startup).Utilized UI/UX skills to contribute to the design of the website. Designed visually appealing posters to promote events and campaigns.
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- end experience section-->
        
                                <!-- start experience section--> */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month">Writing</span>
                                            <span class="year">2022</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title"style={{ color: '#FAC741'}}>Medium</h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        I loves exploring new places and culture. I write about on my medium page under the name "Pulket" where i share my traveling experiences.
                                        </p>
                                    </div>
                                </div>
                                {/* <!-- end experience section--> */}
        
                                {/* <!-- start experience section--> */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month"> Application</span>
                                            <span class="year">2022</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title"style={{ color: '#FAC741'}}>WallDrops</h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        Worked on Android development  and made few more apps like - wallpaper app, QR code scanner and generator app
                                        </p>
                                    </div>
                                </div>

                                {/* newnew */}

                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month"> Applicaiton</span>
                                            <span class="year">2023</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title"style={{ color: '#FAC741'}}>OneHunt</h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        Struggled with time-consuming research across multiple search engines, leading to the launch of OneHunt, an all-in-one search engine.
                                        </p>
                                    </div>
                                </div>


                                 {/* <!-- start experience section--> */}
                                 <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month"> Website</span>
                                            <span class="year">2023</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title"style={{ color: '#FAC741'}}>Portfolio & Bloging site</h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        Made this Portfolio and bloging site using NextJS as Framework
                                        </p>
                                    </div>
                                </div>

                                {/* fasdfa */}
                                {/* newnew */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month">Leadership</span>
                                            <span class="year">2023</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title"style={{ color: '#FAC741'}}>SpringFest IIIT Surat </h5>
                                        <p class="description"style={{ color: '#f3f3f3'}}>
                                        Art and Design Head - Spring Fest 2023, IIIT Surat Appointed as the lead Art and Design Head for Spring Fest 2023, the annual cultural and technical festival at IIIT Surat. Responsible for managing and overseeing all art and design related aspects of the festival, including designing event logos, posters, merchandise, and creating overall visual identity for the event.
                                        </p>
                                    </div>
                                </div>
                            </div>
        </div>
         </div>

 
    </div>
  )
}
