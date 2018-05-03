import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Downloads extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    console.log(this.props)
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {renderAst(htmlAst)}
        <Heading strong={true} tag="h3">
          {frontmatter.latestTitle}
        </Heading>
        <Heading strong={true} tag="h3">
          {frontmatter.stableTitle}
        </Heading>
        <Heading strong={true} tag="h3">
          {frontmatter.betaTitle}
        </Heading>
      </Box>
    )
  }
}

Downloads.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query DownloadQuery {
    markdownRemark(frontmatter: { path: { eq: "/downloads" } }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Downloads)
