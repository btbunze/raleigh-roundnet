import { array } from 'prop-types';
import React,{useState} from 'react'
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
    },
    videos: allContentfulVideo {
      nodes {
        link
      }
    }
  }`


const MediaPage = ({data}) => {

    const imgArray = data.pictures.nodes;
    const vidArray = data.videos.nodes;

    const [numImages, setNumImages] = useState(3)

    const showMore = () =>{
        if(numImages + 3 >= imgArray.length){
            document.querySelector("#showMoreImagesButton").style.display = "none"
        }
        setNumImages(numImages + 3)

    }

    const getVidIds = (arr) => {
        return arr.map((vid) => {
            console.log(vid?.link.split("="))
            return vid?.link.split("=")[1].split("&")[0];
        })
    }

    return (
        <Layout>
            <section style = {{paddingTop: '6rem'}}>
                <div className = 'content' style = {{paddingTop: '3rem'}}>
                    <h2 className = "section-header">Gallery</h2>
                    <div className = 'media-grid'>
                        {imgArray.slice(0,numImages).map((pic) => (
                            <div>
                                <img src = {pic.picture.fluid.src} className = "gallery-img"></img>
                            </div>
                        ))}
                    </div>
                    { imgArray.length > 3 ? (<button onClick = {showMore} className = "di-button" id = "showMoreImagesButton" style = {{display: 'block', margin:'.5rem auto',}}> See More</button>) : null}
                </div>
                <div className = 'content' style = {{paddingTop: '3rem'}}>
                    <h2 className = "section-header">Video Links</h2>
                        <div style = {{textAlign: 'center', marginBottom:'5rem'}}>
                            {getVidIds(vidArray).map((vid) => (<iframe style = {{margin:'1rem' }} width="460" height="259" src= {`https://www.youtube.com/embed/${vid}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>))}
                        </div>
                </div>
            </section>
        </Layout>
    )
}

export default MediaPage