import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Overview extends Component {
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
        <Markdown content={frontmatter.header} />
        {renderAst(htmlAst)}
        <Markdown content={frontmatter.footer} />
      </Box>
    )
  }
}

Overview.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query OverviewQuery {
    markdownRemark(frontmatter: { path: { eq: "/overview" } }) {
      htmlAst
      frontmatter {
        title
        header
        footer
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

export default connect(mapStateToProps, mapDispatchToProps)(Overview)
