import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{useState, useEffect} from "react"


import "../index.css"

import Image from "./image"

const Header = ({ siteTitle }) => {
  
  const [isLarge, setIsLarge] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = (event) => {
    setIsNavOpen(!isNavOpen);
  }

  console.log(isLarge)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector('header');
      const navButtons = [... document.querySelectorAll(".nav-button")]
      const headerImg = document.querySelector('.header-image')
      const pageTitle = document.querySelector('.page-title')

      if ((document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) && window.innerWidth > 840) {
        header.style.height = "3rem";
        navButtons.forEach((elt) => {elt.style.height = "3rem"})
        //headerImg.style.width = "2rem";
        //headerImg.style.margin = ".5rem"
        headerImg.style.display = "none"
        pageTitle.style.display = "none"
        if(isLarge){setIsLarge(false)}
      } else {
        header.style.height = "6rem";
        navButtons.forEach((elt) => {elt.style.height = "6rem"})
        //headerImg.style.width = "4rem";
        //headerImg.style.margin = "1rem"
        headerImg.style.display = "inline-block"
        pageTitle.style.display = "inline-block"
        if(!isLarge){setIsLarge(true)}
      }
    })

  })
  
  return (
    <>
    <header>
      <div className = "content" style = {{display:'flex', justifyContent: 'space-Between'}}>
      <div style = {{display:`inline-block`}}>
        <Link to = "/" className = "header-image" style = {{width: `4rem`, margin: `1rem`, display: `inline-block`}} >
          <Image fileName = "LogoACFS.png"/>
        </Link>
        <h1 className = "page-title" style = {{margin: `0px`, position: `relative`, display: `inline-block`}}>
          <Link
            to="/"
            className = "header-title"
          >
            {isLarge ? (<span style = {{margin:0}}>Raleigh <br className = "break"></br>Roundnet</span>):(<span style = {{margin:0}}>Raleigh Roundnet</span>) }

          </Link>
        </h1>
      </div>
      <nav id = "largeNav" >
        <Link to = "/" className = "nav-button">
            <span className = "nav-text">
              Home
            </span>
        </Link>
        <Link to = "/events" className = "nav-button">
            <span className = "nav-text">
              Events
            </span>
        </Link>
        <Link to = "/about" className = "nav-button">
            <span className = "nav-text">
              About
            </span>
        </Link>
        <Link to = "/media" className = "nav-button">
            <span className = "nav-text">
              Media
            </span>
        </Link>
        <Link to = "https://66roundnet.com/collections/raleigh-roundnet?page=1" className = "nav-button">
            <span className = "nav-text">
              Merch
            </span>
        </Link>
      </nav>
      <nav id = "smallNav">
        <span className = "hamburger" onClick = {toggleNav}>
            ☰ 
        </span>
      </nav>
      </div>
    </header>
    {isNavOpen ? 
            <div className = "drop-down">
                <Link to = {'/events'} className = "dd-item" style = {{textDecoration:"none", top: "6rem"}} onClick = {toggleNav}>Events</Link>
                <Link to = {'/about'} className = "dd-item" style = {{textDecoration:"none", top: "9rem"}} onClick = {toggleNav}>About</Link>
                <Link to = {'/media'} className = "dd-item" style = {{textDecoration:"none", top: "12rem"}} onClick = {toggleNav}>Media</Link>
                <Link to = {'https://66roundnet.com/collections/raleigh-roundnet?page=1'} className = "dd-item" style = {{textDecoration:"none", top: "15rem"}} onClick = {toggleNav}>Merch</Link>
            </div> : null}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
