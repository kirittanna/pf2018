import React from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Timestamp from 'grommet/components/Timestamp'

import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious'

import { renderAst } from '../utils/common'

export default function BookTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, file } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark

  return (
    <Box>
      <Anchor path="/books" icon={<LinkPreviousIcon />} label="All Books" />
      <Columns size="medium">
        <Box margin="none" pad="small" align="center">
          <Img resolutions={file.childImageSharp.resolutions} />
        </Box>
        <Box margin="none" pad="small">
          <Heading strong={true} tag="h3">
            {frontmatter.title}
          </Heading>
          <Timestamp value={frontmatter.date} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter.externalLinks.map(link => (
            <Anchor href={link.url} label={link.title} target="_blank" />
          ))}
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
        externalLinks {
          title
          url
        }
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
