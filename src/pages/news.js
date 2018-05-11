import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class News extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
    return (
      <Box full="horizontal">
        <List>
          {allMarkdownRemark.edges.map(({ node: { frontmatter }, html }) => (
            <ListItem wrap={true} pad="small" separator="bottom">
              <Anchor path={frontmatter.path}>{frontmatter.title}</Anchor>
              {html}
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }
}

News.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/news/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
          }
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(News)
