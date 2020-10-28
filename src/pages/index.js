import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <p>Here you'll find links to anything I work on in my spare time.</p>
      <p>Well hopefully, I've just created this site so lets see how it goes.</p>
      <Link to="https://www.linkedin.com/in/eoinfarrell/">LinkedIn</Link>
      <br/>
      <Link to="https://github.com/EoinFarrell">Github</Link>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      <div>
        <h1>
          Cycle Trips
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { draft: { eq: false } type: { eq: "cycle-trip-overview" } }}) {
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
