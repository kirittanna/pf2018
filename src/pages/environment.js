import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Button from 'grommet/components/Button'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class Environment extends Component {
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
        <Accordion>
          {frontmatter.sections.map(({ sectionTitle, sectionBody }) => (
            <AccordionPanel heading={sectionTitle}>
              <Markdown>{sectionBody}</Markdown>
            </AccordionPanel>
          ))}
        </Accordion>
      </Box>
    )
  }
}

Environment.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query EnvironmentQuery {
    markdownRemark(frontmatter: { path: { regex: "/environment/" } }) {
      htmlAst
      frontmatter {
        path
        title
        header
        footer
        sections {
          sectionBody
          sectionTitle
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

export default connect(mapStateToProps, mapDispatchToProps)(Environment)
