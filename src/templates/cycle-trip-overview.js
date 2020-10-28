import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import '../components/gallery.css'
import "react-image-gallery/styles/css/image-gallery.css";

export default ({ data }) => {
  const post = data.markdownRemark

  const komootCollectionLink = "https://www.komoot.com/collection/" + post.frontmatter.komootCollectionId + "/embed"

  return (
    <Layout>
      <div>
        
        <h1>{post.frontmatter.title}</h1>   
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        
        <iframe height="580" width="100%" frameBorder="0" scrolling="no" src={komootCollectionLink} title={post.frontmatter.title}></iframe>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $catalog:  String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        draft
        gallery
        stravaLink
        komootCollectionId
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { draft: { eq: false } catalog: { eq: $catalog } type: { eq: "cycle-trip-entry" } }}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`