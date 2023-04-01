import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import Link from 'next/link'
import { SiGmail } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      
      <Head>
        <title>Pulket</title>
        <meta name="description" content="Pulket, App developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      
   
      
      <div className={styles.backgoundwhiteindex}>

      <div className={styles.navbarbottombox}>
         
         <div className={styles.mainindexdiv}>
         

         <div>
         <div className={styles.smilediv}><Image src={"/ex.png"} height={20} width={20} /></div>
        
      
        
         <div className={styles.hey}>
         
       
            
            <span style={{ color: '#80868A' }}>Hey! I am  </span> &nbsp;Pulket
             <br/><span style={{ color: '#80868A' }}>A  Developer Who <br/> designs, Writes <br/>and Travel..</span>
            </div>

            <p style={{fontSize:24 ,marginTop:20, fontWeight:400}}> Lets build something Amazing!</p>

            <button className={styles.email}>
            <i ><div className=' mx-2'><SiGmail/>  &nbsp;Pulket94@gmail.com</div></i>
            </button>
            

         </div>

         <div className={styles.indeximage}>
         <div className={styles.smilediv}><Image src={"/star.png"} height={40} width={40} className={styles.aboutmseimage}/></div>
         <Image src={"/gpic.png"} height={350} width={350} />
         </div>
        
         

         </div>
            


      </div>



      
        
      <div class="container my-5 px-5">
        <h2  style={{fontSize:72 ,marginTop:20, fontWeight:700, justifyContent:"center"}}>OutLine</h2>
        
        <div class="main-timeline">
        
                                {/* <!-- start experience section--> */}
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer">
                                            <span class="date">
                                                    <span class="month">Application</span>
                                            <span class="year">2021</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h4 class="title">DirectChat</h4>
                                        <p class="description">
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
                                        <h5 class="title">Internship in Graphic Design</h5>
                                        <p class="description">
                                        Did an intership in Graphic Designing in Exam Lounge(an Indian edTech startup).Utilized UI/UX skills to contribute to the design of the website.<br/>Designed visually appealing posters to promote events and campaigns.
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
                                        <h5 class="title">Medium</h5>
                                        <p class="description">
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
                                        <h5 class="title">WallDrops</h5>
                                        <p class="description">
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
                                        <h5 class="title">OneHunt</h5>
                                        <p class="description">
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
                                        <h5 class="title">Portfolio & Bloging site</h5>
                                        <p class="description">
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
                                        <h5 class="title">SpringFest IIIT Surat </h5>
                                        <p class="description">
                                        Art and Design Head - Spring Fest 2023, IIIT Surat Appointed as the lead Art and Design Head for Spring Fest 2023, the annual cultural and technical festival at IIIT Surat. Responsible for managing and overseeing all art and design related aspects of the festival, including designing event logos, posters, merchandise, and creating overall visual identity for the event.
                                        </p>
                                    </div>
                                </div>
                                
        
                            </div>
        </div>

        <h2  style={{fontSize:72 ,marginTop:20, fontWeight:700, justifyContent:"center"}}>Latest Blogs</h2>



         </div>

         <div className='d-flex flex-row flex-wrap justify-content-center'>
      <div className='rounded-2 bg-white m-2 p-4 mx-auto'>
        <div className='rounded-2'><Image className='rounded-2' src={"/emma.jpg"} height={350} width={190} /></div>
        <p className='p-0'>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='rounded-2 bg-white m-2 p-4 mx-auto'>
        <div className=''><Image src={"/emma.jpg"} height={350} width={190} /></div>
        <p className='p-0'>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='rounded-2 bg-white m-2 p-4 mx-auto'>
        <div className=''><Image src={"/emma.jpg"} height={350} width={190} /></div>
        <p className='p-0'>Lorem ipsum dolor sit amet.</p>
      </div>

    </div>







    




 
    </>
  )
}
