import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className = "section" style = {{marginTop: "6rem"}}>
      <div className = "content" style = {{padding: "3rem 0rem"}}>
        <h2 className = "section-header">Contact Us</h2>
        <div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="196px" height="12px" viewBox="0 0 196 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  185, 0  175, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>
        <form style = {{width:"25rem", margin: "auto"}}>
          <label className = "contact-input-label">Name</label>
          <input className = "contact-input"></input>
          <label className = "contact-input-label">Email</label>
          <input className = "contact-input"></input>
          <label className = "contact-input-label">Message</label>
          <input className = "contact-input" style = {{height:"10rem", textAlign:"top"}}></input>
          <button className = "submit-button">Send</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage