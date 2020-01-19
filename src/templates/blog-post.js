import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

export default ({ data }) => {
  const post = data.markdownRemark
  const images = data.allCloudinaryMedia

  var galleryImages = [];

  for (var i = 0; i < images.edges.length; i++) {
    galleryImages.push({
      original: images.edges[i].node.url
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

      <ImageGallery items={galleryImages} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allCloudinaryMedia {
      edges {
        node {
          url
        }
      }
    }
  }
`