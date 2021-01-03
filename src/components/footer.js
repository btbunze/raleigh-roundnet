import React from 'react'

import Image from "./image"

import { Link } from "gatsby"

const footer = () => {
    return (
        <footer>
            <div className = 'content footer-grid' style = {{display:'grid'}}>
                <div className = 'footer-left'>
                    <p className = 'footer-header'>RALEIGH ROUNDNET</p>
                    <p className = 'footer-text'>
                        <Link to = '/' className = 'footer-link'>Home</Link>
                        <Link to = '/events' className = 'footer-link'>Events</Link>
                        <Link to = '/media' className = 'footer-link'>Media</Link>
                        <Link to = '/about' className = 'footer-link'>About</Link>
                        <Link to = '/about#contact-us' className = 'footer-link'>Contact</Link>
                    </p>

                </div>
                <div className = 'footer-center'>
                    <div style = {{width:'4rem', backgroundColor:'white', borderRadius: '50%', margin:'auto',marginTop:'2rem'}}>
                        <Image fileName = "LogoACFS.png" />
                    </div>
                </div>
                <div className = 'footer-right'>
                    <p className = 'footer-text'>raleighroundnetclub@gmail.com</p>
                    <p className = 'footer-text'>919-884-6799</p>
                </div>
            </div>

        </footer>
    )
}

export default footer
