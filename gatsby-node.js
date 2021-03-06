const path = require('path')

const buildPages = (
  { boundActionCreators, graphql },
  component,
  regex,
  fields = [],
  contextFields = []
) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "${regex}" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              ${fields.join(' ')}
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    try {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const props = {}
        fields.forEach(fieldName => {
          props[fieldName] = node.frontmatter[fieldName]
        })
        const context = {} // additional data can be passed via context
        contextFields.forEach(fieldName => {
          const fieldValue = node.frontmatter[fieldName]
          context[fieldName] = new RegExp(
            fieldValue.substr(fieldValue.lastIndexOf('/') + 1)
          )
        })
        createPage({
          component,
          context,
          ...props,
        })
      })
    } catch (e) {
      console.log(e)
    }
  })
}

exports.createPages = args => {
  const bookTemplate = path.resolve(`src/templates/book.js`)
  const exampleTemplate = path.resolve(`src/templates/example.js`)
  const newsTemplate = path.resolve(`src/templates/news.js`)
  const tutorialTemplate = path.resolve(`src/templates/tutorial.js`)

  return Promise.all([
    buildPages(
      args,
      bookTemplate,
      /\/books\//,
      ['path', 'title', 'cover'],
      ['cover']
    ),
    buildPages(args, exampleTemplate, /\/examples\//, ['path', 'title']),
    buildPages(args, newsTemplate, /\/news\//, ['path', 'title']),
    buildPages(args, tutorialTemplate, /\/tutorials\//, [
      'path',
      'date',
      'title',
    ]),
  ])
}
