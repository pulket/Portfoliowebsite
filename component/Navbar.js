import React from 'react'
import Image from 'next/image'
import styles from '@component/styles/Home.module.css'
import stylesp from '@component/styles/navbar.module.css'
import Link from 'next/link'
import blogs from '@component/pages/blogs'
import ap from '@component/pages/ap'
import contact from '@component/pages/contact'


function Navbar() {
    return (
        <>
      
            <nav className={stylesp.navbarmaincs}>

                <div className={stylesp.l}>
                <Image src={"/logo.png"} height={50} width={50} /> 
                </div>
                 
            
                <ul>
               
                <li> <a href="/">Home</a></li>
                <li> <Link href="/about"> About</Link></li>
                <li> <Link href="/blogs"> Blogs</Link></li>
                <li> <Link href="/ap"> Apps</Link></li>
                <li> <Link href="/contact"> Contact</Link></li>
                </ul> 
            </nav>
        </>
            
    )
}

export default Navbar