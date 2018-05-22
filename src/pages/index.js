import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Split from 'grommet/components/Split'
import Heading from 'grommet/components/Heading'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Markdown from 'grommet/components/Markdown'
import Paragraph from 'grommet/components/Paragraph'
import Timestamp from 'grommet/components/Timestamp'
import Title from 'grommet/components/Title'
import Toast from 'grommet/components/Toast'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'
import P5Wrapper from '../components/P5Wrapper'
import Demo from '../components/Demo'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { allMarkdownRemark, markdownRemark, allTweet } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box>
        <Box
          margin={{ vertical: 'small' }}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '320px',
            maxHeight: '480px',
          }}
        >
          <P5Wrapper sketch={Demo} />
        </Box>
        <Split showOnResponsive="both" separator={true}>
          <Box pad={{ horizontal: 'medium' }}>
            {renderAst(htmlAst)}
            <List>
              {allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
                <ListItem wrap={true} pad="small" separator="bottom">
                  <Anchor href={frontmatter.path}>{frontmatter.title}</Anchor>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box pad={{ horizontal: 'small' }}>
            <Title>
              <Anchor
                class="twitter-timeline"
                href="https://twitter.com/@processingOrg"
              >
                @processingOrg
              </Anchor>
            </Title>
            <List>
              {allTweet.edges.map(
                ({
                  node: {
                    created_at,
                    text,
                    user: { name },
                  },
                }) => (
                  <ListItem wrap={true} pad="small" separator="bottom">
                    <Timestamp value={created_at} />
                    <Paragraph>{text}</Paragraph>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Split>
      </Box>
    )
  }
}

Home.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        title
        twitter
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/news/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    allTweet {
      edges {
        node {
          created_at
          text
          user {
            name
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
