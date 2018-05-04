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
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Label from 'grommet/components/Label'

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
        <List>
          {frontmatter.donationOptions.map((option, index) => (
            <ListItem pad="medium" justify="between" separator="horizontal">
              <Label margin={{ vertical: 'medium' }}>{option.name}</Label>
              <Button
                label={option.amount}
                accent={true}
                href={option.link}
                pad="small"
              />
            </ListItem>
          ))}
        </List>
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
