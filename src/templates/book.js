import React from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import CatalogIcon from 'grommet/components/icons/base/Catalog'

import { renderAst } from '../utils/common'

export default function BookTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, file } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark
  console.log(file)
  return (
    <Box>
      <Anchor href="/books" icon={<CatalogIcon />}>
        All Books
      </Anchor>
      <Heading strong={true} tag="h3">
        {frontmatter.title}
      </Heading>
      <Columns>
        <Box margin="none" pad="small" align="center">
          <Img resolutions={file.childImageSharp.resolutions} />
        </Box>
        <Box margin="none" pad="small">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <h4>{frontmatter.date}</h4>
        </Box>
      </Columns>
    </Box>
  )
}

export const pageQuery = graphql`
  query Book($path: String!, $cover: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    file(relativePath: { regex: $cover }) {
      childImageSharp {
        id
        resolutions(width: 300) {
          base64
          tracedSVG
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`
