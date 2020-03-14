import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

export default ({ data }) => {
  const post = data.markdownRemark
  // const images = data.allCloudinaryMedia

  // var galleryImages = [];

  // // for (var i = 0; i < images.edges.length; i++) {
  // for (var i = 0; i < 6; i++) {
  //   galleryImages.push({
  //     original: images.edges[i].node.url,
  //     thumbnail: images.edges[i].node.url
  //   })
  // }
  

  return (
    <Layout>
      <div>
        {}
        {/* <h1>{images.edges.node.url}</h1> */}
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      {/* <ImageGallery 
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
      /> */}

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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        draft
        gallery
      }
    }
    # allCloudinaryMedia {
    #   edges {
    #     node {
    #       id
    #       url
    #       secure_url
    #       public_id
    #       width
    #       version
    #       type
    #       resource_type
    #       height
    #       format
    #       internal {
    #         contentDigest
    #         content
    #       }
    #     }
    #   }
    # }
  }
`