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
import Paragraph from 'grommet/components/Paragraph'
import Button from 'grommet/components/Button'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Tutorials extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
    return (
      <Box full="horizontal">
        <Tiles align="start" alignContent="start">
          {allMarkdownRemark.edges.map(({ node: { frontmatter }, html }) => (
            <Tile wrap={true} pad="small" separator="bottom">
              <Card
                heading={frontmatter.title}
                label={frontmatter.level}
                description={<Paragraph>{frontmatter.summary}</Paragraph>}
                link={
                  <Anchor
                    path={frontmatter.path}
                    label="View"
                    icon={<LinkNextIcon />}
                  />
                }
              />
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Tutorials.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query TutorialsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/tutorials/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            level
            summary
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

export default connect(mapStateToProps, mapDispatchToProps)(Tutorials)
