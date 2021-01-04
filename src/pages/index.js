import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ballThrowVideo from "../images/ball-throw.mp4"
import ballThrowImg from "../images/ball-throw-img.jpg"


export const query = graphql`{
  featuredTournament: contentfulTournament(featured: {eq: true}) {
    date
    description {
      description
    }
    spikehubLink
    tournamentName
    registrationLink
    picture {
      fluid {
        src
      }
    }

  }
}`

const IndexPage = ({data}) => {
  
  const featuredTournament = data.featuredTournament;

  return (
  <Layout>
    <SEO title="Home" />
      <div className = "section hero" style = {{paddingTop: `6rem`, backgroundColor: "rgba(0, 0, 0,.5)", overflow:"hidden"}}>
        <video
            autoPlay
            muted
            width = "100%"
            style = {{position:"absolute", top:"-40px", left: "0",zIndex:'-1'}}
          >
            <source src = {ballThrowVideo} type = "video/mp4" />
        </video>
        <img src = {ballThrowImg} className = "hero-img" style = {{position:'absolute', zIndex: '-1'}}></img>
        <div className = "content hero-text">
          <h1 className = "hero-header">WELCOME TO RALEIGH ROUNDNET</h1>
          <Link className = "cta-button" to = "/events" style = {{textDecoration: "none"}}>
            <button className = "cta-button">Upcoming Events</button>
          </Link>

        </div>
      </div>
      <div className = "section" style = {{marginBottom:'0'}}>
        <div className = "content">
          <h2 className = "section-header">Featured Event</h2>
          {/*<div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
            <svg width="415px" height="12px" viewBox="0 0 415 12" xmlns="http://www.w3.org/2000/svg">
              <polygon points="22,0  405, 0  395, 12  12, 12"
                      style={{fill: 'rgba(243, 135, 32,.6)'}}/>
            </svg>
          </div>*/}
            <div className = "tournament-info">
              <div className = "grid-item-sm" style = {{position: 'relative'}}>
                <div style = {{width:'90%', backgroundColor: 'white'}}>
                  <img src = {featuredTournament.picture.fluid.src}></img>
                </div>
              </div>
              <div className = "grid-item-lg">
                <h3 className = "ti-header">{featuredTournament.tournamentName}</h3>
                <h4 className = "ti-subheader">{featuredTournament.date.substring(0,10)}</h4>
                <p>{featuredTournament.description.description}</p>
                <a href = {featuredTournament.registrationLink}><button className = "ti-button">Register</button></a>
                <a href = {featuredTournament.spikehubLink}><button className = "ti-button">Find A Partner</button></a>
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
