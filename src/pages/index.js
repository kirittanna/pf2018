import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Markdown from 'grommet/components/Markdown'
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
    const { allMarkdownRemark, markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <div>
        <Columns full="horizontal" size="large" pad={{ between: 'small' }}>
          <Box separator="right" pad={{ horizontal: 'medium' }}>
            {renderAst(htmlAst)}
          </Box>
          <Box pad={{ horizontal: 'medium' }}>
            <Box>
              <a
                class="twitter-timeline"
                href="https://twitter.com/kirittanna?ref_src=twsrc%5Etfw"
              >
                Tweets by kirittanna
              </a>
              <P5Wrapper sketch={Demo} />
            </Box>
            <List>
              {allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
                <ListItem wrap={true} pad="small" separator="bottom">
                  <Anchor href={frontmatter.path}>{frontmatter.title}</Anchor>
                </ListItem>
              ))}
            </List>
          </Box>
        </Columns>
        <Toast status="ok" onClose={() => {}}>
          Processing Community Day registrations opened{' '}
          <Anchor label="Click here" href="#" />
        </Toast>
      </div>
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
  }
`

const mapDispatchToProps = dispatch => ({
  dispatch,
})

const mapStateToProps = ({ nav }) => ({
  nav,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
