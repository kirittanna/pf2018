import React from 'react'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import CatalogIcon from 'grommet/components/icons/base/Catalog'

export default function ExhibitionTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark
  return (
    <Box>
      <Anchor href="/exhibition" icon={<CatalogIcon />}>
        Exhibition Home
      </Anchor>
      <Heading strong={true} tag="h2">
        {frontmatter.title}
      </Heading>
      <h4>{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  )
}

export const pageQuery = graphql`
  query Exhibition($path: String!) {
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
