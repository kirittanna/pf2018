import React, { Component } from 'react'
import Link from 'gatsby-link'
import { get, groupBy } from 'lodash/fp'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import { connect } from 'react-redux'

import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Markdown from 'grommet/components/Markdown'
import Title from 'grommet/components/Title'
import Timestamp from 'grommet/components/Timestamp'

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
      <AccordionPanel
        heading={
          <Title tag="h4">
            {title}
            <span>
              (<Timestamp value={date} fields={['month', 'day', 'year']} />)
            </span>
          </Title>
        }
        pad="small"
      >
        <Markdown>{intro}</Markdown>
        <List>
          {Object.keys(groupedOptions).map((key, index) => (
            <ListItem
              pad="none"
              justify="between"
              separator="none"
              align="center"
              alignContent="center"
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
      </AccordionPanel>
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
        <Box margin={{ bottom: 'large' }}>
          <Accordion active={[0]}>
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
          </Accordion>
        </Box>
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
