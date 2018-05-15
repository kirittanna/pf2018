import React, { Component } from 'react'
import Link from 'gatsby-link'
import { chain, get, groupBy, pick } from 'lodash/fp'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Examples extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data

    const groupedExamples = groupBy(
      edge => edge.node.frontmatter.category,
      allMarkdownRemark.edges
    )

    return (
      <Box full="horizontal">
        <Accordion>
          {Object.keys(groupedExamples).map(category => (
            <AccordionPanel heading={category}>
              <List>
                {groupedExamples[category].map(
                  ({ node: { frontmatter }, timeToRead }) => (
                    <ListItem wrap={true} pad="small" separator="bottom">
                      <span>
                        <Anchor path={frontmatter.path}>
                          {frontmatter.title}
                        </Anchor>
                      </span>
                      <span className="secondary">{timeToRead}</span>
                    </ListItem>
                  )
                )}
              </List>
            </AccordionPanel>
          ))}
        </Accordion>
      </Box>
    )
  }
}

Examples.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query ExamplesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/examples/" } } }
      sort: { order: DESC, fields: [frontmatter___category] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            category
          }
          timeToRead
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

export default connect(mapStateToProps, mapDispatchToProps)(Examples)
