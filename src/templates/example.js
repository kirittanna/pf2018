import React from 'react'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import CatalogIcon from 'grommet/components/icons/base/Catalog'

export default function ExampleTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark

  const codeWrapper = `<script type="text/p5" data-autoplay data-preview-width="480" data-base-url="/" src="${
    frontmatter.demoCode
  }"></script>`

  return (
    <Box>
      <Anchor path="/examples" icon={<CatalogIcon />}>
        Example Home
      </Anchor>
      <Heading strong={true} tag="h2">
        {frontmatter.title}
      </Heading>
      <h4>{frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: codeWrapper }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  )
}

export const pageQuery = graphql`
  query Example($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        sourceCode
        demoCode
      }
    }
  }
`
