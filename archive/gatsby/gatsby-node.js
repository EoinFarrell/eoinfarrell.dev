/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const cycleTripEntries = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {draft: {eq: false}, type: {eq: "cycle-trip-entry"}}}) {
        edges {
          node {
            frontmatter {
              title
              draft
              imageTag
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  cycleTripEntries.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log("Page Name: " + node.frontmatter.title)
    // console.log("Image Tag: " + node.frontmatter.imageTag)
    
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/cycle-trip-entry.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          title: node.fields.title,
          imageTag: node.frontmatter.imageTag
        },
      })
  })
  
  const cycleTripOverviews = await graphql(`
    query {
      allMarkdownRemark(filter: {frontmatter: {draft: {eq: false} type: {eq: "cycle-trip-overview"}}}) {
        edges {
          node {
            frontmatter {
              title
              draft
              imageTag
              catalog
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  cycleTripOverviews.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log("Page Name: " + node.frontmatter.title)
    console.log("Image Tag: " + node.frontmatter.imageTag)
    console.log("Image Tag: " + node.frontmatter.catalog)
    console.log("Image Tag: " + node.fields.slug)
    
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/cycle-trip-overview.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          title: node.fields.title,
          imageTag: node.frontmatter.imageTag,
          catalog: node.frontmatter.catalog
        },
      })
  })
}