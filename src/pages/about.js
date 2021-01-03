import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import wideGroupPic from "../images/IMG_0035.png"
import girlWithBall from "../images/girl-with-ball.jpg"
import groupPic from "../images/group-pic.jpg"

import fbLogo from "../images/fb-logo.png"
import igLogo from "../images/insta-logo.png"
import twLogo from "../images/twitter-logo.png"

const AboutPage = () => {
  let submit = (e) => {
    e.preventDefault()
  }

  return (
  <Layout>
    <SEO title="Events" />
    <div className = "section" style = {{paddingTop: "6rem"}}>
      <div className = "content" style = {{paddingTop: "3rem"}}>
        <h2 className = "section-header">About the Club</h2>
        {/*<div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="270px" height="12px" viewBox="0 0 270 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  255, 0  245, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>*/}
        <div className = "two-column">
          <div className = "column about-column">
            <p className = "about-text"><strong>Welcome to Raleigh Roundnet,</strong> home of the highest payouts of any independent tournaments! We are located in Raleigh, North Carolina, and our goal is simply to spread our love of the sport and the community. We love introducing new players to the sport and seeing people “catch the bug” of Spikeball.</p>
          </div>
          <div className = "column about-column">
            <div style = {{width:"90%", margin:'auto'}}>
            <img src = {groupPic}></img>
            {/*<div style = {{width:'calc(100% - 1rem)', height: 'calc(100%-1rem)', backgroundColor: '#F38720', position: 'absolute', top: '2rem', left: '2rem', zIndex: -1}}></div>*/}
            </div>
          </div>
        </div>
        <div className = "two-column">
          <div className = "column about-column">
          <p className = "about-text">Raleigh Roundnet is the largest and fastest-growing roundnet club in North Carolina! Members of the club play pickup games every week, and we host regular and coed tournaments <b>every month</b>! Our tourneys attract players of all skill levels from all over the country! You can sign up for upcoming tournaments through the Events page.</p>
          </div>
          <div className = "column about-column">
            <div style = {{width:'90%', margin:'auto'}}>
              <img src = {girlWithBall}></img>
            </div>
            {/*<div style = {{width:'calc(100% - 3rem)', height: "calc(100% - 3rem)",backgroundColor: '#F38720', position: 'absolute', top: '1rem', left: '1rem', zIndex: -1}}></div>*/}
          </div>
        </div>
      </div>
    </div>
    <div className = "section" id = 'contact-us'>
      <div className = "content" style = {{paddingBottom: "3rem"}}>
        <h2 className = "section-header">Contact Us</h2>
        {/*<div className = "underline" style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `3rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="196px" height="12px" viewBox="0 0 196 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  185, 0  175, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>*/}
        <div className = "two-column">
          <div className = "column" style = {{width:"100%", margin:"0 auto"}}>
            <h3 className = "ti-header">Get in Touch!</h3>
            <p>Got a question about the club? Want more information about events? Just want to say hi? Come check us out on social media or contact us by email or text!</p>
            <p>919-884-6799</p>
            <p>RaleighRoundnetClub@gmail.com</p>
            <br/>
            <div>
              <img src = {fbLogo} style = {{width:"25%"}}></img>
              <img src = {igLogo} style = {{width:"25%"}}></img>
              <img src = {twLogo} style = {{width:"24%"}}></img>
            </div>

          </div>
          <div className = "column" style = {{width:"90%", margin: "1.5rem auto", boxShadow: "0px 0px 2rem rgba(0,0,0,.3)", backgroundColor:"#CBD6E0",}}>
            <form style = {{width:"calc(100% - 2rem)", margin: "auto"}} action = "https://getform.io/f/c9f3691f-f5e5-4ce9-9308-4286d2cdfd0c" method = "POST">
              <label className = "contact-input-label">Name</label>
              <input className = "contact-input" name = "name"></input>
              <label className = "contact-input-label">Email</label>
              <input className = "contact-input" name = "email"></input>
              <label className = "contact-input-label">Message</label>
              <textarea className = "contact-input" style = {{height:"10rem", textAlign:"top", resize: "none"}} name = "message"></textarea>
              <button className = "submit-button" type = 'submit' onSubmit = {submit}>Send</button>
            </form>
          </div>
        </div>
        <img src = {wideGroupPic} style = {{ paddingTop: "3rem", margin: "0rem 1.5rem", width: "calc(100% - 3rem)"}}></img>
      </div>

    </div>
  </Layout>
  )
}

export default AboutPage