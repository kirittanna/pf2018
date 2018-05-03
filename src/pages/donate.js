import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Title from 'grommet/components/Title'
import Value from 'grommet/components/Value'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Donate extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {renderAst(htmlAst)}
        <Tiles>
          {frontmatter.donationOptions.map(option => (
            <Tile pad="large">
              <Title>{option.name}</Title>
              <Value>{option.amount}</Value>
            </Tile>
          ))}
        </Tiles>
      </Box>
    )
  }
}

Donate.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query DonateQuery {
    markdownRemark(frontmatter: { path: { eq: "/donate" } }) {
      htmlAst
      frontmatter {
        title
        donationOptions {
          name
          amount
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

export default connect(mapStateToProps, mapDispatchToProps)(Donate)
