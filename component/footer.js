import React from 'react'
import stylesp from '@component/styles/navbar.module.css'
import Link from 'next/link'
import styles from '@component/styles/footer.module.css'
import { FaGithub,FaLinkedin,FaTwitter, FaMedium, FaInstagram, } from "react-icons/fa";



function footer() {
    return (
        <div className="bg-black p-3"  >

            <div className="flex flex-col text-center">
            <i className='text-white p-2 fs-3'><a className='text-white' href='https://github.com/pulket' target={"_blank"}><FaGithub/></a></i>
            <i className='text-white p-2 fs-3'><a className='text-white' href='https://www.linkedin.com/in/pulket/' target={"_blank"}><FaLinkedin/></a></i>
            <i className='text-white p-2 fs-3'><a className='text-white' href='https://twitter.com/pulket_' target={"_blank"}><FaTwitter/></a></i>
            <i className='text-white p-2 fs-3'><a className='text-white' href='https://pulket.medium.com/' target={"_blank"}><FaMedium/></a></i>

            </div>
            <div className={styles.footer}><span style={{ color: '#80868A' }} >Crafted by  </span> &nbsp; <span style={{ color: '#FAC741' }}>Pulket</span> <span style={{ color: '#80868A' }}>  &nbsp; With ❣️ — Copyright 2023</span>
            </div>

        </div>
    )
}

export default footer