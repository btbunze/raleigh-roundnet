import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import calendarIcon from "../images/calendar_today-black-18dp.svg"

const EventsPage = () => (
  <Layout>
    <SEO title="Events" />
    <div className = "section" style = {{marginTop: "6rem"}}>
      <div className = "content" style = {{padding: "3rem 0px"}}>
        <h2 className = "section-header">Upcoming Events</h2>
        <div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="300px" height="12px" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  285, 0  275, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>
        <div className = "tournament-info tournament-list-item">
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
          <p className = "coming-soon-text">
            <img src={calendarIcon} style = {{width:"3rem", marginBottom: "1rem"}}></img>
            <br/>
            More events coming soon!
            <br/>...
          </p>

      </div>
    </div>
  </Layout>
)

export default EventsPage