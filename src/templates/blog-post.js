import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ImageGallery from 'react-image-gallery'
import ImageGallery2 from "../components/image2"
import '../components/gallery.css'
import "react-image-gallery/styles/css/image-gallery.css";

export default ({ data }) => {
  const post = data.markdownRemark
  const clImages = data.allCloudinaryMedia

  var stravaLinks = []

  for (var i = 0; i < post.frontmatter.stravaLink.length; i++) {
    stravaLinks.push('https://www.strava.com/activities/' + post.frontmatter.stravaLink[i])
  }

  var komootLinks = []

  if(post.frontmatter.komootLink){
    for (var i = 0; i < post.frontmatter.komootLink.length; i++) {
      komootLinks.push('https://www.komoot.com/tour/' + post.frontmatter.komootLink[i] + '/embed?profile=1')
    }
  }

  var galleryImages = [];

  for (var i = 0; i < clImages.edges.length; i++) {
    galleryImages.push({
      original: clImages.edges[i].node.url,
      thumbnail: clImages.edges[i].node.url
    })
  }

  return (
    <Layout>
      <div>
        {}
        {/* <h1>{images.edges.node.url}</h1> */}
        <h1>{post.frontmatter.title}</h1>   
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        {stravaLinks.map((link) => (
            <iframe height='405' width='590' frameBorder='0' allowtransparency='true' scrolling='no' src={link}></iframe>
          ))
        }

        {komootLinks.map((link) => (
            <iframe height="580" width="100%" frameBorder="0" scrolling="no" src={link}></iframe>
          ))
        }
        

        <h2>Pictures</h2>
          <ImageGallery 
          items={galleryImages}
          lazyLoad={false}
          showIndex={false}
          showBullets={true}
          infinite={true}
          showThumbnails={true}
          showFullscreenButton={true}
          showGalleryFullscreenButton={true}
          showPlayButton={false}
          showGalleryPlayButton={false}
          showNav={true}
          isRTL={false}
          slideDuration={450}
          slideInterval={2000}
          slideOnThumbnailOver={false}
          thumbnailPosition={'bottom'}
        />
      </div>

      {/* <div>
          <div className="image-grid">
            {clImages.map((image, index) => (
                  <div className="image-item" key={`${index}-cl`}>
                    <img src={image.node.secure_url} alt={"no alt :("} />
                  </div>
                ))  
            }
          </div>
        </div> */}

      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
            if(post.frontmatter.gallery){
            }
          `,
        }}
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $imageTag: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        draft
        gallery
        stravaLink
        komootLink
      }
    }
    allCloudinaryMedia(filter: {tags: {eq: $imageTag}}, sort: {order: ASC, fields: original_filename}) {
      edges {
        node {
          id
          url
          secure_url
          public_id
          width
          version
          type
          resource_type
          height
          format
          internal {
            contentDigest
            content
          }
        }
      }
    }
  }
`