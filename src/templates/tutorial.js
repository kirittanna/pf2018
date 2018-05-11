import React from 'react'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import CatalogIcon from 'grommet/components/icons/base/Catalog'

export default function TutorialTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark
  return (
    <Box>
      <Anchor path="/tutorials" icon={<CatalogIcon />}>
        Tutorials Home
      </Anchor>
      <Heading strong={true} tag="h3">
        {frontmatter.title}
      </Heading>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  )
}

export const pageQuery = graphql`
  query Tutorial($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
