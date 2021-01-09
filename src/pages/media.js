import { array } from 'prop-types';
import React,{useState} from 'react'
import Layout from "../components/layout"

export const query = graphql`{
    pictures: allContentfulPhotoAlbum {
      nodes {
        picture {
            fluid {
                src
            }
        },
        albumName,
        albumLink
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

    /*const [isWindowLarge, setIsWindowLarge] = useState(window.innerWidth >= 550)
    window.addEventListener('resize', () => {
        console.log(window.innerWidth)
        if(isWindowLarge != window.innerWidth >= 550) {
            setIsWindowLarge(!isWindowLarge);
        }
    })*/
    /*const [numImages, setNumImages] = useState(3)

    const showMore = () =>{
        if(numImages + 3 >= imgArray.length){
            document.querySelector("#showMoreImagesButton").style.display = "none"
        }
        setNumImages(numImages + 3)

    }*/

    const getVidIds = (arr) => {
        return arr.map((vid) => {
            return vid?.link.split("=")[1].split("&")[0];
        })
    }

    return (
        <Layout>
            <section style = {{paddingTop: '6rem'}}>
                <div className = 'content' style = {{paddingTop: '3rem'}}>
                    <h2 className = "section-header">Photo Albums</h2>
                    <div className = 'media-grid'>
 
                        {imgArray.map((pic) => (
                            <a className = "gp-link" href = {pic.albumLink} style = {{textDecoration: 'none'}}>
                                <div style = {{backgroundColor:'var(--light-gray)', width:'100%'}}> 
                                    <img src = {pic.picture.fluid.src} style = {{width:'100%', height:'100%', objectFit: 'cover', margin:'auto'}}></img>
                                </div>
                                <div className = "gp-label">
                                    {pic.albumName}
                                </div>    
                            </a>
                        ))}
                    </div>
                    {/* imgArray.length > 3 ? (<button onClick = {showMore} className = "di-button" id = "showMoreImagesButton" style = {{display: 'block', margin:'.5rem auto',}}> See More</button>) : null*/}
                </div>
                <div className = 'content' style = {{paddingTop: '3rem'}}>
                    <h2 className = "section-header">Youtube Videos</h2>
                        <div style = {{textAlign: 'center', marginBottom:'5rem'}}>
                            {getVidIds(vidArray).map((vid) => (
                                <div className = "iframe-container">
                                    <iframe className = "iframe" style = {{margin:'1rem' }} src= {`https://www.youtube.com/embed/${vid}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                )
                            )}   
                            {/*getVidIds(vidArray).map((vid) => 
                                isWindowLarge ? 
                                (<iframe style = {{margin:'1rem' }} width = "460" height = "259" src= {`https://www.youtube.com/embed/${vid}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
                                :
                            (<iframe style = {{margin:'1rem 0rem' }} width = "320" height = "180" src= {`https://www.youtube.com/embed/${vid}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>))*/}
                        </div>
                </div>
            </section>
        </Layout>
    )
}

export default MediaPage