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
    const {
      allMarkdownRemark,
      markdownRemark,
      allTweet,
      allGithubIssues,
    } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box pad="none">
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
        <Box full="horizontal" pad={{ horizontal: 'small' }} direction="row">
          <Box primary={true} pad="medium" size="large">
            {renderAst(htmlAst)}
          </Box>
          <Box pad="medium" size="medium">
            <Anchor
              class="twitter-timeline"
              href="https://twitter.com/@processingOrg"
            >
              @processingOrg
            </Anchor>
            <List size="medium" size="medium">
              {allTweet.edges.map(
                ({
                  node: {
                    created_at,
                    text,
                    user: { name },
                  },
                }) => (
                  <ListItem wrap={true} pad="none" separator="bottom">
                    <Timestamp value={created_at} />
                    <Paragraph>{text}</Paragraph>
                  </ListItem>
                )
              )}
            </List>
          </Box>
          <Box pad="medium" size="medium" wrap={true}>
            <Box margin={{ bottom: 'medium' }}>
              <Anchor path="/news">News</Anchor>
              <List>
                {allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
                  <ListItem
                    wrap={true}
                    pad={{ vertical: 'small' }}
                    separator="bottom"
                  >
                    <Timestamp value={frontmatter.date} />
                    <Anchor href={frontmatter.path}>
                      <Paragraph>{frontmatter.title}</Paragraph>
                    </Anchor>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Anchor path="https://github.com/kirittanna/pf2018/issues">
                Github Issues
              </Anchor>
              <List>
                {allGithubIssues.edges.map(({ node }) => (
                  <ListItem
                    wrap={true}
                    pad={{ vertical: 'small' }}
                    separator="bottom"
                  >
                    <Anchor href={node.url}>
                      <Paragraph>{node.title}</Paragraph>
                    </Anchor>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
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
    allGithubIssues {
      edges {
        node {
          title
          url
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
