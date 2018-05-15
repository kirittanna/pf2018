import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Tools extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    console.log(this.props)
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
    return (
      <Box full="horizontal">
        <Tiles>
          {allMarkdownRemark.edges.map(({ node: { frontmatter }, html }) => (
            <Tile wrap={true} pad="small" separator="bottom">
              <Card
                heading={frontmatter.title}
                label={frontmatter.author}
                description={html}
                /*link={frontmatter.links.map(link => (
                  <Anchor
                    href={link.url}
                    label={link.title}
                    icon={<LinkNextIcon />}
                  />
                ))}*/
              />
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Tools.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query ToolsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/tools/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            author
            builtIn
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

export default connect(mapStateToProps, mapDispatchToProps)(Tools)
