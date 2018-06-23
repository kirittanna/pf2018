import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { isEmpty } from 'lodash/fp'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious'

class ExampleTemplate extends Component {
  constructor() {
    super()

    this.state = {
      codeWrapper: '',
    }
  }

  componentDidMount() {
    const {
      data: {
        markdownRemark: { frontmatter },
      },
    } = this.props

    const previewWidth = document
      .getElementById('page-container')
      .getBoundingClientRect().width

    this.setState(() => ({
      codeWrapper: `<script type="text/p5" data-autoplay data-hide-sourcecode data-preview-width="${previewWidth}" data-height="480" data-base-url="/" src="${
        frontmatter.demoCode
      }"></script>`,
    }))
  }

  render() {
    const {
      data, // this prop will be injected by the GraphQL query below.
    } = this.props
    const { markdownRemark, rawCode } = data // data.markdownRemark holds our post data
    const { frontmatter, body, html } = markdownRemark

    return (
      <Box>
        <Helmet>
          <script src="/p5-widget/p5-widget.js" />
        </Helmet>
        <Anchor path="/examples" icon={<LinkPreviousIcon />} label="Examples" />
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        <h4>{frontmatter.date}</h4>
        {!isEmpty(this.state.codeWrapper) && (
          <div dangerouslySetInnerHTML={{ __html: this.state.codeWrapper }} />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    )
  }
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

export default ExampleTemplate
