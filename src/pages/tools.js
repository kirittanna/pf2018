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
import Table from 'grommet/components/Table'
import TableRow from 'grommet/components/TableRow'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Tools extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
    return (
      <Box full="horizontal">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Author</th>
              <th>Links</th>
              <th>Built-in</th>
            </tr>
          </thead>
          <tbody>
            {allMarkdownRemark.edges.map(({ node: { frontmatter }, html }) => (
              <TableRow>
                <td>{frontmatter.title}</td>
                <td className="secondary">{html}</td>
                <td>{frontmatter.author}</td>
                <td>
                  {frontmatter.externalLinks.map(link => (
                    <Anchor
                      href={link.url}
                      label={link.title}
                      target="_blank"
                    />
                  ))}
                </td>
                <td>{frontmatter.builtIn ? 'Yes' : 'No'}</td>
              </TableRow>
            ))}
          </tbody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tools)
