import React, { Component } from 'react'
import Link from 'gatsby-link'
import { get } from 'lodash/fp'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'

import BookTile from '../components/BookTile'
import { navEnable } from '../state/actions'
import { renderAst, getImageResolutions } from '../utils/common'

class Books extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  onClick = e => {
    console.log(e)
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark, allImageSharp, markdownRemark } = data
    const { htmlAst, frontmatter } = markdownRemark
    console.log()
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {renderAst(htmlAst)}
        <Tiles>
          {allMarkdownRemark.edges.map(({ node: { frontmatter } }, count) => (
            <Tile margin="small" pad="small">
              <BookTile
                title={frontmatter.title}
                path={frontmatter.path}
                author={frontmatter.author}
                date={frontmatter.date}
                externalLinks={frontmatter.externalLinks}
                sizes={allImageSharp.edges[count].node.sizes}
              />
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Books.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query BooksQuery {
    markdownRemark(frontmatter: { path: { eq: "/books" } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/\/books\//" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            cover
            author
            date
            externalLinks {
              title
              url
            }
          }
        }
      }
    }
    allImageSharp(filter: { id: { regex: "/\/books_/" } }) {
      edges {
        node {
          sizes(quality:85) {
            tracedSVG
            aspectRatio
            src
            srcSet
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

export default connect(mapStateToProps, mapDispatchToProps)(Books)
