import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import calendarIcon from "../images/calendar_today-black-18dp.svg"
import {graphql} from 'gatsby'

import Results from '../components/results'


export const query = graphql`{
  tournaments: allContentfulTournament {
    nodes {
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
      },
      results {
        division
        podiumPic {
          fluid {
            src
          }
        }
        secondPlace
        thirdPlace
        firstPlace
      }
    }
  }
}`



const EventsPage = ({data}) => {
  
  const tournaments = data.tournaments.nodes;
  const upcomingTournaments = tournaments.filter((tournament) => {
    let tourneyDate = tournament.date.substring(0,10)
    let todayDate = new Date;
    todayDate = todayDate.toISOString().substring(0,10)
    return todayDate < tourneyDate;
  });
  const pastTournaments = tournaments.filter((tournament) => !upcomingTournaments.includes(tournament))

  return (
  <Layout>
    <SEO title="Events" />
    <div className = "section" style = {{marginTop: "6rem"}}>
      <div className = "content" style = {{paddingTop: "3rem"}}>
        <h2 className = "section-header">Upcoming Events</h2>
        {/*<div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="300px" height="12px" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  285, 0  275, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>*/}

          {upcomingTournaments.map((tournament) => (
            <div className = "tournament-info tournament-list-item">
              <div className = "grid-item-sm" style = {{position: 'relative'}}>
                <div style = {{width:'90%', backgroundColor: 'white'}}>
                  <img src = {tournament.picture.fluid.src}></img>
                </div>
                {/*<div style = {{width:'90%', paddingTop:'90%',backgroundColor: '#F38720', position: 'absolute', top: '.5rem', left: '.5rem', zIndex: -1}}></div>*/}
              </div>
              <div className = "grid-item-lg">
                <h3 className = "ti-header">{tournament.tournamentName}</h3>
                <h4 className = "ti-subheader">{tournament.date.substring(0,10)}</h4>
                <p>{tournament.description.description}</p>
                <a href = {tournament.registrationLink}><button className = "ti-button">Register</button></a>
                <a href = {tournament.spikehubLink}><button className = "ti-button">Find A Partner</button></a>
              </div>
            </div>
          ))}
          <p className = "coming-soon-text">
            <img src={calendarIcon} style = {{width:"3rem", marginBottom: "1rem"}}></img>
            <br/>
            More events coming soon!
            <br/>...
          </p>

      </div>
    </div>
    
    <div style = {{width:"100%", height: "2rem", backgroundColor: "#CBD6E0"}}></div>

    <div className = "section">
      <div className = "content" style = {{paddingTop: "3rem", paddingBottom: '1rem'}}>
        <h2 className = "section-header">Past Events</h2>
        {/*<div style = {{display:'block', textAlign:'center', marginTop: '-3.3rem', marginBottom: `2rem`, position: 'relative', zIndex: '-1'}}>
          <svg width="205px" height="12px" viewBox="0 0 205 12" xmlns="http://www.w3.org/2000/svg">
            <polygon points="22,0  195, 0  185, 12  12, 12"
                    style={{fill: 'rgba(243, 135, 32,.6)'}}/>
          </svg>
        </div>*/}
        {pastTournaments.map((tournament) => (
            <div className = "tournament-info tournament-list-item">
              <div className = "grid-item-sm" style = {{position: 'relative'}}>
                <div style = {{width:'90%', backgroundColor: 'white'}}>
                  <img src = {tournament.picture.fluid.src}></img>
                </div>
                {/*<div style = {{width:'90%', paddingTop:'90%',backgroundColor: '#F38720', position: 'absolute', top: '.5rem', left: '.5rem', zIndex: -1}}></div>*/}
              </div>
              <div className = "grid-item-lg">
                <h3 className = "ti-header">{tournament.tournamentName}</h3>
                <h4 className = "ti-subheader">{tournament.date.substring(0,10)}</h4>
                <p>{tournament.description.description}</p>
                <Results results = {tournament.results}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  </Layout>
)}

export default EventsPage