import React, { Component } from 'react'
import Link from 'gatsby-link'
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

class Libraries extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
    return (
      <Box full="horizontal">
        <Tiles>
          {allMarkdownRemark.edges.map(({ node: { frontmatter, html } }) => (
            <Tile wrap={true} pad="small" separator="bottom">
              <Card
                heading={frontmatter.title}
                label={frontmatter.author}
                description={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: html,
                    }}
                  />
                }
                link={frontmatter.externalLinks.map(link => (
                  <Anchor href={link.url} label={link.title} target="_blank" />
                ))}
              />
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Libraries.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query LibrariesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/libraries/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            author
            externalLinks {
              title
              url
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Libraries)
