import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {renderAst(htmlAst)}
        <a
          class="twitter-timeline"
          href="https://twitter.com/processingOrg?ref_src=twsrc%5Etfw"
        >
          Tweets by processingOrg
        </a>
      </Box>
    )
  }
}

Home.propTypes = {
  data: React.PropTypes.object,
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

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
