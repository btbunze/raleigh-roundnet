import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      </div>
    </div>
  </Layout>
)

export default AboutPage