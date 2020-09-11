import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{useState, useEffect} from "react"


import "./index.css"

import Image from "./image"

const Header = ({ siteTitle }) => {
  
  const [isLarge, setIsLarge] = useState("hi");

  console.log(isLarge)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector('header');
      const navButtons = [... document.querySelectorAll(".nav-button")]
      const headerImg = document.querySelector('.header-image')
      const pageTitle = document.querySelector('.page-title')

      if (document.body.scrollTop > 48 || document.documentElement.scrollTop > 48) {
        header.style.height = "3rem";
        navButtons.forEach((elt) => {elt.style.height = "3rem"})
        headerImg.style.width = "2rem";
        headerImg.style.margin = ".5rem"
        pageTitle.style.display = "none"
        if(isLarge){setIsLarge(false)}
      } else {
        header.style.height = "6rem";
        navButtons.forEach((elt) => {elt.style.height = "6rem"})
        headerImg.style.width = "4rem";
        headerImg.style.margin = "1rem"
        pageTitle.style.display = "inline-block"
        if(!isLarge){setIsLarge(true)}
      }
    })

  })
  
  return (
    <header
        style={{
          background: `rgba(203, 214, 224,80)`,
          height: `6rem`,
          
        }}
      >
      <div className = "content">
      <div style = {{display:`inline-block`}}>
        <div className = "header-image" style = {{width: `4rem`, margin: `1rem`, display: `inline-block`}} >
          <Image/>
        </div>
        <h1 className = "page-title" style = {{margin: `0px`, position: `relative`, top: `-.25rem`, display: `inline-block`}}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              fontSize: `2rem`,
              lineHeight: `2rem`
            }}
          >
            {isLarge ? (<span>Raleigh <br></br>Roundnet</span>):(<span>Raleigh Roundnet</span>) }

          </Link>
        </h1>
      </div>
      <div style = {{display: `inline-block`, float: `right`}}>
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
        <Link to = "/contact-us" className = "nav-button">
            <span className = "nav-text">
              Contact Us
            </span>
        </Link>
      </div>
      </div>
    </header>
  
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
