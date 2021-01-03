import React from 'react'
import Layout from "../components/layout"

export const query = graphql`{
    pictures: allContentfulPicture {
      nodes {
        picture {
            fluid {
                src
            }
        },
        caption
      }
    }
  }`


const MediaPage = ({data}) => {
    return (
        <Layout>
            <section style = {{paddingTop: '6rem'}}>
                <div className = 'content' style = {{paddingTop: '3rem'}}>
                    <h2 className = "section-header">Gallery</h2>
                    <div className = 'media-grid'>
                        {data.pictures.nodes.map((pic) => (
                            <div>
                                <img src = {pic.picture.fluid.src} className = "gallery-img"></img>
                            </div>
                        ))}
                    </div>
                    <h2 className = "section-header">Video Links</h2>
                    <div className = 'video-link-grid'>
                        <div style = {{textAlign: 'center'}}>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>
                        </div>
                        <div style = {{textAlign: 'center'}}>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>      
                        </div>
                        <div style = {{textAlign: 'center'}}>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>
                            <a href = "https://www.youtube.com/watch?v=JsXMSAeywBs" className = 'video-link'>SpikeBrite</a>      
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )
}

export default MediaPage