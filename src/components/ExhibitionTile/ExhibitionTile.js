import React, { Component, PropTypes } from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'

import styles from './ExhibitionTile.css'

const ExhibitionTile = ({ description, resolutions, title, path }) => (
  <Box>
    <Img resolutions={resolutions} />
    <Anchor path={path}>{title}</Anchor>
    <p>{description}</p>
  </Box>
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
