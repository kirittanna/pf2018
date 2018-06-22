import React from 'react'
import { Helmet } from 'react-helmet'
import { isEmpty } from 'lodash/fp'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious'

export default function ExampleTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, rawCode } = data // data.markdownRemark holds our post data
  const { frontmatter, body, html } = markdownRemark

  const codeWrapper = `<script type="text/p5" data-autoplay data-hide-sourcecode data-preview-width="768" data-height="480" data-base-url="/" src="${
    frontmatter.demoCode
  }"></script>`

  return (
    <Box>
      <Helmet>
        <script src="//toolness.github.io/p5.js-widget/p5-widget.js" />
      </Helmet>
      <Anchor path="/examples" icon={<LinkPreviousIcon />} label="Examples" />
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
    rawCode(name: { eq: $path }) {
      content
    }
  }
`
