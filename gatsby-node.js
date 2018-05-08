const path = require('path')

const buildPages = (
  { boundActionCreators, graphql },
  component,
  regex,
  fields,
  context = {}
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
        createPage({
          component,
          context, // additional data can be passed via context
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
  const exhibitionTemplate = path.resolve(`src/templates/exhibition.js`)
  const exampleTemplate = path.resolve(`src/templates/example.js`)
  const libraryTemplate = path.resolve(`src/templates/library.js`)
  const newsTemplate = path.resolve(`src/templates/news.js`)
  const tutorialTemplate = path.resolve(`src/templates/tutorial.js`)

  return Promise.all([
    buildPages(args, bookTemplate, /\/books\//, ['path', 'title']),
    buildPages(args, exhibitionTemplate, /\/exhibition\//, ['path', 'title']),
    buildPages(args, exampleTemplate, /\/examples\//, [
      'path',
      'title',
      'code',
    ]),
    buildPages(args, libraryTemplate, /\/libraries\//, [
      'path',
      'title',
      'author',
      'tags',
    ]),
    buildPages(args, newsTemplate, /\/news\//, ['path', 'title']),
    buildPages(args, tutorialTemplate, /\/tutorials\//, [
      'path',
      'date',
      'title',
    ]),
  ])
}
