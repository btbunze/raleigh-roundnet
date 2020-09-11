import React, {useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ballThrowVideo from "../images/ball-throw.mp4"

const IndexPage = () => {
  
  return (
  <Layout>
    <SEO title="Home" />
    <div className = "section hero" style = {{paddingTop: `6rem`, backgroundColor: "rgba(0, 0, 0,.5)", overflow:"hidden"}}>
      <video
          autoPlay
          loop
          muted
          width = "100%"
          style = {{position:"absolute", zIndex: "-1", top:"-40px", left: "0"}}
        >
          <source src = {ballThrowVideo} type = "video/mp4" />
      </video>
      <div className = "content">
        <h1 className = "hero-header">WELCOME TO RALEIGH ROUNDNET</h1>
        <Link className = "cta-button" to = "/events" style = {{textDecoration: "none"}}>
          <button className = "cta-button">Upcoming Events</button>
        </Link>

      </div>
    </div>
    <div className = "section">
      <div className = "content">
        <h2 className = "section-header">This Month's Tournament</h2>
        <div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="415px" height="12px" viewBox="0 0 415 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  405, 0  395, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>
          <div className = "tournament-info">
            <div className = "grid-item-sm" style = {{position: 'relative'}}>
              <div style = {{width:'90%', paddingTop:'90%',backgroundColor: 'black'}}></div>
              <div style = {{width:'90%', paddingTop:'90%',backgroundColor: '#F38720', position: 'absolute', top: '.5rem', left: '.5rem', zIndex: -1}}></div>

            </div>
            <div className = "grid-item-lg">
              <h3 className = "ti-header">Raleigh Roundnet September Tournament</h3>
              <h4 className = "ti-subheader">September 12, 2020</h4>
              <p>A description of the tournament, including information about location, prizes, and anything else that might be important for someone looking to sign up to know. I imagine this will take up 4 or 5 lines, so I’m going to type enough placeholder text here to make that a reality. blah blah blah blah blah blah blah blah blah.</p>
              <button className = "ti-button">Register</button>
              <button className = "ti-button">Find A Partner</button>
            </div>
          </div> 
      </div>
    </div>
    <div className = "section secondary-section">
      <div className = "content">
        <div className = "three-section-display">
          <div className = "display-item">
            <h3 className = "di-header">Upcoming Events</h3>
            <p>RRC hosts a weekly pickup, a tournament every month, and a league coming soon in 2021. </p>
            <Link to = "/events" style = {{textDecoration:'none'}}>
              <button className = "di-button">Events</button>
            </Link>
          </div>
          <div className = "display-item">
            <h3 className = "di-header">About the Club</h3>
            <p>Learn more about the history and the future of the club, its members, and its sponsors.</p>
            <Link to = "/about" style = {{textDecoration:'none'}}>
              <button className = "di-button">About</button>
            </Link>
          </div>
          <div className = "display-item">
            <h3 className = "di-header">Contact Us</h3>
            <p>Got a question or a suggestion? Just want to say hi? Contact us at the link below. </p>
            <Link to = "/contact-us" style = {{textDecoration:'none'}}>
              <button className = "di-button">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
