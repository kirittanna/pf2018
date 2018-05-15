import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Markdown from 'grommet/components/Markdown'
import Title from 'grommet/components/Title'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import Pulse from 'grommet/components/icons/Pulse'

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
              <span>
                <Title margin={{ vertical: 'medium' }}>
                  {`${option.name} (${option.amount})`}
                </Title>
              </span>
              <Button
                href={option.link}
                icon={<Pulse icon={<LinkNextIcon />} />}
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
