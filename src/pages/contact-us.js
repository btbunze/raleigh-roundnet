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

    </Layout>
  )
}

export default ContactPage