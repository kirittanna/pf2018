import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export default function Home({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { htmlAst, frontmatter } = markdownRemark
  return (
    <Box>
      <Heading strong={true} tag="h2">
        {frontmatter.title}
      </Heading>
      {renderAst(htmlAst)}
    </Box>
  )
}

Home.propTypes = {
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        title
        twitter
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
