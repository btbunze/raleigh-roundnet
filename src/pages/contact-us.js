import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import fbLogo from "../images/fb-logo.png"
import igLogo from "../images/insta-logo.png"
import twLogo from "../images/twitter-logo.png"

const ContactPage = () => {

  let submit = (e) => {
    e.preventDefault()
  }

  return(
    <Layout>
    <SEO title="Contact Us" />
    <div className = "section" style = {{marginTop: "6rem"}}>
      <div className = "content" style = {{padding: "3rem 0rem"}}>
        <h2 className = "section-header">Contact Us</h2>
        {/*<div className = "underline" style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `3rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="196px" height="12px" viewBox="0 0 196 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  185, 0  175, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>*/}
        <div className = "two-column">
          <div className = "column" style = {{width:"90%", margin:"0 auto"}}>
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
          <div className = "column" style = {{width:"90%", margin: "auto", boxShadow: "0px 0px 2rem rgba(0,0,0,.3)", backgroundColor:"#CBD6E0",}}>
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
      </div>

    </div>
  </Layout>
  )
}

export default ContactPage