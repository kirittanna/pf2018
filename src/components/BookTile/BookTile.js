import React, { Component, PropTypes } from 'react'
import Img from 'gatsby-image'

import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'

import styles from './BookTile.css'

const BookTile = ({ description, resolutions, title, path }) => (
  <Box>
    <Img resolutions={resolutions} />
    <Anchor path={path}>{title}</Anchor>
    <p>{description}</p>
  </Box>
)

BookTile.propTypes = {
  description: PropTypes.string,
  resolutions: PropTypes.object,
  title: PropTypes.string,
}

BookTile.defaultProps = {
  description: '',
  resolutions: {},
  thumbnail: '',
  title: '',
}

module.exports = BookTile
