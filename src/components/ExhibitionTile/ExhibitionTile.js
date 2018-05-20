import React, { Component, PropTypes } from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'

import styles from './ExhibitionTile.css'

const ExhibitionTile = ({ description, resolutions, title, externalLinks }) => (
  <Card
    heading={
      <Heading tag="h3" strong={false} truncate={true}>
        {title}
      </Heading>
    }
    thumbnail={<Img resolutions={resolutions} alt={title} />}
    description={<div dangerouslySetInnerHTML={{ __html: description }} />}
    link={externalLinks.map(link => (
      <Anchor href={link.url} label={link.title} target="_blank" />
    ))}
    contentPad="small"
    textSize="small"
  />
)

ExhibitionTile.propTypes = {
  description: PropTypes.string,
  resolutions: PropTypes.object,
  title: PropTypes.string,
}

ExhibitionTile.defaultProps = {
  description: '',
  resolutions: {},
  thumbnail: '',
  title: '',
}

module.exports = ExhibitionTile
