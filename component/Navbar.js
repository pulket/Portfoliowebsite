import React from 'react'
import Image from 'next/image'
import styles from '@component/styles/Home.module.css'
import stylesp from '@component/styles/navbar.module.css'
import Link from 'next/link'
import blogs from '@component/pages/Blogpost/[blog]'
import ap from '@component/pages/ap'
import contact from '@component/pages/contact'


function Navbar() {
    return (
        <>
      
            <nav className={stylesp.navbarmaincs}>

                <div className={stylesp.l}>
                <Image src={"/logo.png"} height={30} width={60} /> 
                </div>
                 
            
                <ul>
               
                <li> <a href="/">Home</a></li>
                <li> <Link href="/about"> About</Link></li>
                <li> <Link href="/Blogpost"> Blogs</Link></li>
                {/* <li> <Link href="/ap"> Apps</Link></li>
                <li> <Link href="/contact"> Contact</Link></li> */}
                </ul> 
            </nav>
        </>
            
    )
}

export default Navbar