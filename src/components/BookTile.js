import React, { Component, PropTypes } from 'react'
import Img from 'gatsby-image'

import styles from './BookTile.css'

const BookTile = ({ description, resolutions, title }) => (
  <div className={styles.BookTile}>
    <Img resolutions={resolutions} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

BookTile.propTypes = {
  description: PropTypes.string,
  resolutions: PropTypes.object,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}

BookTile.defaultProps = {
  description: '',
  resolutions: {},
  thumbnail: '',
  title: '',
}

module.exports = BookTile
