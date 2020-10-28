import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


export default ({ data }) => {
  return (
  <Layout>
    <div>
      <h1>
        Blog
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>  
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
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { draft: { eq: false } catalog: {eq: "Europe Cycle 2019"} }}) {
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
