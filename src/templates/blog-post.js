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