const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const newsTemplate = path.resolve(`src/templates/news.js`)

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/news/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path) {
        createPage({
          path: node.frontmatter.path,
          component: newsTemplate,
          context: {}, // additional data can be passed via context
        })
      }
    })
  })
}
