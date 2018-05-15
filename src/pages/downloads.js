import React, { Component } from 'react'
import Link from 'gatsby-link'
import { get, groupBy } from 'lodash/fp'
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

import DownloadIcon from 'grommet/components/icons/base/Download'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Downloads extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  renderGroup = (title, date, intro, options) => {
    const groupedOptions = groupBy('os', options)
    return (
      <Box margin={{ bottom: 'large' }}>
        <Heading strong={true} tag="h3">
          {title}
        </Heading>
        <p>{date}</p>
        <Markdown>{intro}</Markdown>
        <List>
          {Object.keys(groupedOptions).map((key, index) => (
            <ListItem
              pad="small"
              justify="between"
              separator="horizontal"
              align="start"
            >
              <Label>{key}</Label>
              <Box direction="row" justify="end">
                {groupedOptions[key].map(option => (
                  <Button
                    label={option.osa}
                    href={option.link}
                    icon={<DownloadIcon />}
                    margin={{ horizontal: 'small' }}
                    pad="small"
                  />
                ))}
              </Box>
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
        </Heading>
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
        {this.renderGroup(betaTitle, betaDate, betaIntro, betaDownloadOptions)}
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
          os
          osa
        }
        stableTitle
        stableIntro
        stableDate
        stableDownloadOptions {
          link
          os
          osa
        }
        betaTitle
        betaIntro
        betaDate
        betaDownloadOptions {
          link
          os
          osa
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
