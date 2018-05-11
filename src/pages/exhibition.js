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

import ExhibitionTile from '../components/ExhibitionTile'
import { navEnable } from '../state/actions'
import { renderAst, getImageResolutions } from '../utils/common'

class Exhibition extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  onClick = e => {
    console.log(e)
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark, allImageSharp, markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {renderAst(htmlAst)}
        <Tiles>
          {allMarkdownRemark.edges.map(({ node: { frontmatter }, html }) => (
            <Tile wrap={true} pad="small">
              <ExhibitionTile
                {...frontmatter}
                description={html}
                resolutions={getImageResolutions(
                  allImageSharp,
                  frontmatter.thumbnail
                )}
              />
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Exhibition.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query ExhibitionQuery {
    markdownRemark(frontmatter: { path: { eq: "/exhibition" } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/\/exhibition\//" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            thumbnail
          }
        }
      }
    }
    allImageSharp(filter: { id: { regex: "/\/exhibition_/" } }) {
      edges {
        node {
          id
          resolutions(height:240) {
            ...GatsbyImageSharpResolutions
          }
        }
      }
    }
  }
` // prettier-ignore

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps, mapDispatchToProps)(Exhibition)
