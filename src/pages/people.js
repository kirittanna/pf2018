import React, { Component } from 'react'
import Link from 'gatsby-link'
import { get, groupBy } from 'lodash/fp'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
import Markdown from 'grommet/components/Markdown'
import Paragraph from 'grommet/components/Paragraph'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'

import { navEnable } from '../state/actions'
import { renderAst } from '../utils/common'

class People extends Component {
  componentDidMount() {
    this.props.dispatch(navEnable(true))
  }

  render() {
    const { data } = this.props
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { htmlAst, frontmatter } = markdownRemark

    const groupedDevelopers = groupBy(dev => dev.role, frontmatter.team)
    const devRoles = Object.keys(groupedDevelopers)

    return (
      <Box full="horizontal">
        <Heading strong={true} tag="h2">
          {frontmatter.title}
        </Heading>
        {devRoles.map((role, index) => (
          <Box full={index === 0 ? 'horizontal' : false}>
            <Heading tag="h3" strong>
              {role}
            </Heading>
            <Tiles>
              {groupedDevelopers[role].map(dev => (
                <Tile
                  size={index > 0 ? 'small' : 'medium'}
                  margin={{ vertical: { top: 'medium' } }}
                  pad="small"
                >
                  <Card
                    thumbnail={dev.photo}
                    heading={<Heading tag="h5">{dev.location}</Heading>}
                    label={
                      <Anchor
                        label={
                          <Heading tag="h4" strong uppercase>
                            {dev.name}
                          </Heading>
                        }
                        href={dev.link}
                        target="_blank"
                      />
                    }
                    description={<Paragraph>{dev.bio}</Paragraph>}
                    contentPad="small"
                  />
                </Tile>
              ))}
            </Tiles>
          </Box>
        ))}
        {renderAst(htmlAst)}
      </Box>
    )
  }
}

People.propTypes = {
  data: React.PropTypes.object,
  route: React.PropTypes.object,
}

export const pageQuery = graphql`
  query PeopleQuery {
    markdownRemark(frontmatter: { path: { eq: "/people" } }) {
      htmlAst
      frontmatter {
        team {
          link
          name
          photo
          role
          bio
          location
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

export default connect(mapStateToProps, mapDispatchToProps)(People)
