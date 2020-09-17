import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import wideGroupPic from "../images/IMG_0035.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Events" />
    <div className = "section" style = {{paddingTop: "6rem"}}>
      <div className = "content" style = {{padding: "3rem 0rem"}}>
        <h2 className = "section-header">About the Club</h2>
        <div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="270px" height="12px" viewBox="0 0 270 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  255, 0  245, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>
        <div className = "two-column">
          <div className = "column">
            <p style = {{fontSize: "1.25rem"}}>Raleigh Roundnet is the largest and fastest-growing roundnet club in North Carolina! Members of the club play pickup games every week, and sometimes even multiple times a week! Additionally, we host a tournament <b>every month</b>, with coed-only tournaments for each. These tournaments attract players of all skill levels from all over the east coast and beyond! You can check out the past tournaments and sign up for upcoming ones through the Events page.</p>
          </div>
          <div className = "column">
            <div style = {{width:"100%", height:"100%", backgroundColor:"black"}}>
            <div style = {{width:'calc(100% - 3rem)', height: "calc(100% - 3rem)",backgroundColor: '#F38720', position: 'absolute', top: '2rem', left: '2rem', zIndex: -1}}></div>
            </div>
          </div>
        </div>
        <div className = "two-column">
          <div className = "column">
            <div style = {{width:"100%", height:"100%", backgroundColor:"black"}}>
            <div style = {{width:'calc(100% - 3rem)', height: "calc(100% - 3rem)",backgroundColor: '#F38720', position: 'absolute', top: '1rem', left: '1rem', zIndex: -1}}></div>
          </div>
          </div>
          <div className = "column">
          <p style = {{fontSize: "1.25rem"}}>Raleigh Roundnet is the largest and fastest-growing roundnet club in North Carolina! Members of the club play pickup games every week, and sometimes even multiple times a week! Additionally, we host a tournament <b>every month</b>, with coed-only tournaments for each. These tournaments attract players of all skill levels from all over the east coast and beyond! You can check out the past tournaments and sign up for upcoming ones through the Events page.</p>
          </div>
        </div>
        <img src = {wideGroupPic} style = {{margin: '3rem 1.5rem 1.5rem 1.5rem', width: "calc(100% - 3rem)"}}></img>
      </div>
    </div>
  </Layout>
)

export default AboutPage