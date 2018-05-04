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
import Label from 'grommet/components/Label'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Title from 'grommet/components/Title'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Downloads extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  renderGroup = (title, date, intro, options) => {
    return (
      <Box margin={{ bottom: 'large' }}>
        <Heading strong={true} tag="h3">
          {title}
        </Heading>
        <p>{date}</p>
        <Markdown>{intro}</Markdown>
        <List>
          {options.map(option => (
            <ListItem pad="small" justify="between" separator="horizontal">
              <Title>{option.title}</Title>
              <Button label={option.subTitle} onClick={() => {}} />
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const {
      frontmatter: {
        title,
        latestTitle,
        latestIntro,
        latestDate,
        latestDownloadOptions,
        stableTitle,
        stableIntro,
        stableDate,
        stableDownloadOptions,
        betaTitle,
        betaIntro,
        betaDate,
        betaDownloadOptions,
      },
    } = markdownRemark
    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {title}
          {this.renderGroup(
            latestTitle,
            latestDate,
            latestIntro,
            latestDownloadOptions
          )}
          {this.renderGroup(
            stableTitle,
            stableDate,
            stableIntro,
            stableDownloadOptions
          )}
          {this.renderGroup(
            betaTitle,
            betaDate,
            betaIntro,
            betaDownloadOptions
          )}
        </Heading>
      </Box>
    )
  }
}

Downloads.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query DownloadQuery {
    markdownRemark(frontmatter: { path: { eq: "/downloads" } }) {
      htmlAst
      frontmatter {
        title
        latestTitle
        latestIntro
        latestDate
        latestDownloadOptions {
          link
          title
          subTitle
        }
        stableTitle
        stableIntro
        stableDate
        stableDownloadOptions {
          link
          title
          subTitle
        }
        betaTitle
        betaIntro
        betaDate
        betaDownloadOptions {
          link
          title
          subTitle
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

export default connect(mapStateToProps, mapDispatchToProps)(Downloads)
